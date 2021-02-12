document.getElementById('searchBtn').addEventListener("click",searchInput);
function searchInput(){
    document.getElementById('showFoodsList').innerText=" ";
const foodTitle=document.getElementById('foodInput').value;
const mealInput=`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodTitle}`
 fetch(mealInput)
.then(res => res.json())
.then (data=>{
    console.log(data)
    const mealsDiv=document.getElementById('showFoodsList');
    for (let i = 0; i <data.meals.length; i++) {
        const meal=data.meals[i];
        console.log(meal);
       
        const mealDiv=document.createElement('div');
        mealsDiv.appendChild(mealDiv);
        mealDiv.className='mealstyle';
        mealDiv.innerHTML  +=`
        <h3 class="foodName">${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}">
        <button  onclick="displayMealatail('${meal.strMeal}')">Meal Details </button>
        `;

      if (i==11){
          break;
      }
        
    }
});
}
const displayMealatail=name=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res=>res.json())
    .then (data=>randomMeal(data.meals[0]));
}
const randomMeal=meal=>{
    document.getElementById('mealDateils').innerHTML=`
    <h3>Food Name= ${meal.strMeal}</h3>
    <p> Food Code= ${meal.idMeal} </p>
    <p> Area= ${meal.strArea}</p>
    <p> Catagory= ${meal.strCategory}</p>
    <p> Instruction= ${meal.strInstructions}</p>
    
    `
}
