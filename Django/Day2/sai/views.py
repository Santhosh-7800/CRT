from django.shortcuts import render

# Create your views here.
def sai_view(request):
    return render(request, 'sai/sp.html')