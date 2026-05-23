from django.db import models
from api.choices import *


class Phone(models.Model):
    title = models.CharField(max_length=255)
    brand = models.ForeignKey('Brand', models.DO_NOTHING)
    short_description = models.CharField(max_length=300, blank=True, default='', verbose_name='Descrizione breve')
    description = models.TextField(max_length=4000, blank=True, default='', verbose_name='Descrizione')
    specifiche = models.TextField(blank=True, default='', verbose_name='Specifiche tecniche')
    condition = models.CharField(choices=choice_condition, max_length=255)
    status = models.CharField(choices=choice_status, max_length=20, blank=True, default='', verbose_name='Stato')
    price = models.IntegerField()
    color = models.CharField(choices=choice_color, max_length=255, blank=True, null=True)
    img = models.FileField(upload_to='uploads/')
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Telefono'
        verbose_name_plural = 'Telefoni'


class Tablet(models.Model):
    title = models.CharField(max_length=255)
    brand = models.ForeignKey('Brand', models.DO_NOTHING)
    short_description = models.CharField(max_length=300, blank=True, default='', verbose_name='Descrizione breve')
    description = models.TextField(max_length=4000, blank=True, default='', verbose_name='Descrizione')
    specifiche = models.TextField(blank=True, default='', verbose_name='Specifiche tecniche')
    condition = models.CharField(choices=choice_condition, max_length=255)
    status = models.CharField(choices=choice_status, max_length=20, blank=True, default='', verbose_name='Stato')
    price = models.IntegerField()
    color = models.CharField(choices=choice_color, max_length=255, blank=True, null=True)
    img = models.FileField(upload_to='uploads/')
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Tablet'
        verbose_name_plural = 'Tablet'


class Pc(models.Model):
    title = models.CharField(max_length=255)
    brand = models.ForeignKey('Brand', models.DO_NOTHING)
    short_description = models.CharField(max_length=300, blank=True, default='', verbose_name='Descrizione breve')
    description = models.TextField(max_length=4000, blank=True, default='', verbose_name='Descrizione')
    specifiche = models.TextField(blank=True, default='', verbose_name='Specifiche tecniche')
    condition = models.CharField(choices=choice_condition, max_length=255)
    status = models.CharField(choices=choice_status, max_length=20, blank=True, default='', verbose_name='Stato')
    price = models.IntegerField()
    color = models.CharField(choices=choice_color, max_length=255, blank=True, null=True)
    img = models.FileField(upload_to='uploads/')
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'PC'
        verbose_name_plural = 'PC'


class Brand(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Brand'
        verbose_name_plural = 'Brand'


class Operatore(models.Model):
    nome = models.CharField(max_length=100)
    descrizione = models.CharField(max_length=4000)
    info = models.TextField(blank=True, default='', verbose_name='Informazioni', help_text='Testo libero mostrato nella pagina di dettaglio')
    img = models.FileField(upload_to='operatori/', blank=True, null=True)
    colore = models.CharField(max_length=7, default='#6366f1', help_text='Colore HEX es. #FF0000')

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = 'Operatore'
        verbose_name_plural = 'Operatori'


class Accessori(models.Model):
    title = models.CharField(max_length=255)
    brand = models.ForeignKey('Brand', models.DO_NOTHING)
    short_description = models.CharField(max_length=300, blank=True, default='', verbose_name='Descrizione breve')
    description = models.TextField(max_length=4000, blank=True, default='', verbose_name='Descrizione')
    specifiche = models.TextField(blank=True, default='', verbose_name='Specifiche tecniche')
    condition = models.CharField(choices=choice_condition, max_length=255)
    status = models.CharField(choices=choice_status, max_length=20, blank=True, default='', verbose_name='Stato')
    price = models.IntegerField()
    color = models.CharField(choices=choice_color, max_length=255, blank=True, null=True)
    img = models.FileField(upload_to='uploads/')
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Accessorio'
        verbose_name_plural = 'Accessori'


class PhoneImage(models.Model):
    phone = models.ForeignKey(Phone, on_delete=models.CASCADE, related_name='images')
    img = models.FileField(upload_to='uploads/')

    def __str__(self):
        return f'Immagine – {self.phone.title}'

    class Meta:
        verbose_name = 'Immagine telefono'
        verbose_name_plural = 'Immagini telefono'


class TabletImage(models.Model):
    tablet = models.ForeignKey(Tablet, on_delete=models.CASCADE, related_name='images')
    img = models.FileField(upload_to='uploads/')

    def __str__(self):
        return f'Immagine – {self.tablet.title}'

    class Meta:
        verbose_name = 'Immagine tablet'
        verbose_name_plural = 'Immagini tablet'


class AccessoriImage(models.Model):
    accessorio = models.ForeignKey(Accessori, on_delete=models.CASCADE, related_name='images')
    img = models.FileField(upload_to='uploads/')

    def __str__(self):
        return f'Immagine – {self.accessorio.title}'

    class Meta:
        verbose_name = 'Immagine accessorio'
        verbose_name_plural = 'Immagini accessori'


class PcImage(models.Model):
    pc = models.ForeignKey(Pc, on_delete=models.CASCADE, related_name='images')
    img = models.FileField(upload_to='uploads/')

    def __str__(self):
        return f'Immagine – {self.pc.title}'

    class Meta:
        verbose_name = 'Immagine PC'
        verbose_name_plural = 'Immagini PC'
