from django.contrib import admin
from exercises.models import questions,Language
from users.models import myuserClass,progress
# Register your models here.
admin.site.register(questions)
admin.site.register(myuserClass)
admin.site.register(progress)
admin.site.register(Language)

