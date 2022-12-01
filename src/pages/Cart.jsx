import ContactDetails from "../components/ContactDetails";

function Cart({ cartItems, addItem, removeItem }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

    return (
      <div className="cart-title">
        <h2>Cart</h2>
        <br />
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="product-image"/>
            <br />
            {item.title}
            <br />
            <b>${item.price.toFixed(2)}</b>
            <span className="qty">
              <button onClick={() => removeItem(item)}>
                {item.qty !== 1 ? '-' : 'x'}
              </button>
               {item.qty} 
              <button onClick={() => addItem(item)}>
                +
              </button>
            </span>
          </div>
        ))}
        <div className="summary">
        {cartItems.length !== 0 && (
          <>
          <p>Total price: <b>${totalPrice.toFixed(2)}</b></p>
          </>
        )}
        </div>

        <h2 className="shipping">Contact & Shipping Details</h2>
          <ContactDetails />
      </div>
    );
  }
  
  export default Cart;