//counter code

var button= document.getElementById("counter");


button.onclick= function(){
  
  //make a request to the counter endpoint
  
  //Capture the response and store
  
  counter= counter+1;
  var span = document.getElementById("count");
  span.innerHTML=counter.toString();  
    
    
    
    
    
    
    
};

