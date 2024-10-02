import { render, screen, waitFor } from "@testing-library/react"
import PropertyListingPage from "./page"

// Mock the global fetch function
(global.fetch as jest.Mock) = jest.fn(
  (): Promise<Response> =>
    Promise.resolve({
      json: (): Promise<any[]> =>
        Promise.resolve([
          {
            id: 'mesq6mggyn',
            property: {
              propertyId: 'P107802',
              title: 'Primus Hotel Sydney',
              address: ['339 Pitt St', 'Sydney'],
              previewImage: {
                url: 'https://unsplash.it/145/125/?random',
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
        ]),
    } as Response)
)

describe("Page Render", () => {
  
  xit('renders the property listings', async () => {
    render(<PropertyListingPage />)

    expect(fetch).toHaveBeenCalledTimes(1)
    waitFor(() =>{
      expect(screen.getByText(/Marriot/)).toBeInTheDocument()
    })
  })
})