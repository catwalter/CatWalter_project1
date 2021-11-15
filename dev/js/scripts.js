import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();


function Paintings(){
    const tl = gsap.timeline()
    tl.from("#frame_1", {duration: .5, alpha: 0})
    tl.from("#red", {duration: 1, scaleX: 0})
    tl.from("#Ellipse-5", {duration: .5, alpha: 0})
    tl.from("#Ellipse-4", {duration: .5, alpha: 0}, "-=50%")
    tl.from("#Ellipse-3", {duration: .5, alpha: 0}, "-=50%")
    tl.from("#Ellipse-2", {duration: .5, alpha: 0}, "-=50%")
    tl.from("#Ellipse-1", {duration: .5, alpha: 0}, "-=50%")
    tl.from("#frame_2", {duration: .5, alpha: 0}, "-=50%")
    tl.from("#background", {duration: 1, scaleY: 0}) 
    tl.from("#Vector-22", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#Vector-21", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#Vector-20", {duration: .25, scaleY: 0}, "-=50%")
    tl.from("#Vector-19", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#Vector-18", {duration: .25, scaleY: 0}, "-=50%")
    tl.from("#Vector-17", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#Vector-16", {duration: .25, scaleY: 0}, "-=50%")
    tl.from("#Vector-15", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#Ellipse-6", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#frame_3", {duration: .5, alpha: 0})
    tl.from("#Vector-13", {duration: .5, scaleX: 0}, "-=50%")
    tl.from("#Vector-12", {duration: .5, scaleY: 0}, "-=50%")
    tl.from("#Vector-11", {duration: .5, scaleX: 0}, "-=50%")
    tl.from("#Vector-14", {duration: .5, scaleY: 0}, "-=50%")
    tl.from("#Vector-9", {duration: .5, scaleX: 0}, "-=50%")
    tl.from("#Vector-8", {duration: .5, scaleY: 0}, "-=50%")
    tl.from("#Vector-10", {duration: .5, scaleX: 0}, "-=50%")
    tl.from("#frame_4", {duration: .5, alpha: 0})
    tl.from("#black", {duration: 1.5, scaleX: 0})
    tl.from("#Vector-7", {duration: .5, alpha: 0})
    tl.from("#trees", {duration: .5, scaleY: 0}, "-=50%")
    tl.from("#frame_5", {duration: .5, alpha: 0}, "-=50%")
    tl.from("#gray-cream", {duration: 1.5, scaleX: 0})
    tl.from("#Vector-31", {duration: .25, scaleX: 0})
    tl.from("#Vector-30", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#Vector-29", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#Vector-28", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#Vector-27", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#Vector-26", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#Vector-25", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#Vector-24", {duration: .25, scaleX: 0}, "-=50%")
    tl.from("#Ellipse-7", {duration: .5, alpha: 0}, "-=50%")
    .to("#preloader", {duration:1, alpha: 0, onComplete:backToTop})
    
    
    return tl;
}

function backToTop(){
    window.scrollTo(0,0);
    gsap.set("#preloader", {display:"none"})
}

mainTL.add(Paintings())






GSDevTools.create();




mainTL.from("#hero",{duration:4,alpha:0,scale:5,y:600})
.from("#h1hero",{duration:1, y:+-500, rotation:180})
.from("#h2hero", {duration:2, y:+-500, scale:4})

mainTL.from("#title-content",{duration:4,alpha:0,scale:3})
mainTL.from("#content-p",{duration:2,alpha:0,rotation: 180}, "-=50%")