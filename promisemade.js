// The Misadventures of Bob the Highly Paid Consultant
// Chapter 1: Promises Made and Broken
// Your company has purchased a new ordering system and hired Bob the Highly Paid Consultant to develop a front end. However, after continuous delays and missed deliverables, his contract has now come to an end. Bob vanishes like a ghost into the fog, leaving you to see if you can salvage the pieces of his work.

// One thing is clear: Bob has left a chain of broken promises in his wake.

// Can you help to fix things?

// In the sample test case (submitOrder(12345)), "Your order was placed successfully" should be logged to the console. Hit "Attempt" to see if you pass the kata.

// Some notes:

// You can assume that the functions Bob is calling actually exist and take the given parameters in the given order.
// User "12345" is a valid user for testing
// Any provided function whose name ends in Async returns a Promise.
// Any provided function whose name does not end in Async is synchronous, i.e. calculateShipping().
// As you may have gathered, the purpose of this Kata is to familiarize yourself with using JavaScript Promises for asynchronous programming.

function submitOrder(user) {
    var shoppingCart, zipCode, shippingRate, orderSuccessful;
    
    // Get the current user's shopping cart
    OrderAPI.getShoppingCartAsync(user)
      .then(function(cart) {
      shoppingCart = cart;
      return  CustomerAPI.getProfileAsync(user)
    })
    
    // Also look up the ZIP code from their profile
   .then(function(profile) {
      zipCode = profile.zipCode;
      shippingRate = calculateShipping(shoppingCart, zipCode)
      return OrderAPI.placeOrderAsync(shoppingCart, shippingRate)
    })
    
    // Submit the order
    .then(function(success) {
      orderSuccessful = success;
    });
    
    console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
  }