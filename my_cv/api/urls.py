from django.urls import path
from .views import *


urlpatterns = [
    path('job/', JobList.as_view(), name="JobList"),
    path('job/<int:pk>/', JobDetail.as_view(), name="JobDetail"),
    path('basic/', BasicInfoDetail.as_view(), name="BasicInfoDetail"),
    path('education/', EducationList.as_view(), name="EducationList"),
    path('project/', ProgramingProjectList.as_view(), name="ProgramingProjectList"),
]


