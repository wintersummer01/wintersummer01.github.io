document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href]').forEach((link) => {
    let destination;

    try {
      destination = new URL(link.href, window.location.href);
    } catch {
      return;
    }

    const isExternalWebLink =
      (destination.protocol === 'http:' || destination.protocol === 'https:') &&
      destination.origin !== window.location.origin;

    if (!isExternalWebLink) return;

    link.target = '_blank';

    const rel = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
    rel.add('noopener');
    rel.add('noreferrer');
    link.setAttribute('rel', [...rel].join(' '));
  });
});
