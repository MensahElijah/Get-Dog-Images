//How to select random element from an array
// const randomFruit = (fruits) =>{

//   const randomNumber = Math.floor(Math.random() * fruits.length)

//   return fruits[randomNumber]
// }

// fruits = ['Mango', 'Orange', 'Banana', 'Pea']

// console.log(randomFruit(fruits))

// //How to change if else if else
// const weatherScore = (weather, weather2) =>{
//     let score 

//     if(weather == 'rainy' && weather2 == 'overcast') {
//         score = 2
//     }else if (weather == 'rainy') {
//         score = 1
//     }else if(weather == 'sunny'){
//         score = -1
//     }else{
//         score = 0
//     }
//     return score
// }

// console.log(weatherScore('rainy'))





//https://dog.ceo/api/breeds/image/random
//.then - promise
//asynchronous programming

//Displaying to the DOM
const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

const getNewDog = () =>{

    fetch('https://dog.ceo/api/breeds/image/random')
    
    .then(response => response.json())
    
    .then(json => {
        dogImageDiv.innerHTML = `<image src='${json.message}' height=300 width=300/>`
    })

}
//onclick to get new dogs
dogButton.onclick = () => getNewDog()









