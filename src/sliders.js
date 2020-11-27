import {images} from './data.js'

function displayLog(message){
    console.log(message)
}

function spreadImages(lap){
    console.log("spreadImages: counter: " + lap)
    let slidersCount = document.querySelectorAll('.slider')
    for (let i = 0; i < slidersCount.length; i++){
        if(lap < 1){
            slidersCount[i].innerHTML = `<img src=${images[i].src} alt=${images[i].name}>`
        }
        else{
            if(lap == 1){
                if(i < 3){
                    slidersCount[i].innerHTML = `<img src=${images[i+1].src} alt=${images[+1].name}>`
                }
                else{
                    slidersCount[i].innerHTML = `<img src=${images[i-i].src} alt=${images[i-i].name}>`
                }
            }

            if(lap == 2){
                if(i < 2){
                    slidersCount[i].innerHTML = `<img src=${images[i+2].src} alt=${images[i+2].name}>`
                }
                else{
                    if(i == 2){
                        slidersCount[i].innerHTML = `<img src=${images[i-i].src} alt=${images[i-i].name}>`
                    }
                    else{
                        slidersCount[i].innerHTML = `<img src=${images[i-2].src} alt=${images[i-2].name}>`
                    }
                   
                }
            }

        }        
    }
}

function refreshImages(){
    let slidersCount = document.querySelectorAll('.slider')
    console.log("refreshImages")
    for(let i = 0; i < slidersCount.length; i++){
        console.log("   i: " + i)
        window.setInterval(spreadImages(i),5000)
    }
    //spreadImages(0)
}

export{spreadImages,refreshImages}