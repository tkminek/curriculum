# Generated by Django 4.1.4 on 2023-01-06 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0007_alter_school_end_date_alter_school_start_date"),
    ]

    operations = [
        migrations.AddField(
            model_name="school",
            name="type",
            field=models.CharField(max_length=100, null=True),
        ),
    ]
