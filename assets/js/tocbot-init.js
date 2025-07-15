document.addEventListener("DOMContentLoaded", function () {
  const tocEnabled = document.querySelector('script[data-enable-toc]');
  if (!tocEnabled) return;

  tocbot.init({
    tocSelector: '.js-toc',              // the container where TOC will be inserted
    contentSelector: '.js-post-content', // the content block to parse for headings
    headingSelector: 'h2, h3',           // which headings to include
    collapseDepth: 1,
    scrollSmooth: true,
    scrollSmoothOffset: 60
  });
});
