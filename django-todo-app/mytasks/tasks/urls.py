from django.urls import path
from . import views
# from .views import TodoListview

urlpatterns = [
    path('', views.TodoListView.as_view(), name='index'),
    path("list/<int:list_id>",
         views.TodoItemListView.as_view(), name="list"),

    # crud patterns for ToDoLists
    path("list/add/", views.ListCreate.as_view(), name="list-add"),
    # crud patterns for ToDoItems
    path(
        "list/<int:list_id>/item/add/",
        views.ItemCreate.as_view(),
        name="item-add",
    ),
    path(
        "list/<int:list_id>/item/<int:pk>/",
        views.ItemUpdate.as_view(),
        name="item-update",
    )
]
