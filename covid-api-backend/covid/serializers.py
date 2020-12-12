from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from .models import Posts, UserProfile
from rest_framework.serializers import ModelSerializer

User = get_user_model()




class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'profile_pic')

class PostsSerializer(serializers.ModelSerializer):
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Posts
        fields = ['author_id', 'id','title', 'description', 'author']
    
    # def save(self, *args, **kwargs):
    #     print("args", args)
    #     print("kwargs", kwargs)
    #     kwargs['author_id'] = User.objects.get(pk=author_id)
    #     return super(PostSerializer, self).save(*args, **kwargs)



class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password', 'profile_pic')

class UserAvatarSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["avatar"]

    def save(self, *args, **kwargs):
        if self.instance.avatar:
            self.instance.avatar.delete()
        return super().save(*args, **kwargs)
