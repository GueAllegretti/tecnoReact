from django.contrib import admin
from django.utils.html import format_html
from .models import Phone, Tablet, Brand, Accessori


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
    list_display = ('thumbnail', 'title', 'brand', 'condition', 'price_display', 'color', 'date')
    list_filter = ('brand', 'condition', 'color')
    search_fields = ('title', 'description')
    ordering = ('-date',)


@admin.register(Tablet)
class TabletAdmin(ProductAdminBase):
    list_display = ('thumbnail', 'title', 'brand', 'condition', 'price_display', 'color', 'date')
    list_filter = ('brand', 'condition', 'color')
    search_fields = ('title', 'description')
    ordering = ('-date',)


@admin.register(Accessori)
class AccessoriAdmin(ProductAdminBase):
    list_display = ('thumbnail', 'title', 'brand', 'condition', 'price_display', 'color')
    list_filter = ('brand', 'condition')
    search_fields = ('title', 'description')


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title',)
