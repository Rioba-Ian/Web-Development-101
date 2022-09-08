from django.shortcuts import render
from django.views.generic.list import ListView
from django.http import HttpResponse
from .models import TodoList, TodoItem
import datetime
# Create your views here.


class TodoListView(ListView):
    # the particular model
    model = TodoList
    template_name = "tasks/index.html"


class TodoItemListView(ListView):
    model = TodoItem
    template_name: str = "tasks/todo_list.html"

    def get_queryset(self):
        return TodoList.objects.filter(id=self.kwargs["list_id"])

    def get_context_data(self):
        context = super().get_context_data()
        context["todo_list"] = TodoList.objects.get(id=self.kwargs["list_id"])
        return context
