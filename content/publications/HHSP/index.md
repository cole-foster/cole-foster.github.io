---
layout: post
title:  "Finding HSP Neighbors via an Exact, Hierarchical Approach"
date:   2023-10-11
# categories: publications
description: The Half Space Proximal (HSP) graph is a low out-degree monotonic graph with wide applications in various domains, including combinatorial optimization in strings, enhancing kNN classification, simplifying chemical networks, estimating local intrinsic dimensionality, and generating uniform samples from skewed distributions, among others. However, the linear complexity of finding HSP neighbors of a query limit its scalability, except when sacrificing accuracy by restricting the test to a small local neighborhood estimated through approximate indexing. This compromise leads to the loss of crucial long-range connections, introducing false positives and excluding false negatives, compromising the essential properties of the HSP. To overcome these limitations, we propose a fast and exact HSP Test showing sublinear complexity in extensive experimentation. Our hierarchical approach leverages pivots and the triangle inequality to enable efficient HSP search in general metric spaces. A key component of our approach is the concept of the shifted generalized hyperplane between two points, which allows for the invalidation of entire point groups. Our approach ensures the desired properties of the HSP Test with exactness even for datasets containing hundreds of millions of points.
showtoc: false
tags: 
   - publication
   - research
# image: /assets/images/research/HHSP-Picture.png
---

<div style="margin: 20px 0; text-align: center;">
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-46994-7_1" 
       class="btn btn-outline-primary" 
       target="_blank"
       style="margin-right: 10px; margin-bottom: 10px;">
        <i class="fas fa-file-alt"></i> Conference Paper (SISAP 2023)
    </a>
    <a href="https://www.sciencedirect.com/science/article/pii/S0306437925000493" 
       class="btn btn-outline-primary" 
       target="_blank"
       style="margin-right: 10px; margin-bottom: 10px;">
        <i class="fas fa-file-alt"></i> Journal Paper (IS 2025)
    </a>
    <a href="https://github.com/cole-foster/HHSP.git" 
       class="btn btn-outline-dark" 
       target="_blank"
       style="margin-bottom: 10px;">
        <i class="fab fa-github"></i> Code
    </a>
</div>

<b>Abstract: </b>
The Half Space Proximal (HSP) graph is a low out-degree monotonic graph with wide applications in various domains, including combinatorial optimization in strings, enhancing kNN classification, simplifying chemical networks, estimating local intrinsic dimensionality, and generating uniform samples from skewed distributions, among others. However, the linear complexity of finding HSP neighbors of a query limit its scalability, except when sacrificing accuracy by restricting the test to a small local neighborhood estimated through approximate indexing. This compromise leads to the loss of crucial long-range connections, introducing false positives and excluding false negatives, compromising the essential properties of the HSP. To overcome these limitations, we propose a fast and exact HSP Test showing sublinear complexity in extensive experimentation. Our hierarchical approach leverages pivots and the triangle inequality to enable efficient HSP search in general metric spaces. A key component of our approach is the concept of the shifted generalized hyperplane between two points, which allows for the invalidation of entire point groups. Our approach ensures the desired properties of the HSP Test with exactness even for datasets containing hundreds of millions of points.


> Foster, Cole, Edgar Chávez, and Benjamin Kimia. "Finding HSP Neighbors via an Exact, Hierarchical Approach." In International Conference on Similarity Search and Applications, pp. 3-18. Cham: Springer Nature Switzerland, 2023.