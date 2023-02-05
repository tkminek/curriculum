from django.utils.translation import gettext_lazy as _

from django.db import models


def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class Job(models.Model):
    company = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField()
    end_date = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.company} - {self.position}"


class School(models.Model):
    type = models.CharField(max_length=100, null=True)
    name = models.CharField(max_length=100)
    faculty = models.CharField(max_length=100)
    department = models.CharField(max_length=100, null=True)
    comment = models.TextField(blank=True, null=True)
    start_date = models.CharField(max_length=100)
    end_date = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} ({self.start_date} - {self.end_date})"


class BasicInfo(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)
    birthdate = models.DateField(blank=True)
    address = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    telephone = models.CharField(max_length=100)
    image_url = models.ImageField(_("Image"), upload_to=upload_to, blank=True, null=True)

    def __str__(self):
        return f"{self.name} {self.surname}"


class ProgramingProject(models.Model):
    project_name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    image_url = models.ImageField(_("Image"), upload_to=upload_to, blank=True, null=True)

    def __str__(self):
        return f"{self.project_name}"
