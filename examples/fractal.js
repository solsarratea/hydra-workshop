// Uncomment the different patterns to explore complexity

// Triangle fractal 1
pattern = () => shape(3)
// Triangle fractal 2
//pattern = () => shape(3).diff(shape(3,0.4))
// Triangle fractal 3
//pattern = () => osc(100,0).kaleid(3).luma(0.9,0.2).contrast(2)
// Triangle fractal in movement
//pattern = () => osc(100,0.1).kaleid(3).luma(0.9,0.2).contrast(2).modulateKaleid(osc(2\3,0.1).kaleid(3),0.1)
pattern()
    .add(src(o0).scale(0.9),0.8)
    .repeat()
    .out()


//Try your own patterns :) 


