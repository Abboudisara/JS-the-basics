function printFavoriteBooks(livre1,livre2){
    this.livre1="livre1";
    this.livre2="livre2";
}console.log("secret","maliable");

function addFavoriteBook(){
    var livre3= ['terre'];
    addFavoriteBook.push("terre")
}console.log("terre");

class Bookshelf{
    livre1;
    livre2;
    livre3;

    constructor(livre1,livre2){
        this.livre1=livre1;
        this.livre2=livre2;
        this.livre3=livre3;

    }ajout(){
        return this.livre1 + ":" + this.livre2 + ":"+this.livre3;
    }
 
} console.log("secret","maliable","terre");

function loadBooks(livre1,livre2,livre3){
    
    this.livre1=livre1;
    this.livre2=livre2;
    this.livre3=livre3;
    fakeAjax.call("https://www.googleapis.com/books/v1/volumes?q=search+terms");

    this.ajout=function(){
      return this.livre1 + ":"+this.livre2+":"+this.livre3;
    }
}console.log("mosque","tortue","camion");

function fakeAjax(){
    var api =["https://www.googleapis.com/books/v1/volumes?q=search+terms"]
    
}console.log("https://www.googleapis.com/books/v1/volumes?q=search+terms");




