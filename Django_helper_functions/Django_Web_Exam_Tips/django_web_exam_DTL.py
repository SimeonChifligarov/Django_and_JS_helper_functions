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
