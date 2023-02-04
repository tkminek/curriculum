from .models import Job, BasicInfo, School, ProgramingProject
from .serializers import JobSerializer, BasicInfoSerializer, SchoolSerializer, ProgramingProjectSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser


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


class ProgramingProjectList(generics.ListCreateAPIView):
    queryset = ProgramingProject.objects.all()
    serializer_class = ProgramingProjectSerializer



