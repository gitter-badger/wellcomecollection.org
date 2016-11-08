/* eslint-env browser */
import FontFaceObserver from 'fontfaceobserver';

const fontASubset = new FontFaceObserver('Wellcome Bold Web Subset', {weight: 'bold'});
const fontA = new FontFaceObserver('Wellcome Bold Web', {weight: 'bold'});
const fontB = new FontFaceObserver('Helvetica Neue Light Web');
const fontC = new FontFaceObserver('Helvetica Neue Medium Web');
const fontD = new FontFaceObserver('Lettera Regular Web');
const rootElement = document.documentElement;
if (sessionStorage.fontsLoaded) {
  rootElement.className += ' font-stage-1 font-stage-2';
} else {
  Promise.all([fontASubset.load()]).then(() => {
    rootElement.className += ' font-stage-1';
    Promise.all([fontA.load(), fontB.load(), fontC.load(), fontD.load()]).then(() => {
      rootElement.className += ' font-stage-2';
      sessionStorage.fontsLoaded = true;
    });
  });
}
