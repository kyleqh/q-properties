"use client"
import { useState } from "react"
import { CancellationOptionType, Listing } from "../types"
import Image from "next/image"

const cancellationMessage = (cancellationOption : CancellationOptionType) : string => {
  return cancellationOption === CancellationOptionType.FREE_CANCELLATION ? "Free cancellation" : ""
}

const PropertyListing = ({ listing } : { listing : Listing }) => (
  <div className="flex flex-row gap-4">
    <div className="border border-gray-600">
      <span className="left bg-white text-red-500 text-xs font-semibold inline-block align-middle relative top-12 w-2/3 h-8">
        { listing?.offer?.promotion?.title }
      </span>
      <Image 
        src={listing?.property?.previewImage.url} 
        alt={listing.property.previewImage.caption}
        width={150}
        height={150}
      />
    </div>
    <div className="basis-1/2 pt-8 border border-gray-600">
      <div className="text-xl font-semibold">
        { listing.property.title }
      </div>
      <span className="text-gray-500 text-xs font-mono">{listing.property.address.join(", ") }</span>
      <div className="text-red-500 text-xs pt-2">{ listing.offer.name }</div>
      <div className="text-blue-500 text-xs relative top-8">{ cancellationMessage(listing.offer.cancellationOption.cancellationType) }</div>
    </div>
    <div className="basis-1/5 border border-gray-600">

    </div>
  </div>
)


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