---
layout: page
title: Book Reviews
---

Some yapping on books. [Why I think it's worth]({{ "/books/why/" | relative_url }}).

{% assign books = site.books | sort: 'date' | reverse %}
{% for book in books %}
[{{ book.title }}]({{ book.url | relative_url }}) &middot; {{ book.date | date_to_string }}
{% endfor %}
