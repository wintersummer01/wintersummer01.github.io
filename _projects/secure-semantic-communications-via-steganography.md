---
title: Secure Semantic Communications via Steganography
slug: secure-semantic-communications-via-steganography
---

Host and private images are encoded together into shared wireless symbols. A receiver without the key reconstructs only the host image, while an authorized receiver applies a pre-arranged channel mask to recover the private image as well. Both paths use the same semantic decoder.

Training combines reconstruction fidelity with a marginal push-away loss that keeps private information out of the unmasked symbols:

<div class="project-equation">
  <span>ℓ<sub>recon</sub> = ‖x<sub>h</sub> − x̂<sub>h</sub>‖² + ‖x<sub>p</sub> − x̂<sub>p</sub>‖²</span>
  <span>ℓ<sub>leak</sub> = max(0, ‖x<sub>h</sub> − x<sub>p</sub>‖² − ‖x<sub>p</sub> − x̃‖²)</span>
  <span>ℓ<sub>total</sub> = ℓ<sub>recon</sub> + λℓ<sub>leak</sub></span>
</div>

A securely shared mask acts as the key, allowing only the authorized receiver to recover the private image.

We validated the method on a Python-based, LTE-compliant 1.4 MHz MIMO-OFDM testbed with NI USRP radios. Over-the-air results outperformed the secure baseline while remaining close to standard deepJSCC.

<figure class="project-gallery-image project-gallery-image--compact">
  <img src="{{ '/assets/img/projects/secure-semantic/kodak-psnr.png' | relative_url }}" alt="PSNR comparison on Kodak images for the proposed masking method and conventional baselines" loading="lazy" decoding="async">
  <figcaption>Reconstruction quality on the Kodak image set.</figcaption>
</figure>

### Related Publication

<u><strong>Dongha Choi</strong></u>, Hanju Yoo, and Chan-Byoung Chae, “Steganography Semantic Communications: Architectures and Prototype Validation,” *to be submitted*.

### Related Demonstrations

This system was demonstrated live at **IEEE GLOBECOM 2025**, held December 8–12, 2025, in Taipei, Taiwan.

<div class="resource-links">
  <a href="{{ '/demonstrations/ieee-globecom-2025/' | relative_url }}">Demo Details</a>
</div>
