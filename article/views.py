from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
def article(request):
        template = loader.get_template('article/article.html')
        return HttpResponse(template.render({},request))
