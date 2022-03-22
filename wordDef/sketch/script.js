let bgPage = chrome.extension.getBackgroundPage();
let word = bgPage.word;
// console.log(word);

let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
getData();
async function getData(){
    let data = await fetch(url);
    let res = await data.json();
    console.log(res);
    const para = document.createElement("p");
    if(res.title == "No Definitions Found"){
        para.innerText = "This is a paragraph";
    }
    else{
        let meaning = res[0].meanings[0].definitions[0].definition;
        para.innerText = meaning;
    }
    document.body.appendChild(para);
}






/*
if(res.title == "No Definitions Found"){
    const para = document.createElement("p");
    para.innerText = "Don't Know";
    document.body.appendChild(para);
}
else{
    let meaning = res[0].meanings[0].definitions[0].definition;
    const para = document.createElement("p");
    para.innerText = "Don't Know";
    document.body.appendChild(para);
    //createP(`Meaning: "${meaning}"`).style('font-size','20px');
}
*/