from django.contrib import admin
from django.urls import path,include
from exercises import views
urlpatterns = [
    path('languages/', views.languages),
    path('questions/<langr>/',views.questionsview)
]
