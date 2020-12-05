from django.db import models
from django.utils import timezone
from django.conf import settings
# from django.contrib.auth import get_user_model
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(null=True, blank=True)

# def get_sentinel_user():
#     return get_user_model().objects.get_or_create(username='deleted')[0]

class Posts(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField()
    author = models.ForeignKey(settings.AUTH_USER_MODEL, related_name ='user_post',on_delete=models.CASCADE, null= False )
    

    def __str__(self):
        return f'{self.author}  {self.title}'  
        
