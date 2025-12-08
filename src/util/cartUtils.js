export const calculateCartTotals = (cartItems, quantities) => {
  const subtotal = cartItems.reduce((acc, food) => acc + food.price * quantities[food.id], 0);
  const Shipping = subtotal === 0 ? 0.0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + Shipping + tax;

  return {subtotal, Shipping, tax, total}
}