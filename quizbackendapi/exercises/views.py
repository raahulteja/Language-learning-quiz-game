from django.shortcuts import render
from exercises.models import Language,questions
from exercises.serializers import LanguageSerializer,questionsSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated


# Create your views here.
@api_view(['GET'])
def languages(request):
        languages=Language.objects.all()
        langs=LanguageSerializer(languages,many=True)
        return Response(langs.data)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def questionsview(request,langr):
    print(langr)
    try:
        languageinput=Language.objects.get(lang=langr)
        print(languageinput)
        print(languageinput)
        que=questions.objects.filter(lang=languageinput)
        print(que)
        ques=questionsSerializer(que,many=True)
        return Response(ques.data)
    except Exception as e:
        return Response({"error":str(e)})

