var productPrice = +document.getElementById("product_price").value;
    function buyNow(){
        var quantityValue = +document.getElementById("quantity_value").value;
        if(quantityValue <=0){
            alert("Enter the right quantity");
        }
        else{
            var finalPrice = quantityValue * productPrice;
        alert(finalPrice);
        }
    }