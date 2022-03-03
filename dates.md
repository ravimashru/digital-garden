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
    
    {% assign all_items = site.posts | concat: site.notes %}
    {% assign items_by_day = all_items | group_by_exp: "item", "item.updated | default: item.date | date: '%d-%B-%Y'" %}

    {% for day in items_by_day %}
      <h3 id="{{ day.name }}">{{ day.name }}</h3>
          {% for post in day.items %}
            <li id="date-content" style="padding-bottom: 0.6em; list-style: none;"><a href="{{ post.url }}">{{ post.title }}</a></li>
          {% endfor %}
    {% endfor %}
    
        <br/>
        <br/>
</main>

