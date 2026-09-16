class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyIndex = 0;
        let sellIndex = 1;
        let profit = 0;

        while (sellIndex < prices.length) {
            if (prices[buyIndex] > prices[sellIndex]) {
                buyIndex = sellIndex;
                sellIndex++;
            } else {
                if (prices[sellIndex] - prices[buyIndex] > profit) {
                    profit = prices[sellIndex] - prices[buyIndex];
                }
                sellIndex++;
            }
        }

        return profit;
    }
}
