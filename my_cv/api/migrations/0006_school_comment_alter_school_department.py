# Generated by Django 4.1.4 on 2023-01-06 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0005_school"),
    ]

    operations = [
        migrations.AddField(
            model_name="school",
            name="comment",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="school",
            name="department",
            field=models.CharField(max_length=100, null=True),
        ),
    ]