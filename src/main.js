// Please do not share or post this api key anywhere,
// Your JavaScript will go here, you can view api information at
// http://www.omdbapi.com/, but the short of it is you'll need to
// send an "s" param with your query, an "apiKey" which is provided above
// and a "type" param. The api also accepts "page" as a parameter, and
// accepts standard numbers as arguments (i.e. page=1)

  var search = document.getElementById("searching");
  search.addEventListener("click", myFunction) 

function myFunction() {
    var x = document.getElementById("searchMovie").value;
    document.getElementById("movieResult").innerHTML = x;
    console.log(x)

   url = 'https://www.omdbapi.com/?apikey=87ee28c1&s=' + x + '&type=movie'

fetch(url).then(
    response => response.json()
  ).then(data =>{

    //Get total values of an array
  var arrayCount = Object.keys(data.Search).length; 

  console.log(arrayCount);
  
  let element = document.getElementById('movieResult')
  
  var arr = [];
  var a = 0;

  for(a=0;a<arrayCount;a++) {

    arr[a] = data.Search[a].Year;
    
    element.innerHTML += `
    <div class="block custom-width"> 
    <img src='${data.Search[a].Poster}'/>
    <h4>${data.Search[a].Title}</h4>
    <h3>${data.Search[a].Year}</h3>
    <a class="seeMovie" href="${data.Search[a].imdbID}">More</a>
    </div>
    `
  } 

    console.log(data)
    }
  )
  .catch(err=>console.log(err))
}

