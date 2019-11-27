from django.db import models


class User(models.Model):
    userName = models.CharField(blank=False, default='unnamed', max_length=100)

    def __str__(self):
        return "%s" % (self.userName)


class Catagory(models.Model):
    catName = models.CharField(blank=False, default='unnamed', max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return "%s" % (self.catName)


class WordCard(models.Model):
    en = models.CharField(blank=True, default='', max_length=100)
    th = models.CharField(blank=True, default='', max_length=100)
    ch = models.CharField(blank=True, default='', max_length=100)
    catagory = models.ForeignKey(Catagory, on_delete=models.CASCADE)

    def __str__(self):
        return "%s" % (self.en)
