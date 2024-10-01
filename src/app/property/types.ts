enum ImageType { PRIMARY="PRIMARY" }
enum PromotionType { MEMBER="MEMBER", CAMPAIGN="CAMPAIGN" }
enum Currency { AUD="AUD" }
enum CancellationOptionType {
  NOT_REFUNDABLE="NOT_REFUNDABLE",
  FREE_CANCELLATION="FREE_CANCELLATION"
}

type Address = string[]
type PreviewImage = {
  url: string
  caption: string
  imageType: ImageType
}
type Rating = {
  ratingValue: string
  ratingType: string
}

type Property = {
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

type Money = {
  amount: number
  currency: Currency
}

type CancellationOption = {
  cancellationType: CancellationOptionType
}

type Offer = {
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