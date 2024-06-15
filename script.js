document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.getElementById("gender").value;

    const foods = [];
    ["food1", "food2", "food3", "food4", "food5"].forEach((foodId) => {
      const foodElement = document.getElementById(foodId);
      if (foodElement.checked) {
        foods.push(foodElement.value);
      }
    });

    if (foods.length < 2) {
      alert("Please select at least two food options.");
      return;
    }

    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const newRow = `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${foods.join(", ")}</td>
            <td>${state}</td>
            <td>${country}</td>
        </tr>
    `;

    document.getElementById("dataTableBody").innerHTML += newRow;

    this.reset();
  });
