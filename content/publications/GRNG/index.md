---
layout: post
title:  "Generalized Relative Neighborhood Graph (GRNG) for Similarity Search"
date:   2022-10-07
description: Similarity search for information retrieval on a variety of datasets relies on a notion of neighborhood, frequently using binary relationships such as the kNN approach. We suggest, however, that the notion of a neighbor must recognize higher-order relationship, to capture neighbors in all directions. Proximity graphs, such as the Relative Neighbor Graphs (RNG), use trinary relationships which capture the notion of direction and have been successfully used in a number of applications. However, the current algorithms for computing the RNG, despite widespread use, are approximate and not scalable. This paper proposes a hierarchical approach and novel type of graph, the Generalized Relative Neighborhood Graph (GRNG) for use in a pivot layer that then guides the efficient and exact construction of the RNG of a set of exemplars. It also shows how to extend this to a multi-layer hierarchy which significantly improves over the state-of-the-art methods which can only construct an approximate RNG.
showtoc: false
tags: 
   - publication
   - research
# image: publications/GRNG/GRNG.png
---


<div style="margin: 20px 0; text-align: center;">
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-17849-8_11" 
       class="btn btn-outline-primary" 
       target="_blank"
       style="margin-right: 10px; margin-bottom: 10px;">
        <i class="fas fa-file-alt"></i> Conference Paper (SISAP 2022)
    </a>
    <a href="https://www.sciencedirect.com/science/article/pii/S0167865524003556" 
       class="btn btn-outline-primary" 
       target="_blank"
       style="margin-right: 10px; margin-bottom: 10px;">
        <i class="fas fa-file-alt"></i> Journal Paper (PRL 2025)
    </a>
    <!-- <a href="https://github.com/cole-foster/GRNG.git" 
       class="btn btn-outline-dark" 
       target="_blank"
       style="margin-bottom: 10px;">
        <i class="fab fa-github"></i> Code
    </a> -->
</div>


<b>Abstract: </b>
Similarity search for information retrieval on a variety of datasets relies on a notion of neighborhood, frequently using binary relationships such as the kNN approach. We suggest, however, that the notion of a neighbor must recognize higher-order relationship, to capture neighbors in all directions. Proximity graphs, such as the Relative Neighbor Graphs (RNG), use trinary relationships which capture the notion of direction and have been successfully used in a number of applications. However, the current algorithms for computing the RNG, despite widespread use, are approximate and not scalable. This paper proposes a hierarchical approach and novel type of graph, the Generalized Relative Neighborhood Graph (GRNG) for use in a pivot layer that then guides the efficient and exact construction of the RNG of a set of exemplars. It also shows how to extend this to a multi-layer hierarchy which significantly improves over the state-of-the-art methods which can only construct an approximate RNG.


> Foster, Cole, Berk Sevilmis, and Benjamin Kimia. "Generalized Relative Neighborhood Graph (GRNG) for Similarity Search." In International Conference on Similarity Search and Applications, pp. 133-149. Cham: Springer International Publishing, 2022.
