from django.urls import path
from auth import views

urlpatterns = [
    path('auth/register/', views.register),
]
