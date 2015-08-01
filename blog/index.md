---
layout: page
title: Blog
---

> worthless shit

{% for post in site.posts %}
<span style="font-size: 85%; color: #339933">{{ post.date | date_to_string }}</span> &middot; [{{ post.title }}]({{ post.url }})
{% endfor %}