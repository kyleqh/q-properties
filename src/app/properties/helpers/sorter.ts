import { Listing } from "../types"

enum PriceSort {
  HIGHTOLOW='hl',
  LOWTOHIGH='lh'
}

export const sortListingByPrice = (sortOrder: string, listingData: Listing[]) => {
  const sorter = {
    [PriceSort.HIGHTOLOW]: () : Listing[] => listingData.sort((a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount),
    [PriceSort.LOWTOHIGH]: () : Listing[] => listingData.sort((a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount)
  }
  return sorter[sortOrder as PriceSort]()
}