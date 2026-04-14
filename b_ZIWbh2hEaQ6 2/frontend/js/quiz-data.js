/**
 * LEARN_X_CODE - Quiz Questions Database
 * 100+ Programming Questions across multiple languages
 */

const QUIZ_QUESTIONS = {
    python: [
        {
            id: 1,
            question: "What is the output of print(2 ** 3)?",
            options: ["6", "8", "9", "5"],
            correct: 1,
            explanation: "The ** operator is the exponentiation operator. 2 ** 3 = 2^3 = 8"
        },
        {
            id: 2,
            question: "Which of the following is used to define a function in Python?",
            options: ["function", "def", "fun", "define"],
            correct: 1,
            explanation: "In Python, the 'def' keyword is used to define functions."
        },
        {
            id: 3,
            question: "What is the correct way to create a list in Python?",
            options: ["list = (1, 2, 3)", "list = [1, 2, 3]", "list = {1, 2, 3}", "list = <1, 2, 3>"],
            correct: 1,
            explanation: "Lists in Python are created using square brackets []."
        },
        {
            id: 4,
            question: "What does the len() function do in Python?",
            options: ["Returns the length of an object", "Returns the last element", "Calculates logarithm", "None of the above"],
            correct: 0,
            explanation: "The len() function returns the number of items in an object."
        },
        {
            id: 5,
            question: "Which data type is immutable in Python?",
            options: ["List", "Dictionary", "Tuple", "Set"],
            correct: 2,
            explanation: "Tuples are immutable in Python, meaning their values cannot be changed after creation."
        },
        {
            id: 6,
            question: "What is the output of print('Hello'[1])?",
            options: ["H", "e", "l", "Error"],
            correct: 1,
            explanation: "String indexing starts at 0, so 'Hello'[1] returns 'e'."
        },
        {
            id: 7,
            question: "Which keyword is used to handle exceptions in Python?",
            options: ["catch", "except", "handle", "error"],
            correct: 1,
            explanation: "The 'except' keyword is used in Python for exception handling."
        },
        {
            id: 8,
            question: "What is the purpose of the 'self' parameter in Python class methods?",
            options: ["To refer to the current instance", "To create a new instance", "To delete an instance", "It's optional"],
            correct: 0,
            explanation: "The 'self' parameter refers to the current instance of the class."
        },
        {
            id: 9,
            question: "How do you start a comment in Python?",
            options: ["//", "/*", "#", "--"],
            correct: 2,
            explanation: "In Python, comments start with the # symbol."
        },
        {
            id: 10,
            question: "What is the output of print(type([]))?",
            options: ["<class 'tuple'>", "<class 'list'>", "<class 'dict'>", "<class 'set'>"],
            correct: 1,
            explanation: "[] creates an empty list, so type([]) returns <class 'list'>."
        },
        {
            id: 11,
            question: "Which method is used to add an element to a list?",
            options: ["add()", "insert()", "append()", "push()"],
            correct: 2,
            explanation: "The append() method adds an element to the end of a list."
        },
        {
            id: 12,
            question: "What is a lambda function in Python?",
            options: ["A named function", "An anonymous function", "A recursive function", "A built-in function"],
            correct: 1,
            explanation: "Lambda functions are small anonymous functions defined using the lambda keyword."
        },
        {
            id: 13,
            question: "What does the range(5) function return?",
            options: ["[0, 1, 2, 3, 4, 5]", "[1, 2, 3, 4, 5]", "Numbers from 0 to 4", "Numbers from 1 to 5"],
            correct: 2,
            explanation: "range(5) generates numbers from 0 to 4 (5 is excluded)."
        },
        {
            id: 14,
            question: "How do you create a dictionary in Python?",
            options: ["dict = []", "dict = {}", "dict = ()", "dict = <>"],
            correct: 1,
            explanation: "Dictionaries in Python are created using curly braces {}."
        },
        {
            id: 15,
            question: "What is the output of print(10 // 3)?",
            options: ["3.33", "3", "4", "3.0"],
            correct: 1,
            explanation: "The // operator performs floor division, returning the integer part (3)."
        },
        {
            id: 16,
            question: "Which module is used for regular expressions in Python?",
            options: ["regex", "re", "regexp", "pattern"],
            correct: 1,
            explanation: "The 're' module provides regular expression operations in Python."
        },
        {
            id: 17,
            question: "What is PIP in Python?",
            options: ["A Python IDE", "A package manager", "A debugging tool", "A testing framework"],
            correct: 1,
            explanation: "PIP is the package installer for Python."
        },
        {
            id: 18,
            question: "What is the output of bool('')?",
            options: ["True", "False", "None", "Error"],
            correct: 1,
            explanation: "Empty strings evaluate to False in Python."
        },
        {
            id: 19,
            question: "Which keyword is used for inheritance in Python?",
            options: ["extends", "inherits", "class ChildClass(ParentClass)", "implements"],
            correct: 2,
            explanation: "Inheritance is achieved by putting the parent class in parentheses."
        },
        {
            id: 20,
            question: "What does the 'pass' statement do?",
            options: ["Exits the program", "Does nothing (placeholder)", "Passes a value", "Skips an iteration"],
            correct: 1,
            explanation: "The 'pass' statement is a null operation used as a placeholder."
        }
    ],

    java: [
        {
            id: 1,
            question: "What is the entry point of a Java program?",
            options: ["start() method", "main() method", "run() method", "init() method"],
            correct: 1,
            explanation: "The main() method is the entry point of any Java application."
        },
        {
            id: 2,
            question: "Which keyword is used to create an object in Java?",
            options: ["class", "new", "create", "object"],
            correct: 1,
            explanation: "The 'new' keyword is used to create new objects in Java."
        },
        {
            id: 3,
            question: "What is the default value of an int variable in Java?",
            options: ["null", "0", "undefined", "-1"],
            correct: 1,
            explanation: "The default value of an int variable in Java is 0."
        },
        {
            id: 4,
            question: "Which of these is not a primitive data type in Java?",
            options: ["int", "boolean", "String", "char"],
            correct: 2,
            explanation: "String is a class in Java, not a primitive data type."
        },
        {
            id: 5,
            question: "What is encapsulation in Java?",
            options: ["Hiding implementation details", "Multiple inheritance", "Method overloading", "Type casting"],
            correct: 0,
            explanation: "Encapsulation is the bundling of data and methods that operate on that data within a single unit."
        },
        {
            id: 6,
            question: "Which keyword is used to prevent inheritance?",
            options: ["static", "final", "private", "abstract"],
            correct: 1,
            explanation: "The 'final' keyword prevents a class from being inherited."
        },
        {
            id: 7,
            question: "What is the parent class of all classes in Java?",
            options: ["Object", "Class", "Parent", "Base"],
            correct: 0,
            explanation: "Object is the root class of all classes in Java."
        },
        {
            id: 8,
            question: "Which collection allows duplicate elements?",
            options: ["Set", "HashSet", "List", "TreeSet"],
            correct: 2,
            explanation: "List allows duplicate elements while Set does not."
        },
        {
            id: 9,
            question: "What is the size of int in Java?",
            options: ["16 bits", "32 bits", "64 bits", "Platform dependent"],
            correct: 1,
            explanation: "In Java, int is always 32 bits regardless of the platform."
        },
        {
            id: 10,
            question: "Which keyword is used for exception handling?",
            options: ["throw", "try", "catch", "All of the above"],
            correct: 3,
            explanation: "throw, try, and catch are all used in exception handling."
        },
        {
            id: 11,
            question: "What is polymorphism in Java?",
            options: ["Creating multiple classes", "Same method name, different implementations", "Hiding data", "Creating objects"],
            correct: 1,
            explanation: "Polymorphism allows objects to take on multiple forms."
        },
        {
            id: 12,
            question: "Which access modifier makes a member accessible only within the same class?",
            options: ["public", "protected", "private", "default"],
            correct: 2,
            explanation: "Private members are only accessible within the same class."
        },
        {
            id: 13,
            question: "What is an interface in Java?",
            options: ["A type of class", "A blueprint of a class", "A data type", "A method"],
            correct: 1,
            explanation: "An interface is a blueprint of a class that contains only abstract methods."
        },
        {
            id: 14,
            question: "Which method is used to start a thread in Java?",
            options: ["run()", "start()", "execute()", "begin()"],
            correct: 1,
            explanation: "The start() method is used to begin thread execution."
        },
        {
            id: 15,
            question: "What is the output of System.out.println(10 + 20 + \"Hello\")?",
            options: ["1020Hello", "30Hello", "Hello1020", "Error"],
            correct: 1,
            explanation: "10 + 20 is evaluated first (30), then concatenated with 'Hello'."
        },
        {
            id: 16,
            question: "What is a constructor in Java?",
            options: ["A method to destroy objects", "A special method to initialize objects", "A variable", "A data type"],
            correct: 1,
            explanation: "A constructor is a special method used to initialize objects."
        },
        {
            id: 17,
            question: "Which keyword is used to refer to the current object?",
            options: ["self", "this", "current", "object"],
            correct: 1,
            explanation: "The 'this' keyword refers to the current object."
        },
        {
            id: 18,
            question: "What is the purpose of the 'static' keyword?",
            options: ["Make variable constant", "Create class-level members", "Make method abstract", "Enable inheritance"],
            correct: 1,
            explanation: "Static members belong to the class rather than instances."
        },
        {
            id: 19,
            question: "Which loop is guaranteed to execute at least once?",
            options: ["for loop", "while loop", "do-while loop", "for-each loop"],
            correct: 2,
            explanation: "The do-while loop executes the body at least once before checking the condition."
        },
        {
            id: 20,
            question: "What is method overloading?",
            options: ["Same method name with different parameters", "Overriding parent method", "Creating multiple classes", "None of the above"],
            correct: 0,
            explanation: "Method overloading allows multiple methods with the same name but different parameters."
        }
    ],

    javascript: [
        {
            id: 1,
            question: "Which symbol is used for comments in JavaScript?",
            options: ["#", "//", "<!-- -->", "**"],
            correct: 1,
            explanation: "Single-line comments in JavaScript use // while multi-line use /* */."
        },
        {
            id: 2,
            question: "What is the output of typeof null?",
            options: ["null", "undefined", "object", "boolean"],
            correct: 2,
            explanation: "This is a known JavaScript quirk - typeof null returns 'object'."
        },
        {
            id: 3,
            question: "Which method is used to parse a JSON string?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.decode()"],
            correct: 0,
            explanation: "JSON.parse() converts a JSON string into a JavaScript object."
        },
        {
            id: 4,
            question: "What does === operator do?",
            options: ["Assignment", "Loose equality", "Strict equality", "Not equal"],
            correct: 2,
            explanation: "=== checks both value and type (strict equality)."
        },
        {
            id: 5,
            question: "Which keyword declares a block-scoped variable?",
            options: ["var", "let", "const", "Both B and C"],
            correct: 3,
            explanation: "Both 'let' and 'const' declare block-scoped variables."
        },
        {
            id: 6,
            question: "What is a closure in JavaScript?",
            options: ["A type of loop", "A function with access to its outer scope", "A class method", "An array method"],
            correct: 1,
            explanation: "A closure is a function that has access to variables from its outer scope."
        },
        {
            id: 7,
            question: "Which method adds an element to the end of an array?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            correct: 0,
            explanation: "The push() method adds elements to the end of an array."
        },
        {
            id: 8,
            question: "What is the output of console.log(1 + '2' + 3)?",
            options: ["6", "123", "15", "Error"],
            correct: 1,
            explanation: "JavaScript converts numbers to strings when concatenating with strings."
        },
        {
            id: 9,
            question: "What does the 'this' keyword refer to in JavaScript?",
            options: ["The current function", "The global object", "Depends on how the function is called", "The previous object"],
            correct: 2,
            explanation: "The value of 'this' depends on how a function is invoked."
        },
        {
            id: 10,
            question: "Which array method creates a new array with filtered elements?",
            options: ["map()", "filter()", "reduce()", "forEach()"],
            correct: 1,
            explanation: "The filter() method creates a new array with elements that pass a test."
        },
        {
            id: 11,
            question: "What is an arrow function?",
            options: ["A function that returns arrows", "A shorter syntax for functions", "A recursive function", "A built-in function"],
            correct: 1,
            explanation: "Arrow functions provide a shorter syntax: (params) => expression."
        },
        {
            id: 12,
            question: "What is the DOM?",
            options: ["A JavaScript library", "Document Object Model", "Data Object Model", "Digital Output Method"],
            correct: 1,
            explanation: "DOM stands for Document Object Model, representing the HTML structure."
        },
        {
            id: 13,
            question: "Which method is used to select an element by ID?",
            options: ["getElement()", "getElementById()", "querySelector()", "Both B and C"],
            correct: 3,
            explanation: "Both getElementById() and querySelector('#id') can select by ID."
        },
        {
            id: 14,
            question: "What is a Promise in JavaScript?",
            options: ["A guarantee of execution", "An object representing eventual completion of async operation", "A type of function", "A variable declaration"],
            correct: 1,
            explanation: "A Promise represents the eventual completion or failure of an async operation."
        },
        {
            id: 15,
            question: "What is the output of [1, 2, 3].map(x => x * 2)?",
            options: ["[1, 2, 3]", "[2, 4, 6]", "6", "[1, 4, 9]"],
            correct: 1,
            explanation: "map() creates a new array with each element multiplied by 2."
        },
        {
            id: 16,
            question: "Which keyword is used to define a constant?",
            options: ["var", "let", "const", "constant"],
            correct: 2,
            explanation: "The 'const' keyword declares a constant that cannot be reassigned."
        },
        {
            id: 17,
            question: "What does async/await do?",
            options: ["Makes code synchronous", "Simplifies working with Promises", "Creates threads", "Handles errors"],
            correct: 1,
            explanation: "async/await provides a cleaner syntax for working with Promises."
        },
        {
            id: 18,
            question: "What is event bubbling?",
            options: ["Creating events", "Events propagating from child to parent", "Deleting events", "Stopping events"],
            correct: 1,
            explanation: "Event bubbling is when an event propagates from the target element up to its ancestors."
        },
        {
            id: 19,
            question: "Which method converts an object to a JSON string?",
            options: ["JSON.parse()", "JSON.stringify()", "toString()", "toJSON()"],
            correct: 1,
            explanation: "JSON.stringify() converts a JavaScript object to a JSON string."
        },
        {
            id: 20,
            question: "What is the spread operator?",
            options: ["...", "***", ":::", "///"],
            correct: 0,
            explanation: "The spread operator (...) expands an array or object."
        }
    ],

    c: [
        {
            id: 1,
            question: "What is the correct way to declare a pointer in C?",
            options: ["int ptr;", "int *ptr;", "ptr int;", "*int ptr;"],
            correct: 1,
            explanation: "In C, pointers are declared using the * symbol before the variable name."
        },
        {
            id: 2,
            question: "Which header file is required for printf()?",
            options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<math.h>"],
            correct: 1,
            explanation: "The printf() function is declared in <stdio.h>."
        },
        {
            id: 3,
            question: "What is the size of char in C?",
            options: ["1 byte", "2 bytes", "4 bytes", "Platform dependent"],
            correct: 0,
            explanation: "In C, char is always 1 byte."
        },
        {
            id: 4,
            question: "Which operator is used to access a member through a pointer?",
            options: [".", "->", "::", "&"],
            correct: 1,
            explanation: "The -> operator is used to access structure members through a pointer."
        },
        {
            id: 5,
            question: "What does malloc() return?",
            options: ["int", "void*", "char*", "int*"],
            correct: 1,
            explanation: "malloc() returns a void pointer (void*) to the allocated memory."
        },
        {
            id: 6,
            question: "What is the output of printf(\"%d\", sizeof(int));?",
            options: ["2", "4", "8", "Platform dependent"],
            correct: 3,
            explanation: "The size of int is platform dependent, typically 4 bytes on most systems."
        },
        {
            id: 7,
            question: "Which keyword is used to define a constant in C?",
            options: ["const", "constant", "final", "static"],
            correct: 0,
            explanation: "The 'const' keyword is used to define constants in C."
        },
        {
            id: 8,
            question: "What is the purpose of the & operator?",
            options: ["Logical AND", "Address of", "Bitwise AND", "Both B and C"],
            correct: 3,
            explanation: "& is used for both getting the address and bitwise AND operations."
        },
        {
            id: 9,
            question: "What is a segmentation fault?",
            options: ["Syntax error", "Memory access violation", "Compilation error", "Logic error"],
            correct: 1,
            explanation: "A segmentation fault occurs when a program tries to access memory it shouldn't."
        },
        {
            id: 10,
            question: "Which function is used to free dynamically allocated memory?",
            options: ["delete()", "free()", "release()", "dealloc()"],
            correct: 1,
            explanation: "The free() function releases dynamically allocated memory."
        },
        {
            id: 11,
            question: "What is the output of 5/2 in C?",
            options: ["2.5", "2", "3", "Error"],
            correct: 1,
            explanation: "Integer division in C truncates the decimal part."
        },
        {
            id: 12,
            question: "Which loop is entry-controlled?",
            options: ["do-while", "for", "while", "Both B and C"],
            correct: 3,
            explanation: "For and while loops check the condition before executing."
        },
        {
            id: 13,
            question: "What is the purpose of #include?",
            options: ["Define a macro", "Include a header file", "Create a function", "Declare a variable"],
            correct: 1,
            explanation: "#include is a preprocessor directive to include header files."
        },
        {
            id: 14,
            question: "What is a NULL pointer?",
            options: ["A pointer to 0", "A pointer pointing to nothing", "An uninitialized pointer", "A void pointer"],
            correct: 1,
            explanation: "A NULL pointer is a pointer that points to nothing (address 0)."
        },
        {
            id: 15,
            question: "Which storage class has the longest lifetime?",
            options: ["auto", "register", "static", "extern"],
            correct: 2,
            explanation: "Static variables persist throughout the program's execution."
        },
        {
            id: 16,
            question: "What is the format specifier for a float?",
            options: ["%d", "%f", "%c", "%s"],
            correct: 1,
            explanation: "%f is used to print floating-point numbers."
        },
        {
            id: 17,
            question: "What is recursion?",
            options: ["A loop", "A function calling itself", "An array operation", "A pointer operation"],
            correct: 1,
            explanation: "Recursion is when a function calls itself."
        },
        {
            id: 18,
            question: "Which function is used to compare strings?",
            options: ["strcmp()", "compare()", "strcomp()", "equals()"],
            correct: 0,
            explanation: "strcmp() compares two strings in C."
        },
        {
            id: 19,
            question: "What is the default return type of main()?",
            options: ["void", "int", "char", "float"],
            correct: 1,
            explanation: "The standard return type of main() is int."
        },
        {
            id: 20,
            question: "What does the break statement do?",
            options: ["Ends the program", "Exits the current loop", "Skips to next iteration", "Pauses execution"],
            correct: 1,
            explanation: "The break statement exits the current loop or switch statement."
        }
    ],

    cpp: [
        {
            id: 1,
            question: "What is a class in C++?",
            options: ["A data type", "A blueprint for objects", "A function", "A variable"],
            correct: 1,
            explanation: "A class is a blueprint that defines the properties and behaviors of objects."
        },
        {
            id: 2,
            question: "Which operator is used for memory allocation in C++?",
            options: ["malloc", "new", "alloc", "create"],
            correct: 1,
            explanation: "The 'new' operator is used for dynamic memory allocation in C++."
        },
        {
            id: 3,
            question: "What is the purpose of a destructor?",
            options: ["Create objects", "Initialize objects", "Clean up resources", "Copy objects"],
            correct: 2,
            explanation: "Destructors clean up resources when an object is destroyed."
        },
        {
            id: 4,
            question: "Which keyword is used for inheritance in C++?",
            options: ["extends", "inherits", ":", "implements"],
            correct: 2,
            explanation: "The colon (:) is used to specify inheritance in C++."
        },
        {
            id: 5,
            question: "What is function overloading?",
            options: ["Multiple functions with same name but different parameters", "Overriding a function", "Recursive function", "None of the above"],
            correct: 0,
            explanation: "Function overloading allows multiple functions with the same name but different parameters."
        },
        {
            id: 6,
            question: "What is a virtual function?",
            options: ["A function that doesn't exist", "A function that can be overridden", "A static function", "A private function"],
            correct: 1,
            explanation: "Virtual functions enable runtime polymorphism by allowing derived classes to override them."
        },
        {
            id: 7,
            question: "What is the output of cout << (5 > 3);?",
            options: ["true", "false", "1", "0"],
            correct: 2,
            explanation: "In C++, boolean true is output as 1."
        },
        {
            id: 8,
            question: "Which access specifier makes members accessible only within the class?",
            options: ["public", "private", "protected", "friend"],
            correct: 1,
            explanation: "Private members are only accessible within the class itself."
        },
        {
            id: 9,
            question: "What is a template in C++?",
            options: ["A class design pattern", "Generic programming feature", "A type of loop", "A header file"],
            correct: 1,
            explanation: "Templates enable generic programming by allowing functions and classes to work with any data type."
        },
        {
            id: 10,
            question: "What is RAII in C++?",
            options: ["A design pattern", "Resource Acquisition Is Initialization", "A library", "A compiler feature"],
            correct: 1,
            explanation: "RAII binds resource lifecycle to object lifetime for automatic cleanup."
        },
        {
            id: 11,
            question: "What is the purpose of 'friend' keyword?",
            options: ["Create friendship between classes", "Allow access to private members", "Inherit from a class", "None of the above"],
            correct: 1,
            explanation: "Friend functions/classes can access private members of a class."
        },
        {
            id: 12,
            question: "What is a reference in C++?",
            options: ["A pointer", "An alias for a variable", "A copy of a variable", "A constant"],
            correct: 1,
            explanation: "A reference is an alias (another name) for an existing variable."
        },
        {
            id: 13,
            question: "What is the difference between struct and class in C++?",
            options: ["No difference", "Default access specifier", "Struct can't have methods", "Class can't have variables"],
            correct: 1,
            explanation: "The only difference is the default access: public for struct, private for class."
        },
        {
            id: 14,
            question: "What is a pure virtual function?",
            options: ["A function without body", "A function declared with = 0", "A static function", "Both A and B"],
            correct: 3,
            explanation: "A pure virtual function is declared with = 0 and has no implementation."
        },
        {
            id: 15,
            question: "What is the use of 'const' at the end of a member function?",
            options: ["Makes return value constant", "Function doesn't modify object state", "Function can't be called", "None of the above"],
            correct: 1,
            explanation: "A const member function promises not to modify any member variables."
        },
        {
            id: 16,
            question: "What is namespace in C++?",
            options: ["A type of class", "A scope for identifiers", "A header file", "A design pattern"],
            correct: 1,
            explanation: "Namespaces provide a scope to avoid name conflicts."
        },
        {
            id: 17,
            question: "What is the purpose of 'delete' operator?",
            options: ["Delete files", "Free dynamically allocated memory", "Delete classes", "Delete functions"],
            correct: 1,
            explanation: "The delete operator frees memory allocated with 'new'."
        },
        {
            id: 18,
            question: "What is an abstract class?",
            options: ["A class with no methods", "A class with pure virtual functions", "A class with only static members", "A template class"],
            correct: 1,
            explanation: "An abstract class contains at least one pure virtual function."
        },
        {
            id: 19,
            question: "What is operator overloading?",
            options: ["Using multiple operators", "Defining custom behavior for operators", "Removing operators", "None of the above"],
            correct: 1,
            explanation: "Operator overloading allows defining custom behavior for operators on user-defined types."
        },
        {
            id: 20,
            question: "What is the Standard Template Library (STL)?",
            options: ["A compiler", "A collection of template classes and functions", "An IDE", "A debugging tool"],
            correct: 1,
            explanation: "STL provides generic containers, algorithms, and iterators."
        }
    ],

    sql: [
        {
            id: 1,
            question: "What does SQL stand for?",
            options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"],
            correct: 0,
            explanation: "SQL stands for Structured Query Language."
        },
        {
            id: 2,
            question: "Which SQL statement is used to extract data from a database?",
            options: ["GET", "EXTRACT", "SELECT", "PULL"],
            correct: 2,
            explanation: "SELECT is used to retrieve data from a database."
        },
        {
            id: 3,
            question: "Which clause is used to filter records?",
            options: ["FILTER", "WHERE", "HAVING", "CONDITION"],
            correct: 1,
            explanation: "WHERE clause is used to filter records based on conditions."
        },
        {
            id: 4,
            question: "What is a PRIMARY KEY?",
            options: ["A duplicate key", "A unique identifier for each record", "A foreign key", "An index"],
            correct: 1,
            explanation: "A PRIMARY KEY uniquely identifies each record in a table."
        },
        {
            id: 5,
            question: "Which JOIN returns all records from both tables?",
            options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
            correct: 3,
            explanation: "FULL OUTER JOIN returns all records from both tables."
        },
        {
            id: 6,
            question: "What does the GROUP BY clause do?",
            options: ["Sorts data", "Groups rows with same values", "Filters data", "Joins tables"],
            correct: 1,
            explanation: "GROUP BY groups rows that have the same values in specified columns."
        },
        {
            id: 7,
            question: "Which function returns the number of rows?",
            options: ["SUM()", "COUNT()", "TOTAL()", "NUM()"],
            correct: 1,
            explanation: "COUNT() returns the number of rows that match a condition."
        },
        {
            id: 8,
            question: "What is a FOREIGN KEY?",
            options: ["A key from another country", "A link to another table's primary key", "A unique key", "An encrypted key"],
            correct: 1,
            explanation: "A FOREIGN KEY links to a PRIMARY KEY in another table."
        },
        {
            id: 9,
            question: "Which statement is used to update data?",
            options: ["MODIFY", "UPDATE", "CHANGE", "ALTER"],
            correct: 1,
            explanation: "UPDATE is used to modify existing records in a table."
        },
        {
            id: 10,
            question: "What is the difference between DELETE and TRUNCATE?",
            options: ["No difference", "DELETE can have WHERE, TRUNCATE cannot", "TRUNCATE is faster", "Both B and C"],
            correct: 3,
            explanation: "DELETE allows filtering, TRUNCATE removes all rows and is faster."
        },
        {
            id: 11,
            question: "What does DISTINCT do?",
            options: ["Removes duplicates", "Sorts data", "Groups data", "Filters data"],
            correct: 0,
            explanation: "DISTINCT returns only unique values."
        },
        {
            id: 12,
            question: "Which clause is used with aggregate functions?",
            options: ["WHERE", "HAVING", "ORDER BY", "GROUP BY"],
            correct: 1,
            explanation: "HAVING is used to filter groups created by GROUP BY."
        },
        {
            id: 13,
            question: "What is an INDEX in SQL?",
            options: ["A primary key", "A pointer to data for faster retrieval", "A foreign key", "A table"],
            correct: 1,
            explanation: "An INDEX improves the speed of data retrieval operations."
        },
        {
            id: 14,
            question: "Which operator is used to search for a pattern?",
            options: ["FIND", "SEARCH", "LIKE", "PATTERN"],
            correct: 2,
            explanation: "LIKE is used with WHERE to search for a specified pattern."
        },
        {
            id: 15,
            question: "What is NULL in SQL?",
            options: ["Zero", "Empty string", "Absence of value", "False"],
            correct: 2,
            explanation: "NULL represents the absence of a value or unknown data."
        },
        {
            id: 16,
            question: "Which statement creates a new table?",
            options: ["NEW TABLE", "CREATE TABLE", "MAKE TABLE", "ADD TABLE"],
            correct: 1,
            explanation: "CREATE TABLE is used to create a new table in the database."
        },
        {
            id: 17,
            question: "What is a VIEW in SQL?",
            options: ["A stored query", "A temporary table", "A virtual table based on a query", "A type of join"],
            correct: 2,
            explanation: "A VIEW is a virtual table based on the result of a SQL query."
        },
        {
            id: 18,
            question: "Which command removes a table from the database?",
            options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "DESTROY TABLE"],
            correct: 2,
            explanation: "DROP TABLE permanently removes a table from the database."
        },
        {
            id: 19,
            question: "What is a subquery?",
            options: ["A query within another query", "A backup query", "A join query", "A stored procedure"],
            correct: 0,
            explanation: "A subquery is a query nested inside another query."
        },
        {
            id: 20,
            question: "What does ORDER BY do?",
            options: ["Groups data", "Filters data", "Sorts the result set", "Joins tables"],
            correct: 2,
            explanation: "ORDER BY sorts the result set in ascending or descending order."
        }
    ]
};

// Course video playlists
const COURSE_VIDEOS = {
    python: [
        { id: 1, title: "Python Introduction", duration: "15:30", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
        { id: 2, title: "Variables and Data Types", duration: "22:15", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=100" },
        { id: 3, title: "Control Flow - If Statements", duration: "18:45", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=200" },
        { id: 4, title: "Loops in Python", duration: "25:00", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=300" },
        { id: 5, title: "Functions and Parameters", duration: "30:20", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=400" },
        { id: 6, title: "Lists and Tuples", duration: "28:10", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=500" },
        { id: 7, title: "Dictionaries and Sets", duration: "24:30", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=600" },
        { id: 8, title: "File Handling", duration: "20:15", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=700" },
        { id: 9, title: "Object Oriented Programming", duration: "45:00", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=800" },
        { id: 10, title: "Modules and Packages", duration: "22:30", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=900" }
    ],
    java: [
        { id: 1, title: "Java Introduction", duration: "20:00", url: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
        { id: 2, title: "Variables and Data Types", duration: "25:30", url: "https://www.youtube.com/watch?v=eIrMbAQSU34&t=100" },
        { id: 3, title: "Operators in Java", duration: "18:15", url: "https://www.youtube.com/watch?v=eIrMbAQSU34&t=200" },
        { id: 4, title: "Control Statements", duration: "28:00", url: "https://www.youtube.com/watch?v=eIrMbAQSU34&t=300" },
        { id: 5, title: "Arrays in Java", duration: "30:45", url: "https://www.youtube.com/watch?v=eIrMbAQSU34&t=400" },
        { id: 6, title: "Object Oriented Programming", duration: "50:00", url: "https://www.youtube.com/watch?v=eIrMbAQSU34&t=500" },
        { id: 7, title: "Inheritance and Polymorphism", duration: "40:20", url: "https://www.youtube.com/watch?v=eIrMbAQSU34&t=600" },
        { id: 8, title: "Exception Handling", duration: "25:00", url: "https://www.youtube.com/watch?v=eIrMbAQSU34&t=700" },
        { id: 9, title: "Collections Framework", duration: "45:30", url: "https://www.youtube.com/watch?v=eIrMbAQSU34&t=800" },
        { id: 10, title: "Multithreading", duration: "35:15", url: "https://www.youtube.com/watch?v=eIrMbAQSU34&t=900" }
    ],
    javascript: [
        { id: 1, title: "JavaScript Basics", duration: "22:00", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
        { id: 2, title: "Variables and Data Types", duration: "18:30", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk&t=100" },
        { id: 3, title: "Functions and Scope", duration: "28:15", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk&t=200" },
        { id: 4, title: "Arrays and Objects", duration: "32:00", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk&t=300" },
        { id: 5, title: "DOM Manipulation", duration: "40:45", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk&t=400" },
        { id: 6, title: "Events and Event Handling", duration: "25:20", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk&t=500" },
        { id: 7, title: "Async JavaScript - Promises", duration: "35:00", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk&t=600" },
        { id: 8, title: "Fetch API and AJAX", duration: "30:15", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk&t=700" },
        { id: 9, title: "ES6+ Features", duration: "38:30", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk&t=800" },
        { id: 10, title: "Error Handling", duration: "20:00", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk&t=900" }
    ],
    c: [
        { id: 1, title: "Introduction to C", duration: "18:00", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" },
        { id: 2, title: "Variables and Data Types", duration: "22:30", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0&t=100" },
        { id: 3, title: "Operators", duration: "15:45", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0&t=200" },
        { id: 4, title: "Control Flow", duration: "25:00", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0&t=300" },
        { id: 5, title: "Functions", duration: "30:20", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0&t=400" },
        { id: 6, title: "Arrays", duration: "28:10", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0&t=500" },
        { id: 7, title: "Pointers", duration: "45:30", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0&t=600" },
        { id: 8, title: "Strings", duration: "22:15", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0&t=700" },
        { id: 9, title: "Structures", duration: "25:00", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0&t=800" },
        { id: 10, title: "File I/O", duration: "20:30", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0&t=900" }
    ],
    cpp: [
        { id: 1, title: "C++ Introduction", duration: "20:00", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
        { id: 2, title: "Variables and Data Types", duration: "24:30", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y&t=100" },
        { id: 3, title: "Control Structures", duration: "22:15", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y&t=200" },
        { id: 4, title: "Functions", duration: "28:00", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y&t=300" },
        { id: 5, title: "Object Oriented Programming", duration: "50:45", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y&t=400" },
        { id: 6, title: "Classes and Objects", duration: "35:20", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y&t=500" },
        { id: 7, title: "Inheritance", duration: "40:00", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y&t=600" },
        { id: 8, title: "Polymorphism", duration: "32:15", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y&t=700" },
        { id: 9, title: "Templates", duration: "25:30", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y&t=800" },
        { id: 10, title: "STL", duration: "45:00", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y&t=900" }
    ],
    sql: [
        { id: 1, title: "SQL Introduction", duration: "15:00", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
        { id: 2, title: "SELECT Statement", duration: "20:30", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY&t=100" },
        { id: 3, title: "WHERE Clause", duration: "18:15", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY&t=200" },
        { id: 4, title: "JOINs", duration: "35:00", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY&t=300" },
        { id: 5, title: "GROUP BY and HAVING", duration: "25:45", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY&t=400" },
        { id: 6, title: "INSERT, UPDATE, DELETE", duration: "22:20", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY&t=500" },
        { id: 7, title: "Subqueries", duration: "28:00", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY&t=600" },
        { id: 8, title: "Indexes", duration: "20:15", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY&t=700" },
        { id: 9, title: "Views", duration: "18:30", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY&t=800" },
        { id: 10, title: "Stored Procedures", duration: "25:00", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY&t=900" }
    ],
    html: [
        { id: 1, title: "HTML Introduction", duration: "12:00", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg" },
        { id: 2, title: "HTML Elements", duration: "18:30", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg&t=100" },
        { id: 3, title: "HTML Forms", duration: "25:15", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg&t=200" },
        { id: 4, title: "CSS Basics", duration: "30:00", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg&t=300" },
        { id: 5, title: "CSS Flexbox", duration: "35:45", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg&t=400" },
        { id: 6, title: "CSS Grid", duration: "32:20", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg&t=500" },
        { id: 7, title: "Responsive Design", duration: "28:00", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg&t=600" },
        { id: 8, title: "CSS Animations", duration: "22:15", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg&t=700" },
        { id: 9, title: "HTML5 Semantic Elements", duration: "18:30", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg&t=800" },
        { id: 10, title: "Best Practices", duration: "15:00", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg&t=900" }
    ],
    react: [
        { id: 1, title: "React Introduction", duration: "20:00", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0" },
        { id: 2, title: "JSX", duration: "22:30", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0&t=100" },
        { id: 3, title: "Components", duration: "28:15", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0&t=200" },
        { id: 4, title: "Props", duration: "25:00", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0&t=300" },
        { id: 5, title: "State", duration: "32:45", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0&t=400" },
        { id: 6, title: "Hooks - useState", duration: "30:20", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0&t=500" },
        { id: 7, title: "Hooks - useEffect", duration: "28:00", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0&t=600" },
        { id: 8, title: "Event Handling", duration: "22:15", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0&t=700" },
        { id: 9, title: "Conditional Rendering", duration: "18:30", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0&t=800" },
        { id: 10, title: "Lists and Keys", duration: "20:00", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0&t=900" }
    ]
};

// Export for use in other scripts
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.COURSE_VIDEOS = COURSE_VIDEOS;
