//declaring the prices of commidities

const premiumPrice = 2000;
const specialPrice = 1500;
const regularPrice = 1000;

const vat = 0.16;

const shippingDetails = {
    nairobi: "FREE",
    mombasa: 600,
    nakuru:500,
    kisumu:400,
    kiambu:300

}

shippingLocation = document.getElementById("location");

var selectedLocation = shippingLocation.value;

var shippingMoney;

shippingLocation.addEventListener('change', function(){
    selectedLocation = this.value;

    if (selectedLocation === "nairobi"){
        shippingMoney = shippingDetails[selectedLocation];
    }else if (selectedLocation === "mombasa"){
        shippingMoney = shippingDetails[selectedLocation];
    }else if (selectedLocation === "nakuru"){
        shippingMoney = shippingDetails[selectedLocation];
    }else if (selectedLocation === "kisumu"){
        shippingMoney = shippingDetails[selectedLocation];
    }else if (selectedLocation === "kiambu"){
        shippingMoney = shippingDetails[selectedLocation];
    }
    
})


function calculateFinalAmount (e){
    e.preventDefault();
    //solving for the number of bottles entered by the user

    var bottleInput = document.getElementById("bottle").value;
    

    //solving for tax of commodities bought 
    var selectedCommodity = document.querySelector('input[type="radio"]:checked').value;

    var totalTax;
    
    if (selectedCommodity === "premium"){
        totalTax = (premiumPrice*bottleInput)*vat;
    }else if (selectedCommodity === "special"){
        totalTax = (specialPrice*bottleInput)*vat;
    }else if (selectedCommodity === "regular"){
        totalTax = (regularPrice*bottleInput)*vat;
    }
    

    //solving for total amount

    var totalAmount;

    if (selectedCommodity === "premium"){
        totalAmount = (premiumPrice*bottleInput)+totalTax+shippingMoney;
    }else if (selectedCommodity === "special"){
        totalAmount = (specialPrice*bottleInput)+totalTax+shippingMoney;
    }else if(selectedCommodity){
        totalAmount = (regularPrice*bottleInput)+totalTax+shippingMoney;
    }
    document.getElementById("totalTax").textContent = totalTax;
    document.getElementById("shipping").textContent = shippingMoney;
    document.getElementById("total").textContent = totalAmount;

}

const submitButton = document.getElementById("buy");
submitButton.addEventListener("click", calculateFinalAmount);



