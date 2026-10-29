from django.urls import path
from .views import UserListView, CreateUserView

urlpatterns = [
    path("", CreateUserView.as_view(), name="create-user-view"),
    path("<str:email>/", UserListView.as_view(), name="user-list-view"),
]