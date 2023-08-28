/* 
function moneyBox (coins){
let saveCoins = 0;
saveCoins += coins;
console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(5);
 */

function myMoneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const moneyBox = myMoneyBox();
moneyBox(5);
moneyBox(5);
moneyBox(15);

const moneyBoxAna = myMoneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);