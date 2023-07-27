async function foo() {
    var res = await fetch("http://api.citybik.es/v2/networks")
    var result = await res.json();
    console.log(result.networks);
    var root = document.getElementById("root")
    root.innerHTML=" "
    for (a in  result.networks) {
                console.log(a,result.networks[a])
                var div = document.createElement("div")
                div.setAttribute("class","col-3 mt-3")
                div.innerHTML=`
                <div class="card" style="width: 250px;">
                <div class="card-body">
                  <h5 class="card-title">${result.networks[a].name}</h5>
                  <h6 class="card-subtitle mb-2">${result.networks[a].company[0]}</h6>
                  <address><i class="fa-solid fa-location-dot fa-bounce" style="color: rgb(6, 184, 184);"></i> ${result.networks[a].location.city}<br>
                  ${result.networks[a].location.country}<br>
                  ID : ${result.networks[a].id}<br>
                  </address>
                  <a href="https://api.citybik.es${result.networks[a].href}" class="btn btn-primary" target="blank">More Info</a>                
                </div>
              </div>
              </div>
                `
                root.appendChild(div)
               }
  }
  
  foo();
