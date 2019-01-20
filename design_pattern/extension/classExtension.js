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
    // Person.call(this, name);
    Author.superClass.constructor.call(this, name);
    this.books = books;
}

extend(Author, Person);

Author.prototype.getBooks = function(){
    return this.books;
};

var author = [];
author[0] = new Author('Dustin Diaz', ['JavaScript Design Pattern']);
author[1] = new Author('Ross Harmes', ['JavaScript Design Pattern']);

author[1].getName();
author[1].getBooks();

function extend(subClass, superClass){
    let F = function(){};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    //将superClass绑在subClass上
    subClass.superClass = superClass.prototype;
    if(superClass.prototype.constructor == Object.prototype.constructor){
        superClass.prototype.constructor = superClass;
    }
}

//原型式继承
var Person = {
    name: 'default name',
    getName: function(){
        return this.name;
    }
}
//该对象的原型对象会被设置成Person
var reader = clone(Person);
alert(reader.getName());
reader.name = 'John Smith';
alert(reader.getName());

var Author = clone(Person);
Author.books = [];
Author.getBooks = function(){
    return this.books;
}
var author = [];
author[0] = clone(Author);
author[0].name = 'Dustin Diaz';
author[0].books = ['JavaScript Design Patterns'];

author[1] = clone(Author);
author[1].name = 'Ross Harmes';
author[1].books = ['JavaScript Design Patterns'];

author[1].getName();
author[1].getBooks();

var CompoundObject = {};
CompoundObject.string1 = 'default value'
CompoundObject.createChildObject = function(){
    return {
        bool: true,
        num: 10,
    }
}
CompoundObject.childObject = CompoundObject.createChildObject();

var compoundObjectClone = clone(CompoundObject);
compoundObjectClone.childObject = CompoundObject.createChildObject();
compoundObjectClone.childObject.num = 5;

/**
 * 根据原型对象创建新对象
 * @param {原型对象} object 
 */
function clone(object){
    function F(){};
    F.prototype = object;
    return new F;
}