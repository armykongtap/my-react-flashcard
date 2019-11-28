from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from words.models import WordCard
from words.serializers import WordCardSerializer


@csrf_exempt
def word_list(request):

    if request.method == 'GET':
        words = WordCard.objects.all()
        serializer = WordCardSerializer(words, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii': False})

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = WordCardSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201, json_dumps_params={'ensure_ascii': False})
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def word_detail(request, pk):

    try:
        word = WordCard.objects.get(pk=pk)
    except WordCard.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = WordCardSerializer(word)
        return JsonResponse(serializer.data, json_dumps_params={'ensure_ascii': False})
    elif request.method == 'DELETE':
        word.delete()
        return HttpResponse(status=204)


@csrf_exempt
def word_filter(request, user, catName):

    if request.method == 'GET':
        words = WordCard.objects.filter(user=user, category=catName)
        serializer = WordCardSerializer(words, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii': False})
