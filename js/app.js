

const loadAi = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAi(data.data.tools);
    displayAi1(data.data.tools);
    console.log(data.data.tools);
}
const toggleSpinner = isLoading =>{
  const loaderSection = document.getElementById('loader');
  if(isLoading === true){
    loaderSection.classList.remove('d-none');
  }
  else{
    loaderSection.classList.add('d-none');
  }
}
toggleSpinner(true);
const displayAi = aiS =>{
    const showAll = document.getElementById('showAll');
    if(aiS.length > 6){
      aiS = aiS.slice(0,6);
      showAll.classList.remove('d-none');
    }
    else{
      showAll.classList.add('d-none');
    }
    
    const aiContainer = document.getElementById('Ai-container');
    aiS.forEach(ai => {
        const aiDiv = document.createElement('div');
        aiDiv.classList.add('col', 'mb-4');
        aiDiv.innerHTML = `
      <div class="card h-100">
      <img src="${ai.image}" class="card-img-top" alt="...">
      <div class="card-body">
       <h3>
       Features
       </h3>
       <p>1.${ai.features[0]}</p>
       <p>2.${ai.features[1]}</p>
       <p>3.${ai.features[2]}</p>
      </div>
      <div class="card-footer">
        <h5 class="card-title">${ai.name}</h5>
        <p>Id: ${ai.id}</p>
        <small class="text-body-secondary">published-in
        : ${ai.published_in}</small>
      </div>

        `;
        aiContainer.appendChild(aiDiv);
    });

    toggleSpinner(false); 
}


document.getElementById('showAll-btn').addEventListener('click', function(){
  toggleSpinner(false);

  
})

loadAi();