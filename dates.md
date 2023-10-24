---
layout: Post
title: By Date
permalink: /dates/
content-type: eg
---

<style>
.date-content a {
    text-decoration: none;
    color: #4183c4;
}

.date-content a:hover {
    text-decoration: underline;
    color: #4183c4;
}
</style>

<main>
    
    {% assign all_items = site.posts | concat: site.notes | sort: "updated" | reverse %}
    {% assign items_by_day = all_items | group_by_exp: "item", "item.updated | default: item.date | date: '%Y-%m-%d'" %}

    {% for day in items_by_day %}
      {% for post in day.items %}
        <li id="date-content" style="padding-bottom: 0.6em; list-style: none;">{{ day.name }}: <a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    {% endfor %}
        <br/>
        <br/>

</main>
