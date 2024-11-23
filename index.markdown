---
layout: page
title: Cole Foster
---

<header class="masthead" style="background-image: url('/assets/images/sunset.jpeg')">
  <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                  <h1> Cole Foster </h1>
                  <span class="subheading">the developments of me</span>
              </div>
          </div>
      </div>
  </div>
</header>

<div class="wrapper">
    <div class="row align-items-center-top">
        <!-- Publications -->
        <div class="col-md-6 mb-6 mb-md-0">
            {%- if site.posts.size > 0 -%}
                <a href="/research/" class="card-link">
                    <div class="modern-card mb-1">
                        <h2 class="card-title text-center">{{ page.list_title | default: "Publications" }}</h2>
                    </div>
                </a>
                {%- for post in site.posts -%}
                    {%- if post.categories contains "publications" -%}
                        <a href="{{ post.url | relative_url }}" class="card-link">
                            <div class="modern-card" style="width: 100%;">
                                <div class="card-body">
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
            {%- endif -%}
        </div>
        <!-- Writings -->
        <div class="col-md-6 mb-6 mb-md-0">
            {%- if site.posts.size > 0 -%}
                <a href="/writings/" class="card-link">
                    <div class="modern-card mb-1">
                        <div class="caption">
                            <h2 class="card-title text-center">{{ page.list_title | default: "Writings" }}</h2>
                        </div>
                    </div>
                </a>
                {%- for post in site.posts -%}
                    {%- if post.categories contains "writings" -%}
                        <a href="{{ post.url | relative_url }}" class="card-link">
                            <div class="modern-card" style="width: 100%;">
                                <div class="card-body">
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
            {%- endif -%}
        </div>
    </div>
</div>