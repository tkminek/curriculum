from .models import Job, BasicInfo, School
from .serializers import JobSerializer, BasicInfoSerializer, SchoolSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response


class JobList(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class JobDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class EducationList(generics.ListCreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer


class BasicInfoDetail(APIView):
    @staticmethod
    def get(request):
        queryset = BasicInfo.objects.all().first()
        serializer = BasicInfoSerializer(queryset)
        return Response(serializer.data)
