---
# This type of file is for more tabs on the header. Just need a title
layout: default
title: Stevie
permalink: /stevie/
images:
  - image_path: /assets/stevie/stevie-hood.jpeg
  - image_path: /assets/stevie/stevie-brandy.jpeg
  - image_path: /assets/stevie/stevie-colt-state.jpeg
  - image_path: /assets/stevie/stevie-and-me.png
  - image_path: /assets/stevie/stevie-sad-chair.jpeg
  - image_path: /assets/stevie/stevie-thicc.jpeg
  - image_path: /assets/stevie/stevie-paddleboard.jpeg
  - image_path: /assets/stevie/stevie-monkey.jpeg
---

<!-- {% include image-gallery.html folder="/assets/stevie/" %} -->


<ul class="photo-gallery">
  {% for image in page.images %}
    <img src="{{ image.image_path }}" alt="dog" style="max-width: 200px; height: auto; border-radius: 10px;"/>
  {% endfor %}
</ul> 

