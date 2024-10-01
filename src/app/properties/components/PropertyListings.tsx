"use client"
import { useState } from "react"
import { Listing} from "../types"
import Image from "next/image"
import { Preview } from "./Preview"
import { PropertyInfo } from "./PropertyInfo"
import { RoomRate } from "./RoomRate"



const PropertyListing = ({ listing } : { listing : Listing }) => {
  return (
    <div className="flex flex-row gap-2">
      <Preview previewImage={listing.property.previewImage} promoTitle={listing.offer.promotion.title} />
      <PropertyInfo property={listing.property} offer={listing.offer} />
      <RoomRate displayPrice={listing.offer.displayPrice} savings={listing.offer.savings} />
    </div>
  )
}

const PropertyCountSlug = ({count }:{count: number}) => (
  <div className="content-start align-bottom">
  <span className="font-bold">{count}</span>
  <span className="italic">hotels in </span>
  <span className="font-bold">Sydney</span>
</div>
)

const SortDropDown = ({sortList} : {sortList : (e : any) => void}) => (
  <div className="ml-auto content-end">
  <span className="font-bold">Sort by &nbsp;</span>
  <select className="rounded border border-gray-200" onChange={(e) => sortList(e)}>
    <option value='hl'>Price high-low</option>
    <option value='lh'>Price low-high</option>
  </select>
</div>
)

export const PropertyListings = ({ listings } : { listings: Listing[] }) => {
  const [listingData, setListingData] = useState<Listing[]>(listings)
  const [orderChanged, setOrderChanged] = useState<Boolean>(false)

  enum PriceSort {
    HIGHTOLOW='hl',
    LOWTOHIGH='lh'
  }

  const sortList = (e: { target: { value: any } }) => {
    const sortOption = e.target.value
    const sorter = {
      [PriceSort.HIGHTOLOW]: () : Listing[] => listingData.sort((a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount),
      [PriceSort.LOWTOHIGH]: () : Listing[] => listingData.sort((a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount)
    }
    setListingData( sorter[sortOption as PriceSort]() )
    setOrderChanged(!orderChanged)
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 left-1 pb-3">
        <Image src={"/images/qantas-logo.png"} alt={"logo image"} width={200} height={50}/>
        <div className="flex pt-4">
          <PropertyCountSlug count={listingData.length} />
          <SortDropDown sortList={sortList} />
        </div>
      </div>
      { listingData.map((listing) => <PropertyListing listing={listing} key={listing.id}/>) }
    </div>
  )
}