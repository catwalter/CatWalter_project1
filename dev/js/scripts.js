import { gsap } from "gsap";

const mainTL = gsap.timeline();

function paintbrushZigZag(){

    const tl = gsap.timeline();
    tl.to("#painting-bullseye", {duration:2, scale:3})
    return tl;

}
function cottage(){

    const tl = gsap.timeline();
    tl.to("#cottage", {duration:2, scale:3})
    return tl;

}


mainTL.add(paintbrushZigZag())
        .add(cottage())



//mainTL.to("#painting-bullseye", {duration:2, scale:3, y:"-=600"})





//mainTL.from("#hero",{duration:4,alpha:0,scale:5,y:600})
//.from("#hero h1",{duration:1, y:+-500, rotation:180})

//mainTL.from("#content p",{duration:6,alpha:0,scale:3})