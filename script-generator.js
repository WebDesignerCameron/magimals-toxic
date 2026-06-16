window.addEventListener("load",()=>{
    var tl=["Grass", "Water", "Fire",
 "Normal", "Psychic", "Dark", "Fairy",
 "Ghost", "Dragon", "Fighting", "Rock",
 "Steel", "Ground", "Electric", "Ice",
 "Bug", "Flying", "Poison"];
    var sl=["Mega", "Gmax", "UB", 
"Legendary", "Mythical", "None", "None",
 "Regional"];
    var type1=tl[Math.floor((Math.random()*19)-1)];
    if(Math.floor((Math.random()*2)-1)==1){
        var type2="Nothing";
    }else{
        var type2=tl[Math.floor((Math.random()*19)-1)];
    };
    var special=sl[Math.floor((Math.random()*9)-1)];
    document.getElementById("p").textContent="Type(s): "+type1+"-"+type2+"   Special: "+special;
});