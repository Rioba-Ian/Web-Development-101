from datetime import timedelta
from django.db import models
from django.utils import timezone
from django.urls import reverse
# Create your models here.

# two models: TodoList and TodoItem

# define a time from now to next week


def one_week_from_now():
    return timezone.now() + timezone.timedelta(days=7)


class TodoList(models.Model):
    title = models.CharField(max_length=150)

    def get_absolute_url(self):
        return reverse("list", args=[self.id])

    def __str__(self) -> str:
        return self.title


class TodoItem(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(null=True)
    created = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField(
        auto_now_add=one_week_from_now())
    todo_list = models.ForeignKey(TodoList, on_delete=models.CASCADE)

    def get_absolute_url(self):
        return reverse(
            "item-update", args=[str(self.todo_list.id), str(self.id)]
        )

    def __str__(self) -> str:
        return f"{self.title}: due{self.due_date}"

    class Meta:
        ordering = ["due_date"]
