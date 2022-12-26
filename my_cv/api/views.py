from .models import Job, BasicInfo
from .serializers import JobSerializer, BasicInfoSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response


class JobList(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class JobDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class BasicInfoDetail(APIView):
    @staticmethod
    def get(request):
        queryset = BasicInfo.objects.all().first()
        serializer = BasicInfoSerializer(queryset)
        return Response(serializer.data)
