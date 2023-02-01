import React from "react";
import Image from "next/image";
import liveAuctionStyles from "./LiveAuctionsList.module.css";
import { AuctionData } from "./AuctionData";
interface LiveAuctionsListProps {
    auctions: AuctionData[];
}
function LiveAuctionsListComponent({ auctions }: LiveAuctionsListProps) {
    return (
        <div className={liveAuctionStyles.auctions_list}>
            {auctions.map((auction) => (
                <div className={liveAuctionStyles.auction} key={auction.id}>
                    <div className={liveAuctionStyles.image}>
                        <Image
                            src={auction.image}
                            alt={auction.title}
                            width={500}
                            height={500}
                        ></Image>
                        <div className={liveAuctionStyles.title}>
                            <h3>{auction.title}</h3>
                        </div>
                        <Image className={liveAuctionStyles.live_img} src='/live.png' alt="live" width={50} height={50}/>
                    </div>
                    <div className={liveAuctionStyles.content}>
                        <h4>{auction.product}</h4>
                        <p>{auction.description}</p>
                        {/* <ul> */}
                            {/* <li>{auction.location}</li> */}
                            <li>Starts at: {(auction.date+'T'+auction.time)}</li>
                        {/* </ul> */}
                        <div className={liveAuctionStyles.bid_actions}>
                            <button className={liveAuctionStyles.bid_button}>
                                Bid
                            </button>
                            <button className={liveAuctionStyles.watch_button}>
                                Full Info &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LiveAuctionsListComponent;
//rolex watch image from i.pinimg.com (https://i.pinimg.com/564x/39/9d/f6/399df63697b22c507bbf1e9c4f2b9972.jpg)
