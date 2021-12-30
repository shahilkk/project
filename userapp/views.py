from django.shortcuts import render


# Create your views here.
def fnmaster(request):
    return render(request,'master.html')
def fnhome(request):
    return render(request,'home.html') 
def fnexplore(request):
    return render(request,'explore.html') 
def fnchat(request):
    return render(request,'dicussion.html') 
def fnprofile(request):
    return render(request,'profile.html') 
def fnlogin(request):
    return render(request,'login.html')                       