      function updateProfit(){
        let soldPrice=parseFloat(document.getElementById("soldPrice").value);
        if(isNaN(soldPrice)){
          soldPrice=parseFloat(0);
        }
        let shippingCharge=parseFloat(document.getElementById("shippingCharge").value);
        if(isNaN(shippingCharge)){
          shippingCharge=0;
        }
        let shippingCost=parseFloat(document.getElementById("shippingCost").value);
        if(isNaN(shippingCost)){
          shippingCost=0;
        }
        let itemCost=parseFloat(document.getElementById("itemCost").value);
        if(isNaN(itemCost)){
          itemCost=0;
        }

        let ebayFee = parseFloat(((soldPrice+shippingCharge)*0.1).toFixed(2));
        document.getElementById("ebayFee").innerHTML=ebayFee;

        let paypalFee = parseFloat((((soldPrice+shippingCharge)*0.034)+0.20).toFixed(2)); //3.4% + 20p
        document.getElementById("paypalFee").innerHTML=paypalFee;

        let profit = ((soldPrice+shippingCharge)-(shippingCost+itemCost+ebayFee+paypalFee)).toFixed(2);
        console.log(soldPrice);
        console.log(shippingCharge);
        console.log(shippingCost);
        console.log(itemCost);
        console.log(paypalFee);
        console.log(ebayFee);
        console.log("proft:" + profit);


        document.getElementById("totalProfit").innerHTML=profit; //set totalProfit to soldPrice...
        // alert(soldPrice);
      }
