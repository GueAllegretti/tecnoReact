from django.contrib import admin
from django.utils.html import format_html
from tinymce.widgets import TinyMCE
from .models import Phone, Tablet, Pc, Brand, Accessori, Operatore, PhoneImage, TabletImage, AccessoriImage, PcImage


class PhoneImageInline(admin.TabularInline):
    model = PhoneImage
    extra = 1
    fields = ('img',)


class TabletImageInline(admin.TabularInline):
    model = TabletImage
    extra = 1
    fields = ('img',)
    

class PcImageInline(admin.TabularInline):
    model = PcImage
    extra = 1
    fields = ('img',)


class AccessoriImageInline(admin.TabularInline):
    model = AccessoriImage
    extra = 1
    fields = ('img',)


class ProductAdminBase(admin.ModelAdmin):
    list_per_page = 20
    readonly_fields = ('date',)

    def thumbnail(self, obj):
        if obj.img:
            return format_html('<img src="/media/{}" style="height:50px;border-radius:6px;object-fit:cover;" />', obj.img)
        return '-'
    thumbnail.short_description = 'Foto'

    def price_display(self, obj):
        return format_html('<strong style="color:#6366f1;">€ {}</strong>', obj.price)
    price_display.short_description = 'Prezzo'


@admin.register(Phone)
class PhoneAdmin(ProductAdminBase):
    list_display = ('thumbnail', 'title', 'brand', 'condition', 'status', 'price_display', 'color', 'date')
    list_filter = ('brand', 'condition', 'status', 'color')
    search_fields = ('title', 'description')
    autocomplete_fields = ['brand']
    ordering = ('-date',)
    inlines = [PhoneImageInline]

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['description'].widget = TinyMCE()
        form.base_fields['specifiche'].widget = TinyMCE()
        return form


@admin.register(Tablet)
class TabletAdmin(ProductAdminBase):
    list_display = ('thumbnail', 'title', 'brand', 'condition', 'status', 'price_display', 'color', 'date')
    list_filter = ('brand', 'condition', 'status', 'color')
    search_fields = ('title', 'description')
    autocomplete_fields = ['brand']
    ordering = ('-date',)
    inlines = [TabletImageInline]

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['description'].widget = TinyMCE()
        form.base_fields['specifiche'].widget = TinyMCE()
        return form


@admin.register(Pc)
class PcAdmin(ProductAdminBase):
    list_display = ('thumbnail', 'title', 'brand', 'condition', 'status', 'price_display', 'color', 'date')
    list_filter = ('brand', 'condition', 'status', 'color')
    search_fields = ('title', 'description')
    autocomplete_fields = ['brand']
    ordering = ('-date',)
    inlines = [PcImageInline]

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['description'].widget = TinyMCE()
        form.base_fields['specifiche'].widget = TinyMCE()
        return form


@admin.register(Accessori)
class AccessoriAdmin(ProductAdminBase):
    list_display = ('thumbnail', 'title', 'brand', 'condition', 'status', 'price_display', 'color')
    list_filter = ('brand', 'condition', 'status')
    search_fields = ('title', 'description')
    inlines = [AccessoriImageInline]

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['description'].widget = TinyMCE()
        form.base_fields['specifiche'].widget = TinyMCE()
        return form


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('logo_preview', 'title')
    search_fields = ('title',)

    def logo_preview(self, obj):
        if obj.img:
            return format_html('<img src="/media/{}" style="height:40px;object-fit:contain;border-radius:6px;" />', obj.img)
        return '—'
    logo_preview.short_description = 'Logo'


@admin.register(Operatore)
class OperatoreAdmin(admin.ModelAdmin):
    list_display = ('logo_preview', 'nome', 'descrizione', 'colore')
    search_fields = ('nome',)
    fields = ('nome', 'descrizione', 'info', 'img', 'colore')

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['info'].widget = TinyMCE()
        return form

    def logo_preview(self, obj):
        if obj.img:
            return format_html('<img src="/media/{}" style="height:40px;border-radius:6px;object-fit:contain;" />', obj.img)
        return '—'
    logo_preview.short_description = 'Logo'
