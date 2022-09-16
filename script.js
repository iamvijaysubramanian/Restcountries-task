var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((value)=>foo(value));
    function foo(value){
    for(i=0;i<value.length;i++){
   row.innerHTML+=`
   <div class="col-lg-4">
   <div class="card border-primary mb-0 ml-0 mr-0 mt-0" style="max-width: 18rems;"></div>   
   <div class="card-header">${value[i].name}</div>
   <div class="card-body">
  <img src=${value[i].flag} class="card-img-bottom">
  <p class="card-text">Capital: ${value[i].capital}</p>
  <p class="card-text">Region: ${value[i].region}</p>
  <p class="card-text">Country Code: ${value[i].cioc}</p>
  <a href="https://api.openweathermap.org/data/2.5/weather?q=${value[i].capital}&appid=09150c9fb09e98a172eaad9698d008b1" 
  class="btn btn-primary" target="_blank">Click for Weather</a>
</div></div>`;
    document.body.append(container);
}
    }
    var res2=fetch("https://api.openweathermap.org/data/2.5/weather?q=${value[i].capital}&appid=09150c9fb09e98a172eaad9698d008b1")
    res2.then((data)=>data.json()).then((value)=>Bar(value));
    function bar(value){
        for(var i in value){
          innerHTML=`<p>Temperature: ${value[i].main.temp}</p>`;
                }
            }
                // <div class="card border-primary mb-3" style="max-width: 18rem;"></div>
    