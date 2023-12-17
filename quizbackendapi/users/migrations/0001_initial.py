# Generated by Django 4.2.1 on 2023-12-13 16:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('exercises', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='myuserClass',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mobno', models.CharField(max_length=10)),
                ('myuser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('pref', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='exercises.language')),
            ],
        ),
        migrations.CreateModel(
            name='progress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('puser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.myuserclass')),
                ('qcorrect', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='exercises.questions')),
            ],
        ),
    ]
