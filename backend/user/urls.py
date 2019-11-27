from django.urls import path
from user import views

urlpatterns = [
    path('users/', views.user_list),
    path('user/<int:pk>/', views.user_detail),
    path('words/', views.word_list),
]
