from django.db import models

# Create your models here.
class Post(models.Model):
    name= models.CharField(max_length=100)
    roll= models.CharField(max_length=10)
    section= models.CharField(max_length=10)
    def __str__(self):
        return self.name