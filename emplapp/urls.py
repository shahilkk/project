from django.urls import path,include
from . import views

urlpatterns=[
    path('master', views.fnmaster, name='mat'),
    path('detail', views.fndeatil, name='detail'),
    path('profile', views.fnwork_profile, name='profile1'),
    path('dash', views.fnwork_dash, name='dash1'),
    path('order', views.fnorder, name='order'),
    path('review', views.fnreview, name='review'),

]