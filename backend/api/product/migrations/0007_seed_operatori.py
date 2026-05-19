from django.db import migrations

operatori = [
    {'nome': 'TIM',         'descrizione': 'Offerte voce e dati',       'colore': '#0033A0'},
    {'nome': 'Vodafone',    'descrizione': 'Connettività mobile',        'colore': '#E60000'},
    {'nome': 'WindTre',     'descrizione': 'Telefonia e internet',       'colore': '#FF6600'},
    {'nome': 'Iliad',       'descrizione': 'Tariffe trasparenti',        'colore': '#CC0000'},
    {'nome': 'Very Mobile', 'descrizione': 'Low cost senza vincoli',     'colore': '#6600CC'},
    {'nome': 'ho.',         'descrizione': 'Operatore digitale',         'colore': '#FFD700'},
    {'nome': 'Fastweb',     'descrizione': 'Fibra e mobile',             'colore': '#00A651'},
    {'nome': '1Mobile',     'descrizione': 'Offerte flessibili',         'colore': '#E84393'},
]

def seed(apps, schema_editor):
    Operatore = apps.get_model('product', 'Operatore')
    for op in operatori:
        Operatore.objects.get_or_create(nome=op['nome'], defaults=op)

def unseed(apps, schema_editor):
    Operatore = apps.get_model('product', 'Operatore')
    Operatore.objects.filter(nome__in=[o['nome'] for o in operatori]).delete()

class Migration(migrations.Migration):

    dependencies = [
        ('product', '0006_add_operatore'),
    ]

    operations = [
        migrations.RunPython(seed, unseed),
    ]
