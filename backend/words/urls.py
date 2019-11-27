from django.urls import path
from words import views

urlpatterns = [
    path('words/', views.word_list),
    path('words/<int:pk>/', views.word_detail),
]
