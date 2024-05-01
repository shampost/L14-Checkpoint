// document.addEventListener('DOMContentLoaded', function() {
//     initializeForm();
// });

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
//             <title>Your Meal Plan</title>
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

// function validateEmail(email) {
//     const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return regex.test(email);
// }

// function clearForm() {
//     document.getElementById('mealPlannerForm').reset();
// }

document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
});

function initializeForm() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const meals = ['Breakfast', 'Snack1', 'Lunch', 'Snack2', 'Dinner'];
    const mealPlannerForm = document.getElementById('mealPlannerForm');

    // Add meal headers
    mealPlannerForm.appendChild(document.createElement('div')); // Empty cell at the top left corner
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.textContent = meal;
        mealPlannerForm.appendChild(div);
    });

    // Add day rows
    days.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        mealPlannerForm.appendChild(dayDiv);
        meals.forEach(meal => {
            const id = `${day.toLowerCase()}${meal.replace(/\s/g, '')}`;
            const input = document.createElement('input');
            input.type = 'text';
            input.id = id;
            input.required = true;
            mealPlannerForm.appendChild(input);
        });
    });
}

function generateMealPlan() {
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let isValid = true;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const meals = ['Breakfast', 'Snack1', 'Lunch', 'Snack2', 'Dinner'];

    // let newPageContent = `
    //     <html>
    //     <head>
    //         <title>Your Meal Plan</title>
    //         <style>body { font-family: 'Courier New', monospace; margin: 20px; }</style>
    //     </head>
    //     <body>
    //         <h1>Meal Plan for ${document.getElementById('name').value}</h1>
    //         <p>Goal of the Week: ${document.getElementById('goal').value}</p>
    // `;

    days.forEach(day => {
        newPageContent += `<h2>${day}</h2>`;
        meals.forEach(meal => {
            const id = `${day.toLowerCase()}${meal.replace(/\s/g, '')}`;
            const mealInput = document.getElementById(id);
            if (!mealInput.value) {
                alert(`Please enter a meal for ${meal} on ${day}.`);
                isValid = false;
                return;
            }
            newPageContent += `<p>${meal}: ${mealInput.value}</p>`;
        });
        if (!isValid) return;
    });

    if (!isValid) return;

    newPageContent += `<button onclick="window.print()">Print this page</button></body></html>`;

    // Creating a new window to display the generated meal plan
    const newWindow = window.open();
    newWindow.document.write(newPageContent);
    newWindow.document.close();
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function clearForm() {
    document.getElementById('mealPlannerForm').reset();
}
