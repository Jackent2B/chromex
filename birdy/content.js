console.log("Birds all around");

let photos = [
    "bird1.jpg",
    "bird2.jpg",
    "bird3.jpg",
    "bird4.jpg"
]

let allimgs = document.getElementsByTagName('img');

for(img of allimgs){
    //console.log(img.src);
    let i = Math.round(Math.random() * photos.length);
    let file = "birds/"+photos[i];
    let url = chrome.extension.getURL(file);
    img.src = url;
}