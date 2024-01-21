from django.urls import path

from . import views

urlpatterns = [
    path('move/', views.make_move),
    path('move2/', views.make_move2)
]