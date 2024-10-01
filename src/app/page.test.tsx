import Home from "./page";
import { render, screen } from "@testing-library/react";

describe('Home', () => {
  it("renders", () => {
    render(<Home />)
    expect(screen.queryByText("Property Listing")).toBeInTheDocument()
  })
})