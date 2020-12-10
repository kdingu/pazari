import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}

export default Home
