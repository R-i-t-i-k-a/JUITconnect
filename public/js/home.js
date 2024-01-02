const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
// Display mobile menu
const mobieMenu = () =>{
menu.classList.toggle('is-active')
menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobieMenu)
function myFunction() {
document.getElementById("demo").innerHTML = "Hello World";
}
let availablekeywords=[
    'HTML',
    'Easy tutorials',
    'where to learn',
    'geek for geeks',
    'how to create website',
    'where in nt ',
    'wnvihyd chfrg uidv',
    'which of ther are correct',
    'whie doing amuyt bmb',
    'whegibmv furgv oejbv',
    'wloiuqdbp083dxcb fieoaxmc',
    'w0988739w167timmb hkiifvm',

];
const resultsBox=document.querySelector(".result-box");
const inputBox=document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result=[];
    let input = inputBox.value;
    if(input.length){
        result=availablekeywords.filter((keyword)=>{
        return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
}
display(result);
if(!result.length){ 
    resultsBox.innerHTML='';
}
}
function display(result){
    const content= result.map((list)=>{
   return"<li onclick=selectInput(this)>"+list+"</li>";
    });
    resultsBox.innerHTML="<ul>"+content.join('')+"</ul>";
}
 function selectInput(list){
    inputBox.value=list.innerHTML;
    resultsBox.innerHTML='';
 }