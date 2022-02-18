const picsumIds = [
  144,
  164,
  193,
  214,
  221,
  234,
  238,
  259
];


let output = '';


for(i=0; i <= picsumIds.length - 1; i++){
  
 let building = `<img src="https://picsum.photos/id/${picsumIds[i]}/300/300" alt="lorem picsum"></img>`;

output += `${building}`;

}

document.querySelector(".gallery").innerHTML = `${output}`;