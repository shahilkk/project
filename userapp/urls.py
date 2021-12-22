from django.urls import path,include
from . import views

urlpatterns=[
    path('master', views.fnmaster, name='master'),
    path('home', views.fnhome, name='home'),
    path('explore', views.fnexplore, name='explore'),
    path('chat', views.fnchat, name='chat'),
    path('profile', views.fnprofile, name='profile'),

]