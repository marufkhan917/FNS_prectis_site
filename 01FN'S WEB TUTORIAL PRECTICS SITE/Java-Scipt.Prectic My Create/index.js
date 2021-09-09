//var and getElementById of using i know.
var Hello1 = document.getElementById("Hello");
    Hello1.innerHTML = "Hi";

var MyName1 = document.getElementById("MyName");
    MyName1.innerHTML = "My name is Md Mobarok Hossen";

var Bye1 = document.getElementById("Bye");
    Bye1.innerHTML = "Good ByE"

document.querySelector("#Bye1").innerHTML = "ByE-ByE";

//var and getElementByTagname of using i know.
document.getElementsByTagName("h2")[0].innerHTML = "How are you?";
document.getElementsByTagName("h2")[1].innerHTML = "Fine";

//var and getElementByTagname of using i know.
document.getElementsByclassName("good")[0].innerHTML = "Good Morning";
document.querySelector("#quary").innerHTML = "Query Selector Precktic";

//button using in javascript.
function button(){

    var paravar = document.querySelector("#para").innerHTML = "I am para";
  }

//
var myvar = document.querySelector("image1id");
function imageb1(){
    myvar.src = "image/image1.jpg";
  }

var myvar = document.querySelector("image1id");
function imageb2(){

    myvar.src = "image/image2.jpg";

  }

var photos = ["image/image1.jpg", "image/image2.jpg", "image/image3.jpg"];
var imageTag = document.querySelector("img");

    var count = 0;
  function next(){
    count++;
    if(count>=photos.length){
        count=0;
        imageTag.src = photos[count];
    }else{
        imageTag.src = photos[count];
    }


  }

  function prev(){
    count--;
    if(count < 0 ){
        count = photos.length - 1;
        imageTag.src = photos[count];
    }else{
        imageTag.src = photos[count];
    }


  }
  ///////////////////
function addStyle(){

    var name = document.querySelector("#myName");
    name.classList.add("myName");
//     name.style.fontSize = "30px";
//     name.style.fontStyle = "italic";
//     name.style.fontWeight = "bold";
}
function removestyel(){

  var name = document.querySelector("#myName");
  name.classList.remove("myName");

}


console.log(this.screen["availWidth"]);//this code my windos how many size declaret.
console.log(this.document);//this code my document all code show console.
console.log(this.document["all"]);//this code As kind as html code show console.
