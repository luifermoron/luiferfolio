from django.urls import path
from .views import PresentationListView

urlpatterns = [
    path('api/presentations/', PresentationListView.as_view()),
]