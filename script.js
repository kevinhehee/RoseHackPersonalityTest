


function determineFlower(event, rose, sunflower, petunia, orchid, stem, hydrangea) {
    event.preventDefault();

  var rose = 0;
  var orchid = 0;
  var sunflower = 0;
  var petunia = 0;
  var stem = 0;
  var hydrangea = 0;
  
    if(!document.getElementById("question1-1").checked && !document.getElementById("question1-2").checked){
    alert("Please answer question 1");
    return;
  }
  if(!document.getElementById("question2-1").checked && !document.getElementById("question2-2").checked){
    alert("Please answer question 2");
    return;
  }
   if(!document.getElementById("question3-1").checked && !document.getElementById("question3-2").checked){
    alert("Please answer question 3");
    return;
  }
   if(!document.getElementById("question4-1").checked && !document.getElementById("question4-2").checked){
    alert("Please answer question 4");
    return;
  }
   if(!document.getElementById("question5-1").checked && !document.getElementById("question5-2").checked){
    alert("Please answer question 5");
    return;
  }
   if(!document.getElementById("question6-1").checked && !document.getElementById("question6-2").checked){
    alert("Please answer question 6");
    return;
  }
   if(!document.getElementById("question7-1").checked && !document.getElementById("question7-2").checked){
    alert("Please answer question 7");
    return;
  }
   if(!document.getElementById("question8-1").checked && !document.getElementById("question8-2").checked){
    alert("Please answer question 8");
    return;
  }
   if(!document.getElementById("question9-1").checked && !document.getElementById("question9-2").checked){
    alert("Please answer question 9");
    return;
  }
   if(!document.getElementById("question10-1").checked && !document.getElementById("question10-2").checked){
    alert("Please answer question 10");
    return;
  }
  if (document.getElementById("question1-1").checked) 
  { rose += 1; 
    orchid +=1 ;
    sunflower +=1;
    stem +=1;
    }
  else {
    rose+=1;
    petunia +=1;
    hydrangea+=1;
    }
  
if (document.getElementById("question2-1").checked) {
    orchid +=1;
    hydrangea+=1;
    stem +=1;
    }
  else {
    rose +=1;
    petunia +=1;
    sunflower +=1;
    }
if (document.getElementById("question3-1").checked) { ++rose;
    hydrangea +=1;
    petunia +=1;
    }
  else {
    sunflower +=1;
    orchid +=1;
    stem +=1;}

  if (document.getElementById("question4-1").checked) { ++rose;
    petunia +=1;
    hydrangea +=1;
    }
  else {
    stem +=1;
    sunflower +=1;
    orchid +=1;
    }

if (document.getElementById("question5-1").checked) {  
    sunflower +=1;
    stem +=1;
    orchid +=1;
    hydrangea +=1;
    }
  else {
    rose +=1;
    petunia +=1; 
    }

if (document.getElementById("question6-1").checked) 
    {sunflower += 1;
    hydrangea +=1;
    }
  else {
    rose +=1;
    petunia +=1;
    stem +=1;
    orchid +=1;
    }
  if (document.getElementById("question7-1").checked) { 
    ++rose;
    ++hydrangea;
    ++stem;
    ++sunflower;
    }
  else {
    ++petunia;
    ++orchid;
    }
if (document.getElementById("question8-1").checked) {  ++stem;
    ++orchid;
    ++petunia;
    ++hydrangea;
    }
  else {
    ++rose;
    ++sunflower;
    }
if (document.getElementById("question9-1").checked) { ++sunflower;
    ++hydrangea;
    ++stem;
    }
  else {
    ++rose;
    ++petunia;
    ++orchid;
    }
if (document.getElementById("question10-1").checked) {  ++petunia;
    ++sunflower;
    ++rose;
    }
  else {
    ++stem;
    ++orchid;
    }

    var result = "";

 if(rose > sunflower && rose > petunia && rose > orchid && rose > stem && rose > hydrangea ){
    alert("You're a rose! You're fierce, confident, and know your worth, but at times, may forget that human interaction is a good thing, not a burdening necessity. Your thorns keep you closed off, but when someone pushes the wrong buttons, you're sure to let them know who's wrong.");
    }else if(sunflower > rose && sunflower > petunia && sunflower > orchid && sunflower > stem && sunflower > hydrangea){
    alert("You're a sunflower! You thrive around others and prefer it that way, rather than being alone. Your energy feeds off that of others, but even though you tend to give off positive energy, you know life for what it is, and never ignore red flags.");
    }else if(petunia > rose && petunia > sunflower && petunia > orchid && petunia > stem && petunia > hydrangea){
    alert("You're a petunia! You're optimistic, kind, and gentle, and when it comes to meeting others, you tend to set the best first impression! However, you're anxious for what comes next, and would rather go with the flow and stay on a familiar track of life.");
    }else if (orchid > rose && orchid > sunflower && orchid > petunia && orchid > stem && orchid > hydrangea){
    alert("You're an orchid! You look nice, are nice, but deep down, you know that a part of you is only looking out for you. You tend to be a bit tucked away from social events, and like to look out for the near future to ensure everything will be okay.");
    }else if(stem > rose && stem > sunflower && stem > petunia && stem > orchid && stem > hydrangea){
    alert("You're a stem! THE BACKBONE OF A ROSE! You're the best support system other people could ask for, and know how to balance optimism and reality quite efficiently.");
    }else{
    alert("You're a hydrangea! You're unique in every way, and continue to live your life spontaneously.");
    }
}

   


