import { expect, SkyHostBrowser, SkyVisualThemeSelector } from '@skyux-sdk/e2e';

import { element, by } from 'protractor';

describe('Toast', () => {
  let currentTheme: string;
  let currentThemeMode: string;

  async function selectTheme(theme: string, mode: string): Promise<void> {
    currentTheme = theme;
    currentThemeMode = mode;

    return SkyVisualThemeSelector.selectTheme(theme, mode);
  }

  function getScreenshotName(name: string): string {
    if (currentTheme) {
      name += '-' + currentTheme;
    }

    if (currentThemeMode) {
      name += '-' + currentThemeMode;
    }

    return name;
  }

  function runTests(): void {
    it('should match previous toast screenshot', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('lg');

      await element(by.css('.sky-btn-primary')).click();

      expect('.sky-toaster').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('toast-lg'),
      });
    });

    it('should match previous templated toast screenshot', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('lg');

      await element(by.css('.sky-btn-secondary')).click();

      expect('.sky-toaster').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('toast-lg-component'),
      });
    });

    it('should match previous toast screenshot on tiny screens', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('xs');

      await element(by.css('.sky-btn-primary')).click();

      expect('.sky-toaster').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('toast-xs'),
      });
    });

    it('should match previous templated toast screenshot on tiny screens', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('xs');

      await element(by.css('.sky-btn-secondary')).click();

      expect('.sky-toaster').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('toast-xs-component'),
      });
    });
  }

  beforeEach(async () => {
    currentTheme = undefined;
    currentThemeMode = undefined;

    await SkyHostBrowser.get('visual/toast');
  });

  runTests();

  describe('when modern theme', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    runTests();
  });

  describe('when modern theme in dark mode', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'dark');
    });

    runTests();
  });
});
