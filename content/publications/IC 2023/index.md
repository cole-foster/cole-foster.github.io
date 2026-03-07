---
layout: post
title:  "Computational Enhancements of HNSW Targeted to Very Large Datasets"
date:   2023-10-11
description: The Hierarchical Navigable Small World (HNSW) Graph is a graph-based approximate similarity search algorithm that achieves fast and accurate search through a hierarchical structure providing long-range and short-range links. The HNSW remains as a state-of-the-art method, as shown by this submission to the SISAP 2023 Indexing Challenge. This submission introduces a modification to the implementation of HNSW that avoids the cost of a batched construction and drastically reduces disk-space of the saved index when working with large datasets. Through the lens of this competition, this work provides a careful analysis of several important factors for high-performance applications, including the removal of unnecessary functionality, the use of SIMD vectorization for distance computations, and optimal utilization of cache through spatial locality and cache prefetching.
showtoc: false
tags: 
   - publication
   - research
---

<div style="margin: 20px 0; text-align: center;">
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-46994-7_25" 
       class="btn btn-outline-primary" 
       target="_blank"
       style="margin-right: 10px; margin-bottom: 10px;">
        <i class="fas fa-file-alt"></i> Conference Paper (SISAP 2023)
    </a>
    <a href="https://github.com/cole-foster/sisap-2023.git" 
       class="btn btn-outline-dark" 
       target="_blank"
       style="margin-bottom: 10px;">
        <i class="fab fa-github"></i> Code
    </a>
</div>


<b>Abstract: </b>
The Hierarchical Navigable Small World (HNSW) Graph is a graph-based approximate similarity search algorithm that achieves fast and accurate search through a hierarchical structure providing long-range and short-range links. The HNSW remains as a state-of-the-art method, as shown by this submission to the SISAP 2023 Indexing Challenge. This submission introduces a modification to the implementation of HNSW that avoids the cost of a batched construction and drastically reduces disk-space of the saved index when working with large datasets. Through the lens of this competition, this work provides a careful analysis of several important factors for high-performance applications, including the removal of unnecessary functionality, the use of SIMD vectorization for distance computations, and optimal utilization of cache through spatial locality and cache prefetching.


> Foster, Cole, and Benjamin Kimia. "Computational enhancements of HNSW targeted to very large datasets." In International Conference on Similarity Search and Applications, pp. 291-299. Cham: Springer Nature Switzerland, 2023.