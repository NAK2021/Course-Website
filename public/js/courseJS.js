function WishOnclick(id) {
    console.log("Click");
    var wish = document.querySelector(`.wish${id}`);
    var wishIcon = wish.children[0];
    console.log(wishIcon);
    var clicks2 = $(this).data('clicks2');
    console.log(clicks2);
    if (typeof clicks2 === 'undefined'){
        clicks2 = true;
    }
    if (clicks2) {
        // odd clicks
        console.log("Option First Click");
        wish.style.cssText = `
        background-color: #33E288; 
        box-shadow: none;`;

        wishIcon.style.cssText = `
        color: white;`;
    } else {
        // even clicks
        console.log("Option Second Click");
        wish.style.cssText = `
        background-color: white; 
        box-shadow: none;`;
        
        wishIcon.style.cssText = `
        color: black;`;
    }
    $(this).data("clicks2", !clicks2);   
}
function CartOnclick(id) {
    console.log("Click");
    var cart = document.querySelector(`.cart${id}`);
    var cartIcon = cart.children[0];
    console.log(cartIcon);
    var clicks = $(this).data('clicks');
    console.log(clicks);
    if (typeof clicks === 'undefined'){
        clicks = true;
    }
    if (clicks) {
        // odd clicks
        console.log("Option First Click");
        cart.style.cssText = `
        background-color: #33E288; 
        box-shadow: none;`;

        cartIcon.style.cssText = `
        color: white;`;
    } else {
        // even clicks
        console.log("Option Second Click");
        cart.style.cssText = `
        background-color: white; 
        box-shadow: none;`;
        
        cartIcon.style.cssText = `
        color: black;`;
    }
    $(this).data("clicks", !clicks);   
}
