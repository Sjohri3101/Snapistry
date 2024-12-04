from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages                         

# Create your views here.

def indexpage(request):
    return render(request, 'home/home.html')