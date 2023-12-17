from django.contrib import admin
from django.urls import path,include
from users import views

urlpatterns = [
    path('register/',views.registermyuser),
    path('submission/',views.submission),
    path('score/',views.score),
    path('verifytoken/',views.verifytoken),
    path('leaderboard/',views.leaderboard)
]
