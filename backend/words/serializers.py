from rest_framework import serializers
from words.models import WordCard


class WordCardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = WordCard
        fields = ['id', 'th', 'en', 'ch', 'category', 'user']
