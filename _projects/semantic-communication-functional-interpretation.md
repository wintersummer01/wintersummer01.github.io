---
title: "Theory of Semantic Communications: Functional Interpretation of Neural Regions"
slug: semantic-communication-functional-interpretation
---

Neural semantic encoders jointly perform source coding, channel coding, and modulation, but their internal organization is difficult to interpret.

We analyze the encoder across network depth and identify layer-dependent specialization: semantic interpretation, feature-rate allocation, and channel-adaptive modulation become dominant in different regions.

This interpretation enables selective fine-tuning. By updating only the encoder regions most relevant to channel adaptation, the over-the-air prototype improves reconstruction under channel mismatch without retraining the full model.

<figure class="project-gallery-image">
  <img src="{{ '/assets/img/projects/explainable-semantic/demo-setup.png' | relative_url }}" alt="Python OFDM and USRP prototype validating selective neural encoder adaptation over a real wireless channel">
  <figcaption>Over-the-air prototype validation.</figcaption>
</figure>

### Related Publication

<u><strong>Dongha Choi</strong></u>, Hanju Yoo, Kyungpil Lee, Dongwook Kim, and Chan-Byoung Chae, “Explainable Semantic Communications: Neural Encoder Interpretation and Prototype Validation,” under major revision for an *IEEE Communications Magazine* special issue.
