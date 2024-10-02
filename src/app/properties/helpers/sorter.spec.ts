import { Listing } from "../types"
import { sortListingByPrice } from "./sorter"

const data = [
  {
    id: 'mesq6mggyn',
    property: {
      id: 'P107802',
      title: 'Primus Hotel Sydney',
      address: ['339 Pitt St', 'Sydney'],
      previewImage: {
        url: "someurl",
        caption: 'Image of Primus Hotel Sydney',
        imageType: 'PRIMARY',
      },
      rating: {
        ratingValue: 5,
        ratingType: 'self',
      },
    },
    offer: {
      promotion: {
        title: 'Exclusive Deal',
        type: 'MEMBER',
      },
      name: 'Deluxe King',
      displayPrice: {
        amount: 375,   

        currency: 'AUD',
      },
      savings: {
        amount: 28,
        currency: 'AUD',
      },
      cancellationOption: {
        cancellationType: 'FREE_CANCELLATION',
      },
    },
  },
  {
    id: 'mesq6mtyrn',
    property: {
      id: 'P10489',
      title: 'Ibis Sydney',
      address: ['339 Kent St', 'Sydney'],
      previewImage: {
        url: 'somerandomurl',
        caption: 'Image of Primus Hotel Sydney',
        imageType: 'PRIMARY',
      },
      rating: {
        ratingValue: 5,
        ratingType: 'self',
      },
    },
    offer: {
      promotion: {
        title: 'Exclusive Deal',
        type: 'MEMBER',
      },
      name: 'Deluxe King',
      displayPrice: {
        amount: 240,   

        currency: 'AUD',
      },
      savings: {
        amount: 3,
        currency: 'AUD',
      },
      cancellationOption: {
        cancellationType: 'FREE_CANCELLATION',
      },
    },
  }
] as Listing []
describe("sortListingByPrice", () => {
  describe("when sorting high to low", () => {
    it('shows the Primus property first', () => {
      const expectedKeyOrder = ['mesq6mggyn', 'mesq6mtyrn']
      expect(sortListingByPrice('hl', data).map(l => l.id)).toEqual(expectedKeyOrder)
    })
  })

  describe("when sorting low to high", () => {
    it('shows the Ibis property first', () => {
      const expectedKeyOrder = ['mesq6mtyrn', 'mesq6mggyn']
      expect(sortListingByPrice('lh', data).map(l => l.id)).toEqual(expectedKeyOrder)
    })
  })
})