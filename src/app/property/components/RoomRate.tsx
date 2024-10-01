import { Currency, Money } from "../types";

const Savings = ({amount}: { amount: number}) => {

  return (
    <div className="text-red-400 text-sm font-semibold">
      {`Save $${amount}`}
      <span className="align-top">
        ~
      </span>
    </div>
  )
}

export const RoomRate = ({ displayPrice, savings }: { displayPrice: Money , savings: Money | null }) => {
  return (
    <div className="basis-1/5 border border-gray-600 text-right pt-30">
      <div className="text-xs text-gray-700">{`1 night total (${ Currency.AUD})`}</div>
      <div>
        <span className="align-top">$</span>
        <span className="text-3xl font-semibold">{displayPrice.amount}</span>
      </div>
      { savings?.amount ? (<Savings amount={savings.amount} />) : null }
    </div>
  )
}