---
layout: post
title: "Refinement-based graph construction for search in low-memory systems"
date: 2025-10-01
description: "In modern information retrieval tasks such as recommender systems, retrieval-augmented generation, and question-answering, there is a need for fast and efficient retrieval over large collections of vectors. These high-dimensional vector embeddings, typically produced by deep neural networks, pose computational and memory efficiency challenges for existing indexing methods, necessitating the development of new approaches. This submission to the SISAP 2025 Indexing Challenge tackles both of its challenge tracks: (1) approximate kNN search on a resource-limited system and (2) kNN graph construction. This solution to the first task pairs a graph-based index with scalar quantization to achieve 4x data compression while retaining query neighbors with 99% accuracy. For the second task, this work introduces an iterative, refinement-based construction of the kNN graph without the upfront computational or memory cost of a separate index. This submission achieved second and third place in Tasks 1 and 2, respectively, demonstrating the efficacy of graph-based indexes in memory-constrained systems."
showtoc: false
tags:
- publication
- research
---

<div style="margin: 20px 0; text-align: center;">
  <a href="https://link.springer.com/chapter/10.1007/978-3-032-06069-3_38" class="btn btn-outline-primary"
    target="_blank" style="margin-right: 10px; margin-bottom: 10px;">
    <i class="fas fa-file-alt"></i> Conference Paper (SISAP 2025)
  </a>
  <a href="https://github.com/cole-foster/sisap-2025.git" class="btn btn-outline-dark" target="_blank"
    style="margin-bottom: 10px;">
    <i class="fab fa-github"></i> Code
  </a>
</div>


<b>Abstract: </b>
In modern information retrieval tasks such as recommender systems, retrieval-augmented generation, and question-answering, there is a need for fast and efficient retrieval over large collections of vectors. These high-dimensional vector embeddings, typically produced by deep neural networks, pose computational and memory efficiency challenges for existing indexing methods, necessitating the development of new approaches. This submission to the SISAP 2025 Indexing Challenge tackles both of its challenge tracks: (1) approximate kNN search on a resource-limited system and (2) kNN graph construction. This solution to the first task pairs a graph-based index with scalar quantization to achieve 4x data compression while retaining query neighbors with 99% accuracy. For the second task, this work introduces an iterative, refinement-based construction of the kNN graph without the upfront computational or memory cost of a separate index. This submission achieved second and third place in Tasks 1 and 2, respectively, demonstrating the efficacy of graph-based indexes in memory-constrained systems.


> Foster, Cole, Scarlett Magdaleno-Gatica, and Benjamin Kimia. "Refinement-based graph construction for search in low-memory systems." In International Conference on Similarity Search and Applications, pp. 450-458. Cham: Springer Nature Switzerland, 2025.