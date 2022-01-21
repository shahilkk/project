from django.shortcuts import render


# Create your views here.
def fnmaster(request):
    return render(request,'master.html')
def fnhome(request):
    return render(request,'home.html')  
def fnchat(request):
    return render(request,'dicussion.html') 
def fnprofile(request):
    return render(request,'profile.html') 
def fnlogin(request):
    return render(request,'login.html')    
def fnservice(request):
    return render(request,'service.html')  
def fnview(request):
    return render(request,'viework.html')         
def fnregistration(request):
    return render(request,'registration.html')       
def fnwrkpro(request):
    return render(request,'wrkpro.html')                                           
