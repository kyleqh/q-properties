export enum ImageType { PRIMARY="PRIMARY" }
export enum PromotionType { MEMBER="MEMBER", CAMPAIGN="CAMPAIGN" }
export enum Currency { AUD="AUD" }
export enum RatingType {
  SELF="self",
  STAR="star"
}
export enum CancellationOptionType {
  NOT_REFUNDABLE="NOT_REFUNDABLE",
  FREE_CANCELLATION="FREE_CANCELLATION"
}

type Address = string[]
export type PreviewImage = {
  url: string
  caption: string
  imageType: ImageType
}
export type Rating = {
  ratingValue: number
  ratingType: RatingType
}

export type Property = {
  id: string
  title: string
  address: Address
  previewImage: PreviewImage
  rating: Rating
}

type Promotion = {
  title: string,
  type: PromotionType
}

export type Money = {
  amount: number
  currency: Currency
}

type CancellationOption = {
  cancellationType: CancellationOptionType
}

export type Offer = {
  promotion: Promotion
  name: string
  displayPrice: Money
  savings: Money
  cancellationOption: CancellationOption
}

export type Listing = {
  id: string,
  property: Property
  offer: Offer
}