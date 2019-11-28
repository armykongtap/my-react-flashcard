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
        print(type(serializer.data))
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii': False})


@csrf_exempt
def initialise(request, user):
    if request.method == 'GET':
        dog = WordCard(en='Dog', th='หมา', ch='狗',
                       category='Animal', user=user)
        dog.save()
        cat = WordCard(en='Cat', th='แมว', ch='貓',
                       category='Animal', user=user)
        cat.save()
        ant = WordCard(en='Ant', th='มด', ch='螞蟻',
                       category='Animal', user=user)
        ant.save()

        apple = WordCard(en='Apple', th='แอปเปิ้ล', ch='蘋果',
                         category='Fruit', user=user)
        apple.save()
        papaya = WordCard(en='Papaya', th='มะละกอ', ch='番木瓜',
                          category='Fruit', user=user)
        papaya.save()
        banana = WordCard(en='Banana', th='กล้วย', ch='香蕉',
                          category='Fruit', user=user)
        banana.save()
        orange = WordCard(en='Orange', th='ส้ม', ch='橙子',
                          category='Fruit', user=user)
        orange.save()

        red = WordCard(en='Red', th='แดง', ch='紅色',
                       category='Color', user=user)
        red.save()
        yellow = WordCard(en='Yellow', th='เหลือง', ch='黃色',
                          category='Color', user=user)
        yellow.save()
        green = WordCard(en='Green', th='เขียว', ch='綠色',
                         category='Color', user=user)
        green.save()
        return HttpResponse(status=200)
