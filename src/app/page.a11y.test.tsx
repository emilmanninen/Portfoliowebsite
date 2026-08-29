import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import Home from "./page";

// axe-core runs against the rendered DOM and flags real WCAG violations (missing labels, bad
// heading order, invalid ARIA, etc). jest-axe's `axe()` wrapper additionally disables the
// color-contrast rule category by default, since jsdom has no real layout/paint engine and can't
// reliably compute rendered colors — that check needs a real browser (e.g. a Lighthouse/Playwright
// run), not this unit test.
test("Home has no detectable accessibility violations", async () => {
  const { container } = render(<Home />);
  const results = await axe(container);
  expect(results.violations).toEqual([]);
});
