const locationsSelected = document.getElementsByName('locations');
const selectedOptions = locationsSelected.selectedOptions;

locationsSelected.forEach(function(location){
    location.addEventListener('change', finalAmont);
});


var shippingFee = document.getElementById('locations').value;



locationsSelected.forEach(function(location){
    if (location.selected){
        shippingFee += parseInt(location.value);
    }
});