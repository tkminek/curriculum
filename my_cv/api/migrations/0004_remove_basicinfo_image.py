# Generated by Django 4.1.4 on 2022-12-29 14:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_alter_basicinfo_birthdate"),
    ]

    operations = [
        migrations.RemoveField(model_name="basicinfo", name="image",),
    ]
