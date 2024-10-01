import { PropertyListings } from "./components/PropertyListings"
import { Listing } from "./types"

const propertyData = async () : Promise<Listing[]> => {
  const listingResponse = await fetch("http://localhost:3020/results", { cache: 'force-cache' })
  const listings =  await listingResponse.json()
  
  return listings.map((listing : Listing) => {
    return listing
  })
}

const PropertyListingPage = async () => {
  const data = await propertyData()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] text-slate-800 min-h-screen p-8 pb-20 gap-16n bg-slate-50 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <PropertyListings listings={data} />
    </div>
  )
}

export default PropertyListingPage