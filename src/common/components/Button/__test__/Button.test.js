import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../index";
import "@testing-library/jest-dom";

it("Button tests", () => {
  const handleClick = jest.fn();
  render(<Button title={"Submit"} color="white" backgroundColor="green" radius={3} handleClick={handleClick} />);
  const title = screen.getByRole('button', { name: /Submit/i });
  fireEvent.click(title);
  expect(title).toBeInTheDocument();
  expect(handleClick).toHaveBeenCalled();
});
