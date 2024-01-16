import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementqty } from '../../slice/cart.slice';
import { decrementqty } from '../../reducx/action/cart.action';


function Cart(props) {
    const dispatch = useDispatch()
    const medisines = useSelector(state => state.medisines)

    const cart = useSelector(state => state.cart)
    console.log(medisines, cart);
    console.log(cart);

    const cartData = cart.cart.map((v) => {
        let med = medisines.medisines.find((m) => v.id == m.id)
        
        return { ...med, qty: v.qty }

    })

    // console.log(cartData);

    const handleincrementQty = (id) => {
        // console.log('uuuuuu');
        dispatch(incrementqty(id))
    }

    // const handledecrementQty = (id) => {
    //     dispatch(decrementqty(id))
    // }
    return (

        <div>
            <div className="shopping-cart">
                {
                    cartData.map((v) => {
                        return(
                            <>
                            <div className="title">
                                Shopping Bag
                            </div>
                            <div className="item">
                                <div className="buttons">
                                    <span className="delete-btn" />
                                    <span className="like-btn" />
                                </div>
                                <div className="image">
                                    <img src="item-1.png" alt />
                                </div>
                                <div className="description">
                                    <span>{v.name}</span>
                                    <span>Bball High</span>
                                    <span>{v.desc}</span>
                                </div>
                                <div className="quantity">
                                    <button className="plus-btn" type="button" name="button" onClick={() => handleincrementQty(v.id)}>
                                        +
                                    </button>
                                    <span>{v.price}</span>
                                    <button className="minus-btn" type="button" name="button" >
                                        -
                                    </button>
                                </div>
                                <div className="total-price">$549</div>
                            </div>
                            <div className="item">
                                <div className="buttons">
                                    <span className="delete-btn" />
                                    <span className="like-btn" />
                                </div>
                                <div className="image">
                                    <img src="item-2.png" alt />
                                </div>
                                <div className="description">
                                    <span>Maison Margiela</span>
                                    <span>Future Sneakers</span>
                                    <span>White</span>
                                </div>
                                <div className="quantity">
                                    <button className="plus-btn" type="button" name="button">
                                        +
                                    </button>
                                    <span>{v.price}</span>
                                    <button className="minus-btn" type="button" name="button">
                                        -
                                    </button>
                                </div>
                                <div className="total-price">$870</div>
                            </div>
                           
                        </>
                        )
                        
                    })
                }

            </div>

        </div>
    );
}

export default Cart;