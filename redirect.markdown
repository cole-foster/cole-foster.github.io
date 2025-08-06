---
layout: page
permalink: /redirect/
image: /assets/images/stevie/stevie-colt-state.jpeg
title: oops! nice try cole
---



<!-- want to make images pop-up with Lightbox effect (bootstrap). to do -->
<div id="gallery">
  {% for file in site.static_files %}
    {% if file.path contains '/assets/images/stevie/' %}
      <div class="modern-card">
        <!-- <a target="_blank" href="{{ image.image_path }}"> -->
          <img src="{{ file.path }}" alt="{{ file.path }}" style="border-radius: 10px;"/>
        <!-- </a> -->
      </div>
    {% endif %}
  {% endfor %}
</div> 

