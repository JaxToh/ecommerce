function Cart({ cartItems, addItem, removeItem }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    return (
      <>
        <h2>Cart</h2>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} width="100px" height="100px" alt={item.title}/>
            {item.title}
            <br />
            ${item.price.toFixed(2)}
            <span>
              <button onClick={() => removeItem(item)} className="remove">
                {item.qty !== 1 ? '-' : 'x'}
              </button>
               {item.qty} 
              <button onClick={() => addItem(item)} className="add">
                +
              </button>
            </span>
          </div>
        ))}
        <div className="summary">
        {cartItems.length !== 0 && (
          <>
          Total price: {itemsPrice.toFixed(2)}
          </>
        )}
        </div>

        <h2 className="shipping">Contact & Shipping Details</h2>
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