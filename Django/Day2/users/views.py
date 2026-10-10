from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout, authenticate
from django.http import HttpResponse

# Create your views here.
def create_user(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('user_home') # redirect to user_home after registration
    else:
        form = UserCreationForm()
    return render(request, 'users/createuser.html', {'form': form})


def login_user(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('user_home') # redirect to user_home view
    else:
        form = AuthenticationForm()
    return render(request, 'users/login.html', {'form': form})

def user_home(request):
    return render(request, 'users/home.html')

def logout_user(request):
    logout(request)
    return redirect('login') # redirect to login page