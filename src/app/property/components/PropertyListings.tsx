"use client"
import { useState } from "react"
import { CancellationOptionType, Listing, Rating, RatingType, PreviewImage, Property, Offer } from "../types"
import Image from "next/image"
import { RiCircleFill, RiStarFill, RiStarHalfFill } from "@remixicon/react"
import { Preview } from "./Preview"

const cancellationMessage = (cancellationOption : CancellationOptionType) : string => {
  return cancellationOption === CancellationOptionType.FREE_CANCELLATION ? "Free cancellation" : ""
}

const useStars = (rating: Rating) => {
  const ratingValue = parseFloat(rating.ratingValue)

  const isStarRated = rating.ratingType === RatingType.STAR

  const total = 5
  const diff = total - ratingValue
  const grey = Math.floor(diff)
  const whole = Math.floor(ratingValue)

  const hasHalves = (diff - Math.floor(diff) > 0)

  const halfStar = <RiStarHalfFill className="text-yellow-400"/>
  const fullStar = <RiStarFill className="text-yellow-400"/>
  const greyStar = <RiStarFill className="text-gray-300"/>

  const halfCircle = <RiCircleFill className="text-yellow-400"/>
  const fullCircle = <RiCircleFill className="text-yellow-400"/>
  const greyCircle = <RiCircleFill className="text-gray-300"/>

  return {
    whole: () => Array.from({ length: whole }).map(() => isStarRated ? fullStar : fullCircle),
    half: () => { if(hasHalves) { return isStarRated ? halfStar : halfCircle } },
    grey: () => Array.from( { length: grey }).map(() => isStarRated ? greyStar : greyCircle)
  }
}



const PropertyInfo = ({ property, offer}: { property: Property, offer: Offer }) => {
  const { whole, half, grey } = useStars( property?.rating )

  return (
    <div className="basis-1/2 pt-8 border-b border-b-gray-300">
      <div className="text-xl font-semibold flex gap-5">
        { property.title }
        <div className="flex gap-1">
          { whole() }
          { half() }
          { grey() }
        </div>
      </div>
      <span className="text-gray-500 text-xs font-mono">{property.address.join(", ") }</span>
      <div className="text-red-500 text-xs pt-2">{ offer.name }</div>
      <div className="text-blue-500 text-xs relative top-8">{ cancellationMessage(offer.cancellationOption.cancellationType) }</div>
    </div>
  )
}

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