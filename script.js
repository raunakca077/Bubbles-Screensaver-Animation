const canvas=document.getElementById("canvas")
const ctx=canvas.getContext('2d')

canvas.width=window.innerWidth
canvas.height=window.innerHeight




window.addEventListener('resize',function()
{
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
})

const mouse={
    x:null,
    y:null
}

// canvas.addEventListener("click",function(e){
// mouse.x=e.x
// mouse.y=e.y
// generate()
// })

// function generate()
// {
//     ctx.fillStyle="blue"
//     ctx.strokeStyle='red'
//     ctx.lineWidth="15"
    
//         ctx.beginPath()
//         ctx.arc(mouse.x,mouse.y,50,0,360)
//         ctx.fill()
//         ctx.stroke()
        
// }

// canvas.addEventListener("mousemove",(e)=>{
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     mouse.x=e.x
//     mouse.y=e.y
//     //generate()
// })
const interval=setInterval(start(),3000)

function start(){
class bubble
{
    constructor()
    {
        this.x=Math.random()*canvas.width
        this.y =Math.random()*canvas.height
        this.rad=Math.floor(Math.random()*35)+1
       this.x_speed=Math.floor(Math.random()*3) -0.9
        this.y_speed=Math.floor(Math.random()*3) -0.9

    }
    changeSpeed()
    {
        this.x+=this.x_speed
        this.y+=this.y_speed

        if(this.rad>0.3) this.rad-=0.09
    }

    generate()
    {
    

       
    
    ctx.fillStyle="#23EC05"
    ctx.strokeStyle='rgb(34,193,195)'
    ctx.lineWidth="15"
    
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.rad,0,360)
        ctx.fill()
        ctx.stroke()
        

    }

}


var i=0
bubbles=[]
for( i=0;i<200;i++)
bubbles[i]=new bubble()

function move()
{
    
    
    for(b1 of bubbles){
    b1.changeSpeed()
b1.generate()

}
}


function animate()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
   
    move()



    //     mouse.x=Math.floor(Math.random()*canvas.width)+1
    //     mouse.y=Math.floor(Math.random()*canvas.height)+1
    
    // generate()
    // setTimeout(()=>(requestAnimationFrame(animate)),1000)
 
    requestAnimationFrame(animate) 
   

}
animate()


}