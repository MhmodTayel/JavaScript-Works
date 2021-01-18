const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Japanese";

const search =document.getElementById('search'),
      submit = document.getElementById('submit'),
      random = document.getElementById('random'),
      mealsEl = document.getElementById('meals'),
      resultHeading = document.getElementById('result-heading'),
      single_mealEl = document.getElementById('single-meal');

  
 
      
function searchMeal(e) {
  e.preventDeafult();
}








submit.addEventListener('submit', searchMeal)


