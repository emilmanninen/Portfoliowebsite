import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

test("Home renders the hero heading", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Shipping things that work." })
  ).toBeInTheDocument();
});
