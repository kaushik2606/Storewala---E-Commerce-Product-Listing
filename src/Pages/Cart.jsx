import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, removeFromCart } from "../CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="container py-5">
      <h1 className="h3 mb-4">Your cart</h1>
      {items.length === 0 ? (
        <p className="text-secondary">Your cart is currently empty.</p>
      ) : (
        <div className="row g-4">
          <section className="col-12 col-lg-8" aria-label="Cart items">
            {items.map((item) => (
              <article
                className="d-flex flex-wrap align-items-center gap-3 border-bottom py-3"
                key={item.id}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  width="88"
                  height="88"
                  className="rounded object-fit-cover"
                />
                <div className="flex-grow-1">
                  <h2 className="h6 mb-1">{item.title}</h2>
                  <span className="text-secondary">${item.price.toFixed(2)} each</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    aria-label={`Decrease quantity of ${item.title}`}
                    onClick={() =>
                      dispatch(changeQuantity({ id: item.id, change: -1 }))
                    }
                  >
                    -
                  </button>
                  <span aria-label="Quantity">{item.quantity}</span>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    aria-label={`Increase quantity of ${item.title}`}
                    onClick={() =>
                      dispatch(changeQuantity({ id: item.id, change: 1 }))
                    }
                  >
                    +
                  </button>
                </div>
                <strong className="ms-auto">
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
                <button
                  type="button"
                  className="btn btn-link text-danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </article>
            ))}
          </section>
          <aside className="col-12 col-lg-4">
            <div className="border rounded p-3">
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <button type="button" className="btn btn-primary w-100" disabled>
                Checkout
              </button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
};

export default Cart;