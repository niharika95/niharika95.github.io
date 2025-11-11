# Playwright Testing Setup

This project is configured with Playwright for end-to-end testing.

## Installation

Playwright has been installed as a dev dependency. To install the browsers, run:

```bash
npx playwright install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Debug tests
```bash
npm run test:debug
```

## Test Files

Test files are located in the `tests/` directory and should follow the naming convention `*.spec.js` or `*.test.js`.

### Example Test Structure

```javascript
const { test, expect } = require('@playwright/test');

test('description of what is being tested', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Expected Title/);
});
```

## Configuration

The Playwright configuration is defined in `playwright.config.js` and includes:

- **Test Directory**: `tests/`
- **Base URL**: `http://localhost:5173` (Vite dev server)
- **Browsers**: Chromium, Firefox, WebKit
- **Mobile Testing**: Pixel 5 and iPhone 12 viewports
- **Auto-start Dev Server**: Tests automatically start the dev server before running

## Writing Tests

### Common Assertions

```javascript
// Check if element is visible
await expect(page.locator('selector')).toBeVisible();

// Check text content
await expect(page.locator('selector')).toContainText('text');

// Check page title
await expect(page).toHaveTitle(/pattern/);

// Check URL
await expect(page).toHaveURL(/path/);
```

### Common Actions

```javascript
// Navigate to page
await page.goto('/');

// Click element
await page.locator('button').click();

// Fill input
await page.locator('input').fill('text');

// Wait for element
await page.locator('selector').waitFor();
```

## CI/CD Integration

The configuration is set up for CI environments. When `CI` environment variable is set:
- Tests run with 2 retries
- Tests run serially (1 worker)
- Existing server is not reused

## Viewing Test Results

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## Debugging

To debug a specific test:

```bash
npx playwright test tests/example.spec.js --debug
```

This opens the Playwright Inspector where you can step through the test.

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)
