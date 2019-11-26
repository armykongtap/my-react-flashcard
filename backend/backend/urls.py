from django.urls import path, include

urlpatterns = [
    path('', include('auth.urls')),
    path('', include('snippets.urls')),
]
