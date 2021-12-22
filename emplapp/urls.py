from django.urls import path,include
from . import views

urlpatterns=[
    path('master', views.fnmaster, name='mat'),
    path('detail', views.fndeatil, name='detail'),



]