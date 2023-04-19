from django.db import models
from api.choices import *

# Create your models here.
class Phone(models.Model):
    title = models.CharField(max_length=255)
    brand =  models.ForeignKey('Brand', on_delete=models.CASCADE)
    description = models.TextField(max_length=255)
    condition = models.CharField(choices=choice_condition, max_length=255)
    price = models.IntegerField()
    color = models.CharField(choices=choice_color, max_length=255, blank=True, null=True)
    img = models.FileField(upload_to='uploads/')
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
  
    def __str__(self):
        return self.title
   
   
class Tablet(models.Model):
    title = models.CharField(max_length=255)
    brand =  models.ForeignKey('Brand', on_delete=models.CASCADE)
    description = models.TextField(max_length=255)
    condition = models.CharField(choices=choice_condition, max_length=255)
    price = models.IntegerField()
    color = models.CharField(choices=choice_color, max_length=255, blank=True, null=True)
    img = models.FileField(upload_to='uploads/')
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
  
    def __str__(self):
        return self.title
  
   
class Brand(models.Model):
    title = models.CharField(max_length=255)
   
    def __str__(self):
        return self.title
    

class Accassori(models.Model):
    title = models.CharField(max_length=255)
    brand =  models.ForeignKey('Brand', on_delete=models.CASCADE)
    description = models.TextField(max_length=255)
    condition = models.CharField(choices=choice_condition, max_length=255)
    price = models.IntegerField()
    color = models.CharField(choices=choice_color, max_length=255, blank=True, null=True)
    img = models.FileField(upload_to='uploads/')
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
  
    def __str__(self):
        return self.title