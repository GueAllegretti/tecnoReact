from django.db import migrations
from django.core.management import call_command


def load_data(apps, schema_editor):
    Brand = apps.get_model('product', 'Brand')
    if not Brand.objects.exists():
        call_command('loaddata', 'product/fixtures/initial_data.json')


class Migration(migrations.Migration):
    dependencies = [
        ('product', '0019_create_superuser'),
    ]

    operations = [
        migrations.RunPython(load_data, migrations.RunPython.noop),
    ]
