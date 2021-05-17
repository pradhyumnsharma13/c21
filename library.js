function Bouncep(mR,fR){

    if(mR.x-fR.x<=mR.width/2+fR.width/2 &&
      fR.x-mR.x<=mR.width/2+fR.width/2 
     
      )
    
    {
    
   mR.velocityX=mR.velocityX*(-1)
    
    
    }
  }
  function Touching(mR,fR){
  
    if(mR.x-fR.x<=mR.width/2+fR.width/2 &&
      fR.x-mR.x<=mR.width/2+fR.width/2 &&
      mR.y-fR.y<=mR.height/2+fR.height/2 &&
      fR.y-mR.y<=mR.height/2+fR.height/2
      )
    
    {
    
    fR.shapeColor="blue"
    mR.shapeColor="green"
    
    }else{
      fR.shapeColor="pink"
      mR.shapeColor="yellow"
    
    
    
    }
  
  }