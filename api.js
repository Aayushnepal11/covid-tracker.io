
const btn = document.querySelector('#Search');
const search = document.getElementById('country');
const newCases = document.getElementById('newCases');
const recovery = document.getElementById('recovery');
const death = document.getElementById('death');
const total = document.getElementById('total');
const taotalRecovery = document.getElementById('totalRecovery');
const total_death = document.getElementById('total_death');

// var data = fetch(api_url);
// console.log(data);


btn.addEventListener('click', function onclick(){
    if (search.value != "") {
        const api_url = "https://corona.lmao.ninja/v2/countries/" + `${search.value}`;
        fetch(api_url).then(response => response.json()).then(data => {
            newCases.innerText = data.todayCases;
            recovery.innerText = data.todayRecovered;
            death.innerText = data.todayDeaths;
            total.innerText = data.cases;
            taotalRecovery.innerText = data.recovered;
            total_death.innerText = data.deaths;
            search.value = "";
        });
    }
    else{
        document.getElementById('Validation').innerHTML = "Your Country Name...!";
    }
});
