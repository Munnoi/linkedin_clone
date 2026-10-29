from django.db import models
# from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.hashers import make_password, identify_hasher

# Create your models here.
class User(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    
    def save(self, *args, **kwargs):
        try:
            identify_hasher(self.password) # checks if the password is already hashed. This method could be a mistake.
        except (ValueError, TypeError):
            self.password = make_password(self.password) # hashing the password.
            
        super().save(*args, **kwargs)
        
    def __str__(self):
        return f"{self.email} - {self.password}"