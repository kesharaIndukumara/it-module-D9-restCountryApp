console.log("Hello Kesh")

let countriesArrayList = [];

function loadCountries() {
    let conList = document.getElementById("itemTable")

    let modelBody = document.getElementById("model-body")

    let body = "";

    fetch("assets/json/country.json")
        .then(res => res.json())
        .then(dataList => {
          countriesArrayList = dataList;
            dataList.forEach((element,index) => {
                body += `
            <div class="col">
            <div class="card shadow-sm"> 
            <img src="${element.flags.png}" alt="" class="bd-placeholder-img card-img-top" width="100%" >
              <div class="card-body">
              <h5>${element.name.common}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"> 
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick = "loadModelData(${index})">View More </button>
                  </div> 
                  <small class="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
            `
            });

            conList.innerHTML = body;
            // console.log(data);
        })
}

loadCountries();

function loadModelData(index){
  let modelBody = document.getElementById("model-body")

  modelBody.innerHTML = `<img src="${countriesArrayList[index].flags.png}" alt="" width="50%">`
}

function search(){
  let txtSearchValue = document.getElementById("txtSearch").value;

  let conList = document.getElementById("itemTable")

  let body = "";

  fetch("assets/json/country.json")
  .then(res => res.json())
  .then(dataList => {
    dataList.forEach(element =>{
      if(element.name.common===txtSearchValue){
        body = `
            <div class="col">
            <div class="card shadow-sm"> 
            <img src="${element.flags.png}" alt="" class="bd-placeholder-img card-img-top" width="100%" >
              <div class="card-body">
              <h5>${element.name.common}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"> 
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick = "">View More </button>
                  </div> 
                  <small class="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
            `
        conList.innerHTML = body;
      }
    })
  })
}