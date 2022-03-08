from django.urls import path,include
from . import views

urlpatterns=[
    path('master', views.fnmaster, name='mat'),
    # path('detail', views.fndeatil, name='detail'),
    path('profile', views.fnwork_profile, name='profile1'),
    path('dash', views.fnwork_dash, name='dash1'),
    path('order', views.fnorder, name='order'),
    path('review', views.fnreview, name='review'),
    path('quick', views.fnquick, name='quick'),
    path('edit', views.fnedit, name='edit'),
    path('workdone', views.fnworkdone, name='workdone'),
    path('rejwork', views.fnrejwork, name='rejwork'),
    path('quickdone', views.fnquickdone, name='quickdone'),
    path('quickreject', views.fnquickreject, name='quickreject'),


]