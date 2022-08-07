fetch('http://localhost:3000/api')
.then(data => data.json())
.then(data => displayData(data))

function displayData(array) {
    
    let main = document.getElementById('main');

    for (let i = 0; i < 398; i++) {
        
        let divcontainer = document.createElement('div');
        divcontainer.classList.add("container");
        main.appendChild(divcontainer);
        
        let divcompany = document.createElement('div')
        divcompany.classList.add("information");
        divcontainer.appendChild(divcompany);
        
        let h3company = document.createElement('div');
        h3company.innerText = "Company Name";
        h3company.classList.add("title");
        divcompany.appendChild(h3company)
        let divcompanyName = document.createElement('h4');
        divcompanyName.innerText = array[i].company_name;
        divcompanyName.classList.add("companyname");
        divcompany.appendChild(divcompanyName)

        
        let divemissions = document.createElement('div');
        divemissions.classList.add("information");
        divcontainer.appendChild(divemissions);
        
        let h3emissions = document.createElement('div');
        h3emissions.innerText = "Emissions";
        h3emissions.classList.add("title");
        divemissions.appendChild(h3emissions)
        let divemissionsvalue = document.createElement('div');
        divemissionsvalue.classList.add("valueflex");
        divemissions.appendChild(divemissionsvalue);
        let divvaluecotwo = document.createElement('div');
        divvaluecotwo.classList.add("value");
        divvaluecotwo.innerText = array[i].emissions;
        divemissionsvalue.appendChild(divvaluecotwo)
        let divvalueemissionsindex = document.createElement('div');
        divvalueemissionsindex.classList.add("value","indexlow");
        divemissionsvalue.appendChild(divvalueemissionsindex)
        divvalueemissionsindex.innerText = array[i].index_emissions;

        let divrating = document.createElement('div')
        divrating.classList.add("information");
        divcontainer.appendChild(divrating);

        let h3rating = document.createElement('div');
        h3rating.innerText = "Environmental Rating";
        h3rating.classList.add("title");
        divrating.appendChild(h3rating)
        let divratingvalue = document.createElement('div');
        divratingvalue.classList.add("valueflex");
        divrating.appendChild(divratingvalue)
        let divvaluerating = document.createElement('div');
        divvaluerating.classList.add("value");
        divvaluerating.innerText = array[i].rating;
        divratingvalue.appendChild(divvaluerating) 
        let divvalueratingindex = document.createElement('div');
        divvalueratingindex.classList.add("value", "indexhigh");
        divvalueratingindex.innerText = array[i].index_rating;
        divratingvalue.appendChild(divvalueratingindex)

        let divreturn = document.createElement('div');
        divreturn.classList.add("information");
        divcontainer.appendChild(divreturn);

        
        let h3return = document.createElement('div');
        h3return.innerText = "Return";
        h3return.classList.add("title");
        divreturn.appendChild(h3return)
        let divreturnvalue = document.createElement('div');
        divreturnvalue.classList.add("valueflex");
        divreturn.appendChild(divreturnvalue)
        let divvaluereturn = document.createElement('div');
        divvaluereturn.classList.add("value");
        divvaluereturn.innerText = array[i].return;
        divreturnvalue.appendChild(divvaluereturn)
        let divvaluereturnindex = document.createElement('div');
        divvaluereturnindex.classList.add("value", "indexhigh");
        divvaluereturnindex.innerText = array[i].index_return;
        divreturnvalue.appendChild(divvaluereturnindex)


        let divvol = document.createElement('div');
        divvol.classList.add("information");
        divcontainer.appendChild(divvol);

        
        let h3vol = document.createElement('div');
        h3vol.innerText = "Volatility";
        h3vol.classList.add("title");
        divvol.appendChild(h3vol)
        let divvolvalue = document.createElement('div');
        divvolvalue.classList.add("valueflex");
        divvol.appendChild(divvolvalue);
        let divvaluevol = document.createElement('div');
        divvaluevol.classList.add("value");
        divvaluevol.innerText = array[i].volatility;
        divvolvalue.appendChild(divvaluevol)
        let divvaluevolindex = document.createElement('div');
        divvaluevolindex.classList.add("value", "indexlow");
        divvaluevolindex.innerText = array[i].index_volatility;
        divvolvalue.appendChild(divvaluevolindex)
    }

    let indexlow = document.getElementsByClassName('indexlow');

    for (low of indexlow) {
        low.style.background = 'linear-gradient(0deg, rgba(53,141,7,1) 27%, rgba(255,0,0,1) 100%)'
    };

    let indexhigh = document.getElementsByClassName('indexhigh');

    for (high of indexhigh) {
        high.style.background = 'linear-gradient(180deg, rgba(53,141,7,1) 27%, rgba(255,0,0,1) 100%)'
    };

    let search = document.getElementById("search");
    search.addEventListener("keyup", searchfunc);

    function searchfunc() {
    let input = document.getElementById('search').value;
    input = input.toUpperCase();
    let text = document.getElementsByClassName('companyname');
    let div = document.getElementsByClassName('container');

    for (i = 0; i < text.length; i++) { 
        if (!text[i].innerText.includes(input)) {
            div[i].style.display="none";
        }
        else {
            div[i].style.display="flex";                 
        }
    }
    }
}



