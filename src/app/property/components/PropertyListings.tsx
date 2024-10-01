"use client"
import { useState } from "react"
import { Listing } from "../types"
import Image from "next/image"

const PropertyListing = ({ listing } : { listing : Listing }) => (
  <div className="grid grid-flow-row grid-cols-3 p-1">
    <div className="grid grid-cols-1">
      <Image 
        src={listing?.property?.previewImage.url} 
        alt={listing.property.previewImage.caption}
        width={150}
        height={150}
      />
    </div>
    <div className="grid grid-cols-1">
    </div>
    <div className="grid grid-cols-1">
    </div>
  </div>
)


export const PropertyListings = ({ listings } : { listings: Listing[] }) => {
  const [listingData, setListinData] = useState<Listing[]>(listings)

  return (
    <div className="grid">
      <div className="grid grid-cols-1 left-1 pb-3">
        <Image src={"/images/qantas-logo.png"} alt={"logo image"} width={200} height={50}/>
      </div>
      { listingData.map((listing) => <PropertyListing listing={listing} key={listing.id}/>) }
    </div>
  )
}