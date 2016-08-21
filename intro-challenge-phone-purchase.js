var bankAccount = 1000.00;

const TAX_RATE = 0.07;
const ACCESSORY_PRICE = 49.99;
const EXTRAS_THRESHOLD = bankAccount % 10;

function calculateFinalPurchasePrice(amount) {
  return amount + (amount * TAX_RATE)
}

var phones = {
  iphone: 199.99,
  motorola: 99.99,
  galaxy: 159.99,
  nextel: 180.00,
  sanyo: 219.95,
  mini: 139.99,
  satellite: 259.00
};

var randomPhonePrice = function(phones) {
  var keys = Object.keys(phones);
  var phone = keys[Math.floor(Math.random() * keys.length)];
  return phones[phone]
};


function purchasePhones() {
  var total = 0;
  while (true) {
    var phoneWantedPrice = calculateFinalPurchasePrice(randomPhonePrice(phones));
    if(total + phoneWantedPrice > bankAccount) {
      var finalPrice = total.toFixed(2);
      console.log("$" + finalPrice);
      break
    }
    console.log("$" + phoneWantedPrice.toFixed(2));
    total += phoneWantedPrice;
    if (total + ACCESSORY_PRICE < bankAccount && ACCESSORY_PRICE < EXTRAS_THRESHOLD) {
      total += ACCESSORY_PRICE;
    }
  }
}

purchasePhones();
