from rest_framework import serializers
from product.models import *


class PhoneSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Phone
        fields = '__all__'
      
class TabletSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Tablet
        fields = '__all__'   

class BrandSerializer(serializers.HyperlinkedModelSerializer):
   
    class Meta:
        model = Brand
        fields = '__all__'
        
class AccessoriSerializer(serializers.HyperlinkedModelSerializer):
   
    class Meta:
        model = Accassori
        fields = '__all__'