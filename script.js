var totalProduction = function(){
var sheds=[];
  sheds.push(document.getElementById("num1").value);
  sheds.push(document.getElementById("num2").value);
  sheds.push(document.getElementById("num3").value);
  sheds.push(document.getElementById("num4").value);
  console.log(sheds)
  var [e, f, g, h]=sheds
  var displayshedsSales= document.getElementById("display_sheds_Sales");
  if(e.length===0 || f.length===0 || g.length===0 || h.length===0){
  }else{
    e=parseFloat(e)
    f=parseFloat(f)
    g=parseFloat(g)
    h=parseFloat(h)
    console.log(e, f, g, h)
    totalProductionCalculation(e,f,g,h)
  }
}
var totalProductionCalculation=function(e,f,g,h){
  console.log(e, f, g, h)
  var total= e + f + g + h;
  console.log(total)
  document.getElementById("sales").innerHTML="<p>Your production in Shed A " +
  e + " litres per day <br> your production in Shed B " + 
  f + " litres per day <br> Your production in shed C " + 
  g +" litres per day <br> Your production in shed D "  +
  h + " litres per day <br><br> </p> "
  document.getElementById("total").innerHTML="The total production is " + total + " liters per day"
}



