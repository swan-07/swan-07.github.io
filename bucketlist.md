---
layout: default
title: Bucket List
permalink: /bucketlist
---

<h1>Bucket List</h1>

<ul id="bucket-list">
  {% assign completed_items = site.data.bucketlist | where: "done", true %}
  {% assign pending_items = site.data.bucketlist | where: "done", false %}

<!-- uncompleted first -->
  {% for item in pending_items %}
  <li class="bucket-item">
    <input type="checkbox" disabled>
    <span class="item-title">{{ item.title }}</span>
    {% if item.notes %}
      <br><span class="item-notes">{{ item.notes }}</span>
    {% endif %}
  </li>
  {% endfor %}

  <!-- Display Completed Items at the Bottom -->
  {% for item in completed_items %}
  <li class="bucket-item completed">
    <input type="checkbox" disabled checked>
    <span class="item-title">{{ item.title }}</span>
    <span class="completion-info">
      (Completed on {{ item.date }})
      {% if item.notes %}<br>Notes: {{ item.notes }}{% endif %}
    </span>
  </li>
  {% endfor %}
</ul>
