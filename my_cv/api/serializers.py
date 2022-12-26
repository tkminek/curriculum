from rest_framework.serializers import ModelSerializer
from .models import *


class JobSerializer(ModelSerializer):
    class Meta:
        model = Job
        fields = "__all__"
