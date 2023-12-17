from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Language(models.Model):
    lang=models.CharField(max_length=250)
    desc=models.CharField(max_length=250)

    def __str__(self) :
        return self.lang


class questions(models.Model):
    lang=models.ForeignKey(Language,on_delete=models.CASCADE)
    text=models.CharField(max_length=250)
    ans=models.CharField(max_length=250)
    options=models.CharField(max_length=1000)
    lvl=models.IntegerField(default=1)

    def __str__(self):
        return self.lang.lang+str(self.lvl)+'_'+str(self.id)


