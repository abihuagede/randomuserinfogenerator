const apiUrl = "https://randomuser.me/api/?gender=female";
const fetchData = document.getElementById("fetchData");
const output = document.getElementById("output");

fetchData.addEventListener("click", () => {
  fetch(`${apiUrl}?results=2`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error data is not fetched");
      }
      return res.json();
    })
    .then((data) => {
      const user = data.results[0];

      console.log(user);

      // Display user info in the output div

      output.innerHTML = `

              <div id="images">
                <img  src="${user.picture.large}" alt="User Image" />
              </div>
              <div id="info">
                <h2>Username: ${user.name.first} ${user.name.last}</h2>
                <p>Email: ${user.email}</p>
                <p>Location: ${user.location.city}, ${user.location.country} ${user.location.street.number}</p>
                <p>Postcode: ${user.location.postcode}</p>
                <p>Phone: ${user.phone}</p>
                <p>Age: ${user.dob.age}</p>
                <p>Gender: ${user.gender}</p>
                <p>Registered: ${user.registered.date}</p>
              </div>
            `;
    })
    .catch((error) => {
      console.error(error);
      output.innerHTML = `<p>Error fetching user data. Please try again later.</p>`;
    });
});
