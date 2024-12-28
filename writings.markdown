---
layout: page
title: writings
image: /assets/images/writings.webp
permalink: /writings/
---

<div class="row align-items-center-top">
    {%- if site.posts.size > 0 -%}
        {%- for post in site.posts -%}
            {%- if post.categories contains "writings" -%}
                {%- assign date_format = site.minima.date_format | default: "%Y %B %d" -%}
                <a href="{{ post.url | relative_url }}" class="card-link">
                    <div class="modern-card" style="width: 100%;">
                        <div class="card-body">
                            <span class="post-meta">{{ post.date | date: date_format }}</span>
                            <h5 class="card-title">{{ post.title | escape }}</h5>
                            {%- if post.description -%}
                                <p class="card-text"> {{ post.description }}</p>
                            {%- endif -%}    
                        </div>
                    </div>
                </a>
            {%- endif -%}
        {%- endfor -%}
    {%- endif -%}
</div>