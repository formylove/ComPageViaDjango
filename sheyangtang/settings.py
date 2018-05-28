"""
Django settings for sheyangtang project.

Generated by 'django-admin startproject' using Django 2.0.3.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.0/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'a27)ch+pd!t(hotz8w%dmzr#h3-io*&3$b+te5%%eha)ay_z_m'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'article.apps.ArticleConfig',
    'homepage.apps.HomepageConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'ckeditor',
    'ckeditor_uploader'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'sheyangtang.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.media',
            ],
        },
    },
]

WSGI_APPLICATION = 'sheyangtang.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'myDB.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/2.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# django.contrib.staticfiles,collectstatic时项目settings.py中必须有(把所有app目录中的static集中到，项目目录中的static中)
#   STATIC_ROOT = os.path.join(BASE_DIR,'static/')
# 设置的static file的起始url，这个只是在template里边引用到，这个参数和MEDIA_URL的含义相同。
STATIC_URL = '/static/'
#和TEMPLATE_DIRS的含义差不多，就是除了各个app的static目录以外还需要管理的静态文件设置，比如项目的公共文件差不多。 
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]
CKEDITOR_JQUERY_URL ='https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js' 
# 处理从MEDIA_ROOT提供的媒体的URL，用于管理存储的文件。 如果设置为非空值，则它必须以斜杠结尾。 您将需要将这些文件配置为在开发和生产环境中提供服务。
# this is the relative browser URL to be used when accessing our media files in the browser
MEDIA_URL = "/media/"
# 保存用户上传文件的目录的绝对文件系统路径
# MEDIA_ROOT和STATIC_ROOT必须具有不同的值。 
# this is the absolute path to the folder that will hold our user uploads. 
MEDIA_ROOT = os.path.join(BASE_DIR, "media")
CKEDITOR_UPLOAD_PATH = "article_images"
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': (
			['div','Source','-','Save','NewPage','Preview','-','Templates'], 
			['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print','SpellChecker','Scayt'], 
			['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'], 
			['Form','Checkbox','Radio','TextField','Textarea','Select','Button', 'ImageButton','HiddenField'], 
			['Bold','Italic','Underline','Strike','-','Subscript','Superscript'], 
			['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'], 
			['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'], 
			['Link','Unlink','Anchor'], 
			['Image', 'Update','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'], 
			['Styles','Format','Font','FontSize'], 
			['TextColor','BGColor'], 
			['Maximize','ShowBlocks','-','About', 'pbckcode'],
		),
	}
}

