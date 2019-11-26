from django.db import models


class WordCard(models.Model):
    th = models.CharField(blank=True, default='', max_length=100)
    en = models.CharField(blank=True, default='', max_length=100)
    ch = models.CharField(blank=True, default='', max_length=100)


class Catagory(models.Model):
    catName = models.CharField(blank=False, default='unnamed', max_length=100)
    wordList = models.ForeignKey('WordCard', on_delete=models.CASCADE,)


class User(models.Model):
    userName = models.CharField(blank=False, default='unnamed', max_length=100)
    catList = models.ForeignKey('Catagory', on_delete=models.CASCADE,)
