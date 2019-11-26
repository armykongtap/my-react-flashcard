from django.urls import path
from user import views

urlpatterns = [
    path('user/', views.user_list),
    path('user/<int:pk>/', views.user_detail),
]
