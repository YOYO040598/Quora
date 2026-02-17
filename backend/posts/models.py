from django.db import models
from django.conf import settings

class Question(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.title

class Answer(models.Model):
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    # This allows users to 'Like' an answer (Many-to-Many relationship)
    upvotes = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='voted_answers')

    @property
    def vote_count(self):
        return self.upvotes.count()