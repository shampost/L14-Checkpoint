// function initializeForm() {
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     const meals = ['Breakfast', 'Snack1', 'Lunch', 'Snack2', 'Dinner'];
//     const mealPlannerForm = document.getElementById('mealPlannerForm');

//     // Add the meal headers
//     mealPlannerForm.appendChild(document.createElement('div')); // Empty cell at the top left corner
//     meals.forEach(meal => {
//         const div = document.createElement('div');
//         div.textContent = meal;
//         mealPlannerForm.appendChild(div);
//     });

//     // Add the day rows
//     days.forEach(day => {
//         const dayDiv = document.createElement('div');
//         dayDiv.textContent = day;
//         mealPlannerForm.appendChild(dayDiv);

//         meals.forEach(meal => {
//             const id = `${day.toLowerCase()}${meal}`;
//             const input = document.createElement('input');
//             input.setAttribute('type', 'text');
//             input.setAttribute('id', id);
//             input.required = true;
//             mealPlannerForm.appendChild(input);
//         });
//     });
// }

// function generateMealPlan() {
//     const email = document.getElementById('email').value;
//     if (!validateEmail(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     let newPageContent = `
//         <html>
//         <head>
//             <style>body { font-family: 'Courier New', monospace; }</style>
//         </head>
//         <body>
//             <h1>Meal Plan for ${document.getElementById('name').value}</h1>
//             <p>Goal of the Week: ${document.getElementById('goal').value}</p>
//     `;

//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     const meals = ['Breakfast', 'Snack 1', 'Lunch', 'Snack 2', 'Dinner'];

//     days.forEach(day => {
//         newPageContent += `<h2>${day}</h2>`;
//         meals.forEach(meal => {
//             const id = `${day.toLowerCase()}${meal.replace(/\s/g, '')}`;
//             const mealInput = document.getElementById(id);
//             if (!mealInput || !mealInput.value) {
//                 alert(`Please enter a meal for ${meal} on ${day}.`);
//                 return;
//             }
//             newPageContent += `<p>${meal}: ${mealInput.value}</p>`;
//         });
//     });

//     newPageContent += `
//             <button onclick="window.print()">Print this page</button>
//     `;

//     document.write(newPageContent);
// }

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const meals = ["Breakfast", "First Snack", "Lunch", "Second Snack", "Dinner"];

document.addEventListener("DOMContentLoaded", function () {
  initializeForm();
});

function initializeForm() {
  const mealPlannerForm = document.getElementById("mealPlannerForm");

  mealPlannerForm.appendChild(document.createElement("div"));
  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.textContent = meal;
    mealPlannerForm.appendChild(div);
  });

  days.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;
    mealPlannerForm.appendChild(dayDiv);
    meals.forEach((meal) => {
      const id = `${day.toLowerCase()}${meal.replace(/\s/g, "")}`;
      const input = document.createElement("input");
      input.type = "text";
      input.id = id;
      input.required = true;
      mealPlannerForm.appendChild(input);
    });
  });
}

function generateMealPlan() {
  const email = document.getElementById("email").value;
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  let newPageContent = `
        <html>
        <head>
            <title>Your Meal Plan</title>
        </head>
        <body>
            <h1>Meal Plan for ${document.getElementById("name").value}</h1>
            <p>Goal of the Week: ${document.getElementById("goal").value}</p>
    `;

  days.forEach((day) => {
    newPageContent += `<h2>${day}</h2>`;
    meals.forEach((meal) => {
      const id = `${day.toLowerCase()}${meal.replace(/\s/g, "")}`;
      const mealInput = document.getElementById(id);
      if (!mealInput || !mealInput.value) {
        alert(`Please enter a meal for ${meal} on ${day}.`);
        return;
      }
      newPageContent += `<p>${meal}: ${mealInput.value}</p>`;
    });
  });

  newPageContent += `
    <button style="background-color: #4CAF50; color: white; padding: 8px 12px; text-align: center; text-decoration: none; display: inline-block; font-size: 12px; margin: 4px 2px; cursor: pointer; border: none; box-sizing: border-box; vertical-align: middle;" onclick="window.print()">Print this page</button>
    <a style="background-color: #008CBA; color: white; padding: 8px 12px; text-align: center; text-decoration: none; display: inline-block; font-size: 12px; margin: 4px 2px; cursor: pointer; border: none; box-sizing: border-box; vertical-align: middle;" href="data:text/html;charset=UTF-8,${encodeURIComponent(
      newPageContent
    )}" download="mealplan.html">Download this page</a>
    </body>
    </html>
`;

  const newWindow = window.open("", "", "width=600,height=600");
  newWindow.document.write(newPageContent);
  newWindow.document.close();
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

function clearForm() {
  document.getElementById("mealPlannerForm").reset();
}
