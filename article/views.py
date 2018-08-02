from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.template.loader import render_to_string
from .models import Article
def article(request):
        article_list=Article.objects.filter(delete_flag=False).order_by("-release_date")[:9]
        template = loader.get_template('article/article.html')
        return HttpResponse(template.render({'arts':article_list},request))
