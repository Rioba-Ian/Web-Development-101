from django.shortcuts import render
from django.views.generic.list import ListView
from django.http import HttpResponse
from .models import TodoList, Task
import datetime
# Create your views here.


def home(request):
    all_list_items = TodoList.objects.all()
    return render(request, 'task_list.html', {'all_list_items': all_list_items})


# class TodoListView(ListView):
#     # the particular model
#     model = TodoList
