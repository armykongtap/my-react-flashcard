from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User


@api_view(['POST'])
def register(request):

    data = request.data
    if request.method == 'POST':
        try:
            user = User.objects.create_user(
                data['username'], 'none@mail.com', data['password'])
            return Response(1, status=status.HTTP_201_CREATED)
        except:
            return Response(0, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
