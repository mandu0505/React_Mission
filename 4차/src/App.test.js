import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  const number = screen.getByTestId("number");
  expect(number).toHaveTextContent(0);
});
test("minus button has correct text", () => {
  render(<App />);
  const count = screen.getByRole("button", {
    name: "-",
  });
  expect(count).toHaveTextContent("-");
});
test("plus button has correct text", () => {
  render(<App />);
  const count = screen.getByRole("button", {
    name: "+",
  });
  expect(count).toHaveTextContent("+");
});
test("when the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const number = screen.getByTestId("number");
  const count = screen.getByRole("button", {
    name: "+",
  });
  fireEvent.click(count);
  expect(number).toHaveTextContent(1);
});
test("when the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const number = screen.getByTestId("number");
  const count = screen.getByRole("button", {
    name: "-",
  });
  fireEvent.click(count);
  expect(number).toHaveTextContent(-1);
});
test("on/off button has blue color", () => {
  render(<App />);
  const button = screen.getByTestId("button");
  expect(button).toHaveStyle({
    backgroundColor: "blue",
  });
});
test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const count = screen.getByRole("button", {
    name: "-",
  });
  const button = screen.getByTestId("button");
  fireEvent.click(button);
  expect(count).toBeDisabled();
});
