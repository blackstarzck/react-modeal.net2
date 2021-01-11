import React from 'react';
import "./BannerSub.css";

function BannerSub() {
    return (
        <div className="sub_banner">
            <a href="">
                <img src={process.env.PUBLIC_URL + "/banner/sub/brand.png"} alt="banner"/>
            </a>
        </div>
    )
}

export default BannerSub
