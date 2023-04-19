from django.shortcuts import render
from rest_framework import viewsets
from product.models import * 
from product.serializers import *

class PhoneViewSet(viewsets.ModelViewSet):
    queryset = Phone.objects.all().order_by('date')
    serializer_class = PhoneSerializer

class TabletViewSet(viewsets.ModelViewSet):
    queryset = Tablet.objects.all().order_by('date')
    serializer_class = TabletSerializer
   
class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all().order_by('title')
    serializer_class = BrandSerializer
    
class AccessoriViewSet(viewsets.ModelViewSet):
    queryset = Accassori.objects.all().order_by('title')
    serializer_class = AccessoriSerializer