import React, { Component } from 'react';

import BannerMain from "../components/Banner_main/BannerMain.jsx";
import History from "../components/Cont_history/History.jsx";
import Brands from "../components/Cont_brands/Brands.jsx";
import Price from "../components/Cont_price/Price.jsx";
import BannerSub from "../components/Banner_middle/BannerSub.jsx"
import HotIssue from '../components/Cont_hotissue/HotIssue.jsx';
import Release from "../components/Cont_release/Release.jsx";
import FirstSlides from '../components/Cont_slide01/FirstSlides.jsx';
import SecSlides from '../components/Cont_slide02/SecSlides.jsx';
import Benefit from "../components/Cont_benefit/Benefit.jsx";
import Review from "../components/Cont_review/Review.jsx";
import Tip from '../components/Cont_tip/Tip.jsx';
import Story from '../components/Cont_story/Story.jsx';
import BannerBottom from "../components/Banner_bottom/BannerBottom.jsx";

class Home extends Component {
    render() {
        return (
            <>
                <BannerMain/>
                <History/>
                <Brands/>
                <Price/>
                <BannerSub/>
                <HotIssue/>
                <Release/>
                <FirstSlides/>
                <Benefit/>
                <Review/>
                <SecSlides/>
                <Tip/>
                <Story/>
                <BannerBottom/>
            </>
        )
    }
}

export default Home