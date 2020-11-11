/**
 * Problem: You are given a set of coins, and an amount of change we need to return
 * You are asked to calculate the minumum number of coins to return
 * 
 * Solution: the idea is to use the sum in cents of what you  are passing, and then, devide and substract, starting with the largest coint - 1 dollar (100 cents)
 */

const coinsCents = [1, 2, 5, 10, 20, 50, 100]

const getChange = (amountInCents) => {
    return coinsCents.reverse().map(coin => {
        
        let amountCoin = Math.floor(amountInCents/coin)
        
        amountInCents -= amountCoin * coin
        return amountCoin
    }).reverse()
}

const result = getChange(2195)
console.log(result)