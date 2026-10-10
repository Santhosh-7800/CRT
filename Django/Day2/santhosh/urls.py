from django.urls import path ,include

from . import views

urlpatterns = [
    path("", views.santhosh),
    path('post/', views.santhosh, name="santhosh"),
    path('post/<slug:slug>/', views.post_details, name="post_details"),
    path('contact/', views.contact, name="contact"),
]