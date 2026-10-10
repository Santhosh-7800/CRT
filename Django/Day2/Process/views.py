from django.shortcuts import render

# Create your views here.
def Process_list(request):
    return render(request, 'Process/Process_list.html') 