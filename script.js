function search() {
    const input = document.getElementById("input-value").value;

    if (input.length==0) {
        document.getElementById("button").setAttribute("disabled", "disabled");
    }
    const mealName = input;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => displayMeals(data));
    const displayMeals = mealList => {
        const div = document.getElementById("meal");
        div.innerHTML='';
        mealList.meals.forEach(meal => {
            const mainDiv = document.createElement('div');
            mainDiv.className = 'main-div';
            const mealInfo = `
        <P>
        <div id="first-div" onclick="mealDetail('${meal.strMeal}')">
        <img src="${meal.strMealThumb}">
         <h4 class="meal-name">${meal.strMeal}</h4>
         </div>
         </P>
         `;
            mainDiv.innerHTML = mealInfo;
            div.appendChild(mainDiv);
        });
    }

    mealDetail = meal => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
        fetch(url)
            .then(res => res.json())
            .then(data => selectMeal(data.meals[0]))
    }
    const selectMeal = meals => {
        const mealDiv = document.getElementById("details");
        mealDiv.innerHTML = `
        <div class="Ingredient">
        <img src="${meals.strMealThumb}">
          <h4 class="meal-name">${meals.strMeal}</h4>
          <h5 class="meal-Ingredient">Ingredient:</h5>
          <ul>
          <li>${meals.strMeasure1} ${meals.strIngredient1}</li>
          <li>${meals.strMeasure2} ${meals.strIngredient2}</li>
          <li>${meals.strMeasure3} ${meals.strIngredient3}</li>
          <li>${meals.strMeasure4} ${meals.strIngredient4}</li>
          <li>${meals.strMeasure5} ${meals.strIngredient5}</li>
          <li>${meals.strMeasure6} ${meals.strIngredient6}</li>
          <li>${meals.strMeasure7} ${meals.strIngredient7}</li>
          <li>${meals.strMeasure8} ${meals.strIngredient8}</li>
          <li>${meals.strMeasure9} ${meals.strIngredient9}</li>
          <li>${meals.strMeasure10} ${meals.strIngredient10}</li> 
          </ul>
          </div>
        `       
    }
}






