from django.db import migrations
from django.contrib.auth.hashers import make_password


def create_superuser(apps, schema_editor):
    User = apps.get_model('auth', 'User')
    if not User.objects.filter(username='admin').exists():
        User.objects.create(
            username='admin',
            password=make_password('cambia-questa-password'),
            is_superuser=True,
            is_staff=True,
            is_active=True,
        )


class Migration(migrations.Migration):
    dependencies = [
        ('product', '0018_operatore_offerta_mese'),
    ]

    operations = [
        migrations.RunPython(create_superuser, migrations.RunPython.noop),
    ]
