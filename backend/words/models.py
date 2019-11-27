from django.db import models


class WordCard(models.Model):
    en = models.CharField(blank=True, default='', max_length=100)
    th = models.CharField(blank=True, default='', max_length=100)
    ch = models.CharField(blank=True, default='', max_length=100)
    category = models.CharField(blank=True, default='', max_length=100)
    user = models.CharField(blank=True, default='', max_length=100)

    def __str__(self):
        return "%s in %s by %s" % (self.en, self.category, self.user)
