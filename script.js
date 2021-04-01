document.write("hello, world!");
function sayHello(){
  var response = prompt("What's your name?");
  alert("晚安 "+response+", good night!");
}
function add(a,b){
  return a+b;
}
console.log(add(20,30));
console.log(add(120,130));

function showTopic(){
  var x=document.getElementById('demo');
  x.style.fontSize="25px";
  x.style.color="red";
}

var movies = ["Avengers","Captain Marvel","Black Panther",
"Spiderman"];
movies[0]="wonder women";
movies.push("Avengers");
movies.pop();
console.log(movies);

var movie ={
  title:"Captain Marvel",
  time:"2pm"
};
alert(movie.title);
movie.status="unavaliable";
console.log(movie);

var movieDetails=[
  {title:"Avengers",
   time:"12pm",
   status:"available"},
  {title:"Captain Marvel",
   time:"4pm",
   status:"unavailable"},
   {title:"Black Panther",
    time:"4pm",
    status:"available"},
   {title:"Spiderman",
    time:"6pm",
    status:"available"}
];

/*var fruits=[];
for (var i = 0; i < 3; i++) {
  fruits[i]=prompt("Enter fruit");
}
alert("fruits contains"+fruits);*/

for (var movie of movieDetails){
  if(movie.status === "available"){
    console.log("The movie "+movie.title+"plays at "+movie.time)
  }
  else{
    console.log("Sorry, the movie " + movie.title+"is sold out.")
  }
};
