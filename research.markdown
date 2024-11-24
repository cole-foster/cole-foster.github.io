---
layout: page
title: research
image: /assets/images/research/graph.webp
permalink: /research/
---

<div class="wrapper">
  <div class="post-list">
    {%- for post in site.posts -%}
      {%- if post.categories contains "publications" -%}
        {%- assign date_format = site.minima.date_format | default: "%b %Y" -%}
        <a href="{{ post.url | relative_url }}" class="card-link">
          <div class="modern-card" style="width: 100%;">
              <div class="card-body">
                  <span class="post-meta">{{ post.date | date: date_format }}</span>
                  <h5 class="card-title">{{ post.title | escape }}</h5>
                  {%- if post.description -%}
                      <p class="card-text"> {{ post.description }}</p>
                  {%- endif -%}    
                  <img class="center" style="display:block; margin-left: auto; max-width: 100%; margin-right: auto; max-height: 200px;" src="{{ post.image }}">
              </div>
          </div>
        </a>
      {%- endif -%}
    {%- endfor -%}
  </div>
</div>
