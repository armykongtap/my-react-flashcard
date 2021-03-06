from django.urls import path
from words import views

urlpatterns = [
    path('words/', views.word_list),
    path('words/<int:pk>/', views.word_detail),
    path('words/<str:user>/<str:catName>/', views.word_filter),
    path('words/initialise/<str:user>/1/', views.initialise),
]
