//Buffered spiral 0
gradient().diff(src(o1).scale(0.9).rotate(0.2)).blend(src(o1),0.9).out(o1)
//Buffered spiral 1 - add movement
gradient().diff(src(o1).scale(0.9).rotate(0.2)).rotate(()=>-Math.sin(time/5)/10).scale(1.002).blend(o1,0.9).out(o1)
//
src(o1)
  .mask(shape(4).scale(2.5,1.1))
  .scale(1.02)
  .saturate(()=>Math.abs(Math.cos(time/3)*1.3)+0.7)
  .shift(0,0,0.7)
  .luma(0.4,0.3)
  .out()

