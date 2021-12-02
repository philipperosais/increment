let numberIncrement = 0;
$('.increment2').text(numberIncrement);
let tabBags = [0];
let netToPay = 0;
$('.increment1').click(function () {
  if(numberIncrement>0){
    numberIncrement--;
  }
  $('.increment2').text(numberIncrement);
});
$('.increment3').click(function () {
  numberIncrement++;
  $('.increment2').text(numberIncrement);
});

$('.shopping-bag').click(function () {
  if (bubble > 0) {
    $('body').append('<div class="invoice"><div class="innerInvoice"><a href="#"><span class="fa fa-times"></span></a></div></div>');
    $('.innerInvoice').append(
      '<div class="mb-5">'+
        '<h2>MY SHOPPING BAG <span>(' + bubble + ')</span></h2>'+
      '</div>'+
      '<div class="container">'+
      '</div>');
    for (let index = 1; index < tabBags.length; index++) {
      let quantity = parseInt(tabBags[index]);
      let price = parseInt($('.label'+index+' .money').text());
      if (quantity > 0) {
        $('.innerInvoice>.container').append(
          '<div class="row ml-3">'+
            '<div class="col-12 mt-4">'+
              '<h4>'+$('.label' + index).find('a').text() + ' :</h4>'+
            '</div>'+
            '<div class="col-4 mt-2">Quantité : '+ quantity +'</div>'+
            '<div class="col-4 mt-2">Prix : '+ price +' €</div>'+
            '<div class="col-4 mt-2">Total : '+ quantity * price +' €</div>'+
          '</div>');
        netToPay = netToPay + quantity * price;
      }
    }
    $('.innerInvoice>.container').append(
      '<div class="row ml-3 pb-5">'+
        '<div class="col-12 mt-4"><h5>Net à payer : '+ netToPay +' €</h5></div>'+
      '</div>');
  }

  $('.fa-times').click(function () {
    $('.invoice').hide();
  });
});

