from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('covid/', include('covid.urls')),
    path('token-auth/', obtain_jwt_token),
    url(r'^health/', include('health_check.urls')),
]