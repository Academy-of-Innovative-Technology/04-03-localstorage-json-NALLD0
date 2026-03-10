var Database = {
	keyName: "Mutant Database",
	data: []
};


function loadDataSource() {

	const rawData = localStorage.getItem(Database.keyName);
	if (!rawData) return; 

	const parsedData = JSON.parse(rawData);

	Database.data = parsedData.response;

	displayData( Database.data );
}



function displayData(dataArray) {

	const container = document.querySelector(".row.row-cols-1");

	container.innerHTML = "";

	dataArray.forEach(mutant=> {
		const powersList = mutant.powers.map(power => `<li>${power}</li>`).join(""); 
		const affiliationList = mutant.affiliation.map(aff => `<li class="list-inline-item badge bg-primary">${aff}</li>`).join("");

		const html = `
        <div class="col">
          <div class="card shadow-lg h-100">
            <img src="${mutant.image}" class="card-img-top" alt="${mutant.name.alias}">
            <div class="card-body">
              <h5 class="card-title text-center mb-3">${mutant.name.alias}</h5>
              <p class="card-text text-center text-muted">${mutant.name.firstName} ${mutant.name.lastName}</p>

              <h6 class="fw-bold">Profile</h6>
              <ul class="list-unstyled">
                <li>Gender: ${mutant.profile.gender}</li>
                <li>Eyes: ${mutant.profile.eyes}</li>
                <li>Hair: ${mutant.profile.hair}</li>
                <li>Height: ${mutant.profile.height}</li>
              </ul>

              <h6 class="fw-bold">Powers</h6>
              <ul class="list-unstyled">${powersList}</ul>

              <h6 class="fw-bold">Affiliations</h6>
              <ul class="list-inline">${affiliationList}</ul>
            </div>
          </div>
        </div>
        `;
		container.insertAdjacentHTML("beforeend", html);
	} );


}

loadDataSource();