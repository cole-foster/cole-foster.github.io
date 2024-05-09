---
# This type of file is for more tabs on the header. Just need a title
layout: default
title: 
permalink: /recipes/
---

<ul class="post-list">
  <li>
      <div class="card">
          <div style="padding: 5px;">
          <div class="caption">
              <h2 class="post-list-heading"> Recipes </h2>
          </div>
          I do not claim to be a chef, or the creator of these recipes- rather, I just enjoy. Most of 
          these recipes come from another website, with some creative freedom, and all credit is given where its due. 
          The intent here is to serve as a virtual cookbook for myself, friends, family, and whoever else may stumble 
          upon it, without the absurd screen-freezing ads of most online recipes.
          </div>
      </div>
    </li>


      {%- for post in site.posts -%}
        {%- if post.categories contains "recipes" -%}
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
