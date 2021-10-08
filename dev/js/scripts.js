import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("#hero",{duration:4,alpha:0,scale:5,y:600})
.from("#hero h1",{duration:1, y:+-500, rotation:180})

mainTL.from("#content p",{duration:6,alpha:0,scale:3})