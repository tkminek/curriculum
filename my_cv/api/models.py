from django.db import models


class Job(models.Model):
    company = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField()
    end_date = models.CharField(max_length=100)
