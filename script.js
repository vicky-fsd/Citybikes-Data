
async function foo() {
    var res = await fetch("https://emojihub.yurace.pro/api/all")
    var result = await res.json();
    console.log(result);
    var root = document.getElementById("root")
    root.innerHTML=" "
    for (a in  result) {
                console.log(a,result[a])
                var div = document.createElement("div")
                div.setAttribute("class","col-3 mt-3")
                div.innerHTML=`
                <div class="card" style="width: 250px;">
                <div class="card-body">
                  <h5 class="card-title">${result[a].name}</h5>
                  <h6 class="card-subtitle mb-2">${result[a].category}</h6>
                  <address>UniCode : ${result[a].unicode[0]}<br>
                  Group : ${result[a].group}<br>
                   <h1>${result[a].htmlCode[0]}</h1><br>
                  </address>
                  <a href="https://emojihub.org/" class="btn btn-primary" target="blank">More Info</a>                
                </div>
              </div>
              </div>
                `
                root.appendChild(div)
               }
  }
  
  foo();
