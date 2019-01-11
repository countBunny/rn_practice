/**
 * Class Person
 */
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

var reader = new Person('John Smith');
reader.getName();

function Author(name, books) {
    Person.call(this, name);
    this.books = books;
}

Author.prototype = new Person();
Author.prototype.constructor = Author;
Author.prototype.getBooks = function(){
    return this.books;
};

