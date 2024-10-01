import { Rating, RatingType } from "../types"
import { RiCircleFill, RiStarFill, RiStarHalfFill } from "@remixicon/react"

export const useStars = (rating: Rating) => {
  const ratingValue = rating.ratingValue

  const isStarRated = rating.ratingType === RatingType.STAR

  const total = 5
  const diff = total - ratingValue
  const grey = Math.floor(diff)
  const whole = Math.floor(ratingValue)

  const hasHalves = (diff - Math.floor(diff) > 0)

  const HalfStar = () => <RiStarHalfFill className="text-yellow-400"/>
  const FullStar = () => <RiStarFill className="text-yellow-400"/>
  const GreyStar = () => <RiStarFill className="text-gray-300"/>

  const HalfCircle = () => <RiCircleFill className="text-yellow-400"/>
  const FullCircle = () => <RiCircleFill className="text-yellow-400"/>
  const GreyCircle = () => <RiCircleFill className="text-gray-300"/>

  const key = () => Math.random()

  return {
    whole: () => Array.from({ length: whole }).map(() => isStarRated ? <FullStar key={key()}/> : <FullCircle key={key()}/>),
    half: () => { if(hasHalves) { return isStarRated ? <HalfStar key={key()}/> : <HalfCircle key={key()}/> } },
    grey: () => Array.from( { length: grey }).map(() => isStarRated ? <GreyStar key={key()}/> : <GreyCircle key={key()}/>)
  }
}