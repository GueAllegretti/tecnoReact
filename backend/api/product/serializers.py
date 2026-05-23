from rest_framework import serializers
from product.models import *


class OperatoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Operatore
        fields = '__all__'


class PhoneImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneImage
        fields = ('id', 'img')


class TabletImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TabletImage
        fields = ('id', 'img')


class AccessoriImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccessoriImage
        fields = ('id', 'img')


class PhoneSerializer(serializers.HyperlinkedModelSerializer):
    images = PhoneImageSerializer(many=True, read_only=True)

    class Meta:
        model = Phone
        fields = '__all__'


class TabletSerializer(serializers.HyperlinkedModelSerializer):
    images = TabletImageSerializer(many=True, read_only=True)

    class Meta:
        model = Tablet
        fields = '__all__'


class BrandSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'


class AccessoriSerializer(serializers.HyperlinkedModelSerializer):
    images = AccessoriImageSerializer(many=True, read_only=True)

    class Meta:
        model = Accessori
        fields = '__all__'


class PcImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PcImage
        fields = ('id', 'img')


class PcSerializer(serializers.HyperlinkedModelSerializer):
    images = PcImageSerializer(many=True, read_only=True)

    class Meta:
        model = Pc
        fields = '__all__'