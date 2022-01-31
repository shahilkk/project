from django.shortcuts import render

# Create your views here.
def fnindex(request):
    return render(request,'index.html')
def fnana(request):
    return render(request,'analytic.html')    
def fndash1(request):
    return render(request,'dash1.html')         
def fnviewwork(request):
    return render(request,'listworker.html')          
def fnviewuser(request):
    return render(request,'listuser.html') 
def fnprowork(request):
    return render(request,'prowork.html')    
def fnprouser(request):
    return render(request,'prouser.html')                 