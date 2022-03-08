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
def fnquick(request):
    return render(request,'quick.html')  
def fnedit(request):
    return render(request,'edit.html')   
def fnworkdone(request):
    return render(request,'workdone.html')
def fnrejwork(request):
    return render(request,'rejectwork.html')   
def fnquickdone(request):
    return render(request,'quickdone.html') 
def fnquickreject(request):
    return render(request,'quickreject.html')                        