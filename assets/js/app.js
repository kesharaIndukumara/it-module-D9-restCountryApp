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
            <div class="col" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
            <div class="card shadow-sm"> 
            <img src="${element.flags.png}" alt="" class="bd-placeholder-img card-img-top" width="100%" >
              <div class="card-body">
              <h5>${element.name.common}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"> 
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick = "loadModelData(${index})">View More </button>
                  </div> 
                  <small class="text-body-secondary text-end">${element.capital}</small>
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

  modelBody.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="${countriesArrayList[index].flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${countriesArrayList[index].name.common}</h5>
   <h6 class="card-subtitle mb-2 text-body-secondary">${countriesArrayList[index].timezones}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
  `
}

function search(){
  let txtSearchValue = document.getElementById("txtSearch").value;

  let conList = document.getElementById("itemTable")

  let body = "";

  fetch("assets/json/country.json")
  .then(res => res.json())
  .then(dataList => {

    dataList.forEach((element,index) =>{
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
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick = "loadModelData(${index})">View More </button>
                  </div> 
                  <small class="text-body-secondary">${element.capital}</small>
                </div>
              </div>
            </div>
          </div>
            `
        conList.innerHTML = body;
      }else{
        console.log("error");
        
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Input Country Name is Wrong!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      }
    })
  })
}

