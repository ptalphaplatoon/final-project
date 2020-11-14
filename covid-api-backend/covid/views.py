from django.shortcuts import render
from .models import Wine
from .serializers import WineSerializer
from rest_framework import viewsets

# class WineViewSet(viewsets.ModelViewSet):
#     queryset = Wine.objects.all()
#     serializer_class = WineSerializer