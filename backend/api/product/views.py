from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from product.models import *
from product.serializers import *


class PhoneViewSet(viewsets.ModelViewSet):
    queryset = Phone.objects.all().order_by('date')
    serializer_class = PhoneSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['brand', 'brand__title', 'condition', 'color']
    search_fields = ['title', 'description']
    ordering_fields = ['price', 'date', 'title']


class TabletViewSet(viewsets.ModelViewSet):
    queryset = Tablet.objects.all().order_by('date')
    serializer_class = TabletSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['brand', 'brand__title', 'condition', 'color']
    search_fields = ['title', 'description']
    ordering_fields = ['price', 'date', 'title']


class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all().order_by('title')
    serializer_class = BrandSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']


class AccessoriViewSet(viewsets.ModelViewSet):
    queryset = Accessori.objects.all().order_by('title')
    serializer_class = AccessoriSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['brand', 'brand__title', 'condition', 'color']
    search_fields = ['title', 'description']
    ordering_fields = ['price', 'title']


class OperatoreViewSet(viewsets.ModelViewSet):
    queryset = Operatore.objects.all().order_by('nome')
    serializer_class = OperatoreSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['nome']


class PcViewSet(viewsets.ModelViewSet):
    queryset = Pc.objects.all().order_by('date')
    serializer_class = PcSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['brand', 'brand__title', 'condition', 'color']
    search_fields = ['title', 'description']
    ordering_fields = ['price', 'date', 'title']
