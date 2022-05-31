urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('real_preparation_001.web.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
