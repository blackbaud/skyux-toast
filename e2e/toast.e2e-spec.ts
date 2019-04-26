import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  element,
  by
} from 'protractor';

describe('Toast', () => {
  
  beforeEach(() => {
    SkyHostBrowser.get('visual/toast');
  });

  it('should match previous toast screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-btn-primary')).click();
    expect('.sky-toaster').toMatchBaselineScreenshot(done, {
      screenshotName: 'toast-lg'
    });
  });

  it('should match previous templated toast screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-btn-secondary')).click();
    expect('.sky-toaster').toMatchBaselineScreenshot(done, {
      screenshotName: 'toast-lg-component'
    });
  });

  it('should match previous toast screenshot on tiny screens', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-btn-primary')).click();
    expect('.sky-toaster').toMatchBaselineScreenshot(done, {
      screenshotName: 'toast-xs'
    });
  });

  it('should match previous templated toast screenshot on tiny screens', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-btn-secondary')).click();
    expect('.sky-toaster').toMatchBaselineScreenshot(done, {
      screenshotName: 'toast-xs-component'
    });
  });

});
