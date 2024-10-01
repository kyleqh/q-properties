"use client"
import { useState } from "react"
import { Listing} from "../types"
import Image from "next/image"
import { Preview } from "./Preview"
import { PropertyInfo } from "./PropertyInfo"



const PropertyListing = ({ listing } : { listing : Listing }) => {
  return (
    <div className="flex flex-row gap-4">
      <Preview previewImage={listing.property.previewImage} promoTitle={listing.offer.promotion.title} />
      <PropertyInfo property={listing.property} offer={listing.offer} />
      <div className="basis-1/5 border border-gray-600">
      </div>
    </div>
  )
}


export const PropertyListings = ({ listings } : { listings: Listing[] }) => {
  const [listingData, setListingData] = useState<Listing[]>(listings)

  return (
    <div className="grid">
      <div className="grid grid-cols-1 left-1 pb-3">
        <Image src={"/images/qantas-logo.png"} alt={"logo image"} width={200} height={50}/>
      </div>
      { listingData.map((listing) => <PropertyListing listing={listing} key={listing.id}/>) }
    </div>
  )
}