from django.shortcuts import render

# Create your views here.
def fnmaster(request):
    return render(request,'mat.html')
def fndeatil(request):
    return render(request,'detail.html')    