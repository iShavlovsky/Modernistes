import '../js/webflow';
import '../css/normalize.css';
import '../css/webflow.css';
import '../css/modernistes.webflow.css';
import '../css/style.css';
import '../src/tabs';
import gsap from "gsap";
import Slider from "./sliders";
import initTabs from "./tabs";

document.addEventListener('DOMContentLoaded', () => {
    initTabs()
    const slider1 = new Slider({
        startSlide: 3,
        interval: 2,
        sliderNav: '.slide1-nav-w',
        sliderSlide: '.slider1-content-w',
        sliderBtn: '.slider1-nav-btn',
    })

    const slider2 = new Slider({
        startSlide: 1,
        interval: 3,
        sliderNav: '.slide2-nav-w',
        sliderSlide: '.slider2-content-w',
        sliderBtn: '.slider2-nav-btn',
    })

    const slider3 = new Slider({
        sliderNav: '.slide3-nav-w',
        sliderSlide: '.slider3-content-w',
        sliderBtn: '.slider3-nav-btn',
        hoverMode: true,
    })

})
