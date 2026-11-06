---
title: "Theory of Semantic Communications: Symbol Distribution Analysis"
slug: semantic-communication-symbol-distribution-analysis
---

Semantic communication encoders often produce fixed-length, heavy-tailed symbols, but the reason for this shape has remained unclear.

We explain it as an equilibrium between two forces: **source pressure**, which minimizes description cost through power allocation, and **channel pressure**, which maximizes mutual information. Their balance leads naturally to a Student’s *t*-distribution.

Experiments show how explicit rate control and dataset entropy shift the learned symbols between Cauchy-like and Gaussian-like regimes. Distribution regularization also improves training convergence, supporting the proposed interpretation.

### Related Publication

Hanju Yoo, <u><strong>Dongha Choi</strong></u>, Songkuk Kim, Chan-Byoung Chae, and Robert W. Heath, Jr., “Symbol Distributions in Semantic Communications: A Source-Channel Equilibrium Perspective,” *IEEE Transactions on Communications*, vol. 74, pp. 13842–13855, 2026.

<div class="resource-links">
  <a href="https://doi.org/10.1109/TCOMM.2026.3721631" target="_blank" rel="noopener noreferrer">Paper</a>
  <a href="https://arxiv.org/abs/2512.14022" target="_blank" rel="noopener noreferrer">arXiv</a>
  <a href="https://github.com/kmsiapps/Symbol-Distributions-in-Semantic-Communications" target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

### Related Award

This work contributed to **“Bridging Neural Networks and Wireless Systems: Theory and Prototypes for Semantic Communications,”** which received the Honor Prize at the 31st Samsung Humantech Paper Award.

<div class="resource-links">
  <a href="{{ '/awards/samsung-humantech-2025/' | relative_url }}">Award Details</a>
</div>
