from django.urls import include, path
from rest_framework import routers
from . import views
router = routers.DefaultRouter()
router.register(r'phone', views.PhoneViewSet)
router.register(r'tablet', views.TabletViewSet)
router.register(r'brand', views.BrandViewSet)
router.register(r'accessori', views.AccessoriViewSet)

# wire up our API using automatic URL routing.
# additionally, we include login URLs for the browsable API.

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]