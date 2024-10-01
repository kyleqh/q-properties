import { render, screen, waitFor } from "@testing-library/react"
import { CancellationOptionType, Currency, ImageType, Offer, PromotionType, Property, RatingType } from "../types"
import { PropertyInfo } from "./PropertyInfo"

describe("PropertyInfo", () => {
  describe("with data", () => {
    const property : Property = {
      id: "P107802",
      title: "Primus Hotel Sydney",
      address: [
        "339 Pitt St",
        "Sydney"
      ],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Primus Hotel Sydney",
        imageType: ImageType.PRIMARY
      },
      "rating": {
        ratingValue: 5,
        ratingType: RatingType.SELF
      }
    }

    const offer : Offer = {
        promotion: {
          title: "Exclusive Deal",
          type: PromotionType.MEMBER
        },
        name: "Deluxe Balcony Room",
        displayPrice: {
          amount: 329.000000000,
          currency: Currency.AUD
        },
        savings: {
          amount: 30.000000000,
          currency: Currency.AUD
        },
        cancellationOption: {
          cancellationType: CancellationOptionType.NOT_REFUNDABLE
        }
    }
    it("shows property information, rating and the offer data", () => {
      render(<PropertyInfo property={property} offer={offer}/>)
      
      waitFor(() => {
        const offerName = screen.getByText("Deluxe Balcony Room")
        const propertyTitle = screen.getByText("Image of Primus Hotel Sydney")
        const ratings = screen.getAllByRole('icon')

        expect(offerName).toBeInTheDocument()
        expect(propertyTitle).toBeInTheDocument()
        expect(ratings.length).toEqual(5)
      })
    })
  })
})