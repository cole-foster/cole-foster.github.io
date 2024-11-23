---
layout: page
title: stevie
permalink: /stevie/
images:
  - image_path: /assets/images/stevie/stevie-hood.jpeg
  - image_path: /assets/images/stevie/stevie-brandy.jpeg
  - image_path: /assets/images/stevie/stevie-colt-state.jpeg
  - image_path: /assets/images/stevie/stevie-and-me.png
  - image_path: /assets/images/stevie/stevie-sad-chair.jpeg
  - image_path: /assets/images/stevie/stevie-thicc.jpeg
  - image_path: /assets/images/stevie/stevie-paddleboard.jpeg
  - image_path: /assets/images/stevie/stevie-monkey.jpeg
---

<header class="masthead" style="background-image: url('/assets/images/stevie/stevie-couch.jpeg')">
    <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div class="site-heading">
                    <h1>stevie tricks</h1>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="container-lg mt-5">
  <ul id="gallery">
    {% for image in page.images %}
      <div class="card" style="height: auto; margin-bottom: 6px;" >
        <a target="_blank" href="{{ image.image_path }}">
          <img src="{{ image.image_path }}" alt="dog" style="border-radius: 10px;"/>
        </a>
      </div>
    {% endfor %}
  </ul> 
</div>

