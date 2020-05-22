from django.db import models


class Presentation(models.Model):
    title = models.CharField(max_length=50)
    body = models.TextField()

    def __str__(self):
        return self.title

class Image(models.Model):
    link = models.CharField(max_length=250)
    image = models.CharField(max_length=250)
    order = models.SmallIntegerField(unique=True, default=0, blank=False)
    presentation = models.ForeignKey('Presentation', on_delete=models.CASCADE,)
    
    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.image
