// Create a function to generate HTML with team profiles
function generateHTML(data) {
    const generateManager = (manager) => {
        return `
    <div class="card" style="width: 18rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <div class="card-body">
            <h5 class="card-title text-primary">${manager.name}</h5>
            <p class="card-text">${manager.getRole()}</p>
          </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id} </li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
        `
    };

    const generateEngineer = (engineer) => {
        return `
    <div class="card" style="width: 18rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <div class="card-body">
            <h5 class="card-title text-primary">${engineer.name}</h5>
            <p class="card-text">${engineer.getRole()}</p>
          </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id} </li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">GitHub: ${engineer.github}</li>
        </ul>
    </div>
        `
    };

    const generateIntern = (intern) => {
        return `
    <div class="card" style="width: 18rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <div class="card-body">
            <h5 class="card-title text-primary">${intern.name}</h5>
            <p class="card-text">${intern.getRole()}</p>
          </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id} </li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
        `
    };

    // Empty array for the template literal
    const html = [];

    // For loop to build the template literal of managers
    html.push(

        // filter iterates through every item in the array isolates the managers, then map iterates through managers filtered array and then join turns it into a string
        data.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)).join("")

    )

    // For loop to build the template literal of engineers
    html.push(

        // filter iterates through every item in the array isolates the managers, then map iterates through managers filtered array and then join turns it into a string
        data.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join("")

    )

    // For loop to build the template literal of interns
    html.push(

        // filter iterates through every item in the array isolates the managers, then map iterates through managers filtered array and then join turns it into a string
        data.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join("")

    )

    // // Alternative
    // for (let i =0; i<data.length; i++) {
    //     if (data[i].getRole === "Manager") {
    //         html.push(generateManager(data[i]));
    //     } else if (data[i].getRole === "Engineer") {
    //         html.push(generateEngineer(data[i]))
    //     } else {
    //         html.push(generateIntern(data[i]))
    //     }
    // }

    // combines the array of 3 strings [managers, engineers, interns] into a single string
    return html.join("")

}


module.exports = employees => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="template-css.css">
</head>

<body>
 
    <header class="text-center bg-primary p-2 text-white">
        <h1 class="display-4">My Team</h1>
    </header>

    <br>

    <div class="container gy-5">
    <div class="row g-2 justify-content-evenly gap-4">
        
     ${generateHTML(employees)}   

    </div>
    </div>

</body>
</html>`
}

