function Cart({ cartItems, addItem }) {

    return ( //map cartItems
      <>
        <h2>Cart</h2>
        <ul>
          <li>CartItems<button>-</button><output>1</output><button>+</button></li>
        </ul>
        
        <h2>Contact & Shipping Details</h2>
          <label>First Name</label><input type="text"/>
          <label>Last Name</label><input type="text"/>
          <label>Address</label><input type="text"/>
        <br />
        <br />
           <h6>Submit your order request and we will get back to you within 1-3 business days with order confirmation and payment modes. Thank you for your interest!</h6>
            <div id="submit">
              <input type="submit" />
            </div>

      </>
    );
  }
  
  export default Cart;