import json
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .models import User

# Create your views here.
class UserListView(View): # TODO: change the name of the class to 'UserView'.
    def get(self, request, email):
        # user = User.objects.get(email=email)
        # data = list(users.values("id", "email"))
        # return email == data # `User.objects.filter(email=email).exists()` - this will also work i guess.
        return JsonResponse({"exists": User.objects.filter(email=email).exists()})

@method_decorator(csrf_exempt, name="dispatch")     
class CreateUserView(View): # 'CreateUserView' - could be renamed later.
    def post(self, request):
        try:
            data = json.loads(request.body)
            
            email = data.get("email")
            password = data.get("password")
            
            if not email or not password:
                return JsonResponse(
                    {"error": "Email and password are required!"},
                    status=400
                )
                
            if User.objects.filter(email=email).exists():
                return JsonResponse(
                    {"error": "Email already exists!"},
                    status=400,
                )
                
            user = User.objects.create(
                email=email,
                password=password
            )
            
            return JsonResponse(
                {
                    "message": "User created successfully!",
                    "id": user.id,
                    "email": user.email,
                },
                status=201
            )
                
        except json.JSONDecodeError:
            return JsonResponse(
                {"error": "Invalid JSON"},
                status=400,
            )