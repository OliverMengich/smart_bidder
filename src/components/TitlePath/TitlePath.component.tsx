import React from 'react';
import titlePathStyles from './TitlePath.module.css';
import LiveAuctionsListComponent from '../LiveAuctions/LiveAuctionsList.component';
type Props={
    path: string;
    title: string
}
function TitlePathComponent({path, title}: Props) {
    const [f, s] = path.split("/");
    return (
        <>
            <div className={titlePathStyles.title_path}>
                <h2>{title}</h2>
                <p><span>{f}</span> / {s}</p>
            </div>
        </>
    );
}

export default TitlePathComponent;