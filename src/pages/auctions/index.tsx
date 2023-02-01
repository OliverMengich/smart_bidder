import React from 'react';
import TitlePathComponent from '@/components/TitlePath/TitlePath.component';
import LiveAuctionsListComponent from '@/components/LiveAuctions/LiveAuctionsList.component';
const auctions: AuctionData[] = [
    {
        id: 1,
        title: "Mercedes Benz Auction",
        product: "Mercedes Benz",
        description: "Worlds fastest Benz at a throw away price !!",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QmVuenxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 100,
        date: "2021-10-10",
        time: "10:00",
        location: "Location 1",
        category: "Category 1",
        status: false,
        seller: "Seller 1",
        buyer: "Buyer 1",
    },
    {
        id: 2,
        title: "Lamboghini Auction",
        product: "Lamboghini",
        description: "Brand New white lamborghini",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        price: 200,
        date: "2021-10-10",
        time: "10:00",
        location: "Location 2",
        category: "Category 2",
        status: false,
        seller: "Seller 2",
        buyer: "Buyer 2",
    },
    {
        id: 3,
        title: "Goat Auction",
        product: "Goat",
        description: "Auction 3 description",
        image: "https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8R29hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 200,
        date: "2021-10-10",
        time: "10:00",
        location: "Location 2",
        category: "Category 2",
        status: false,
        seller: "Seller 2",
        buyer: "Buyer 2",
    },
    {
        id: 4,
        title: "Rolex Watch Auction",
        product: "Rolex Watch",
        description: "I'm selling a rolex watch for free",
        image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 200,
        date: "2021-10-10",
        time: "10:00",
        location: "Location 2",
        category: "Category 2",
        status: false,
        seller: "Seller 2",
        buyer: "Buyer 2",
    },
];
function Auctions() {
    return (
        <div>
            {/* <h1>This is the Auctions Page</h1> */}
            <TitlePathComponent path='Home/auctions' title='Auctions' />
            <LiveAuctionsListComponent auctions={auctions} />
        </div>
    );
}

export default Auctions;