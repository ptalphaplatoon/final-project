from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from rest_framework_jwt.views import obtain_jwt_token
from django.conf import settings
from django.views.generic import TemplateView
from covid.views import UserAvatarUpload
from rest_framework.authtoken.views import obtain_auth_token



urlpatterns = [
    path('admin/', admin.site.urls),
    path('covid/', include('covid.urls')),
    path('token-auth/', obtain_jwt_token),
    path("api/auth-token/", obtain_auth_token, name="rest_auth_token"),
    path("api/user-avatar/", UserAvatarUpload.as_view(), name="rest_user_avatar_upload"),
    re_path(r'^health/', include('health_check.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)