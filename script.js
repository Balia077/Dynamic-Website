
var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"60% 50%",
    scrub:"true",

}})

tl.to("#fanta",{
    top:"115%",
    left:"3%"
},'orange')

tl.to("#orange-2",{
    top:"160%",
    left:"27%"
},'orange')

tl.to("#orange",{
    width:"12%",
    top:"160%",
    right:"10%"
},'orange')

tl.to("#leaf",{
    width:"20%",
    top:"112%",
    rotate:"120deg",
    left:"70%"
},'orange')

tl.to("#leaf2",{
    width:"12%",
    rotate:"180deg",
    top:"160%",
    left:"80%"
},'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"20% 50%",
    scrub:"true",

}})

tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-100%",
    top:"110%"
},'ca')

tl2.from("#coca-cola",{
    rotate:"-90deg",
    left:"-100%",
    top:"110%"
},'ca')

tl2.from(".lemon2",{
    rotate:"90deg",
    left:"100%",
    top:"110%"
},'ca')

tl2.from("#pepsi",{
    rotate:"90deg",
    left:"100%",
    top:"110%"
},'ca')

tl2.to("#orange-2",{
    left:"43%",
    top:"200%",
    width:"15%"
},'ca')

tl2.to("#fanta",{
    width:"32%",
    left:"34%",
    top:"210%"
},'ca')