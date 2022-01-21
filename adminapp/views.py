from django.shortcuts import render

# Create your views here.
def fnindex(request):
    return render(request,'index.html')
def fnana(request):
    return render(request,'analytic.html')    
def fndash1(request):
    return render(request,'dash1.html')         
def fnother(request):
    return render(request,'others.html')             