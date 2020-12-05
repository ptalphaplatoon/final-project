from django.contrib import admin
from django.contrib.auth.models import User
from .models import Posts
from .models import UserProfile


admin.site.register(Posts)
admin.site.register(UserProfile)