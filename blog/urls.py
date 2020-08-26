from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.urls import path, include

from posts.views import (
    contact,
    index,
    search,
    post_list,
    post_detail,
    post_create,
    post_update,
    post_delete,
    services,
    IndexView,
    PostListView,
    PostDetailView,
    PostCreateView,
    PostUpdateView,
    PostDeleteView
)
from posts.sitemaps import PostSitemap
from marketing.views import email_list_signup

sitemaps = {
    'posts': PostSitemap,
}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexView.as_view(), name='home'),
    path('blog/', PostListView.as_view(), name='post-list'),
    path('search/', search, name='search'),
    path('email-signup/', email_list_signup, name='email-list-signup'),
    path('contact/', contact, name='contact'),
    path('create/', PostCreateView.as_view(), name='post-create'),
    path('post/<pk>/', PostDetailView.as_view(), name='post-detail'),
    path('post/<pk>/update/', PostUpdateView.as_view(), name='post-update'),
    path('post/<pk>/delete/', PostDeleteView.as_view(), name='post-delete'),
    path('services/', services, name='services'),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}),
    path('tinymce/', include('tinymce.urls')),
    path('accounts/', include('allauth.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
