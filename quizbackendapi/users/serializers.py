from rest_framework import serializers
from users.models import myuserClass,progress

class myuserClassSerializer(serializers.ModelSerializer):
    class Meta:
        model=myuserClass
        fields="__all__"

class progressSerializer(serializers.ModelSerializer):
    class Meta:
        model=progress
        fields="__all__"

class DataSerializer(serializers.Serializer):
    data = serializers.ListField(
        child=serializers.ListField(
            child=serializers.CharField(),
        ),
    )