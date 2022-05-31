DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydatabase',
        'USER': 'mydatabaseuser',
        'PASSWORD': 'mypassword',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '********',  # hide it
        'USER': '********',
        'PASSWORD': '********',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}

STATICFILES_DIRS = (
    BASE_DIR / 'staticfiles',
)

MEDIA_URL = 'media/'
MEDIA_ROOT = BASE_DIR / 'mediafiles'
