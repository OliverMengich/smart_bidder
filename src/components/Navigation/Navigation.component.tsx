import React from 'react';
import Link from 'next/link';
import { Nanum_Gothic } from '@next/font/google';
import navStyles from './Navigation.module.css';
const gothic = Nanum_Gothic({
    subsets: ["latin"],
    weight: '700'
})
function NavigationComponent() {
    return (
        <nav className={navStyles.nav}>
            <h1 className={gothic.className}>Smart Bidder</h1>
            <ul >
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/auctions">Auctions</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/sell">Sell</Link>
                </li>
                <li>
                    <Link href="/auth">Login/Register</Link>
                </li>
            </ul>
            <div className={navStyles.search_cart}>
                <form>
                    <div className={navStyles.form_data}>
                        <input type="text" />
                        <input type="submit" value="&#128269;" />
                    </div>
                </form>
                <button>Cart</button>
            </div>
        </nav>
    );
}

export default NavigationComponent;