var eventType, tempFahr, result, eventSuggest, tempSuggest;

function whatToWear() {
    eventType = prompt("What type of affair will this be?", "Casual, Semi-formal, or Formal?");
        if (eventType == "Casual") {
            eventSuggest = "comfy and cheap"} else
        if (eventType == "Semi-formal"){
            eventSuggest = "neat and nice"} else
        if (eventType == "Formal"){
            eventSuggest = "fancy and expensive"} else 
        eventSuggest = "confused";
    tempFahr = prompt("What is the temperature outside?", "Numeric Values Please (degrees fahrenheit)");
        if (tempFahr < 54){
            tempSuggest = "coat."} else
        if (tempFahr <= 70){
            tempSuggest = "sweater."} else
        if (tempFahr > 70){
            tempSuggest = "shirt."} else
        tempSuggest = "expression.";
    result = "Since you're going to a "+eventType+" event and it is "+tempFahr+" degrees fahrenheit outside, you should wear a "+eventSuggest+" "+tempSuggest+"  Stay classy San Diego!";
    console.log(result)
    document.getElementById("windowDisplay").innerHTML = result;
    document.getElementById("windowDisplay").style.padding = "10px 10px 10px 10px";
    }

    /*
first attempt - forgot i need to concatenate, wasn't really working anyway:

function whatToWear() {
    var tempFahr = prompt("What is the temperature outside?", "Numeric Values Please (degrees fahrenheit)"); break;
    var eventType = prompt("What type of affair will this be?", "Casual, Semi-formal, or Formal?"); break;
    switch(tempFahr, eventType){
        case tempFahr <54 && eventType == "Casual" : result ="Wear long Underwear, bib Overalls, a carhart jacket, or a Snowsuit"; break;
        case 54=< tempFahr <= 70 && eventType == "Casual" : result = "Wear blue jeans and a t-shirt"; break;
        case tempFahr > 70 && eventType == "Casual" : result = "Wear cut off shorts and a tank top"; break;
        case tempFahr <54 && eventType == "Semi-formal" : result = "Wear a button down shirt with nice sweatervest and khakis"; break;
        case 54=< tempFahr <= 70 && eventType == "Semi-formal" : result = "Wear a button down shirt and khakis"; break;
        case tempFahr > 70 && eventType == "Semi-formal" : result = "Wear golf pants and a polo"; break;
        case tempFahr < 54 && eventType == "Formal" : result = "Wear an argyle cardigan and double breasted wool coat with fancy pants"; break;
        case 54=< tempFahr <= 70 && eventType == "Formal" : result = "Wear a slimfit italian suit with some shiny shoes, be sure to match your belt and watch"; break;
        case tempFahr > 70 && eventType=="Formal" : result = "Stay classy and cool in a seersucker suit"; break;
    }
    console.log(result);
    return;
    }

    I don't like how you need to enter exact strings, was going to look into a prompt with options but that requires jquery knowledge which I lack,
    will look into it later: https://stackoverflow.com/questions/16556030/show-list-of-options-using-javascript-prompt &
    https://www.tutorialspoint.com/jqueryui/jqueryui_dialog.htm

    */