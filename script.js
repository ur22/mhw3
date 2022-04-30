/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const choices = document.querySelectorAll('.choice-grid div');
 for (let choice of choices){
        choice.addEventListener('click', onClick);
    }
let result = document.querySelector('#result');
result.classList.add('hidden');
const checkbox = document.querySelector('.checkbox');
const button = document.querySelector('#restart');
button.addEventListener('click', restartQuiz);
let risp = {};   

/*************************/


function restartQuiz(){
result.classList.add('hidden');
for(let choice of choices){
    choice.addEventListener('click', onClick);
    choice.classList.remove('notchosen');
    choice.classList.remove('chosen');
    choice.getElementsByClassName("checkbox")[0].src = "./images/unchecked.png";

}

risp={};

}

function checkChoices(){
if(risp.one === risp.two || risp.three === risp.three){
  return risp.one;
}
if(risp.two === risp.one || risp.two === risp.three){
  return  risp.two;
}
if(risp.three === risp.one || risp.three === risp.two){
  return risp.three;
}
 return risp.one;
}


function displayPersonality(){
    const personality = checkChoices();
    result.querySelector('h1').textContent= "In base alle scelte che hai fatto, ti consiglio di ascoltare questo album dei Linkin Park:";
    result.querySelector('p').textContent= RESULTS_MAP[personality].desc;
    result.classList.remove('hidden');
}


function onClick(event){
    let choice = event.currentTarget;
    const checkbox = choice.querySelector(".checkbox");
    const answer =choice.dataset.choiceId;
    const all= choice.parentNode.querySelectorAll('div');

    if(event.currentTarget.dataset.questionId === "one")
    search();

   for(let i=0; i<choices.length; i++){
       if(choices[i].dataset.questionId === choice.dataset.questionId){
           if(choices[i].dataset.choiceId === choice.dataset.choiceId){
            choices[i].classList.remove('notchosen');
            const checkbox= choices[i].querySelector(".checkbox");
            choices[i].classList.add('chosen');
            checkbox.src="images/checked.png";
           }else{
            choices[i].classList.add('notchosen');
            const checkbox= choices[i].querySelector(".checkbox");
            choices[i].classList.remove('chosen');
            checkbox.src="images/unchecked.png";
           }
           
       }

    }
    risp[choice.dataset.questionId]=choice.dataset.choiceId;
    

    if(risp.one && risp.two && risp.three){
        for (let choice of choices){
            choice.removeEventListener('click', onClick);
        }
       displayPersonality(checkChoices());
       search_album();
    }
}


   
function onJson_text(json) {   
  let fact = json.text; 
  document.getElementById("curiosita").innerHTML = fact;
     }

function search(){
 //console.log('Eseguo ricerca fatti riguardanti gatti');
 // Esegui fetch
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then(onResponse)
    .then(onJson_text); 
     }

function onResponse(response) {
        //console.log('Risposta ricevuta');
        return response.json();
      }



function onJson(json){
    //console.log('JSON ricevuto');
    console.log(json);
}




function onJson2(json){
    //console.log('JSON ricevuto');
    console.log(json);
    const precalbum = document.querySelector('#album-view');
    precalbum.innerHTML = ''; 
    const results = json.albums.items;
    const album_data= results[0];
    const title = album_data.name;
    const selected_image = album_data.images[0].url;
    const albumm = document.createElement('div');
    albumm.classList.add('albumm');
    const img = document.createElement('img');
    img.src = selected_image;
    const caption = document.createElement('span');
    caption.textContent = title;
    albumm.appendChild(img);
    albumm.appendChild(caption);
    precalbum.appendChild(albumm);
}


function search_album(event){
    const personality = checkChoices();
    console.log("https://api.spotify.com/v1/search?type=album&q=" + RESULTS_MAP[personality].album);
    fetch("https://api.spotify.com/v1/search?type=album&q=" + RESULTS_MAP[personality].album,
    {
      headers:
      {
        'Authorization': 'Bearer ' + token
      }
    }
  ).then(onResponse).then(onJson2);
}


function onTokenJson(json){
    console.log(json)
    token = json.access_token;
}

function onTokenResponse(response){
    return response.json();
}

//credenziali
var client_id = '640ec0d26c2340f3bba0694489fe47a5'; // Your client id
var client_secret = '095e2a1c19ab443fa5ebbc2f9fd454ef'; // Your secret

let token;


fetch("https://accounts.spotify.com/api/token",
	{
   method: "post",
   body: 'grant_type=client_credentials',
   headers:
   {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
   }
  }
).then(onTokenResponse).then(onTokenJson);























