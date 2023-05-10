console.log("favorite page");

const req= new XMLHttpRequest();
const public_key='d26095113bad8898ea92d12b937d9427';
const private_key='6b0ef2ee6ed5924bdde0073218b3254e3499559d'


const ts=Date.now();
// console.log(ts);
const st=ts+private_key+public_key;

var hash =  CryptoJS.MD5(st).toString();
console.log("hash : ",hash);

console.log(req);
const url=`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${public_key}&hash=${hash}`;
console.log(url);

// req.open("GET", url);
// req.send();

// var data='';

// req.onload=()=>{}

var output=''
console.log(localStorage.length);

 async function favoritesFetcher(){
            for( i in localStorage){
            
                var search=(i.split("-",2))
                if(search[0]=='character'){
                    // document.getElementById('row').innerHTML='<h1>nitesh</h1>'
                    const name=search[1]
                    console.log(name);
                    const xhr=new  XMLHttpRequest()
                    const marvell=`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=${ts}&apikey=${public_key}&hash=${hash}`
                     xhr.open('GET',marvell,true)
                    console.log(marvell);
                    onloadstart= ()=>{
                    console.log("character loading !!")
                    }
                    xhr.onerror=async function(){
                    console.log("onload error ");
                    }
                    xhr.onload=function(){
                    if(this.status==200){
                        console.log("data fetched");
                       
                        const results=JSON.parse(this.responseText);
                        console.log(results);
                            if(results["data"].count==0){
                                // document.getElementById("loading").innerHTML=
                                // `<h2> No results for the search  ${name}</h2>`
                                console.log("result data is 0")
                            }
                            else if(results==undefined || results.length==0){
                                // document.getElementById("loading").innerHTML=
                                // `<h2> It seems that there is some server issues !! Try after few minutes ...... </h2>`
                                console.log("undefined");
                            }
                            else {
                                const characterDetails=results["data"].results[0];
                                const characterId=characterDetails.id ;
                                var chName=`${characterDetails.name}`
                                document.getElementById('row').innerHTML='<h2>gh</h2>'
                                
                                // var output='';
                                    output+=`<div class="card" style="width: 20rem; background-color:black; color:white">
                                                <img class="card-img-top" src="${characterDetails.thumbnail["path"]}.${characterDetails.thumbnail["extension"]}" alt="Card image cap" style="height:14rem; width:17rem;">
                                                <div class="card-body">
                                                
                                                <div class="col-md-12 text-center" id="component">
                                                 <h3 class="animate-charcter">${characterDetails.name}</h3>
                                                </div>
                                                <a href="#" style="float:right;" onClick="favoriteDelete(${characterId})"><img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" style="height:30px; width:30px"></img></a>
                                                </div>
                                             </div> `
                                            // console.log("23:",output);
                                            document.getElementById('row').innerHTML=output
                                            
                                            // console.log("hey :",document.getElementById('row').innerHtml)

                                            

                                

                            }

                        
                    }
                    else{
                    // document.getElementById("loading").innerHTML=
                        // '<h2> Your search 404  ...... </h2>'
                        console.log("404");

                    }
                    }
                    xhr.onloadend=function(){
                        // document.getElementById("loading").innerHTML=
                        // '<h2> Your search results are here  ...... </h2>
                        // '
                        console.log("loading end");
                    }
                    xhr.send();
                
                }
                else if(search[0]=='comics'){
                    console.log('cm');

                    const name=search[1]
                    console.log(name);
                    const xhr=new  XMLHttpRequest()
                    const marvell=`https://gateway.marvel.com:443/v1/public/comics/${localStorage[i]}}?ts=${ts}&apikey=${public_key}&hash=${hash}`
                    console.log("here is marbell",marvell)
                    xhr.open('GET',marvell,true)
                    console.log("2:",marvell);
                    onloadstart= ()=>{
                    console.log("2:character loading !!")
                    }
                    xhr.onerror=async function(){
                    console.log("2:onload error ");
                    }
                    xhr.onload=function(){
                    if(this.status==200){
                        console.log("data fetched");
                       
                        const results=JSON.parse(this.responseText);
                        console.log("2:",results);
                            if(results["data"].count==0){
                                // document.getElementById("loading").innerHTML=
                                // `<h2> No results for the search  ${name}</h2>`
                                console.log("result data is 0 2")
                            }
                            else if(results==undefined || results.length==0){
                                // document.getElementById("loading").innerHTML=
                                // `<h2> It seems that there is some server issues !! Try after few minutes ...... </h2>`
                                console.log("undefined");
                            }
                            else {
                                const characterDetails=results["data"].results[0];
                                const characterId=characterDetails.id ;
                                var chName=`${characterDetails.name}`
                                document.getElementById('row').innerHTML='<h2>gh</h2>'
                                
                                // var output='';
                                    output+=`<div class="card" style="width: 20rem; background-color:black; color:white">
                                                <img class="card-img-top" src="${characterDetails.thumbnail["path"]}.${characterDetails.thumbnail["extension"]}" alt="Card image cap" style="height:14rem; width:"15rem;">
                                                <div class="card-body">
                                                
                                                <div class="col-md-12 text-center" id="component" style="float:left; text-align:left;">
                                                 <h3 class="animate-charcter" style="font-size: 0.9rem;">${characterDetails.title}</h3>
                                                </div>
                                                <a href="#" style="float:right;" onClick="favoriteDelete(${characterId})" ><img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" style="height:30px; width:30px"></img></a>
                                                </div>
                                             </div> `
                                            // console.log("23:",output);
                                            document.getElementById('row').innerHTML=output
                                            
                                            // console.log("hey :",document.getElementById('row').innerHtml)

                                            

                                

                            }

                        
                    }
                    else{
                    // document.getElementById("loading").innerHTML=
                        // '<h2> Your search 404  ...... </h2>'
                        console.log("404");

                    }
                    }
                    xhr.onloadend=function(){
                        // document.getElementById("loading").innerHTML=
                        // '<h2> Your search results are here  ...... </h2>
                        // '
                        console.log("loading end");
                    }
                    xhr.send();
                }

                


            }
            // console.log(output)
//             var value=document.getElementsByClassName('.row')
//             console.log(value)
}


function favoriteDelete(id){
    console.log("we are in delete ",id);
    for(i in localStorage){
        if(localStorage[i]==id){
            localStorage.removeItem(i)
            break ;
        }
    }
    window.location.replace('favorites.html')
}
