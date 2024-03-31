export default function PaymentCard({
  payment: {
    amount,
    description,
    cardNumber,
    cardOwner,
    date,
    cardType,
    isPaid,
  },
}) {
  return (
    <div>
      <p>Amount: {amount}</p>

      <p>Status: {isPaid ? "Paid" : "Pending"}</p>
      <p>Description: {description}</p>
      <p>Card Number: {cardNumber}</p>
      <p>Card Type: {cardType}</p>
      <p>Payment Date: {date}</p>
      <p>Card Holder Name: {cardOwner}</p>
      <hr />
    </div>
  );
}
