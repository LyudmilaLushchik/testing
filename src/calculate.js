// export function calculateTotal(purchases) {
//   return purchases.reduce((total, item) => {
    // return total + (item.count * item.price);
//   }, 0);
  // эта запись (5-10 строки) равносильна записи (2-3 строки):
//   let result = 0;
//   for (let i = 0; i < purchases.length; i++) {
    // result += purchases[i].count * purchases[i].price;
//   }
//   return result;
// }


export function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((total, item) => {
    return total + (item.count * item.price);
  }, 0);
  if (applyDiscount) {
    return sum * 0.891;    
  }
  return sum;
}