---
layout: page
title: Blog
---

TODO this is where blog posts will be listed. 

Note that current blog posts are from vanilla Poole.

{% for post in site.posts %}
{{ forloop.index }}. [{{ post.title }}]({{ post.url }})
{% endfor %}