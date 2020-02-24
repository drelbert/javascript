function thisIsAFunctionDeclaration() {
    var rule = 'These attach their marble(identifier) to their enclosing scope'
}


functionExpressions

var functExp = function thisIsAFunctionExpression() {
    var rule = "Add their marble(identifier) to their own scope"
    console.log(thisIsAFunctionExpression);
};

namedFunctionExpression = "function expression that has been given a name"

var clickHandler = function() {
    // anonymous and not recommended
};

var keyHandler = function keyHandler(){
    // named function expression
}

claim = "always prefer the named function expression";

reasons = {
    one: "name creates a reliable self reference for: recursion, eventHandler, access to properties",
    two: "more debuggable stack traces",
    three: "more self-documenting code"
}


arrowFunctions = "added in ES6"

about = {
    anonymous: "arrow functions do not have names",
    mainPurpose: "not to write less code, but ",
    conerSaces: "15 plus corner cases"
}

illutration 
var ids = people.map(person => person.id); // Arrow function with no name

var ids = people.map(function getId(person){  // Named function expression
    return person.id;
});


functionTypesHierarchy

namedFunctionDeclaration > namedFunctionExpression > AnonymousArrowFunction