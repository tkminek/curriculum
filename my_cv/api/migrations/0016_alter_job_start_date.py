# Generated by Django 4.1.4 on 2023-02-12 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0015_alter_programingproject_git_url"),
    ]

    operations = [
        migrations.AlterField(
            model_name="job", name="start_date", field=models.CharField(max_length=100),
        ),
    ]
