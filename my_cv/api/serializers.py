from rest_framework.serializers import ModelSerializer
from .models import *


class JobSerializer(ModelSerializer):
    class Meta:
        model = Job
        fields = "__all__"


class BasicInfoSerializer(ModelSerializer):
    class Meta:
        model = BasicInfo
        fields = "__all__"


class SchoolSerializer(ModelSerializer):
    class Meta:
        model = School
        fields = "__all__"
