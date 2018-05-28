from django.db import models
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.
class Article(models.Model):
    title=models.CharField(max_length=50)
    content=RichTextUploadingField('内容')

def __unicode__(self):
    return self.name