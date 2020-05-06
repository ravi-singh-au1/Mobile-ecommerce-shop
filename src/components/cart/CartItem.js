import React from 'react'
export default function CartItem({ item, value }) {
    const { id, title, img, price, count, total } = item;
    // console.log('item', item, value);
    const { icrement, decrement, removeItem } = value;
    // console.log("cartsub", cartSubTotal)
    return (
        <div>
            <div className='row my-2 text-capitalize text-center'>
                <div className="col-10 mx-auto col-lg-2">
                    <img
                        src={img}
                        style={{ width: '5rem', height: "5rem" }}
                        className="img-fluid"
                        alt="product">
                    </img>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product :</span>
                    {title}
                </div>
                <div
                    className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">price :</span>
                    {price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center"></div>
                    <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
                    <span className="btn btn-black mx-1">{count}</span>

                    <span className="btn btn-black mx-1" onClick={() => icrement(id)}>+</span>
                    {/* <button onClick={() => decrement(id)} className="btn btn-success btn btn btn-black mx-1">
                    rating -{""}
                </button> */}

                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={() => removeItem(id)}>
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong>item total : ₹</strong>
                    {total}
                </div>

            </div>


        </div>
    )
}