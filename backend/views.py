from django.shortcuts import render
from .serializer import PresentationSerializer
from .models import Presentation, Image
from rest_framework import generics


class PresentationListView(generics.ListAPIView):
    queryset = Presentation.objects.all().prefetch_related('image_set')
    serializer_class = PresentationSerializer
