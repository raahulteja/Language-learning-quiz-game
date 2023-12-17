from django.db import models
from django.contrib.auth.models import User
from exercises.models import questions,Language


class myuserClass(models.Model):
    myuser=models.ForeignKey(User, on_delete=models.CASCADE)
    mobno=models.CharField(max_length=10)
    pref=models.ForeignKey(Language,default=None,null=True,on_delete=models.SET_NULL)
    

class progress(models.Model):
    qcorrect=models.ForeignKey(questions,on_delete=models.CASCADE)
    puser=models.ForeignKey(myuserClass,on_delete=models.CASCADE)


# Create your models here.
