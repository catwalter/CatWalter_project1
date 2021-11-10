import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

function FadeIn(){
    const tl = gsap.timeline()
    tl.from("#painting-bullseye", {duration: 2.5, scaleX: 0})
    tl.from("#painting-2", {duration: 2.5, scaleX: 0}) 
    tl.from("#cottage", {duration: 2.5, scaleX: 0})
    tl.from("#black-and-white-tree", {duration: 2.5, scaleX: 0})
    tl.from("#painting-5", {duration: 2.5, scaleX: 0})
    

    return tl;
}



mainTL.add(FadeIn())






GSDevTools.create();
//mainTL.to("#painting-bullseye", {duration:2, scale:3, y:"-=600"})





//mainTL.from("#hero",{duration:4,alpha:0,scale:5,y:600})
//.from("#hero h1",{duration:1, y:+-500, rotation:180})

//mainTL.from("#content p",{duration:6,alpha:0,scale:3})