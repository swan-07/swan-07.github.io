---
layout: default
title: Book List
permalink: /media
---

<h1>Media I've Consumed</h1>
<p>it says book list and most of these will be books, but there's other media in here too. i started recording in August 2024</p>
<div class="media-list">
  {% for item in site.data.media %}
  <div class="media-item" data-category="{{ item.category }}" title="{{ item.thoughts }}" datefinished = "{{item.datefinished}}">
    <strong>{{ item.title }}</strong> ({{ item.category }}) - Finished {{item.datefinished}}
  </div>
  {% endfor %}
</div>
