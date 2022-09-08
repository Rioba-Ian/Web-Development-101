from django.urls import path
from . import views
# from .views import TodoListview

urlpatterns = [
    path('', views.TodoListView.as_view(), name='index'),
    path("list/<int:list_id>",
         views.TodoItemListView.as_view(), name="list")
]
