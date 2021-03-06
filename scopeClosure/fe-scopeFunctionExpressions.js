function thisIsAFunctionDeclaration() {
  var rule = "These attach their marble(identifier) to their enclosing scope";
  var rule2 = "function expression always starts with the keyword: function";
}

functionExpressions;

var functExp = function thisIsAFunctionExpression() {
  //  this function adds its identifier to its own scope
  // Meaning that 'thisIsAFunctionExpression' is not available in the global scope
  console.log(thisIsAFunctionExpression); // works
};

console.log(functExp); // Works
console.log(thisIsAFunctionExpression); // Returns ReferenceError

namedFunctionExpression;

are = "function expression that has been given a name";

var clickHandler = function () {
  // anonymous and not recommended
  // these often get used as callbacks passed inline to other functions .map, .then etc
};

var buttonHandler = function buttonHandler() {
  // named function expression
};

claim = "always prefer the named function expression";

reasons = {
  one:
    "name creates a reliable self reference for: recursion, eventHandler, access to properties",
  two: "more debuggable stack traces",
  three: "more self-documenting code",
};

arrowFunctions;

addedIn = "added in ES6";

about = {
  anonymous: "arrow functions do not have names = they are anonymous",
  mainPurpose:
    "designed to TODO, while writing less code is not the primary reason ",
  cornerCaces: "15 plus corner cases",
};

illustration;
var ids = people.map((person) => person.id); // Arrow function with no name

var ids = people.map(function getId(person) {
  // Named function expression
  return person.id;
});

functionTypesHierarchy;

namedFunctionDeclaration > namedFunctionExpression > AnonymousArrowFunction;
