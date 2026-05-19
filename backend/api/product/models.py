from django.db import models
from api.choices import *

# Create your models here.
class Phone(models.Model):
    title = models.CharField(max_length=255)
    brand = models.ForeignKey('Brand', models.DO_NOTHING)
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
    brand = models.ForeignKey('Brand', models.DO_NOTHING)    
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
    

class Operatore(models.Model):
    nome = models.CharField(max_length=100)
    descrizione = models.CharField(max_length=255)
    img = models.FileField(upload_to='operatori/', blank=True, null=True)
    colore = models.CharField(max_length=7, default='#6366f1', help_text='Colore HEX es. #FF0000')

    def __str__(self):
        return self.nome


class Accessori(models.Model):
    title = models.CharField(max_length=255)
    brand = models.ForeignKey('Brand', models.DO_NOTHING)
    description = models.TextField(max_length=255)
    condition = models.CharField(choices=choice_condition, max_length=255)
    price = models.IntegerField()
    color = models.CharField(choices=choice_color, max_length=255, blank=True, null=True)
    img = models.FileField(upload_to='uploads/')
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.title


class PhoneImage(models.Model):
    phone = models.ForeignKey(Phone, on_delete=models.CASCADE, related_name='images')
    img = models.FileField(upload_to='uploads/')

    def __str__(self):
        return f'Immagine – {self.phone.title}'


class TabletImage(models.Model):
    tablet = models.ForeignKey(Tablet, on_delete=models.CASCADE, related_name='images')
    img = models.FileField(upload_to='uploads/')

    def __str__(self):
        return f'Immagine – {self.tablet.title}'


class AccessoriImage(models.Model):
    accessorio = models.ForeignKey(Accessori, on_delete=models.CASCADE, related_name='images')
    img = models.FileField(upload_to='uploads/')

    def __str__(self):
        return f'Immagine – {self.accessorio.title}'