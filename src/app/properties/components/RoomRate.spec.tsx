import { render, screen } from "@testing-library/react"
import { Currency, Money } from "../types"
import { RoomRate } from "./RoomRate"

describe("Room Rate", () => {
  const savings : Money = {
    amount: 30.000,
    currency: Currency.AUD
  }

  const displayPrice : Money = {
    amount: 69.000,
    currency: Currency.AUD
  }

  describe("when savings is included", () => {
    it("shows the savings", () => {
      render(<RoomRate savings={savings} displayPrice={displayPrice}/>)
      expect(screen.queryByText(/~/)).toBeInTheDocument()
      expect(screen.queryByText(/30/)).toBeInTheDocument()
    })
  })

  describe("when savings is included", () => {
    it("shows the savings", () => {
      render(<RoomRate savings={null} displayPrice={displayPrice}/>)
      expect(screen.queryByText("~")).not.toBeInTheDocument()
    })
  })
})