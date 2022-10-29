//You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
function maxProfit(prices) {
  let buyPrice = prices[0];
  let max = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    let profit = prices[i + 1] - prices[i];
    if (profit > 0) {
      if (prices[i] < buyPrice) {
        buyPrice = prices[i];
      }
      if (prices[i + 1] - buyPrice > max) {
        max = prices[i + 1] - buyPrice;
      }
    }
  }
  return max;
}
