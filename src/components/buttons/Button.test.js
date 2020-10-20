import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { Button } from "./Button";


let container = null;
beforeEach(() => {
  // setting up DOM element as render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// tests whether child content is rendered
it("renders button label", () => {
  act(() => {
    render(<Button>Test</Button>, container);
  });
  expect(container.textContent).toBe("Test");
});


it("renders button with small font size by default", () => {
  act(() => {
    render(<Button>Test</Button>, container);
  });
  expect(container.children[0]).toHaveStyle("font-size: 1rem");
});

it("renders button with large font size", () => {
  act(() => {
    render(<Button size="large">Test</Button>, container);
  });
  expect(container.children[0]).toHaveStyle("font-size: 1.5rem");
});