from django.urls import path
from . import views
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.indexpage, name='indexpage'),
    # path('home/', login_required(views.home), name='home'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)