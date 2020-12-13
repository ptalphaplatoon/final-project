import os
import sys
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.utils import timezone


# from django.contrib.auth import get_user_model



def upload_to(instance, filename):
    now = timezone.now()
    base, extension = os.path.splitext(filename.lower())
    milliseconds = now.microsecond // 1000
    return f"users/{instance.pk}/{now:%Y%m%d%H%M%S}{milliseconds}{extension}"

class UserProfile(AbstractUser):
    profile_pic = models.ImageField(_("Avatar"), upload_to=upload_to, blank=True)



# def get_sentinel_user():
#     return get_user_model().objects.get_or_create(username='deleted')[0]

class Posts(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField()
    author = models.ForeignKey(settings.AUTH_USER_MODEL, related_name ='user_post',on_delete=models.CASCADE, null= False )
    user =  models.CharField(max_length=250)
    

    def __str__(self):
        return f'{self.author}  {self.title}'  
        
