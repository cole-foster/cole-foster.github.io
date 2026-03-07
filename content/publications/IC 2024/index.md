---
layout: post
title: "Top-Down Construction of Locally Monotonic Graphs for Similarity Search"
date: 2024-11-04
description: Similarity search is a fundamental task in applications such as recommender systems, image retrieval, and text retrieval. Graph-based indexes for similarity search traverse a graph constructed on the dataset to retrieve the query's neighbors, using edges to navigate to and explore the query's local neighborhood. Edge selection techniques are crucial for the performance of graph-based indexes, enhancing accuracy and efficiency by preventing local minima, reducing graph diameter, and improving sparsity. The Half-Space Proximal (HSP) Graph is an edge-minimal monotonic graph defined by a geometric edge selection which ensures a diverse, yet sparse set of edges. Unfortunately, the quadratic construction complexity of the HSP Graph renders it impractical for large-scale search scenarios. This work investigates an approximation of the HSP Graph that aims to preserve the monotonic property locally. By leveraging a hierarchical partitioning of the dataset, this work proposes a top-down, distributed graph construction which uses a coarse-scale graph on pivots to facilitate the construction of the layer below. This paper investigates the effectiveness of this approach as a submission to the SISAP 2024 Indexing Challenge.
showtoc: false
tags:
- publication
- research
---

<div style="margin: 20px 0; text-align: center;">
  <a href="https://link.springer.com/chapter/10.1007/978-3-031-75823-2_25" class="btn btn-outline-primary"
    target="_blank" style="margin-right: 10px; margin-bottom: 10px;">
    <i class="fas fa-file-alt"></i> Conference Paper (SISAP 2024)
  </a>
  <a href="https://github.com/cole-foster/sisap-2024.git" class="btn btn-outline-dark" target="_blank"
    style="margin-bottom: 10px;">
    <i class="fab fa-github"></i> Code
  </a>
</div>


<b>Abstract: </b>
Similarity search is a fundamental task in applications such as recommender systems, image retrieval, and
text retrieval. Graph-based indexes for similarity search traverse a graph constructed on the dataset to retrieve the
query’s neighbors, using edges to navigate to and explore the query’s local neighborhood. Edge selection techniques are
crucial for the performance of graph-based indexes, enhancing accuracy and efficiency by preventing local minima,
reducing graph diameter, and improving sparsity. The Half-Space Proximal (HSP) Graph is an edge-minimal monotonic graph
defined by a geometric edge selection which ensures a diverse, yet sparse set of edges. Unfortunately, the quadratic
construction complexity of the HSP Graph renders it impractical for large-scale search scenarios. This work investigates
an approximation of the HSP Graph that aims to preserve the monotonic property locally. By leveraging a hierarchical
partitioning of the dataset, this work proposes a top-down, distributed graph construction which uses a coarse-scale
graph on pivots to facilitate the construction of the layer below. This paper investigates the effectiveness of this
approach as a submission to the SISAP 2024 Indexing Challenge.


> Foster, Cole, Edgar Chávez, and Benjamin Kimia. "Top-down construction of locally monotonic graphs for
similarity search." In International Conference on Similarity Search and Applications, pp. 291-300. Cham:
Springer Nature Switzerland, 2024.