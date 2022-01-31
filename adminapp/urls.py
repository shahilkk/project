from django.urls import path,include
from . import views

urlpatterns=[
    path('master', views.fnindex, name='index'),
    path('graph', views.fnana, name='ana'),
    path('home', views.fndash1, name='dash1'),
    path('viewwork', views.fnviewwork, name='viewwork'),
    path('viewuser', views.fnviewuser, name='viewuser'),
    path('prowork', views.fnprowork, name='prowork'),
    path('prouser', views.fnprouser, name='prouser'),






]    