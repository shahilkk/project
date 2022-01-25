from django.urls import path,include
from . import views

urlpatterns=[
    path('master', views.fnmaster, name='master'),
    path('home', views.fnhome, name='home'),
    path('chat', views.fnchat, name='chat'),
    path('profile', views.fnprofile, name='profile'),
    path('login', views.fnlogin, name='login'),
    path('service', views.fnservice, name='service'),
    path('view', views.fnview, name='view'),
    path('registration', views.fnregistration, name='registration'),
    path('wrkpro', views.fnwrkpro, name='wrkpro'),
    path('contact', views.fncontact, name='contact'),
    path('payment', views.fnpayment, name='payment'),




]