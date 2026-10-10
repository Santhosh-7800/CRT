from django.contrib.auth import logout

def logout_view(request):
    logout(request)
    return render(request, 'home.html')
from django.http import HttpResponse
from django.shortcuts import render
def first_day_view(request):
    return render(request, 'first_day.html')

def home_view(request):
    return render(request, 'home.html')

def about_view(request):
    return render(request, 'about.html')

def santhu_view(request):
    return render(request, 'santhu.html')

def auth_user(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        # Here you would typically authenticate the user
        return HttpResponse(f"Authenticated user: {username}")
    return render(request, 'auth_user.html')