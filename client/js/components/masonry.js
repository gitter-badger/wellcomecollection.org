import Macy from 'macy';
import breakpoints from 'wellcomecollection-config/breakpoints';

const updatedBreakpoints = Object.keys(breakpoints).map(key => {
  return {
    [key]: parseInt(breakpoints[key], 10)
  };
});

const unitlessBreakpoints = Object.assign({}, ...updatedBreakpoints);

export default (selector) => {
  const macy = new Macy({
    container: selector,
    trueOrder: true,
    waitForImages: true,
    columns: 6,
    breakAt: {
      [unitlessBreakpoints.xlarge]: 4,
      [unitlessBreakpoints.large]: 3,
      [unitlessBreakpoints.medium]: 2
    }
  });

  macy.runOnImageLoad(() => {
    macy.recalculate(true);
  }, true);
};
