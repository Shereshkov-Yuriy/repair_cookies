# Generated by Django 4.2.2 on 2023-07-02 14:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0015_alter_serviceman_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='serviceman',
            options={'ordering': ['-id'], 'verbose_name': 'Ремонтник', 'verbose_name_plural': 'Ремонтники'},
        ),
    ]
