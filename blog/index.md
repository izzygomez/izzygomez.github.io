---
layout: page
title: Blog
---

TODO this is where blog posts will be listed. 

Note that current blog posts are from vanilla Poole.

{% for post in site.posts %}
<span style="font-size: 85%; color: #339933">{{ post.date | date_to_string }}</span> &middot; [{{ post.title }}]({{ post.url }})
{% endfor %}