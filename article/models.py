from django.db import models
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.
class Article(models.Model):
    title=models.CharField(max_length=50)
    release_date=models.DateField(null=True)
    frontpage=models.FileField(upload_to='uploads/',null=True)
    content=RichTextUploadingField()
    delete_flag=models.BooleanField(default=False)
def __unicode__(self):
    return self.name