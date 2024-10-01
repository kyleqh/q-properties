import { useStars } from "../hooks/userStars"
import { CancellationOptionType, Offer, Property } from "../types"

const cancellationMessage = (cancellationOption : CancellationOptionType) : string => {
  return cancellationOption === CancellationOptionType.FREE_CANCELLATION ? "Free cancellation" : ""
}

export const PropertyInfo = ({ property, offer}: { property: Property, offer: Offer }) => {
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