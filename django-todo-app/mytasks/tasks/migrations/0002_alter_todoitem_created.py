# Generated by Django 4.1.1 on 2022-09-08 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("tasks", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="todoitem",
            name="created",
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]