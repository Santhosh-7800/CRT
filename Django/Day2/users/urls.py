from django.urls import path
from . import views

urlpatterns = [
    path("", views.login_user, name="login"),
    path("register/", views.create_user, name="create_user"),
    path("logout/", views.logout_user, name="logout"),
    path("home/", views.user_home, name="user_home"),
    path("auth_user/", views.login_user, name="auth_user"),
]