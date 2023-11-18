import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DynamicTemplate from "../index";
import { Entites, TemplateObject } from "../../../model";

it("Basic Dynamic Template tests", () => {
  const handleClick = jest.fn();
  render(<DynamicTemplate {...TemplateObject[Entites.Home]} />);
  const title = screen.getByRole('heading', { name: /Home/i });
  const button = screen.queryByTestId('custom-button')
  expect(button).not.toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
