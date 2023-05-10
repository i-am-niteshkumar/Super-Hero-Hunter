

const req= new XMLHttpRequest();
const public_key='d26095113bad8898ea92d12b937d9427';
const private_key='6b0ef2ee6ed5924bdde0073218b3254e3499559d'

var curr_Comic_Char_ToShow=null
const ts=Date.now();
// console.log(ts);
const st=ts+private_key+public_key;

var hash =  CryptoJS.MD5(st).toString();
console.log("hash : ",hash);

console.log(req);
const url=`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${public_key}&hash=${hash}`;
console.log(url);

req.open("GET", url);
req.send();

var data='';

req.onload=()=>{}



function characters(){
	
	console.log("button fire");
	var urlQueryParams=new URLSearchParams(window.location.search);

	// console.log(urlQueryParams);

	var searchedQuery=urlQueryParams.get("search")
	console.log(searchedQuery);
	var name=document.getElementById("search").value
	console.log("idhr : ",name);


	if(searchedQuery!=null && searchedQuery!=" "){
		console.log("1");
		document.getElementById("search").innerText=searchedQuery;
		Connection(searchedQuery);
	}
	else if(name!=null && name!=" "){
		console.log("2");
		document
		.getElementById("searchForm")
		.addEventListener("submit",Connection(name));
	}
	else{
		console.log("3");
		document.getElementById("characterSection").innerHTML=
		`<h2> Enter the search ..... </h2>`
	}


}

function Connection(name){
	console.log("hey dude this is the connection")

	const xhr=new XMLHttpRequest();
	const marvelurl=`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=${ts}&apikey=${public_key}&hash=${hash}`
	xhr.open('GET',marvelurl,true)
	console.log(marvelurl);

	xhr.onloadstart=()=>{
		document.getElementsByClassName('comics-character').innerHTML=`<h1>COMICS</h1>`
      document.getElementById("loading").innerHTML=
	  '<h2> search for superhero ...... </h2>'
	}
	xhr.onerror=function(){
     console.log("onload error ");
	}
	xhr.onload=function(){
      if(this.status==200){
		console.log("data fetched");
		const results=JSON.parse(this.responseText);
		console.log(results);
            if(results["data"].count==0){
				document.getElementById("loading").innerHTML=
				`<h2> No results for the search  ${name}</h2>`
			}
			else if(results==undefined || results.length==0){
				document.getElementById("loading").innerHTML=
		        `<h2> It seems that there is some server issues !! Try after few minutes ...... </h2>`
			}
			else {
				const characterDetails=results["data"].results[0];
				const characterId=characterDetails.id ;
				var name=`${characterDetails.name}`
				var output='';
				output=`<div>
				<h2>${characterDetails.name}</h2>
				<h4>${characterDetails.description}</h4>
				<a onClick="singleComic()" href="comics.html?character=${characterId}" ><img src="${characterDetails.thumbnail["path"]}.${characterDetails.thumbnail["extension"]}"/></a>
				<a href="#" onClick="favorites('character-${characterDetails.name}',${characterDetails.id})" style="margin-top:3rem;">Add To Favorites </a>
				</div>`

				document.getElementById("characterSection").innerHTML=output;
				
				comics(characterId);

			}

		
	  }
	  else{
		document.getElementById("loading").innerHTML=
		'<h2> Your search 404  ...... </h2>'
	  }
	}
	xhr.onloadend=function(){
		document.getElementById("loading").innerHTML=
		'<h2> search for superhero ends  ...... </h2>'
	}
	xhr.send();

	
}


function comics(characterId){

	const xhr=new XMLHttpRequest();
	 const comicsUrl=`https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=${ts}&apikey=${public_key}&hash=${hash}`
	 console.log("comic url : ",comicsUrl);
	 xhr.open('GET',comicsUrl,true)
	 xhr.onloadstart=()=>{

		document.getElementById("comic-section").innerHTML=`<h2>fetching the comics .... </h2>`
	 }
	 xhr.onerror=()=>{
		document.getElementById("comic-section").innerHTML=`<h2> there is some server issues while loading comics </h2>`
	 }

	 xhr.onload=function(){
	    if(this.status==200){
			console.log("comics fetched !!");
			// console.log(JSON.parse(this.responseText));
			const results=JSON.parse(this.responseText);
			const comics=results["data"].results;

			console.log("comics loaded : ",comics);
			if(results["data"]==0){
				document.getElementById("comic-section").innerHTML=`<h2>No comics found !! </h2>`
			}else{
                var output='';
				for(const i in comics){
					if(comics.hasOwnProperty(i)){
						var data=comics[i];

						
                       var url=`comics.html?comic=${data.id}`
						output+=`<div>
						<h2 style="color:white;"> ${data.title} </h2>
						<h4 style="color:greenyellow;"> ${data.description} </h4>
                        <a href=${url} onClick="singleComic()" ><img src=${data.thumbnail["path"]}.${data.thumbnail["extension"]} style="margin-bottom:7rem;"></img></a>
						<a href='#' onClick="favorites('comics-${data.title}',${data.id})">Add To Favorites </a> </div>
						`
					}
				}
				document.getElementById("comic-section").innerHTML=output ;


			}
		}
		else{
			console.log("error occur in comics fetch");
		}
	 }
	 xhr.onloadend=()=>{

	 }
	 xhr.send();
}


function singleComic(){
   
    window.location.replace('comics.html')

	
    
}


function pageChanger(id){
	
	window.location.replace('comics.html')
	
	
}

function favorites(name,item){
	console.log("here",item,name);
	// console.log(item,name,id);
	localStorage.setItem(name,item);
}