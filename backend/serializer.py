
from rest_framework import serializers
from .models import Image, Presentation


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['link', 'image', 'order']

class PresentationSerializer(serializers.ModelSerializer):
    images = ImageSerializer(source='image_set', many=True, read_only=True)

    class Meta:
        model = Presentation
        fields = ['id', 'title', 'body', 'images']