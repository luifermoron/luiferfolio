from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.index ),
    path('resume/', views.resume ),
    path('', include('backend.urls')),
]