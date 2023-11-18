import { render, screen } from "@testing-library/react";
import Header from "../index";
import "@testing-library/jest-dom";

it("Header tests", () => {
  render(<Header title={"Title"} color="white" backgroundColor="purple" />);
  const titleText = screen.getByRole("heading", { name: /Title/i });
  expect(titleText).toBeInTheDocument();
});
