/*
 * Show a promo 'Free shipping' message on the cart page. 
 * In the example below, users will see a message on the cart page 
 * informing them that they will qualify for free shipping if their 
 * order is more than $99
 */
Ecwid.OnAPILoaded.add(function() {
 
  console.log("Ecwid storefront JS API has loaded");
  var promoMessage = "¡Envío gratis a la capital en compras de Q150 o más!";
  var minSubtotal = 150;
  var widgets;
  
  // Calculating subtotal and displaying the message
  var checkSubtotal = function(order) {
    if (order) {
      var subtotal = order.total - order.shipping;
      if (subtotal > minSubtotal) {
        alert(promoMessage);
      }  
    }
  }
  
  // Detecting whether we're on the cart page and get the cart info
  Ecwid.OnPageLoaded.add(function(page) {
    widgets = Ecwid.getInitializedWidgets();
  
    // if storefront widget is present on this page
    for (i = 0; i < widgets.length ; i++) {
      if (widgets[i] == "ProductBrowser") {
        if ('CART' == page.type) {
          Ecwid.Cart.calculateTotal(function(order) {
            checkSubtotal(order);
          });
        }
      }
    }
  });
  
  // Get color value for the message and store it in color variable
  var color = Ecwid.getAppPublicConfig(appId);
  
  // your code here
  // ...

Ecwid.refreshConfig();
});
