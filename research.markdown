---
# This type of file is for more tabs on the header. Just need a title
layout: default
title: research
permalink: /research/
---


<ul class="post-list">
      {%- for post in site.posts -%}
        {%- if post.categories contains "publications" -%}
            <li>
                <div class="card"> <div style="padding: 5px;">
                {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
                <span class="post-meta">{{ post.date | date: date_format }}</span>
                <h3>
                <a class="post-link" href="{{ post.url | relative_url }}">
                    {{ post.title | escape }}
                </a>
                </h3>
                {{ post.short }}
                <img class="center" style="display:block; margin-left: auto; margin-right: auto; max-height: 200px;" src="{{ post.image }}">
                </div></div>
            </li>
        {%- endif -%}
      {%- endfor -%}
    </ul>
