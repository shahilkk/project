from email.mime import image
from inspect import classify_class_attrs
from unicodedata import category
from django.db import models

# Create your models here.
class Login(models.Model):
    username = models.CharField(max_length=30) 
    userpassword = models.CharField(max_length=30) 
    usertype = models.CharField(max_length=30) 
    status = models.BooleanField(default=False)

class UserDetails(models.Model):
    login = models.ForeignKey(Login,on_delete=models.CASCADE )
    name = models.CharField(max_length=30) 
    phone = models.BigIntegerField()
    email =  models.CharField(max_length=30) 
    profilePic = models.ImageField()
    pincode = models.IntegerField()
    address = models.TextField()

class WorkerDetails(models.Model):
    workerlogin = models.ForeignKey(Login,on_delete=models.CASCADE )
    first_name = models.CharField(max_length=30) 
    last_name = models.CharField(max_length=30)
    email =  models.CharField(max_length=30)
    phone = models.BigIntegerField()
    profilePic = models.ImageField()
    jobtype = models.CharField(max_length=30)
    category = models.CharField(max_length=30)
    subcategory = models.CharField(max_length=30)
    address = models.TextField()
    additional_information =models.TextField()
    date_of_birth = models.DateField()
    age = models.IntegerField()
    pincode = models.IntegerField()
    place = models.CharField(max_length=30)
    district = models.CharField(max_length=30)
    state = models.CharField(max_length=30)
    location = models.CharField(max_length=30)
    education_qualification = models.CharField(max_length=30)



class Quick_booking(models.Model):
    login = models.ForeignKey(UserDetails,on_delete=models.CASCADE )
    landmark = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    location = models.CharField(max_length=30)
    date = models.DateField()
    time = models.TimeField()

class Booking(models.Model):
    user = models.ForeignKey(UserDetails,on_delete=models.CASCADE )
    worker = models.ForeignKey(WorkerDetails,on_delete=models.CASCADE )
    date = models.DateField()
    time = models.TimeField()

class Review(models.Model):
    login = models.ForeignKey(UserDetails,on_delete=models.CASCADE )
    details = models.TextField()
    star = models.CharField(max_length=30)
