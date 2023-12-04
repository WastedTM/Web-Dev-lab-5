import React, {useState} from "react";
import {FaShoppingBag} from "react-icons/fa"
import Order from "./Order";
import {Link} from "react-router-dom";

const showOrders = (props) => {
    let sum = 0
    props.orders.forEach(el => {
        sum += el.price
    })

    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <p className='sum'> Загальна ціна = {sum} грн</p>
        </div>
    )
}

const showEmptyBag = () => {
    return(
        <div className={'empty'}>
            <h2>Your bag is empty!</h2>
        </div>
    )
}

const Header = (props) => {
    let [bagOpen, setBagOpen] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'>Kimberli</span>
                <ul className='navigation'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/About'}>About Us</Link></li>
                    <li><Link to={'/Contacts'}>Contacts</Link></li>
                    <li><Link to={'/Profile'}>Profile</Link></li>
                </ul>
                <FaShoppingBag onClick={() => setBagOpen(bagOpen = !bagOpen)}
                               className={`shop-bag-button ${bagOpen && 'active'}`}/>

                {bagOpen && (
                    <div className={'shop-bag'}>
                        {props.orders.length > 0 ? showOrders(props) : showEmptyBag()}
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header