const oils = document.getElementsByName('oils');


oils.forEach(function(oil){
    oil.addEventListener('change', finalAmont);
});

function finalAmont(){
    const tax = 0.16;
    var total = '';
    var totalTax = '';
    var num = document.getElementById('numb').value;

    oils.forEach(function(oil){
        if (oil.checked){
            totalTax += parseInt(oil.value*tax)
            total += (parseInt(oil.value) + parseInt(totalTax)) *num;
        }
    });

    

    const submit = document.getElementById('submit');
    submit.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('totalTax').textContent = totalTax;
        document.getElementById('total').textContent = total;
    })
}