import { Currency, Money } from "../types";

const Savings = ({amount}: { amount: number | null | undefined}) => {

  return (
    <div className="text-red-400 text-sm font-semibold pb-2">
      { amount ?
      (
        <div>
          {`Save $${amount}`}
          <span className="align-top">
            ~
          </span>
        </div>
      )
        : <div className="h-6" />
      }
    </div>
  )
}

export const RoomRate = ({ displayPrice, savings }: { displayPrice: Money , savings: Money | null }) => {
  return (
    <div className="basis-1/6 text-right content-end">
      <div className="text-xs text-gray-700">{`1 night total (${ Currency.AUD})`}</div>
      <div>
        <span className="align-top">$</span>
        <span className="text-3xl font-semibold">{displayPrice.amount}</span>
      </div>
      <Savings amount={savings?.amount} />
    </div>
  )
}