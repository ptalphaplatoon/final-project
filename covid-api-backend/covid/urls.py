from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import current_user, UserList


router = DefaultRouter()
#router.register(r'comments', CommentsViewSet)
urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    #path('', include(router.urls))
]
