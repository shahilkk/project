from django.shortcuts import render

# Create your views here.
def fnmaster(request):
    return render(request,'mat.html')
def fndeatil(request):
    return render(request,'detail.html')    
def fnwork_profile(request):
    return render(request,'workprofile.html')  
def fnwork_dash(request):
    return render(request,'dash.html')  
def fnorder(request):
    return render(request,'order.html')          
def fnreview(request):
    return render(request,'review.html')           