let cityes={
    tehran:{city:'tehran',temp:35,weather:'sunny',humidity:23,windSpead:32},
    Mashhad:{city:'Mashhad',temp:41,weather:'sunny',humidity:28,windSpead:31},
    tabriz:{city:'tabriz',temp:26,weather:'windy',humidity:30,windSpead:40},
    rasht:{city:'rasht',temp:28,weather:'rainy',humidity:43,windSpead:38},
    shiraz:{city:'shiraz',temp:44,weather:'sunny',humidity:18,windSpead:21},
}
let bodybc=document.getElementById('bc');
let searchbar=document.querySelector('.search-bar');
let resulttemp=document.querySelector('.temp');
let resultcity=document.querySelector('.city');
let resultweather=document.querySelector('.description');
let resulthumidity=document.querySelector('.humidity');
let resultwindspeed=document.querySelector('.wind');

  
  let pecture=['./sunset-silhouette-frames-city-skyline-nature-generated-by-ai_188544-25138.jpg','./wepik-export-20230714120237Aocx.jpeg','./wepik-export-20230714115623k2Ne.jpeg','./wepik-export-202307141224174wv4.jpeg']
setInterval(function(){
let i=Math.floor(Math.random()*4);
bodybc.style.backgroundImage='url('+pecture[i]+')';
},3000)
 
function search(){
    let all=document.querySelector('.weather');
all.classList.remove('loading');
    let n=cityes[searchbar.value];
    resulthumidity.innerHTML=''
    resultcity.innerHTML=n.city;
    resulttemp.innerHTML=n.temp +' c';
    resultweather.innerHTML=n.weather;
    resulthumidity.innerHTML='humidity : '+n.humidity;
    resultwindspeed.innerHTML='windSpead : '+n.windSpead;
    
}