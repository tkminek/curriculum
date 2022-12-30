from django.db import models


class Job(models.Model):
    company = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField()
    end_date = models.CharField(max_length=100)


class BasicInfo(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)
    birthdate = models.DateField(blank=True)
    address = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    telephone = models.CharField(max_length=100)

