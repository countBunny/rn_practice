import Interface from "../mock_interface/interface";

var Publication = new Interface('Publication', ['getIsbn', 'setIsbn', 'getTitle',
    'setTitle', 'getAuthor', 'setAuthor', 'display']);

var Book = (function () {
    var numOfBooks = 0;
    var UPPER_BOUND = 100;

    var constants = {
        UPPER_BOUND: 100,
        LOWER_BOUND: -100,
    }
    function _checkIsbn(isbn) {
        if (isbn == undefined || typeof isbn != 'string') {
            return false;
        }
        isbn = isbn.replace(/-/, ''); //Remove dashes.
        if (isbn.length != 10 && isbn.length != 13) {
            return false;
        }
        var sum = 0;
        if (isbn.length === 10) {
            if (!isbn.match(/^\d{9}/)) {
                return false;
            }
            for (var i = 0; i < 9; i++) {
                sum += isbn.charAt(i) * (10 - i);
            }
            var checksum = sum % 11;
            if (checksum === 10) checksum = 'X';
            if (isbn.charAt(9) != checksum) {
                return false;
            }
        }
        else {// 13 digit ISBN
            if (!isbn.match(/^\d{12}/)) {
                return false;
            }
            for (var i = 0; i < 12; i++) {
                sum += isbn.charAt(i) * (i % 2 === 0 ? 1 : 3);
            }
            var checksum = sum % 10;
            if (isbn.charAt(12) != checksum) {
                return false;
            }
        }

        return true;
    }

    var ctor = function (newIsbn, newTitle, newAuthor) {
        var _isbn, _title, _author;
        this.getIsbn = function () {
            return _isbn;
        }
        this.setIsbn = function (isbn) {
            // if (!_checkIsbn(isbn)) throw new Error('Book: Invalid ISBN.');
            _isbn = isbn;
        }
        this.getTitle = function () {
            return _title;
        }
        this.setTitle = function (title) {
            _title = title || 'No title specified';
        }
        this.getAuthor = function () {
            return _author;
        }
        this.setAuthor = function (author) {
            _author = author || 'No author specified';
        }
        numOfBooks++;
        if (numOfBooks > 50) throw new Error('Book: Only 50 instances of Book can be created.');
        this.setIsbn(newIsbn);
        this.setAuthor(newAuthor);
        this.setTitle(newTitle);
    };
    ctor.getUPPER_BOUND = function () {
        return UPPER_BOUND;
    }
    ctor.getConstant = function(name){
        return constants[name];
    }
    return ctor;
})();

//Public, non-privileged methods.
Book.prototype = {
    display: function () {

    },
}

//Public static method.
Book.convertToTitleCase = function (inputString) {

};

export var Book;

var theHobbit = new Book('0-395-07122-4', 'The Hobbit', 'J.R.R.Tolkien');
theHobbit.display();

function foo() {
    var a = 10;

    function bar() {
        a *= 2;
        return a;
    }

    return bar;
}

var baz = foo();//baz is now a reference to function bar.
baz();
baz();
baz();//80

var blat = foo();
blat();//20

Book.getUPPER_BOUND();
Book.getConstant('UPPER_BOUND');