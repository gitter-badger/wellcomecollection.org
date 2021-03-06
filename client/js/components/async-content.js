/* global fetch */
import contentSlider from './content-slider';
import shrinkStoriesNav from './shrink-stories-nav';

export default function asyncContent(el, dispatch) {
  const component = el.getAttribute('data-component');

  return fetch(`/async${el.getAttribute('data-endpoint')}`).then(resp => resp.json()).then(json => {
    el.outerHTML = json.html;

    if (component === 'series-nav') {
      const seriesSlider = document.querySelector('.js-numbered-slider');
      const seriesNav = document.querySelector('.js-series-nav');

      if (seriesSlider) {
        contentSlider(seriesSlider, {
          transitionSpeed: 0.7,
          modifiers: ['numbered-list']
        });
      }

      if (seriesNav) {
        // TODO: remove this check after sticky nav a/b test
        if (document.body.classList.contains('is-digital-story-nav-static')) return;

        shrinkStoriesNav(seriesNav, dispatch);
      }
    }

    if (component === 'series-transporter') {
      const dataModifiers = el.getAttribute('data-modifiers') || JSON.stringify({});
      const parsedModifiers = JSON.parse(dataModifiers);
      const modifiers = Object.keys(parsedModifiers)
        .filter(modifier => modifier)
        .concat(['transporter', 'in-content']);

      const numberedListTransporter = document.querySelector('.js-numbered-list-transporter');

      if (numberedListTransporter) {
        contentSlider(numberedListTransporter, {
          slideSelector: '.numbered-list__item',
          modifiers: modifiers,
          transitionSpeed: 0.7,
          containImages: false,
          scrollToClickedItem: false
        });
      }
    }
  });
};
