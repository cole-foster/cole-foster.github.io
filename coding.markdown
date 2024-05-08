---
# This type of file is for more tabs on the header. Just need a title
layout: default
title: coding
permalink: /coding/
---



<ul class="post-list">
    <li>
        <div class="card">
            <div style="padding: 5px;">
            <div class="caption">
                <h2 class="post-list-heading"> Coding </h2>
            </div>
            These collection of posts are more of a journal than a blog- the audience, primarly, is myself. I
            often am googling the same questions, solving the same problems. I want a central archive of the problems 
            I faced and the solutions I found, one that will be updated and improved with time. If someone else benefits from 
            these writings, all the better. 
            </div>
        </div>
    </li>

    {%- for post in site.posts -%}
    {%- if post.categories contains "coding" -%}
        <li>
            <div class="card"> 
            <div style="padding: 5px;">
                {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
                <span class="post-meta">{{ post.date | date: date_format }}</span>
                <h3>
                <a class="post-link" href="{{ post.url | relative_url }}">
                    {{ post.title | escape }}
                </a>
                </h3>
                {{ post.short }}
                <img class="center" style="display:block; margin-left: auto; margin-right: auto; max-height: 200px;" src="{{ post.image }}">
            </div>
            </div>
        </li>
    {%- endif -%}
    {%- endfor -%}
</ul>
