from django.db import models
from django.utils import timezone
# Create your models here.


class Task(models.Model):
    task_name = models.CharField(max_length=150)
    created = models.DateField(default=timezone.now)
    finished = models.BooleanField(default=False)

    def __str__(self) -> str:
        return "%s" % (self.task_name)


class TodoList(models.Model):
    name = models.CharField(max_length=50)
    tasks = models.ForeignKey(Task, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return "%s" % (self.name)
