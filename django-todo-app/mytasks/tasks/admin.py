from django.contrib import admin

# Register your models here.
from .models import TodoItem, TodoList

admin.site.register(TodoList)
admin.site.register(TodoItem)
