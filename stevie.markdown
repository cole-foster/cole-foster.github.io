---
layout: page
permalink: /stevie/
image: /assets/images/stevie/stevie-colt-state.jpeg
title: stevie tricks
---

<!-- want to make images pop-up with Lightbox effect (bootstrap). to do -->
<ul id="gallery">
  {% for file in site.static_files %}
    {% if file.path contains '/assets/images/stevie/' %}
      <div class="modern-card">
        <!-- <a target="_blank" href="{{ image.image_path }}"> -->
          <img src="{{ file.path }}" alt="{{ file.path }}" style="border-radius: 10px;"/>
        <!-- </a> -->
      </div>
    {% endif %}
  {% endfor %}
</ul> 

