/* import * as importedData from './module/data' */
let myData  = [
    {
      "day":1,
      "data":[
            {
                "name":"kwet",
                "weight":30
            },
            {
              "name":"pis",
              "weight":30
            },
            {
              "name":"pir",
              "weight":30
            }
        ]
    },
        {
      "day":2,
      "data":[
            {
                "name":"kwet",
                "weight":35
            },
            {
              "name":"pis",
              "weight":31
            },
            {
              "name":"pir",
              "weight":32
            }
        ]
    },
    {
      "day":3,
      "data":[
            {
                "name":"kwet",
                "weight":32
            },
          {
            "name":"pis",
            "weight":30
          },
          {
            "name":"pir",
            "weight":30
          }
      ]
  },
    {
    "day":4,
    "data":[
        {
            "name":"kwet",
            "weight":30
        },
          {
            "name":"pis",
            "weight":31
          },
          {
            "name":"pir",
            "weight":32
          }
      ]
  }
]


const mainDiv = document.getElementById("main")

function createChartEntry(day,budgy,weight){
    
    let budgyClassName
    let upperWeight = weight * 3 //just to make the div more visible

    //position the div at the bottom, starting from the top
    let stylePosition = 700 - upperWeight - 5  // 5 for padding-top


    let divParent = document.createElement("div")
    divParent.classList.add("day")
 
    if(day %2 == 0){
        dayClassName = "even"
    }
    else{
        dayClassName = "odd"   
    }

    divParent.classList.add(dayClassName)
    mainDiv.appendChild(divParent)
    
    if(budgy == "pis"){
        budgyClassName = "pistache"
    } 
    if(budgy == "pir"){
        budgyClassName = "pirouette"
    }
    if(budgy == "kwet"){
        budgyClassName = "kkwet"
    }
     
    let divChild = document.createElement("div")
    divChild.innerHTML = weight
    divChild.classList.add(budgyClassName)
    divChild.style.height = upperWeight + "px"
    divChild.style.top = stylePosition + "px"
    
    divParent.appendChild(divChild)  

    
}

for(let i = 0; i < myData.length; i++){
    let dataPerDay = myData[i].data
    for (let j = 0; j < dataPerDay.length; j++){
        /* console.log(`${myData[i].day} => Data ${dataPerDay[j].name} : ${dataPerDay[j].weight}`) */
        createChartEntry(myData[i].day,dataPerDay[j].name,dataPerDay[j].weight)
    }
}