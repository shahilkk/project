from django.db import models
from userapp.models import WorkerDetails
# Create your models here


class Gallery(models.Model):
    login = models.ForeignKey(WorkerDetails,on_delete=models.CASCADE )
    picture = models.ImageField()