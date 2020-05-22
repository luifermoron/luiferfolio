from django.contrib import admin

# Register your models here.
from .models import Presentation
admin.site.register(Presentation)

from .models import Image
admin.site.register(Image)