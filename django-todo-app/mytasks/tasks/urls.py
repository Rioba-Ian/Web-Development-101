from django.urls import path
from . import views
# from .views import TodoListview

urlpatterns = [
    path('', views.home, name="home"),
]
