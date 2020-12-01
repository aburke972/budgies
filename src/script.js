import {myData,pirouette,pistache} from './data.js'
import {spreadImages,refreshImages} from './sliders.js'


const chartDiv = document.getElementById("chart")
const topReference = chartDiv.clientHeight

function createChartEntry(day,budgy,weight){
    
    let budgyClassName
    let dayClassName
    let upperWeight = weight * 3 //just to make the div more visible

    //position the div at the bottom, starting from the top
    let stylePosition = topReference - upperWeight - 5  // 5 for padding-top

    //preparing parent element. A parent element, divParent, is a representation of a day. A day will contain two values, one per budgy. 
    //there will be 2 columns per day. One per value. Each value will be represented as a child elevement, divChild.

    let divParent = document.createElement("div")
    divParent.classList.add("day")
 
    if(day %2 == 0){
        dayClassName = "even"
    }
    else{
        dayClassName = "odd"   
    }

    //adding parent element to chart div

    divParent.classList.add(dayClassName)
    chartDiv.appendChild(divParent)
    
    // preparing child element 
    if(budgy == "pis"){
        budgyClassName = "pistache"
    } 
    if(budgy == "pir"){
        budgyClassName = "pirouette"
    }
    if(budgy == "kwet"){
        budgyClassName = "kkwet"
    }

    if(budgy == "pis-flight"){
        budgyClassName = "pistache-highlight"
    }

    if(budgy == "pir-flight"){
      budgyClassName = "pirouette-highlight"
    }

    if(budgy.indexOf("weaning") > -1){
      budgyClassName = "weaning"
    }
     
    let divChild = document.createElement("div")
    divChild.innerHTML = weight
    divChild.classList.add(budgyClassName)
    divChild.style.height = upperWeight + "px"
    divChild.style.top = stylePosition + "px"
    
    divParent.appendChild(divChild)  

    
}

function createChart(){
    for(let i = 0; i < myData.length; i++){
        let dataPerDay = myData[i].data
        for (let j = 0; j < dataPerDay.length; j++){
            //console.log(`${myData[i].day} => Data ${dataPerDay[j].name} : ${dataPerDay[j].weight}`)
            createChartEntry(myData[i].day,dataPerDay[j].name,dataPerDay[j].weight)
        }
    }
}

createChart()

spreadImages(3)
//refreshImages()