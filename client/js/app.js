import {message} from './wellcome';
import {nodeList} from './util';
import palette from './components/palette';
import icons from './components/icons';
import headerBurger from './components/header/burger';

message();

nodeList(document.querySelectorAll('[data-component="palette"]')).forEach((el) => palette(el));
nodeList(document.querySelectorAll('[data-component="icons"]')).forEach((el) => icons(el));
headerBurger(document.querySelector('.js-header-lower'));
