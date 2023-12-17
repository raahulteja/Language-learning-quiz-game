from rest_framework import serializers
from exercises.models import Language,questions

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Language
        fields="__all__"

class questionsSerializer(serializers.ModelSerializer):
    class Meta:
        model=questions
        fields="__all__"