from rest_framework import serializers
from user.models import WordCard, Catagory, User


class WordCardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = WordCard
        fields = ['id', 'th', 'en', 'ch']


class CatagorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Catagory
        fields = ['id', 'catName']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'userName']
