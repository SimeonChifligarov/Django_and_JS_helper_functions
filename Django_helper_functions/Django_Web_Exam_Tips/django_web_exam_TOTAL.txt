# some configurations for the Django Project - settings.py file

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


# urlpatterns (variable in urls.py)
# static files & media files

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('real_preparation_001.web.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# forms.ModelForm

class DeleteProfileForm(forms.ModelForm):

    def save(self, commit=True):
        if commit:
            image_path = self.instance.image.path
            self.instance.delete()
            os.remove(image_path)
        return self.instance

    class Meta:
        model = Profile
        fields = ()


class DeleteExpenseForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for _, field in self.fields.items():
            # field.widget.attrs['readonly'] = 'readonly'
            field.widget.attrs['disabled'] = 'disabled'
            field.required = False

    def save(self, commit=True):
        if commit:
            self.instance.delete()
        return self.instance

    class Meta:
        model = Expense
        fields = ('title', 'description', 'image', 'price')
	    labels = {
            'image': 'Link to Image',
        }


# Function-based views (FBV)

def get_profile():
    profiles = Profile.objects.all()
    if profiles:
        return profiles[0]
    return None


def show_index(request):
    profile = get_profile()
    if not profile:
        return redirect('create profile')
    return render(request, 'home-with-profile.html')


def edit_expense(request, pk):
    expense = Expense.objects.get(pk=pk)
    if request.method == 'POST':
        form = EditExpenseForm(request.POST, instance=expense)
        if form.is_valid():
            form.save()
            return redirect('show index')
    else:
        form = EditExpenseForm(instance=expense)

    context = {
        'form': form,
        'expense': expense,
    }

    return render(request, 'expense-edit.html', context)


# Django template language (DTL)

{% extends 'base/base.html' %}
{%  block page_content %}
{% endblock %}


{% load static %}


<li class="img"><img src="{% static 'images/dollar.png' %}" alt="dollar"></li>
<li><a href="{% url 'show index' %}">Expenses Tracker</a></li>
{% if not no_profile %}
<li class="right"><a href="{% url 'show profile' %}">Profile</a></li>
{% endif %}


<form method="POST" action="{% url 'create expense' %}">


{{ form }}
{% csrf_token %}


budget_left|floatformat:2 #DjangoTemplateLanguage


# useful terminal commands

django-admin startproject myproject

python manage.py startapp web

python manage.py runserver

python manage.py makemigrations
python manage.py migrate

startapp web #manage.py (tools -> run manage.py tasks)


venv\Scripts\activate

pip install psycopg2-binary
pip freeze > requirements.txt
