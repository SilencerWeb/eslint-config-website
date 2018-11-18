export const rules = [
  {
    name: 'no-func-assign',
    value: 'warn',
    shortDescription: 'Disallow reassigning function declarations',
    longDescription: 'This rule disallows reassigning function declarations.',
    examples: {
      correct:
        'var foo = function () {}\nfoo = bar;\n\nfunction foo(foo) { // `foo` is shadowed.\n    foo = bar;\n}\n\nfunction foo() {\n    var foo = bar;  // `foo` is shadowed.\n}',
      incorrect: 'function foo() {}\nfoo = bar;\n\nfunction foo() {\n    foo = bar;\n}',
    },
    isActive: true,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-octal',
    value: 'warn',
    shortDescription: 'Disallow octal literals',
    longDescription: 'The rule disallows octal literals.',
    examples: { correct: 'var num  = "071";', incorrect: 'var num = 071;\nvar result = 5 + 07;' },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-dupe-keys',
    value: 'warn',
    shortDescription: 'Disallow duplicate keys in object literals',
    longDescription: 'This rule disallows duplicate keys in object literals.',
    examples: {
      correct: 'var foo = {\n    bar: "baz",\n    quxx: "qux"\n};',
      incorrect:
        'var foo = {\n    bar: "baz",\n    bar: "qux"\n};\n\nvar foo = {\n    "bar": "baz",\n    bar: "qux"\n};\n\nvar foo = {\n    0x1: "baz",\n    1: "qux"\n};',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'for-direction',
    value: 'warn',
    shortDescription: 'Enforce “for” loop update clause moving the counter in the right direction',
    longDescription:
      'A for loop with a stop condition that can never be reached, such as one with a counter that moves in the wrong direction, will run infinitely. While there are occasions when an infinite loop is intended, the convention is to construct such loops as while loops. More typically, an infinite for loop is a bug.',
    examples: {
      correct: 'for (var i = 0; i &lt; 10; i++) {\n}',
      incorrect: 'for (var i = 0; i &lt; 10; i--) {\n}\n\nfor (var i = 10; i &gt;= 0; i++) {\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'eqeqeq',
    value: 'warn',
    shortDescription: 'Require the use of === and !==',
    longDescription: 'This rule is aimed at eliminating the type-unsafe equality operators.',
    examples: {
      correct:
        "a === b\nfoo === true\nbananas !== 1\nvalue === undefined\ntypeof foo === 'undefined'\n'hello' !== 'world'\n0 === 0\ntrue === true\nfoo === null",
      incorrect: 'if (x == 42) { }\n\nif ("" == text) { }\n\nif (obj.getStuff() != undefined) { }',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-misleading-character-class',
    value: 'warn',
    shortDescription: 'Disallow characters which are made with multiple code points in character class syntax',
    longDescription: 'This rule reports the regular expressions which include multiple code point characters in character class syntax.',
    examples: { correct: '/^[abc]$/\n/^[👍]$/u', incorrect: '/^[Á]$/u\n/^[❇️]$/u\n/^[👶🏻]$/u\n/^[🇯🇵]$/u\n/^[👨‍👩‍👦]$/u\n/^[👍]$/' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-implicit-coercion',
    value: 'warn',
    shortDescription: 'Disallow shorthand type conversions',
    longDescription: 'This rule is aimed to flag shorter notations for the type conversion, then suggest a more self-explanatory notation.',
    examples: {
      correct: 'var b = Boolean(foo);\nvar b = foo.indexOf(".") !== -1;\n\nvar n = ~foo; // This is a just bitwise not.',
      incorrect: 'var b = !!foo;\nvar b = ~foo.indexOf(".");\n// bitwise not is incorrect only with `indexOf`/`lastIndexOf` method calling.',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'class-methods-use-this',
    value: 'warn',
    shortDescription: 'Enforce that class methods utilize this',
    longDescription: 'This rule is aimed to flag class methods that do not use this.',
    examples: {
      correct:
        'class A {\n    foo() {\n        this.bar = "Hello World"; // OK, this is used\n    }\n}\n\nclass A {\n    constructor() {\n        // OK. constructor is exempt\n    }\n}\n\nclass A {\n    static foo() {\n        // OK. static methods aren\'t expected to use this.\n    }\n}',
      incorrect:
        "class A {\n    foo() {\n        console.log(\"Hello World\");     /*error Expected 'this' to be used by class method 'foo'.*/\n    }\n}",
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-global-assign',
    value: 'warn',
    shortDescription: 'Disallow assignments to native objects or read-only global variables',
    longDescription: 'This rule disallows modifications to read-only global variables.',
    examples: { correct: 'a = 1\nvar b = 1\nb = 2', incorrect: 'Object = null\nundefined = 1' },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-console',
    value: 'warn',
    shortDescription: 'Disallow the use of console',
    longDescription: 'This rule disallows calls to methods of the console object.',
    examples: {
      correct: '// custom console\nConsole.log("Hello world!");',
      incorrect:
        'console.log("Log a debug level message.");\nconsole.warn("Log a warn level message.");\nconsole.error("Log an error level message.");',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'complexity',
    value: 'warn',
    shortDescription: 'Enforce a maximum cyclomatic complexity allowed in a program',
    longDescription:
      'This rule is aimed at reducing code complexity by capping the amount of cyclomatic complexity allowed in a program. As such, it will warn when the cyclomatic complexity crosses the configured threshold (default is 20).',
    examples: {
      correct: 'function a(x) {\n    if (true) {\n        return x;\n    } else {\n        return 4;\n    }\n}',
      incorrect:
        'function a(x) {\n    if (true) {\n        return x;\n    } else if (false) {\n        return x+1;\n    } else {\n        return 4; // 3rd path\n    }\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-extra-semi',
    value: 'warn',
    shortDescription: 'Disallow unnecessary semicolons',
    longDescription: 'This rule disallows unnecessary semicolons.',
    examples: { correct: 'var x = 5;\n\nvar foo = function() {\n    // code\n};', incorrect: 'var x = 5;;\n\nfunction foo() {\n    // code\n};' },
    isActive: false,
    isRecommended: true,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'dot-location',
    value: 'warn',
    shortDescription: 'Enforce consistent newlines before and after dots',
    longDescription:
      'This rule aims to enforce newline consistency in member expressions. This rule prevents the use of mixed newlines around the dot in a member expression.',
    examples: { correct: 'var foo = object.\nproperty;\nvar bar = object.property;', incorrect: 'var foo = object\n.property;' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-unexpected-multiline',
    value: 'warn',
    shortDescription: 'Disallow confusing multiline expressions',
    longDescription: 'This rule disallows confusing multiline expressions where a newline looks like it is ending a statement, but is not.',
    examples: {
      correct:
        "var foo = bar;\n(1 || 2).baz();\n\nvar foo = bar\n;(1 || 2).baz()\n\nvar hello = 'world';\n[1, 2, 3].forEach(addNumber);\n\nvar hello = 'world'\nvoid [1, 2, 3].forEach(addNumber);\n\nlet x = function() {};\n`hello`\n\nlet tag = function() {}\ntag `hello`",
      incorrect:
        "var foo = bar\n(1 || 2).baz();\n\nvar hello = 'world'\n[1, 2, 3].forEach(addNumber);\n\nlet x = function() {}\n`hello`\n\nlet x = function() {}\nx\n`hello`\n\nlet x = foo\n/regex/g.test(bar)",
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-ex-assign',
    value: 'warn',
    shortDescription: 'Disallow reassigning exceptions in catch clauses',
    longDescription: 'This rule disallows reassigning exceptions in catch clauses.',
    examples: { correct: 'try {\n    // code\n} catch (e) {\n    var foo = 10;\n}', incorrect: 'try {\n    // code\n} catch (e) {\n    e = 10;\n}' },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-redeclare',
    value: 'warn',
    shortDescription: 'Disallow variable redeclaration',
    longDescription: 'This rule is aimed at eliminating variables that have multiple declarations in the same scope.',
    examples: { correct: 'var a = 3;\n// ...\na = 10;', incorrect: 'var a = 3;\nvar a = 10;' },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-param-reassign',
    value: 'warn',
    shortDescription: 'Disallow reassigning function parameters',
    longDescription: 'This rule aims to prevent unintended behavior caused by modification or reassignment of function parameters.',
    examples: {
      correct: 'function foo(bar) {\n    var baz = bar;\n}',
      incorrect: 'function foo(bar) {\n    bar = 13;\n}\n\nfunction foo(bar) {\n    bar++;\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-labels',
    value: 'warn',
    shortDescription: 'Disallow labeled statements',
    longDescription:
      'This rule aims to eliminate the use of labeled statements in JavaScript. It will warn whenever a labeled statement is encountered and whenever break or continue are used with a label.',
    examples: {
      correct: 'var f = {\n    label: "foo"\n};\n\nwhile (true) {\n    break;\n}\n\nwhile (true) {\n    continue;\n}',
      incorrect:
        'label:\n    while(true) {\n        // ...\n    }\n\nlabel:\n    while(true) {\n        break label;\n    }\n\nlabel:\n    while(true) {\n        continue label;\n    }\n\nlabel:\n    switch (a) {\n    case 0:\n        break label;\n    }\n\nlabel:\n    {\n        break label;\n    }\n\nlabel:\n    if (a) {\n        break label;\n    }',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-async-promise-executor',
    value: 'warn',
    shortDescription: 'Disallow using an async function as a Promise executor',
    longDescription: 'This rule aims to disallow async Promise executor functions.',
    examples: {
      correct:
        "const result = new Promise((resolve, reject) =&gt; {\n  readFile('foo.txt', function(err, result) {\n    if (err) {\n      reject(err);\n    } else {\n      resolve(result);\n    }\n  });\n});\n\nconst result = Promise.resolve(foo);",
      incorrect:
        "const result = new Promise(async (resolve, reject) =&gt; {\n  readFile('foo.txt', function(err, result) {\n    if (err) {\n      reject(err);\n    } else {\n      resolve(result);\n    }\n  });\n});\n\nconst result = new Promise(async (resolve, reject) =&gt; {\n  resolve(await foo);\n});",
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'func-call-spacing',
    value: 'warn',
    shortDescription: 'Require or disallow spacing between function identifiers and their invocations',
    longDescription: 'This rule requires or disallows spaces between the function name and the opening parenthesis that calls it.',
    examples: { correct: 'fn();', incorrect: 'fn ();\n\nfn\n();' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-process-exit',
    value: 'warn',
    shortDescription: 'Disallow the use of process.exit()',
    longDescription:
      'This rule aims to prevent the use of process.exit() in Node.js JavaScript. As such, it warns whenever process.exit() is found in code.',
    examples: { correct: 'Process.exit();\nvar exit = process.exit;', incorrect: 'process.exit(1);\nprocess.exit(0);' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-case-declarations',
    value: 'warn',
    shortDescription: 'Disallow lexical declarations in case clauses',
    longDescription: 'This rule aims to prevent access to uninitialized lexical bindings as well as accessing hoisted functions across case clauses.',
    examples: {
      correct:
        '// Declarations outside switch-statements are valid\nconst a = 0;\n\nswitch (foo) {\n    // The following case clauses are wrapped into blocks using brackets\n    case 1: {\n        let x = 1;\n        break;\n    }\n    case 2: {\n        const y = 2;\n        break;\n    }\n    case 3: {\n        function f() {}\n        break;\n    }\n    case 4:\n        // Declarations using var without brackets are valid due to function-scope hoisting\n        var z = 4;\n        break;\n    default: {\n        class C {}\n    }\n}',
      incorrect:
        'switch (foo) {\n    case 1:\n        let x = 1;\n        break;\n    case 2:\n        const y = 2;\n        break;\n    case 3:\n        function f() {}\n        break;\n    default:\n        class C {}\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'require-atomic-updates',
    value: 'warn',
    shortDescription: 'Disallow assignments that can lead to race conditions due to usage of await or yield',
    longDescription: 'This rule aims to report assignments to variables or properties where all of the following are true:.',
    examples: {
      correct:
        'let result;\nasync function foo() {\n  result = await somethingElse + result;\n\n  let tmp = await somethingElse;\n  result += tmp;\n\n  let localVariable = 0;\n  localVariable += await somethingElse;\n}\n\nfunction* bar() {\n  result += yield;\n\n  result = (yield somethingElse) + result;\n\n  result = doSomething(yield somethingElse, result);\n}',
      incorrect:
        'let result;\nasync function foo() {\n  result += await somethingElse;\n\n  result = result + await somethingElse;\n\n  result = result + doSomething(await somethingElse);\n}\n\nfunction* bar() {\n  result += yield;\n\n  result = result + (yield somethingElse);\n\n  result = result + doSomething(yield somethingElse);\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-warning-comments',
    value: 'warn',
    shortDescription: 'Disallow specified warning terms in comments',
    longDescription: 'This rule reports comments that include any of the predefined terms specified in its configuration.',
    examples: {
      correct:
        'function callback(err, results) {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  // NOT READY FOR PRIME TIME\n  // but too bad, it is not a predefined warning term\n}',
      incorrect: 'function callback(err, results) {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  // TODO\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'wrap-iife',
    value: 'warn',
    shortDescription: 'Require parentheses around immediate function invocations',
    longDescription: 'This rule requires all immediately-invoked function expressions to be wrapped in parentheses.',
    examples: {
      correct: 'var x = (function () { return { y: 1 };}()); // wrapped call expression',
      incorrect:
        'var x = function () { return { y: 1 };}(); // unwrapped\nvar x = (function () { return { y: 1 };})(); // wrapped function expression',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'template-tag-spacing',
    value: 'warn',
    shortDescription: 'Require or disallow spacing between template tags and their literals',
    longDescription: 'This rule aims to maintain consistency around the spacing between template tag functions and their template literals.',
    examples: { correct: 'func`Hello world`;', incorrect: 'func `Hello world`;' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'space-before-blocks',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing before blocks',
    longDescription: 'This rule will enforce consistency of spacing before blocks. It is only applied on blocks that don’t begin on a new line.',
    examples: {
      correct:
        'if (a) {\n    b();\n}\n\nif (a) {\n    b();\n} else{ /*no error. this is checked by `keyword-spacing` rule.*/\n    c();\n}\n\n\nfunction a() {}\n\nfor (;;) {\n    b();\n}\n\ntry {} catch(a) {}',
      incorrect: 'if (a){\n    b();\n}\n\nfunction a(){}\n\nfor (;;){\n    b();\n}\n\ntry {} catch(a){}\n\nclass Foo{\n  constructor(){}\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-unneeded-ternary',
    value: 'warn',
    shortDescription: 'Disallow ternary operators when simpler alternatives exist',
    longDescription: 'This rule disallow ternary operators when simpler alternatives exist.',
    examples: {
      correct:
        'var a = x === 2 ? "Yes" : "No";\n\nvar a = x !== false;\n\nvar a = x ? "Yes" : "No";\n\nvar a = x ? y : x;\n\nvar a = x ? x : 1;  // Note that this is only allowed as it on the right hand side of an assignment; this type of ternary is disallowed everywhere else. See defaultAssignment option below for more details.',
      incorrect: 'var a = x === 2 ? true : false;\n\nvar a = x ? true : false;\n\nvar a = f(x ? x : 1);',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'prefer-object-spread',
    value: 'warn',
    shortDescription: 'Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead',
    longDescription: 'Examples of incorrect code for this rule:.',
    examples: {
      correct:
        'Object.assign(...foo);\n\n// Any Object.assign call without an object literal as the first argument\nObject.assign(foo, { bar: baz });\n\nObject.assign(foo, Object.assign(bar));\n\nObject.assign(foo, { bar, baz })\n\nObject.assign(foo, { ...baz });',
      incorrect:
        "Object.assign({}, foo)\n\nObject.assign({}, {foo: 'bar'})\n\nObject.assign({ foo: 'bar'}, baz)\n\nObject.assign({ foo: 'bar' }, Object.assign({ bar: 'foo' }))\n\nObject.assign({}, { foo, bar, baz })\n\nObject.assign({}, { ...baz })\n\n// Object.assign with a single argument that is an object literal\nObject.assign({});\n\nObject.assign({ foo: bar });",
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'wrap-regex',
    value: 'warn',
    shortDescription: 'Require parenthesis around regex literals',
    longDescription: 'This is used to disambiguate the slash operator and facilitates more readable code.',
    examples: { correct: 'function a() {\n    return (/foo/).test("bar");\n}', incorrect: 'function a() {\n    return /foo/.test("bar");\n}' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'padded-blocks',
    value: 'warn',
    shortDescription: 'Require or disallow padding within blocks',
    longDescription: 'This rule enforces consistent empty line padding within blocks.',
    examples: {
      correct: 'if (a) {\n\n    b();\n\n}\n\nif (a)\n{\n\n    b();\n\n}\n\nif (a) {\n\n    // comment\n    b();\n\n}',
      incorrect:
        'if (a) {\n    b();\n}\n\nif (a) { b(); }\n\nif (a)\n{\n    b();\n}\n\nif (a) {\n\n    b();\n}\n\nif (a) {\n    b();\n\n}\n\nif (a) {\n    // comment\n    b();\n\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-inline-comments',
    value: 'warn',
    shortDescription: 'Disallow inline comments after code',
    longDescription: 'This rule disallows comments on the same line as code.',
    examples: {
      correct: '// This is a comment above a line of code\nvar foo = 5;\n\nvar bar = 5;\n//This is a comment below a line of code',
      incorrect:
        'var a = 1; // declaring a to 1\n\nfunction getRandomNumber(){\n    return 4; // chosen by fair dice roll.\n              // guaranteed to be random.\n}\n\n/* A block comment before code */ var b = 2;\n\nvar c = 3; /* A block comment after code */',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'space-in-parens',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing inside parentheses',
    longDescription:
      'This rule will enforce consistency of spacing directly inside of parentheses, by disallowing or requiring one or more spaces to the right of ( and to the left of ). In either case, () will still be allowed.',
    examples: {
      correct: "foo();\n\nfoo('bar');\n\nvar foo = (1 + 2) * 3;\n(function () { return 'bar'; }());",
      incorrect: "foo( 'bar');\nfoo('bar' );\nfoo( 'bar' );\n\nvar foo = ( 1 + 2 ) * 3;\n( function () { return 'bar'; }() );",
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-undefined',
    value: 'warn',
    shortDescription: 'Disallow the use of undefined as an identifier',
    longDescription: 'This rule aims to eliminate the use of undefined, and as such, generates a warning whenever it is used.',
    examples: {
      correct: 'var foo = void 0;\n\nvar Undefined = "foo";\n\nif (typeof foo === "undefined") {\n    // ...\n}\n\nglobal.undefined = "foo";',
      incorrect:
        'var foo = undefined;\n\nvar undefined = "foo";\n\nif (foo === undefined) {\n    // ...\n}\n\nfunction foo(undefined) {\n    // ...\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-compare-neg-zero',
    value: 'warn',
    shortDescription: 'Disallow comparing against -0',
    longDescription:
      'The rule should warn against code that tries to compare against -0, since that will not work as intended. That is, code like x === -0 will pass for both +0 and -0. The author probably intended Object.is(x, -0).',
    examples: { correct: 'if (x === 0) {\n    // doSomething()...\n}', incorrect: 'if (x === -0) {\n    // doSomething()...\n}' },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unsafe-negation',
    value: 'warn',
    shortDescription: 'Disallow negating the left operand of relational operators',
    longDescription: 'This rule disallows negating the left operand of Relational Operators.',
    examples: {
      correct:
        'if (!(key in object)) {\n    // key is not in object\n}\n\nif (!(obj instanceof Ctor)) {\n    // obj is not an instance of Ctor\n}\n\nif(("" + !key) in object) {\n    // make operator precedence and type conversion explicit\n    // in a rare situation when that is the intended meaning\n}',
      incorrect:
        'if (!key in object) {\n    // operator precedence makes it equivalent to (!key) in object\n    // and type conversion makes it equivalent to (key ? "false" : "true") in object\n}\n\nif (!obj instanceof Ctor) {\n    // operator precedence makes it equivalent to (!obj) instanceof Ctor\n    // and it equivalent to always false since boolean values are not objects.\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-await-in-loop',
    value: 'warn',
    shortDescription: 'Disallow await inside of loops',
    longDescription: 'This rule disallows the use of await within loop bodies.',
    examples: {
      correct:
        'async function foo(things) {\n  const results = [];\n  for (const thing of things) {\n    // Good: all asynchronous operations are immediately started.\n    results.push(bar(thing));\n  }\n  // Now that all the asynchronous operations are running, here we wait until they all complete.\n  return baz(await Promise.all(results));\n}',
      incorrect:
        'async function foo(things) {\n  const results = [];\n  for (const thing of things) {\n    // Bad: each loop iteration is delayed until the entire asynchronous operation completes\n    results.push(await bar(thing));\n  }\n  return baz(results);\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-div-regex',
    value: 'warn',
    shortDescription: 'Disallow division operators explicitly at the beginning of regular expressions',
    longDescription: 'This is used to disambiguate the division operator to not confuse users.',
    examples: { correct: 'function bar() { return /\\=foo/; }', incorrect: 'function bar() { return /=foo/; }' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'getter-return',
    value: 'warn',
    shortDescription: 'Enforce return statements in getters',
    longDescription: 'This rule enforces that a return statement is present in property getters.',
    examples: {
      correct:
        'p = {\n    get name(){\n        return "nicholas";\n    }\n};\n\nObject.defineProperty(p, "age", {\n    get: function (){\n        return 18;\n    }\n});\n\nclass P{\n    get name(){\n        return "nicholas";\n    }\n}',
      incorrect:
        'p = {\n    get name(){\n        // no returns.\n    }\n};\n\nObject.defineProperty(p, "age", {\n    get: function (){\n        // no returns.\n    }\n});\n\nclass P{\n    get name(){\n        // no returns.\n    }\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'multiline-ternary',
    value: 'warn',
    shortDescription: 'Enforce newlines between operands of ternary expressions',
    longDescription:
      'This rule enforces or disallows newlines between operands of a ternary expression.\nNote: The location of the operators is not enforced by this rule. Please see the operator-linebreak rule if you are interested in enforcing the location of the operators themselves.',
    examples: {
      correct: 'foo &gt; bar ?\n    value1 :\n    value2;\n\nfoo &gt; bar ?\n    (baz &gt; qux ?\n        value1 :\n        value2) :\n    value3;',
      incorrect: 'foo &gt; bar ? value1 : value2;\n\nfoo &gt; bar ? value :\n    value2;\n\nfoo &gt; bar ?\n    value : value2;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'capitalized-comments',
    value: 'warn',
    shortDescription: 'Enforce or disallow capitalization of the first letter of a comment',
    longDescription:
      'This rule aims to enforce a consistent style of comments across your codebase, specifically by either requiring or disallowing a capitalized letter as the first word character in a comment. This rule will not issue warnings when non-cased letters are used.',
    examples: {
      correct:
        '// Capitalized comment\n\n// 1. Non-letter at beginning of comment\n\n// 丈 Non-Latin character at beginning of comment\n\n\n\n\n\n/* istanbul ignore next */\n/* jscs:enable */\n/* jshint asi:true */\n/* global foo */\n/* globals foo */\n/* exported myVar */\n// eslint-disable-line\n// eslint-disable-next-line\n// https://github.com',
      incorrect: '// lowercase comment',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'max-statements-per-line',
    value: 'warn',
    shortDescription: 'Enforce a maximum number of statements allowed per line',
    longDescription: 'This rule enforces a maximum number of statements allowed per line.',
    examples: {
      correct:
        'var bar, baz;\nif (condition) bar = 1;\nfor (var i = 0; i &lt; length; ++i);\nswitch (discriminant) { default: }\nfunction foo() { }\nvar foo = function foo() { };\n(function foo() { })();',
      incorrect:
        'var bar; var baz;\nif (condition) { bar = 1; }\nfor (var i = 0; i &lt; length; ++i) { bar = 1; }\nswitch (discriminant) { default: break; }\nfunction foo() { bar = 1; }\nvar foo = function foo() { bar = 1; };\n(function foo() { bar = 1; })();',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'valid-jsdoc',
    value: 'warn',
    shortDescription: 'Enforce valid JSDoc comments',
    longDescription: 'This rule enforces valid and consistent JSDoc comments. It reports any of the following problems:.',
    examples: {
      correct:
        '/**\n * Add two numbers.\n * @param {number} num1 The first number.\n * @param {number} num2 The second number.\n * @returns {number} The sum of the two numbers.\n */\nfunction add(num1, num2) {\n    return num1 + num2;\n}\n\n// default options allow missing function description\n// return type `void` means the function has no `return` statement\n/**\n * @param {string} name Whom to greet.\n * @returns {void}\n */\nfunction greet(name) {\n    console.log("Hello " + name);\n}\n\n// @constructor tag allows missing @returns tag\n/**\n * Represents a sum.\n * @constructor\n * @param {number} num1 The first number.\n * @param {number} num2 The second number.\n */\nfunction sum(num1, num2) {\n    this.num1 = num1;\n    this.num2 = num2;\n}\n\n// class constructor allows missing @returns tag\n/**\n * Represents a sum.\n */\nclass Sum {\n    /**\n     * @param {number} num1 The first number.\n     * @param {number} num2 The second number.\n     */\n    constructor(num1, num2) {\n        this.num1 = num1;\n        this.num2 = num2;\n    }\n}\n\n// @abstract tag allows @returns tag without `return` statement\nclass Widget {\n    /**\n    * When the state changes, does it affect the rendered appearance?\n    * @abstract\n    * @param {Object} state The new state of the widget.\n    * @returns {boolean} Is current appearance inconsistent with new state?\n    */\n    mustRender (state) {\n        throw new Error("Widget subclass did not implement mustRender");\n    }\n}\n\n// @override tag allows missing @param and @returns tags\nclass WonderfulWidget extends Widget {\n    /**\n     * @override\n     */\n    mustRender (state) {\n        return state !== this.state; // shallow comparison\n    }\n}',
      incorrect:
        '// expected @param tag for parameter num1 but found num instead\n// missing @param tag for parameter num2\n// missing return type\n/**\n * Add two numbers.\n * @param {number} num The first number.\n * @returns The sum of the two numbers.\n */\nfunction add(num1, num2) {\n    return num1 + num2;\n}\n\n// missing brace\n// missing @returns tag\n/**\n * @param {string name Whom to greet.\n */\nfunction greet(name) {\n    console.log("Hello " + name);\n}\n\n// missing parameter type for num1\n// missing parameter description for num2\n/**\n * Represents a sum.\n * @constructor\n * @param num1 The first number.\n * @param {number} num2\n */\nfunction sum(num1, num2) {\n    this.num1 = num1;\n    this.num2 = num2;\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-multiple-empty-lines',
    value: 'warn',
    shortDescription: 'Disallow multiple empty lines',
    longDescription:
      'This rule aims to reduce the scrolling required when reading through your code. It will warn when the maximum amount of empty lines has been exceeded.',
    examples: { correct: 'var foo = 5;\n\n\nvar bar = 3;', incorrect: 'var foo = 5;\n\n\n\nvar bar = 3;' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'func-names',
    value: 'warn',
    shortDescription: 'Require or disallow named function expressions',
    longDescription: 'This rule can enforce or disallow the use of named function expressions.',
    examples: {
      correct: 'Foo.prototype.bar = function bar() {};\n\n(function bar() {\n    // ...\n}())',
      incorrect: 'Foo.prototype.bar = function() {};\n\n(function() {\n    // ...\n}())',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'brace-style',
    value: 'warn',
    shortDescription: 'Enforce consistent brace style for blocks',
    longDescription: 'This rule enforces consistent brace style for blocks.',
    examples: {
      correct:
        'function foo() {\n  return true;\n}\n\nif (foo) {\n  bar();\n}\n\nif (foo) {\n  bar();\n} else {\n  baz();\n}\n\ntry {\n  somethingRisky();\n} catch(e) {\n  handleError();\n}\n\n// when there are no braces, there are no problems\nif (foo) bar();\nelse if (baz) boom();',
      incorrect:
        'function foo()\n{\n  return true;\n}\n\nif (foo)\n{\n  bar();\n}\n\ntry\n{\n  somethingRisky();\n} catch(e)\n{\n  handleError();\n}\n\nif (foo) {\n  bar();\n}\nelse {\n  baz();\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-extra-boolean-cast',
    value: 'warn',
    shortDescription: 'Disallow unnecessary boolean casts',
    longDescription: 'This rule disallows unnecessary boolean casts.',
    examples: {
      correct: 'var foo = !!bar;\nvar foo = Boolean(bar);\n\nfunction foo() {\n    return !!bar;\n}\n\nvar foo = bar ? !!baz : !!bat;',
      incorrect:
        'var foo = !!!bar;\n\nvar foo = !!bar ? baz : bat;\n\nvar foo = Boolean(!!bar);\n\nvar foo = new Boolean(!!bar);\n\nif (!!foo) {\n    // ...\n}\n\nif (Boolean(foo)) {\n    // ...\n}\n\nwhile (!!foo) {\n    // ...\n}\n\ndo {\n    // ...\n} while (Boolean(foo));\n\nfor (; !!foo; ) {\n    // ...\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'object-curly-newline',
    value: 'warn',
    shortDescription: 'Enforce consistent line breaks inside braces',
    longDescription: 'This rule enforces consistent line breaks inside braces of object literals or destructuring assignments.',
    examples: {
      correct:
        'let a = {\n};\nlet b = {\n    foo: 1\n};\nlet c = {\n    foo: 1, bar: 2\n};\nlet d = {\n    foo: 1,\n    bar: 2\n};\nlet e = {\n    foo: function() {\n        dosomething();\n    }\n};\n\nlet {\n} = obj;\nlet {\n    f\n} = obj;\nlet {\n    g, h\n} = obj;\nlet {\n    i,\n    j\n} = obj;\nlet {\n    k = function() {\n        dosomething();\n    }\n} = obj;',
      incorrect:
        'let a = {};\nlet b = {foo: 1};\nlet c = {foo: 1, bar: 2};\nlet d = {foo: 1,\n    bar: 2};\nlet e = {foo() {\n    dosomething();\n}};\n\nlet {} = obj;\nlet {f} = obj;\nlet {g, h} = obj;\nlet {i,\n    j} = obj;\nlet {k = function() {\n    dosomething();\n}} = obj;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'semi',
    value: 'warn',
    shortDescription: 'Require or disallow semicolons instead of ASI',
    longDescription: 'This rule enforces consistent use of semicolons.',
    examples: {
      correct: 'var name = "ESLint";\n\nobject.method = function() {\n    // ...\n};',
      incorrect: 'var name = "ESLint"\n\nobject.method = function() {\n    // ...\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-loop-func',
    value: 'warn',
    shortDescription: 'Disallow function declarations and expressions inside loop statements',
    longDescription:
      'This error is raised to highlight a piece of code that may not work as you expect it to and could also indicate a misunderstanding of how the language works. Your code may run without any problems if you do not fix this error, but in some situations it could behave unexpectedly.',
    examples: {
      correct:
        'var a = function() {};\n\nfor (var i=10; i; i--) {\n    a();\n}\n\nfor (var i=10; i; i--) {\n    var a = function() {}; // OK, no references to variables in the outer scopes.\n    a();\n}\n\nfor (let i=10; i; i--) {\n    var a = function() { return i; }; // OK, all references are referring to block scoped variables in the loop.\n    a();\n}\n\nvar foo = 100;\nfor (let i=10; i; i--) {\n    var a = function() { return foo; }; // OK, all references are referring to never modified variables.\n    a();\n}\n//... no modifications of foo after this loop ...',
      incorrect:
        "for (var i=10; i; i--) {\n    (function() { return i; })();\n}\n\nwhile(i) {\n    var a = function() { return i; };\n    a();\n}\n\ndo {\n    function a() { return i; };\n    a();\n} while (i);\n\nlet foo = 0;\nfor (let i = 0; i &lt; 10; ++i) {\n    //Bad, `foo` is not in the loop-block's scope and `foo` is modified in/after the loop\n    setTimeout(() =&gt; console.log(foo));\n    foo += 1;\n}\n\nfor (let i = 0; i &lt; 10; ++i) {\n    //Bad, `foo` is not in the loop-block's scope and `foo` is modified in/after the loop\n    setTimeout(() =&gt; console.log(foo));\n}\nfoo = 100;",
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'camelcase',
    value: 'warn',
    shortDescription: 'Enforce camelcase naming convention',
    longDescription:
      'This rule looks for any underscores (_) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name. If ESLint decides that the variable is a constant (all uppercase), then no warning will be thrown. Otherwise, a warning will be thrown. This rule only flags definitions and assignments but not function calls. In case of ES6 import statements, this rule only targets the name of the variable that will be imported into the local module scope.',
    examples: {
      correct:
        'import { no_camelcased as camelCased } from "external-module";\n\nvar myFavoriteColor   = "#112C85";\nvar _myFavoriteColor  = "#112C85";\nvar myFavoriteColor_  = "#112C85";\nvar MY_FAVORITE_COLOR = "#112C85";\nvar foo = bar.baz_boom;\nvar foo = { qux: bar.baz_boom };\n\nobj.do_something();\ndo_something();\nnew do_something();\n\nvar { category_id: category } = query;\n\nfunction foo({ isCamelCased }) {\n    // ...\n};\n\nfunction foo({ isCamelCased: isAlsoCamelCased }) {\n    // ...\n}\n\nfunction foo({ isCamelCased = \'default value\' }) {\n    // ...\n};\n\nvar { categoryId = 1 } = query;\n\nvar { foo: isCamelCased } = bar;\n\nvar { foo: isCamelCased = 1 } = quz;',
      incorrect:
        'import { no_camelcased } from "external-module"\n\nvar my_favorite_color = "#112C85";\n\nfunction do_something() {\n    // ...\n}\n\nobj.do_something = function() {\n    // ...\n};\n\nfunction foo({ no_camelcased }) {\n    // ...\n};\n\nfunction foo({ isCamelcased: no_camelcased }) {\n    // ...\n}\n\nfunction foo({ no_camelcased = \'default value\' }) {\n    // ...\n};\n\nvar obj = {\n    my_pref: 1\n};\n\nvar { category_id = 1 } = query;\n\nvar { foo: no_camelcased } = bar;\n\nvar { foo: bar_baz = 1 } = quz;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'sort-vars',
    value: 'warn',
    shortDescription: 'Require variables within the same declaration block to be sorted',
    longDescription:
      'This rule checks all variable declaration blocks and verifies that all variables are sorted alphabetically.\nThe default configuration of the rule is case-sensitive.',
    examples: {
      correct: 'var a, b, c, d;\n\nvar _a = 10;\nvar _b = 20;\n\nvar A, a;\n\nvar B, a, c;',
      incorrect: 'var b, a;\n\nvar a, B, c;\n\nvar a, A;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-implied-eval',
    value: 'warn',
    shortDescription: 'Disallow the use of eval()-like methods',
    longDescription:
      'This rule aims to eliminate implied eval() through the use of setTimeout(), setInterval() or execScript(). As such, it will warn when either function is used with a string as the first argument.',
    examples: {
      correct: 'setTimeout(function() {\n    alert("Hi!");\n}, 100);\n\nsetInterval(function() {\n    alert("Hi!");\n}, 100);',
      incorrect:
        'setTimeout("alert(\'Hi!\');", 100);\n\nsetInterval("alert(\'Hi!\');", 100);\n\nexecScript("alert(\'Hi!\')");\n\nwindow.setTimeout("count = 5", 10);\n\nwindow.setInterval("foo = bar", 10);',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'block-spacing',
    value: 'warn',
    shortDescription: 'Disallow or enforce spaces inside of blocks after opening block and before closing block',
    longDescription:
      'This rule enforces consistent spacing inside an open block token and the next token on the same line. This rule also enforces consistent spacing inside a close block token and previous token on the same line.',
    examples: {
      correct: 'function foo() { return true; }\nif (foo) { bar = 0; }',
      incorrect: 'function foo() {return true;}\nif (foo) { bar = 0;}\nfunction baz() {let i = 0;\n    return i;\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'max-classes-per-file',
    value: 'warn',
    shortDescription: 'Enforce a maximum number of classes per file',
    longDescription: 'This rule enforces that each file may contain only a particular number\nof classes and no more.',
    examples: { correct: 'class Foo {}', incorrect: 'class Foo {}\nclass Bar {}' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'vars-on-top',
    value: 'warn',
    shortDescription: 'Require var declarations be placed at the top of their containing scope',
    longDescription:
      'This rule aims to keep all variable declarations in the leading series of statements.\nAllowing multiple declarations helps promote maintainability and is thus allowed.',
    examples: {
      correct:
        'function doSomething() {\n    var first;\n    var second; //multiple declarations are allowed at the top\n    if (true) {\n        first = true;\n    }\n}\n\nfunction doSomething() {\n    var i;\n    for (i=0; i&lt;10; i++) {}\n}',
      incorrect:
        '// Variable declarations in a block:\nfunction doSomething() {\n    var first;\n    if (true) {\n        first = true;\n    }\n    var second;\n}\n\n// Variable declaration in for initializer:\nfunction doSomething() {\n    for (var i=0; i&lt;10; i++) {}\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-caller',
    value: 'warn',
    shortDescription: 'Disallow the use of arguments.caller or arguments.callee',
    longDescription:
      'This rule is aimed at discouraging the use of deprecated and sub-optimal code, but disallowing the use of arguments.caller and arguments.callee. As such, it will warn when arguments.caller and arguments.callee are used.',
    examples: {
      correct:
        'function foo(n) {\n    if (n &lt;= 0) {\n        return;\n    }\n\n    foo(n - 1);\n}\n\n[1,2,3,4,5].map(function factorial(n) {\n    return !(n &gt; 1) ? 1 : factorial(n - 1) * n;\n});',
      incorrect:
        'function foo(n) {\n    if (n &lt;= 0) {\n        return;\n    }\n\n    arguments.callee(n - 1);\n}\n\n[1,2,3,4,5].map(function(n) {\n    return !(n &gt; 1) ? 1 : arguments.callee(n - 1) * n;\n});',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-extend-native',
    value: 'warn',
    shortDescription: 'Disallow extending native types',
    longDescription: 'Disallows directly modifying the prototype of builtin objects.',
    examples: {
      correct: 'Object.prototype.a = "a";',
      incorrect: 'Object.prototype.a = "a";\nObject.defineProperty(Array.prototype, "times", { value: 999 });',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-prototype-builtins',
    value: 'warn',
    shortDescription: 'Disallow calling some Object.prototype methods directly on objects',
    longDescription: 'This rule disallows calling some Object.prototype methods directly on object instances.',
    examples: {
      correct:
        'var hasBarProperty = Object.prototype.hasOwnProperty.call(foo, "bar");\n\nvar isPrototypeOfBar = Object.prototype.isPrototypeOf.call(foo, bar);\n\nvar barIsEnumerable = {}.propertyIsEnumerable.call(foo, "bar");',
      incorrect:
        'var hasBarProperty = foo.hasOwnProperty("bar");\n\nvar isPrototypeOfBar = foo.isPrototypeOf(bar);\n\nvar barIsEnumerable = foo.propertyIsEnumerable("bar");',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-iterator',
    value: 'warn',
    shortDescription: 'Disallow the use of the __iterator__ property',
    longDescription:
      'This rule is aimed at preventing errors that may arise from using the __iterator__ property, which is not implemented in several browsers. As such, it will warn whenever it encounters the __iterator__ property.',
    examples: {
      correct: 'var __iterator__ = foo; // Not using the `__iterator__` property.',
      incorrect:
        'Foo.prototype.__iterator__ = function() {\n    return new FooIterator(this);\n};\n\nfoo.__iterator__ = function () {};\n\nfoo["__iterator__"] = function () {};',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'default-case',
    value: 'warn',
    shortDescription: 'Require default cases in switch statements',
    longDescription:
      'This rule aims to require default case in switch statements. You may optionally include a // no default after the last case if there is no default case. The comment may be in any desired case, such as // No Default.',
    examples: {
      correct:
        'switch (a) {\n    case 1:\n        /* code */\n        break;\n\n    default:\n        /* code */\n        break;\n}\n\n\nswitch (a) {\n    case 1:\n        /* code */\n        break;\n\n    // no default\n}\n\nswitch (a) {\n    case 1:\n        /* code */\n        break;\n\n    // No Default\n}',
      incorrect: 'switch (a) {\n    case 1:\n        /* code */\n        break;\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-with',
    value: 'warn',
    shortDescription: 'Disallow with statements',
    longDescription: 'This rule disallows with statements.',
    examples: {
      correct: 'const r = ({x, y}) =&gt; Math.sqrt(x * x + y * y);',
      incorrect: 'with (point) {\n    r = Math.sqrt(x * x + y * y); // is r a member of point?\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'comma-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing before and after commas',
    longDescription:
      'This rule enforces consistent spacing before and after commas in variable declarations, array literals, object literals, function parameters, and sequences.',
    examples: {
      correct:
        'var foo = 1, bar = 2\n    , baz = 3;\nvar arr = [1, 2];\nvar arr = [1,, 3]\nvar obj = {"foo": "bar", "baz": "qur"};\nfoo(a, b);\nnew Foo(a, b);\nfunction foo(a, b){}\na, b',
      incorrect:
        'var foo = 1 ,bar = 2;\nvar arr = [1 , 2];\nvar obj = {"foo": "bar" ,"baz": "qur"};\nfoo(a ,b);\nnew Foo(a ,b);\nfunction foo(a ,b){}\na ,b',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-trailing-spaces',
    value: 'warn',
    shortDescription: 'Disallow trailing whitespace at the end of lines',
    longDescription: 'This rule disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines.',
    examples: { correct: 'var foo = 0;\nvar baz = 5;', incorrect: 'var foo = 0;//•••••\nvar baz = 5;//••\n//•••••' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'consistent-this',
    value: 'warn',
    shortDescription: 'Enforce consistent naming when capturing the current execution context',
    longDescription: 'This rule enforces two things about variables with the designated alias names for this:.',
    examples: {
      correct: 'var that = this;\n\nvar self = 42;\n\nvar self;\n\nthat = this;\n\nfoo.bar = this;',
      incorrect: 'var that = 42;\n\nvar self = this;\n\nthat = 42;\n\nself = this;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'eol-last',
    value: 'warn',
    shortDescription: 'Require or disallow newline at the end of files',
    longDescription: 'This rule enforces at least one newline (or absence thereof) at the end\nof non-empty files.',
    examples: { correct: 'function doSmth() {\n  var foo = 2;\n}\\n', incorrect: 'function doSmth() {\n  var foo = 2;\n}' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'operator-assignment',
    value: 'warn',
    shortDescription: 'Require or disallow assignment operator shorthand where possible',
    longDescription: 'This rule requires or disallows assignment operator shorthand where possible.',
    examples: {
      correct:
        'x = y;\nx += y;\nx = y * z;\nx = (x * y) * z;\nx[0] /= y;\nx[foo()] = x[foo()] % 2;\nx = y + x; // `+` is not always commutative (e.g. x = "abc")',
      incorrect: 'x = x + y;\nx = y * x;\nx[0] = x[0] / y;\nx.y = x.y &lt;&lt; z;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'padding-line-between-statements',
    value: 'warn',
    shortDescription: 'Require or disallow padding lines between statements',
    longDescription: 'This rule does nothing if no configurations are provided.',
    examples: {
      correct:
        '/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: "*", next: "return" }\n]*/\n\nfunction foo() {\n    bar();\n\n    return;\n}\n\nfunction foo() {\n    return;\n}',
      incorrect:
        '/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: "*", next: "return" }\n]*/\n\nfunction foo() {\n    bar();\n    return;\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-cond-assign',
    value: 'warn',
    shortDescription: 'Disallow assignment operators in conditional expressions',
    longDescription: 'This rule disallows ambiguous assignment operators in test conditions of if, for, while, and do...while statements.',
    examples: {
      correct:
        '// Assignment replaced by comparison\nvar x;\nif (x === 0) {\n    var b = 1;\n}\n\n// Practical example that wraps the assignment in parentheses\nfunction setHeight(someNode) {\n    "use strict";\n    do {\n        someNode.height = "100px";\n    } while ((someNode = someNode.parentNode));\n}\n\n// Practical example that wraps the assignment and tests for \'null\'\nfunction setHeight(someNode) {\n    "use strict";\n    do {\n        someNode.height = "100px";\n    } while ((someNode = someNode.parentNode) !== null);\n}',
      incorrect:
        '// Unintentional assignment\nvar x;\nif (x = 0) {\n    var b = 1;\n}\n\n// Practical example that is similar to an error\nfunction setHeight(someNode) {\n    "use strict";\n    do {\n        someNode.height = "100px";\n    } while (someNode = someNode.parentNode);\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'require-jsdoc',
    value: 'warn',
    shortDescription: 'Require JSDoc comments',
    longDescription: 'This rule requires JSDoc comments for specified nodes. Supported nodes:.',
    examples: {
      correct:
        '/*eslint "require-jsdoc": ["error", {\n    "require": {\n        "FunctionDeclaration": true,\n        "MethodDefinition": true,\n        "ClassDeclaration": true,\n        "ArrowFunctionExpression": true,\n        "FunctionExpression": true\n    }\n}]*/\n\n/**\n * It returns 10\n */\nfunction foo() {\n    return 10;\n}\n\n/**\n * It returns test + 10\n * @params {int} test - some number\n * @returns {int} sum of test and 10\n */\nvar foo = (test) =&gt; {\n    return test + 10;\n}\n\n/**\n * It returns 10\n */\nvar foo = () =&gt; {\n    return 10;\n}\n\n/**\n * It returns 10\n */\nvar foo = function() {\n    return 10;\n}\n\nvar array = [1,2,3];\narray.filter(function(item) {\n    return item &gt; 2;\n});\n\n/**\n * A class that can return the number 10\n */\nclass Foo {\n    /**\n    * It returns 10\n    */\n    bar() {\n        return 10;\n    }\n}\n\n/**\n * It returns 10\n */\nvar foo = function() {\n    return 10;\n};\n\nvar foo = {\n    /**\n    * It returns 10\n    */\n    bar: function() {\n        return 10;\n    },\n\n    /**\n    * It returns 10\n    */\n    baz() {\n        return 10;\n    }\n};\n\nsetTimeout(() =&gt; {}, 10); // since it\'s an anonymous arrow function',
      incorrect:
        '/*eslint "require-jsdoc": ["error", {\n    "require": {\n        "FunctionDeclaration": true,\n        "MethodDefinition": true,\n        "ClassDeclaration": true,\n        "ArrowFunctionExpression": true,\n        "FunctionExpression": true\n    }\n}]*/\n\nfunction foo() {\n    return 10;\n}\n\nvar foo = () =&gt; {\n    return 10;\n};\n\nclass Foo {\n    bar() {\n        return 10;\n    }\n}\n\nvar foo = function() {\n    return 10;\n};\n\nvar foo = {\n    bar: function() {\n        return 10;\n    },\n\n    baz() {\n        return 10;\n    }\n};',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'quote-props',
    value: 'warn',
    shortDescription: 'Require quotes around object literal property names',
    longDescription: 'This rule requires quotes around object literal property names.',
    examples: {
      correct:
        'var object1 = {\n    "foo": "bar",\n    "baz": 42,\n    "qux-lorem": true\n};\n\nvar object2 = {\n    \'foo\': \'bar\',\n    \'baz\': 42,\n    \'qux-lorem\': true\n};\n\nvar object3 = {\n    foo() {\n        return;\n    }\n};',
      incorrect: 'var object = {\n    foo: "bar",\n    baz: 42,\n    "qux-lorem": true\n};',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'sort-keys',
    value: 'warn',
    shortDescription: 'Require object keys to be sorted',
    longDescription: 'This rule checks all property definitions of object expressions and verifies that all variables are sorted alphabetically.',
    examples: {
      correct:
        'let obj = {a: 1, b: 2, c: 3};\nlet obj = {a: 1, "b": 2, c: 3};\n\n// Case-sensitive by default.\nlet obj = {C: 3, a: 1, b: 2};\n\n// Non-natural order by default.\nlet obj = {1: a, 10: b, 2: c};\n\n// This rule checks computed properties which have a simple name as well.\nlet obj = {a: 1, ["b"]: 2, c: 3};\nlet obj = {a: 1, [b]: 2, c: 3};\n\n// This rule ignores computed properties which have a non-simple name.\nlet obj = {a: 1, [c + d]: 3, b: 2};\nlet obj = {a: 1, ["c" + "d"]: 3, b: 2};\nlet obj = {a: 1, [`${c}`]: 3, b: 2};\nlet obj = {a: 1, [tag`c`]: 3, b: 2};\n\n// This rule ignores objects that have a spread operator in them.\nlet obj = {b: 1, ...c, a: 2};',
      incorrect:
        'let obj = {a: 1, c: 3, b: 2};\nlet obj = {a: 1, "c": 3, b: 2};\n\n// Case-sensitive by default.\nlet obj = {a: 1, b: 2, C: 3};\n\n// Non-natural order by default.\nlet obj = {1: a, 2: c, 10: b};\n\n// This rule checks computed properties which have a simple name as well.\n// Simple names are names which are expressed by an Identifier node or a Literal node.\nconst S = Symbol("s")\nlet obj = {a: 1, ["c"]: 3, b: 2};\nlet obj = {a: 1, [S]: 3, b: 2};',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-tabs',
    value: 'warn',
    shortDescription: 'Disallow all tabs',
    longDescription: 'This rule looks for tabs anywhere inside a file: code, comments or anything else.',
    examples: {
      correct: "var a = 2;\n\n/**\n* it's a test function\n*/\nfunction test(){}\n\nvar x = 1; // test",
      incorrect: "var a \\t= 2;\n\n/**\n* \\t\\t it's a test function\n*/\nfunction test(){}\n\nvar x = 1; // \\t test",
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'key-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing between keys and values in object literal properties',
    longDescription:
      'This rule enforces consistent spacing between keys and values in object literal properties. In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed.',
    examples: { correct: 'var obj = { "foo": 42 };', incorrect: 'var obj = { "foo" : 42 };' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'switch-colon-spacing',
    value: 'warn',
    shortDescription: 'Enforce spacing around colons of switch statements',
    longDescription:
      'This rule controls spacing around colons of case and default clauses in switch statements.\nThis rule does the check only if the consecutive tokens exist on the same line.',
    examples: {
      correct:
        'switch (a) {\n    case 0: foo(); break;\n    case 1:\n        bar();\n        break;\n    default:\n        baz();\n        break;\n}',
      incorrect: 'switch (a) {\n    case 0 :break;\n    default :foo();\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-whitespace-before-property',
    value: 'warn',
    shortDescription: 'Disallow whitespace before properties',
    longDescription:
      'This rule disallows whitespace around the dot or before the opening bracket before properties of objects if they are on the same line. This rule allows whitespace when the object and property are on separate lines, as it is common to add newlines to longer chains of properties:.',
    examples: {
      correct: 'foo.bar\n\nfoo[bar]\n\nfoo[ bar ]\n\nfoo.bar.baz\n\nfoo\n  .bar().baz()\n\nfoo\n  .bar()\n  .baz()\n\nfoo.\n  bar().\n  baz()',
      incorrect: 'foo [bar]\n\nfoo. bar\n\nfoo .bar\n\nfoo. bar. baz\n\nfoo. bar()\n  .baz()\n\nfoo\n  .bar(). baz()',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-unreachable',
    value: 'warn',
    shortDescription: 'Disallow unreachable code after return, throw, continue, and break statements',
    longDescription: 'This rule disallows unreachable code after return, throw, continue, and break statements.',
    examples: {
      correct:
        'function foo() {\n    return bar();\n    function bar() {\n        return 1;\n    }\n}\n\nfunction bar() {\n    return x;\n    var x;\n}\n\nswitch (foo) {\n    case 1:\n        break;\n        var x;\n}',
      incorrect:
        'function foo() {\n    return true;\n    console.log("done");\n}\n\nfunction bar() {\n    throw new Error("Oops!");\n    console.log("done");\n}\n\nwhile(value) {\n    break;\n    console.log("done");\n}\n\nthrow new Error("Oops!");\nconsole.log("done");\n\nfunction baz() {\n    if (Math.random() &lt; 0.5) {\n        return;\n    } else {\n        throw new Error();\n    }\n    console.log("done");\n}\n\nfor (;;) {}\nconsole.log("done");',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'accessor-pairs',
    value: 'warn',
    shortDescription: 'Enforce getter and setter pairs in objects',
    longDescription: 'This rule enforces a style where it requires to have a getter for every property which has a setter defined.',
    examples: {
      correct:
        "var o = {\n    set a(value) {\n        this.val = value;\n    },\n    get a() {\n        return this.val;\n    }\n};\n\nvar o = {d: 1};\nObject.defineProperty(o, 'c', {\n    set: function(value) {\n        this.val = value;\n    },\n    get: function() {\n        return this.val;\n    }\n});",
      incorrect:
        "var o = {\n    set a(value) {\n        this.val = value;\n    }\n};\n\nvar o = {d: 1};\nObject.defineProperty(o, 'c', {\n    set: function(value) {\n        this.val = value;\n    }\n});",
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-multi-spaces',
    value: 'warn',
    shortDescription: 'Disallow multiple spaces',
    longDescription:
      'This rule aims to disallow multiple whitespace around logical expressions, conditional expressions, declarations, array elements, object properties, sequences and function parameters.',
    examples: {
      correct: 'var a = 1;\n\nif(foo === "bar") {}\n\na &lt;&lt; b\n\nvar arr = [1, 2];\n\na ? b: c',
      incorrect: 'var a =  1;\n\nif(foo   === "bar") {}\n\na &lt;&lt;  b\n\nvar arr = [1,  2];\n\na ?  b: c',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-new-func',
    value: 'warn',
    shortDescription: 'Disallow new operators with the Function object',
    longDescription:
      'This error is raised to highlight the use of a bad practice. By passing a string to the Function constructor, you are requiring the engine to parse that string much in the way it has to when you call the eval function.',
    examples: {
      correct: 'var x = function (a, b) {\n    return a + b;\n};',
      incorrect: 'var x = new Function("a", "b", "return a + b");\nvar x = Function("a", "b", "return a + b");',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-magic-numbers',
    value: 'warn',
    shortDescription: 'Disallow magic numbers',
    longDescription:
      'The no-magic-numbers rule aims to make code more readable and refactoring easier by ensuring that special numbers\nare declared as constants to make their meaning explicit.',
    examples: {
      correct: 'var TAX = 0.25;\n\nvar dutyFreePrice = 100,\n    finalPrice = dutyFreePrice + (dutyFreePrice * TAX);',
      incorrect: 'var dutyFreePrice = 100,\n    finalPrice = dutyFreePrice + (dutyFreePrice * 0.25);',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'max-lines-per-function',
    value: 'warn',
    shortDescription: 'Enforce a maximum number of line of code in a function',
    longDescription: 'This rule enforces a maximum number of lines per function, in order to aid in maintainability and reduce complexity.',
    examples: { correct: 'function foo() {\n    var x = 0;\n}', incorrect: 'function foo() {\n    var x = 0;\n}' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'guard-for-in',
    value: 'warn',
    shortDescription: 'Require for-in loops to include an if statement',
    longDescription:
      'This rule is aimed at preventing unexpected behavior that could arise from using a for in loop without filtering the results in the loop. As such, it will warn when for in loops do not filter their results with an if statement.',
    examples: {
      correct:
        'for (key in foo) {\n    if (Object.prototype.hasOwnProperty.call(foo, key)) {\n        doSomething(key);\n    }\n}\n\nfor (key in foo) {\n    if ({}.hasOwnProperty.call(foo, key)) {\n        doSomething(key);\n    }\n}',
      incorrect: 'for (key in foo) {\n    doSomething(key);\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-sparse-arrays',
    value: 'warn',
    shortDescription: 'Disallow sparse arrays',
    longDescription:
      'This rule disallows sparse array literals which have “holes” where commas are not preceded by elements. It does not apply to a trailing comma following the last element.',
    examples: {
      correct:
        'var items = [];\nvar items = new Array(23);\n\n// trailing comma (after the last element) is not a problem\nvar colors = [ "red", "blue", ];',
      incorrect: 'var items = [,];\nvar colors = [ "red",, "blue" ];',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-implicit-globals',
    value: 'warn',
    shortDescription: 'Disallow variable and function declarations in the global scope',
    longDescription:
      'This rule disallows var and named function declarations at the top-level script scope. This does not apply to ES and CommonJS modules since they have a module scope.',
    examples: {
      correct:
        '// explicitly set on window\nwindow.foo = 1;\nwindow.bar = function() {};\n\n// intended to be scope to this file\n(function() {\n  var foo = 1;\n\n  function bar() {}\n})();',
      incorrect: 'var foo = 1;\n\nfunction bar() {}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-label-var',
    value: 'warn',
    shortDescription: 'Disallow labels that share a name with a variable',
    longDescription:
      'This rule aims to create clearer code by disallowing the bad practice of creating a label that shares a name with a variable that is in scope.',
    examples: {
      correct:
        '// The variable that has the same name as the label is not in scope.\n\nfunction foo() {\n  var q = t;\n}\n\nfunction bar() {\nq:\n  for(;;) {\n    break q;\n  }\n}',
      incorrect: 'var x = foo;\nfunction bar() {\nx:\n  for (;;) {\n    break x;\n  }\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'init-declarations',
    value: 'warn',
    shortDescription: 'Require or disallow initialization in variable declarations',
    longDescription:
      'This rule is aimed at enforcing or eliminating variable initializations during declaration. For example, in the following code, foo is initialized during declaration, while bar is not.',
    examples: {
      correct: 'function foo() {\n    var bar = 1;\n    let baz = 2;\n    const qux = 3;\n}',
      incorrect: 'function foo() {\n    var bar;\n    let baz;\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'handle-callback-err',
    value: 'warn',
    shortDescription: 'Require error handling in callbacks',
    longDescription: 'This rule expects that when you’re using the callback pattern in Node.js you’ll handle the error.',
    examples: {
      correct:
        'function loadData (err, data) {\n    if (err) {\n        console.log(err.stack);\n    }\n    doSomething();\n}\n\nfunction generateError (err) {\n    if (err) {}\n}',
      incorrect: 'function loadData (err, data) {\n    doSomething();\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-eq-null',
    value: 'warn',
    shortDescription: 'Disallow null comparisons without type-checking operators',
    longDescription:
      'The no-eq-null rule aims reduce potential bug and unwanted behavior by ensuring that comparisons to null only match null, and not also undefined. As such it will flag comparisons to null when using == and !=.',
    examples: {
      correct: 'if (foo === null) {\n  bar();\n}\n\nwhile (qux !== null) {\n  baz();\n}',
      incorrect: 'if (foo == null) {\n  bar();\n}\n\nwhile (qux != null) {\n  baz();\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'max-params',
    value: 'warn',
    shortDescription: 'Enforce a maximum number of parameters in function definitions',
    longDescription: 'This rule enforces a maximum number of parameters allowed in function definitions.',
    examples: {
      correct: 'function foo (bar, baz, qux) {\n    doSomething();\n}\n\nlet foo = (bar, baz, qux) =&gt; {\n    doSomething();\n};',
      incorrect: 'function foo (bar, baz, qux, qxx) {\n    doSomething();\n}\n\nlet foo = (bar, baz, qux, qxx) =&gt; {\n    doSomething();\n};',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-multi-assign',
    value: 'warn',
    shortDescription: 'Disallow use of chained assignment expressions',
    longDescription: 'This rule disallows using multiple assignments within a single statement.',
    examples: {
      correct: 'var a = 5;\nvar b = 5;\nvar c = 5;\n\nvar foo = "baz";\nvar bar = "baz";\n\nvar a = c;\nvar b = c;',
      incorrect: 'var a = b = c = 5;\n\nvar foo = bar = "baz";\n\nvar a =\n    b =\n    c;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-use-before-define',
    value: 'warn',
    shortDescription: 'Disallow the use of variables before they are defined',
    longDescription: 'This rule will warn when it encounters a reference to an identifier that has not yet been declared.',
    examples: {
      correct: 'var a;\na = 10;\nalert(a);\n\nfunction f() {}\nf(1);\n\nvar b = 1;\nfunction g() {\n    return b;\n}\n\n{\n    let c;\n    c++;\n}',
      incorrect:
        'alert(a);\nvar a = 10;\n\nf();\nfunction f() {}\n\nfunction g() {\n    return b;\n}\nvar b = 1;\n\n{\n    alert(c);\n    let c = 1;\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-invalid-this',
    value: 'warn',
    shortDescription: 'Disallow this keywords outside of classes or class-like objects',
    longDescription: 'This rule aims to flag usage of this keywords outside of classes or class-like objects.',
    examples: {
      correct:
        '"use strict";\n\nfunction Foo() {\n    // OK, this is in a legacy style constructor.\n    this.a = 0;\n    baz(() =&gt; this);\n}\n\nclass Foo {\n    constructor() {\n        // OK, this is in a constructor.\n        this.a = 0;\n        baz(() =&gt; this);\n    }\n}\n\nvar obj = {\n    foo: function foo() {\n        // OK, this is in a method (this function is on object literal).\n        this.a = 0;\n    }\n};\n\nvar obj = {\n    foo() {\n        // OK, this is in a method (this function is on object literal).\n        this.a = 0;\n    }\n};\n\nvar obj = {\n    get foo() {\n        // OK, this is in a method (this function is on object literal).\n        return this.a;\n    }\n};\n\nvar obj = Object.create(null, {\n    foo: {value: function foo() {\n        // OK, this is in a method (this function is on object literal).\n        this.a = 0;\n    }}\n});\n\nObject.defineProperty(obj, "foo", {\n    value: function foo() {\n        // OK, this is in a method (this function is on object literal).\n        this.a = 0;\n    }\n});\n\nObject.defineProperties(obj, {\n    foo: {value: function foo() {\n        // OK, this is in a method (this function is on object literal).\n        this.a = 0;\n    }}\n});\n\nfunction Foo() {\n    this.foo = function foo() {\n        // OK, this is in a method (this function assigns to a property).\n        this.a = 0;\n        baz(() =&gt; this);\n    };\n}\n\nobj.foo = function foo() {\n    // OK, this is in a method (this function assigns to a property).\n    this.a = 0;\n};\n\nFoo.prototype.foo = function foo() {\n    // OK, this is in a method (this function assigns to a property).\n    this.a = 0;\n};\n\nclass Foo {\n    foo() {\n        // OK, this is in a method.\n        this.a = 0;\n        baz(() =&gt; this);\n    }\n\n    static foo() {\n        // OK, this is in a method (static methods also have valid this).\n        this.a = 0;\n        baz(() =&gt; this);\n    }\n}\n\nvar foo = (function foo() {\n    // OK, the `bind` method of this function is called directly.\n    this.a = 0;\n}).bind(obj);\n\nfoo.forEach(function() {\n    // OK, `thisArg` of `.forEach()` is given.\n    this.a = 0;\n    baz(() =&gt; this);\n}, thisArg);\n\n/** @this Foo */\nfunction foo() {\n    // OK, this function has a `@this` tag in its JSDoc comment.\n    this.a = 0;\n}',
      incorrect:
        '"use strict";\n\nthis.a = 0;\nbaz(() =&gt; this);\n\n(function() {\n    this.a = 0;\n    baz(() =&gt; this);\n})();\n\nfunction foo() {\n    this.a = 0;\n    baz(() =&gt; this);\n}\n\nvar foo = function() {\n    this.a = 0;\n    baz(() =&gt; this);\n};\n\nfoo(function() {\n    this.a = 0;\n    baz(() =&gt; this);\n});\n\nobj.foo = () =&gt; {\n    // `this` of arrow functions is the outer scope\'s.\n    this.a = 0;\n};\n\nvar obj = {\n    aaa: function() {\n        return function foo() {\n            // There is in a method `aaa`, but `foo` is not a method.\n            this.a = 0;\n            baz(() =&gt; this);\n        };\n    }\n};\n\nfoo.forEach(function() {\n    this.a = 0;\n    baz(() =&gt; this);\n});',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-lonely-if',
    value: 'warn',
    shortDescription: 'Disallow if statements as the only statement in else blocks',
    longDescription: 'This rule disallows if statements as the only statement in else blocks.',
    examples: {
      correct:
        'if (condition) {\n    // ...\n} else if (anotherCondition) {\n    // ...\n}\n\nif (condition) {\n    // ...\n} else if (anotherCondition) {\n    // ...\n} else {\n    // ...\n}\n\nif (condition) {\n    // ...\n} else {\n    if (anotherCondition) {\n        // ...\n    }\n    doSomething();\n}',
      incorrect:
        'if (condition) {\n    // ...\n} else {\n    if (anotherCondition) {\n        // ...\n    }\n}\n\nif (condition) {\n    // ...\n} else {\n    if (anotherCondition) {\n        // ...\n    } else {\n        // ...\n    }\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'callback-return',
    value: 'warn',
    shortDescription: 'Require return statements after callbacks',
    longDescription:
      'This rule is aimed at ensuring that callbacks used outside of the main function block are always part-of or immediately\npreceding a return statement. This rule decides what is a callback based on the name of the function being called.',
    examples: {
      correct: 'function foo(err, callback) {\n    if (err) {\n        return callback(err);\n    }\n    callback();\n}',
      incorrect: 'function foo(err, callback) {\n    if (err) {\n        callback(err);\n    }\n    callback();\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-undef',
    value: 'warn',
    shortDescription: 'Disallow the use of undeclared variables unless mentioned in /*global */ comments',
    longDescription:
      'Any reference to an undeclared variable causes a warning, unless the variable is explicitly mentioned in a /*global ...*/ comment, or specified in the globals key in the configuration file. A common use case for these is if you intentionally use globals that are defined elsewhere (e.g. in a script sourced from HTML).',
    examples: { correct: '/*global someFunction b:true*/\n\n\nvar a = someFunction();\nb = 10;', incorrect: 'var a = someFunction();\nb = 10;' },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-else-return',
    value: 'warn',
    shortDescription: 'Disallow else blocks after return statements in if statements',
    longDescription:
      'This rule is aimed at highlighting an unnecessary block of code following an if containing a return statement. As such, it will warn when it encounters an else following a chain of ifs, all of them containing a return statement.',
    examples: {
      correct:
        'function foo() {\n    if (x) {\n        return y;\n    }\n\n    return z;\n}\n\nfunction foo() {\n    if (x) {\n        return y;\n    } else if (z) {\n        var t = "foo";\n    } else {\n        return w;\n    }\n}\n\nfunction foo() {\n    if (x) {\n        if (z) {\n            return y;\n        }\n    } else {\n        return z;\n    }\n}\n\nfunction foo() {\n    if (error) {\n        return \'It failed\';\n    } else if (loading) {\n        return "It\'s still loading";\n    }\n}',
      incorrect:
        'function foo() {\n    if (x) {\n        return y;\n    } else {\n        return z;\n    }\n}\n\nfunction foo() {\n    if (x) {\n        return y;\n    } else if (z) {\n        return w;\n    } else {\n        return t;\n    }\n}\n\nfunction foo() {\n    if (x) {\n        return y;\n    } else {\n        var t = "foo";\n    }\n\n    return t;\n}\n\nfunction foo() {\n    if (error) {\n        return \'It failed\';\n    } else {\n        if (loading) {\n            return "It\'s still loading";\n        }\n    }\n}\n\n// Two warnings for nested occurrences\nfunction foo() {\n    if (x) {\n        if (y) {\n            return y;\n        } else {\n            return x;\n        }\n    } else {\n        return z;\n    }\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-inner-declarations',
    value: 'warn',
    shortDescription: 'Disallow variable or function declarations in nested blocks',
    longDescription:
      'This rule requires that function declarations and, optionally, variable declarations be in the root of a program or the body of a function.',
    examples: {
      correct:
        'function doSomething() { }\n\nfunction doSomethingElse() {\n    function doAnotherThing() { }\n}\n\nif (test) {\n    asyncCall(id, function (err, data) { });\n}\n\nvar fn;\nif (test) {\n    fn = function fnExpression() { };\n}',
      incorrect:
        'if (test) {\n    function doSomething() { }\n}\n\nfunction doSomethingElse() {\n    if (test) {\n        function doAnotherThing() { }\n    }\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-mixed-requires',
    value: 'warn',
    shortDescription: 'Disallow require calls to be mixed with regular variable declarations',
    longDescription: 'When this rule is enabled, each var statement must satisfy the following conditions:.',
    examples: {
      correct:
        "// only require declarations (grouping off)\nvar eventEmitter = require('events').EventEmitter,\n    myUtils = require('./utils'),\n    util = require('util'),\n    bar = require(getBarModuleName());\n\n// only non-require declarations\nvar foo = 42,\n    bar = 'baz';\n\n// always valid regardless of grouping because all declarations are of the same type\nvar foo = require('foo' + VERSION),\n    bar = require(getBarModuleName()),\n    baz = require();",
      incorrect:
        "var fs = require('fs'),\n    i = 0;\n\nvar async = require('async'),\n    debug = require('diagnostics').someFunction('my-module'),\n    eslint = require('eslint');",
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-self-assign',
    value: 'warn',
    shortDescription: 'Disallow assignments where both sides are exactly the same',
    longDescription: 'This rule is aimed at eliminating self assignments.',
    examples: {
      correct:
        'foo = bar;\n[a, b] = [b, a];\n\n// This pattern is warned by the `no-use-before-define` rule.\nlet foo = foo;\n\n// The default values have an effect.\n[foo = 1] = [foo];\n\n// non-self-assignments with properties.\nobj.a = obj.b;\nobj.a.b = obj.c.b;\nobj.a.b = obj.a.c;\nobj[a] = obj["a"];\n\n// This ignores if there is a function call.\nobj.a().b = obj.a().b;\na().b = a().b;\n\n// Known limitation: this does not support computed properties except single literal or single identifier.\nobj[a + b] = obj[a + b];\nobj["a" + "b"] = obj["a" + "b"];',
      incorrect: 'foo = foo;\n\n[a, b] = [a, b];\n\n[a, ...b] = [x, ...b];\n\n({a, b} = {a, x});',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-extra-label',
    value: 'warn',
    shortDescription: 'Disallow unnecessary labels',
    longDescription: 'This rule is aimed at eliminating unnecessary labels.',
    examples: {
      correct:
        'while (a) {\n    break;\n}\n\nfor (let i = 0; i &lt; 10; ++i) {\n    break;\n}\n\nswitch (a) {\n    case 0:\n        break;\n}\n\nA: {\n    break A;\n}\n\nB: while (a) {\n    while (b) {\n        break B;\n    }\n}\n\nC: switch (a) {\n    case 0:\n        while (b) {\n            break C;\n        }\n        break;\n}',
      incorrect:
        'A: while (a) {\n    break A;\n}\n\nB: for (let i = 0; i &lt; 10; ++i) {\n    break B;\n}\n\nC: switch (a) {\n    case 0:\n        break C;\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-bitwise',
    value: 'warn',
    shortDescription: 'Disallow bitwise operators',
    longDescription: 'This rule disallows bitwise operators.',
    examples: {
      correct: 'var x = y || z;\n\nvar x = y &amp;&amp; z;\n\nvar x = y &gt; z;\n\nvar x = y &lt; z;\n\nx += y;',
      incorrect:
        'var x = y | z;\n\nvar x = y &amp; z;\n\nvar x = y ^ z;\n\nvar x = ~ z;\n\nvar x = y &lt;&lt; z;\n\nvar x = y &gt;&gt; z;\n\nvar x = y &gt;&gt;&gt; z;\n\nx |= y;\n\nx &amp;= y;\n\nx ^= y;\n\nx &lt;&lt;= y;\n\nx &gt;&gt;= y;\n\nx &gt;&gt;&gt;= y;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-useless-concat',
    value: 'warn',
    shortDescription: 'Disallow unnecessary concatenation of literals or template literals',
    longDescription:
      'This rule aims to flag the concatenation of 2 literals when they could be combined into a single literal. Literals can be strings or template literals.',
    examples: {
      correct:
        '// when a non string is included\nvar c = a + b;\nvar c = \'1\' + a;\nvar a = 1 + \'1\';\nvar c = 1 - 2;\n// when the string concatenation is multiline\nvar c = "foo" +\n    "bar";',
      incorrect:
        "var a = `some` + `string`;\n\n// these are the same as \"10\"\nvar a = '1' + '0';\nvar a = '1' + `0`;\nvar a = `1` + '0';\nvar a = `1` + `0`;",
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-undef-init',
    value: 'warn',
    shortDescription: 'Disallow initializing variables to undefined',
    longDescription: 'This rule aims to eliminate variable declarations that initialize to undefined.',
    examples: { correct: 'var foo;\nlet bar;\nconst baz = undefined;', incorrect: 'var foo = undefined;\nlet bar = undefined;' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'newline-per-chained-call',
    value: 'warn',
    shortDescription: 'Require a newline after each call in a method chain',
    longDescription:
      'This rule requires a newline after each call in a method chain or deep member access. Computed property accesses such as instance[something] are excluded.',
    examples: {
      correct:
        '_\n  .chain({})\n  .map(foo)\n  .filter(bar)\n  .value();\n\n// Or\n_\n  .chain({})\n  .map(foo)\n  .filter(bar);\n\n// Or\n_.chain({})\n  .map(foo)\n  .filter(bar);\n\n// Or\nobj\n  .prop\n  .method().prop;\n\n// Or\nobj\n  .prop.method()\n  .method2()\n  .method3().prop;',
      incorrect:
        '_.chain({}).map(foo).filter(bar).value();\n\n// Or\n_.chain({}).map(foo).filter(bar);\n\n// Or\n_\n  .chain({}).map(foo)\n  .filter(bar);\n\n// Or\nobj.method().method2().method3();',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-void',
    value: 'warn',
    shortDescription: 'Disallow void operators',
    longDescription: 'This rule aims to eliminate use of void operator.',
    examples: { correct: 'No example :(', incorrect: 'void foo\n\nvar foo = void bar();' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-eval',
    value: 'warn',
    shortDescription: 'Disallow the use of eval()',
    longDescription:
      'This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by disallowing the use of the eval() function. As such, it will warn whenever the eval() function is used.',
    examples: {
      correct:
        'var obj = { x: "foo" },\n    key = "x",\n    value = obj[key];\n\nclass A {\n    foo() {\n        // This is a user-defined method.\n        this.eval("var a = 0");\n    }\n\n    eval() {\n    }\n}',
      incorrect:
        'var obj = { x: "foo" },\n    key = "x",\n    value = eval("obj." + key);\n\n(0, eval)("var a = 0");\n\nvar foo = eval;\nfoo("var a = 0");\n\n// This `this` is the global object.\nthis.eval("var a = 0");',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'multiline-comment-style',
    value: 'warn',
    shortDescription: 'Enforce a particular style for multiline comments',
    longDescription: 'This rule aims to enforce a particular style for multiline comments.',
    examples: {
      correct: '/*\n * this line\n * calls foo()\n */\nfoo();\n\n// single-line comment',
      incorrect:
        '// this line\n// calls foo()\nfoo();\n\n/* this line\ncalls foo() */\nfoo();\n\n/* this comment\n * is missing a newline after /*\n */\n\n/*\n * this comment\n * is missing a newline at the end */\n\n/*\n* the star in this line should have a space before it\n */\n\n/*\n * the star on the following line should have a space before it\n*/',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-return-await',
    value: 'warn',
    shortDescription: 'Disallow unnecessary return await',
    longDescription:
      'This rule aims to prevent a likely common performance hazard due to a lack of understanding of the semantics of async function.',
    examples: { correct: 'No example :(', incorrect: 'No example :(' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unused-labels',
    value: 'warn',
    shortDescription: 'Disallow unused labels',
    longDescription: 'This rule is aimed at eliminating unused labels.',
    examples: {
      correct:
        'A: {\n    if (foo()) {\n        break A;\n    }\n    bar();\n}\n\nB:\nfor (let i = 0; i &lt; 10; ++i) {\n    if (foo()) {\n        break B;\n    }\n    bar();\n}',
      incorrect: 'A: var foo = 0;\n\nB: {\n    foo();\n}\n\nC:\nfor (let i = 0; i &lt; 10; ++i) {\n    foo();\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-new-object',
    value: 'warn',
    shortDescription: 'Disallow Object constructors',
    longDescription: 'This rule disallows Object constructors.',
    examples: {
      correct: 'var myObject = new CustomObject();\n\nvar myObject = {};',
      incorrect: 'var myObject = new Object();\n\nvar myObject = new Object;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'id-match',
    value: 'warn',
    shortDescription: 'Require identifiers to match a specified regular expression',
    longDescription: 'This rule requires identifiers in assignments and function definitions to match a specified regular expression.',
    examples: {
      correct:
        'var myFavoriteColor   = "#112C85";\nvar foo = bar.baz_boom;\nvar foo = { qux: bar.baz_boom };\ndo_something();\nvar obj = {\n    my_pref: 1\n};',
      incorrect:
        'var my_favorite_color = "#112C85";\nvar _myFavoriteColor  = "#112C85";\nvar myFavoriteColor_  = "#112C85";\nvar MY_FAVORITE_COLOR = "#112C85";\nfunction do_something() {\n    // ...\n}\nobj.do_something = function() {\n    // ...\n};',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'new-parens',
    value: 'warn',
    shortDescription: 'Require parentheses when invoking a constructor with no arguments',
    longDescription:
      'This rule requires parentheses when invoking a constructor with no arguments using the new keyword in order to increase code clarity.',
    examples: {
      correct: 'var person = new Person();\nvar person = new (Person)();',
      incorrect: 'var person = new Person;\nvar person = new (Person);',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'function-paren-newline',
    value: 'warn',
    shortDescription: 'Enforce consistent line breaks inside function parentheses',
    longDescription: 'This rule enforces consistent line breaks inside parentheses of function parameters or arguments.',
    examples: {
      correct:
        'function foo(\n  bar,\n  baz\n) {}\n\nvar foo = function(\n  bar, baz\n) {};\n\nvar foo = (\n  bar,\n  baz\n) =&gt; {};\n\nfoo(\n  bar,\n  baz\n);',
      incorrect: 'function foo(bar, baz) {}\n\nvar foo = function(bar, baz) {};\n\nvar foo = (bar, baz) =&gt; {};\n\nfoo(bar, baz);',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'one-var-declaration-per-line',
    value: 'warn',
    shortDescription: 'Require or disallow newlines around variable declarations',
    longDescription:
      'This rule enforces a consistent newlines around variable declarations. This rule ignores variable declarations inside for loop conditionals.',
    examples: { correct: 'var a, b;\n\nlet a,\n    b;\n\nlet a,\n    b = 0;', incorrect: 'var a, b, c = 0;\n\nlet a,\n    b = 0, c;' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'yoda',
    value: 'warn',
    shortDescription: 'Require or disallow “Yoda” conditions',
    longDescription: 'This rule aims to enforce consistent style of conditions which compare a variable to a literal value.',
    examples: {
      correct: 'if (5 &amp; value) {\n    // ...\n}\n\nif (value === "red") {\n    // ...\n}',
      incorrect:
        'if ("red" === color) {\n    // ...\n}\n\nif (true == flag) {\n    // ...\n}\n\nif (5 &gt; count) {\n    // ...\n}\n\nif (-1 &lt; str.indexOf(substr)) {\n    // ...\n}\n\nif (0 &lt;= x &amp;&amp; x &lt; 1) {\n    // ...\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'id-blacklist',
    value: 'warn',
    shortDescription: 'Disallow specified identifiers',
    longDescription: 'This rule disallows specified identifiers in assignments and function definitions.',
    examples: {
      correct:
        'var encodingOptions = {...};\n\nfunction processFileResult() {\n    // ...\n}\n\nelement.successHandler = function() {\n    // ...\n};\n\nvar itemSet = {\n    entities: [...]\n};\n\ncallback(); // all function calls are ignored\n\nfoo.callback(); // all function calls are ignored\n\nfoo.data; // all property names that are not assignments are ignored',
      incorrect:
        'var data = {...};\n\nfunction callback() {\n    // ...\n}\n\nelement.callback = function() {\n    // ...\n};\n\nvar itemSet = {\n    data: [...]\n};',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'lines-around-comment',
    value: 'warn',
    shortDescription: 'Require empty lines around comments',
    longDescription:
      'This rule requires empty lines before and/or after comments. It can be enabled separately for both block (/*) and line (//) comments. This rule does not apply to comments that appear on the same line as code and does not require empty lines at the beginning or end of a file.',
    examples: {
      correct: 'var night = "long";\n\n/* what a great and wonderful day */\nvar day = "great"',
      incorrect: 'var night = "long";\n/* what a great and wonderful day */\nvar day = "great"',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-unsafe-finally',
    value: 'warn',
    shortDescription: 'Disallow control flow statements in finally blocks',
    longDescription:
      'This rule disallows return, throw, break, and continue statements inside finally blocks. It allows indirect usages, such as in function or class definitions.',
    examples: {
      correct:
        'let foo = function() {\n    try {\n        return 1;\n    } catch(err) {\n        return 2;\n    } finally {\n        console.log("hola!");\n    }\n};',
      incorrect:
        'let foo = function() {\n    try {\n        return 1;\n    } catch(err) {\n        return 2;\n    } finally {\n        return 3;\n    }\n};',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'object-curly-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing inside braces',
    longDescription:
      'This rule enforce consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers.',
    examples: {
      correct:
        "var obj = {'foo': 'bar'};\nvar obj = {'foo': {'bar': 'baz'}, 'qux': 'quxx'};\nvar obj = {\n  'foo': 'bar'\n};\nvar obj = {'foo': 'bar'\n};\nvar obj = {\n  'foo':'bar'};\nvar obj = {};\nvar {x} = y;\nimport {foo} from 'bar';",
      incorrect:
        "var obj = { 'foo': 'bar' };\nvar obj = {'foo': 'bar' };\nvar obj = { baz: {'foo': 'qux'}, bar};\nvar obj = {baz: { 'foo': 'qux'}, bar};\nvar {x } = y;\nimport { foo } from 'bar';",
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'max-len',
    value: 'warn',
    shortDescription: 'Enforce a maximum line length',
    longDescription:
      'This rule enforces a maximum line length to increase code readability and maintainability. The length of a line is defined as the number of Unicode characters in the line.',
    examples: {
      correct: 'var foo = {\n  "bar": "This is a bar.",\n  "baz": { "qux": "This is a qux" },\n  "easier": "to read"\n};',
      incorrect: 'var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" };',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'require-await',
    value: 'warn',
    shortDescription: 'Disallow async functions which have no await expression',
    longDescription: 'This rule warns async functions which have no await expression.',
    examples: {
      correct:
        'async function foo() {\n    await doSomething();\n}\n\nbar(async () =&gt; {\n    await doSomething();\n});\n\nfunction foo() {\n    doSomething();\n}\n\nbar(() =&gt; {\n    doSomething();\n});\n\n// Allow empty functions.\nasync function noop() {}',
      incorrect: 'async function foo() {\n    doSomething();\n}\n\nbar(async () =&gt; {\n    doSomething();\n});',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'spaced-comment',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing after the // or /* in a comment',
    longDescription:
      'This rule will enforce consistency of spacing after the start of a comment // or /*. It also provides several\nexceptions for various documentation styles.',
    examples: {
      correct:
        '// This is a comment with a whitespace at the beginning\n\n/* This is a comment with a whitespace at the beginning */\n\n/*\n * This is a comment with a whitespace at the beginning\n */\n\n/*\nThis comment has a newline\n*/',
      incorrect: '//This is a comment with no whitespace at the beginning\n\n/*This is a comment with no whitespace at the beginning */',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-irregular-whitespace',
    value: 'warn',
    shortDescription: 'Disallow irregular whitespace outside of strings and comments',
    longDescription:
      'This rule is aimed at catching invalid whitespace that is not a normal tab and space. Some of these characters may cause issues in modern browsers and others will be a debugging issue to spot.',
    examples: {
      correct:
        "function thing() {\n    return '&nbsp;&lt;NBSP&gt;thing';\n}\n\nfunction thing() {\n    return '​&lt;ZWSP&gt;thing';\n}\n\nfunction thing() {\n    return 'th&nbsp;&lt;NBSP&gt;ing';\n}",
      incorrect:
        "function thing()&nbsp;/*&lt;NBSP&gt;*/{\n    return 'test';\n}\n\nfunction thing(&nbsp;/*&lt;NBSP&gt;*/){\n    return 'test';\n}\n\nfunction thing&nbsp;/*&lt;NBSP&gt;*/(){\n    return 'test';\n}\n\nfunction thing᠎/*&lt;MVS&gt;*/(){\n    return 'test';\n}\n\nfunction thing() {\n    return 'test'; /*&lt;ENSP&gt;*/\n}\n\nfunction thing() {\n    return 'test';&nbsp;/*&lt;NBSP&gt;*/\n}\n\nfunction thing() {\n    // Description&nbsp;&lt;NBSP&gt;: some descriptive text\n}\n\n/*\nDescription&nbsp;&lt;NBSP&gt;: some descriptive text\n*/\n\nfunction thing() {\n    return /&nbsp;&lt;NBSP&gt;regexp/;\n}\n\n\nfunction thing() {\n    return `template &lt;NBSP&gt;string`;\n}",
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'space-before-function-paren',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing before function definition opening parenthesis',
    longDescription:
      'This rule aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn’t match the preferences specified.',
    examples: {
      correct:
        'function foo () {\n    // ...\n}\n\nvar bar = function () {\n    // ...\n};\n\nvar bar = function foo () {\n    // ...\n};\n\nclass Foo {\n    constructor () {\n        // ...\n    }\n}\n\nvar foo = {\n    bar () {\n        // ...\n    }\n};\n\nvar foo = async () =&gt; 1',
      incorrect:
        'function foo() {\n    // ...\n}\n\nvar bar = function() {\n    // ...\n};\n\nvar bar = function foo() {\n    // ...\n};\n\nclass Foo {\n    constructor() {\n        // ...\n    }\n}\n\nvar foo = {\n    bar() {\n        // ...\n    }\n};\n\nvar foo = async() =&gt; 1',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'strict',
    value: 'warn',
    shortDescription: 'Require or disallow strict mode directives',
    longDescription: 'This rule requires or disallows strict mode directives.',
    examples: { correct: '"use strict";\n\nfunction foo() {\n}', incorrect: 'function foo() {\n}' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'space-infix-ops',
    value: 'warn',
    shortDescription: 'Require spacing around infix operators',
    longDescription: 'This rule is aimed at ensuring there are spaces around infix operators.',
    examples: {
      correct: 'a + b\n\na       + b\n\na ? b : c\n\nconst a = {b:1};\n\nvar {a = 0} = bar;\n\nfunction foo(a = 0) { }',
      incorrect: 'a+b\n\na+ b\n\na +b\n\na?b:c\n\nconst a={b:1};\n\nvar {a=0}=bar;\n\nfunction foo(a=0) { }',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'use-isnan',
    value: 'warn',
    shortDescription: 'Require calls to isNaN() when checking for NaN',
    longDescription: 'This rule disallows comparisons to ‘NaN’.',
    examples: {
      correct: 'if (isNaN(foo)) {\n    // ...\n}\n\nif (!isNaN(foo)) {\n    // ...\n}',
      incorrect: 'if (foo == NaN) {\n    // ...\n}\n\nif (foo != NaN) {\n    // ...\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-sync',
    value: 'warn',
    shortDescription: 'Disallow synchronous methods',
    longDescription:
      'This rule is aimed at preventing synchronous methods from being called in Node.js. It looks specifically for the method suffix “Sync” (as is the convention with Node.js operations).',
    examples: {
      correct: 'obj.sync();\n\nasync(function() {\n    // ...\n});',
      incorrect: 'fs.existsSync(somePath);\n\nfunction foo() {\n  var contents = fs.readFileSync(somePath).toString();\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'line-comment-position',
    value: 'warn',
    shortDescription: 'Enforce position of line comments',
    longDescription:
      'This rule enforces consistent position of line comments. Block comments are not affected by this rule. By default, this rule ignores comments starting with the following words: eslint, jshint, jslint, istanbul, global, exported, jscs, falls through.',
    examples: { correct: '// valid comment\n1 + 1;', incorrect: '1 + 1; // invalid comment' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'space-unary-ops',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing before or after unary operators',
    longDescription: 'This rule enforces consistency regarding the spaces after words unary operators and after/before nonwords unary operators.',
    examples: {
      correct:
        '// Word unary operator "delete" is followed by a whitespace.\ndelete foo.bar;\n\n// Word unary operator "new" is followed by a whitespace.\nnew Foo;\n\n// Word unary operator "void" is followed by a whitespace.\nvoid 0;\n\n// Unary operator "++" is not followed by whitespace.\n++foo;\n\n// Unary operator "--" is not preceded by whitespace.\nfoo--;\n\n// Unary operator "-" is not followed by whitespace.\n-foo;\n\n// Unary operator "+" is not followed by whitespace.\n+"3";',
      incorrect: 'typeof!foo;\n\nvoid{foo:0};\n\nnew[foo][0];\n\ndelete(foo.bar);\n\n++ foo;\n\nfoo --;\n\n- foo;\n\n+ "3";',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-process-env',
    value: 'warn',
    shortDescription: 'Disallow the use of process.env',
    longDescription:
      'This rule is aimed at discouraging use of process.env to avoid global dependencies. As such, it will warn whenever process.env is used.',
    examples: {
      correct: 'var config = require("./config");\n\nif(config.env === "development") {\n    //...\n}',
      incorrect: 'if(process.env.NODE_ENV === "development") {\n    //...\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'nonblock-statement-body-position',
    value: 'warn',
    shortDescription: 'Enforce the location of single-line statements',
    longDescription: 'This rule aims to enforce a consistent location for single-line statements.',
    examples: {
      correct:
        'if (foo) bar();\nelse baz();\n\nwhile (foo) bar();\n\nfor (let i = 1; i &lt; foo; i++) bar();\n\ndo bar(); while (foo)\n\nif (foo) { // block statements are always allowed with this rule\n  bar();\n} else {\n  baz();\n}',
      incorrect:
        'if (foo)\n  bar();\nelse\n  baz();\n\nwhile (foo)\n  bar();\n\nfor (let i = 1; i &lt; foo; i++)\n  bar();\n\ndo\n  bar();\nwhile (foo)',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-shadow',
    value: 'warn',
    shortDescription: 'Disallow variable declarations from shadowing variables declared in the outer scope',
    longDescription: 'This rule aims to eliminate shadowed variable declarations.',
    examples: {
      correct: 'if (true) {\n    let a = 3;\n}\n\nlet a = 5;',
      incorrect:
        'var a = 3;\nfunction b() {\n    var a = 10;\n}\n\nvar b = function () {\n    var a = 10;\n}\n\nfunction b(a) {\n    a = 10;\n}\nb(a);\n\nif (true) {\n    let a = 5;\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'implicit-arrow-linebreak',
    value: 'warn',
    shortDescription: 'Enforce the location of arrow function bodies',
    longDescription: 'This rule aims to enforce a consistent location for an arrow function containing an implicit return.',
    examples: {
      correct:
        '(foo) =&gt; bar;\n\n(foo) =&gt; (bar);\n\n(foo) =&gt; bar =&gt; baz;\n\n(foo) =&gt; (\n  bar()\n);\n\n// functions with block bodies allowed with this rule using any style\n// to enforce a consistent location for this case, see the rule: `brace-style`\n(foo) =&gt; {\n  return bar();\n}\n\n(foo) =&gt;\n{\n  return bar();\n}',
      incorrect: '(foo) =&gt;\n  bar;\n\n(foo) =&gt;\n  (bar);\n\n(foo) =&gt;\n  bar =&gt;\n    baz;\n\n(foo) =&gt;\n(\n  bar()\n);',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'quotes',
    value: 'warn',
    shortDescription: 'Enforce the consistent use of either backticks, double, or single quotes',
    longDescription: 'This rule enforces the consistent use of either backticks, double, or single quotes.',
    examples: {
      correct:
        'var double = "double";\nvar backtick = `back\ntick`;  // backticks are allowed due to newline\nvar backtick = tag`backtick`; // backticks are allowed due to tag',
      incorrect:
        "var single = 'single';\nvar unescaped = 'a string containing \"double\" quotes';\nvar backtick = `back\\ntick`; // you can use \\n in single or double quoted strings",
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'one-var',
    value: 'warn',
    shortDescription: 'Enforce variables to be declared either together or separately in functions',
    longDescription:
      'This rule enforces variables to be declared either together or separately per function ( for var) or block (for let and const) scope.',
    examples: {
      correct:
        'function foo() {\n    var bar,\n        baz;\n    let qux,\n        norf;\n}\n\nfunction foo(){\n    const bar = true,\n        baz = false;\n    let qux,\n        norf;\n}\n\nfunction foo() {\n    var bar,\n        qux;\n\n    if (baz) {\n        qux = true;\n    }\n}\n\nfunction foo(){\n    let bar;\n\n    if (baz) {\n        let qux;\n    }\n}',
      incorrect:
        'function foo() {\n    var bar;\n    var baz;\n    let qux;\n    let norf;\n}\n\nfunction foo(){\n    const bar = false;\n    const baz = true;\n    let qux;\n    let norf;\n}\n\nfunction foo() {\n    var bar;\n\n    if (baz) {\n        var qux = true;\n    }\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-continue',
    value: 'warn',
    shortDescription: 'Disallow continue statements',
    longDescription: 'This rule disallows continue statements.',
    examples: {
      correct: 'var sum = 0,\n    i;\n\nfor(i = 0; i &lt; 10; i++) {\n    if(i &lt; 5) {\n       a += i;\n    }\n}',
      incorrect: 'var sum = 0,\n    i;\n\nfor(i = 0; i &lt; 10; i++) {\n    if(i &gt;= 5) {\n        continue;\n    }\n\n    a += i;\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-constant-condition',
    value: 'warn',
    shortDescription: 'Disallow constant expressions in conditions',
    longDescription: 'This rule disallows constant expressions in the test condition of:.',
    examples: {
      correct:
        'if (x === 0) {\n    doSomething();\n}\n\nfor (;;) {\n    doSomethingForever();\n}\n\nwhile (typeof x === "undefined") {\n    doSomething();\n}\n\ndo {\n    doSomething();\n} while (x);\n\nvar result = x !== 0 ? a : b;',
      incorrect:
        'if (false) {\n    doSomethingUnfinished();\n}\n\nif (void x) {\n    doSomethingUnfinished();\n}\n\nfor (;-2;) {\n    doSomethingForever();\n}\n\nwhile (typeof x) {\n    doSomethingForever();\n}\n\ndo {\n    doSomethingForever();\n} while (x = -1);\n\nvar result = 0 ? a : b;',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-debugger',
    value: 'warn',
    shortDescription: 'Disallow the use of debugger',
    longDescription: 'This rule disallows debugger statements.',
    examples: {
      correct: 'function isTruthy(x) {\n    return Boolean(x); // set a breakpoint at this line\n}',
      incorrect: 'function isTruthy(x) {\n    debugger;\n    return Boolean(x);\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'computed-property-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing inside computed property brackets',
    longDescription: 'This rule enforces consistent spacing inside computed property brackets.',
    examples: {
      correct: "obj[foo]\nobj['foo']\nvar x = {[b]: a}\nobj[foo[bar]]",
      incorrect: "obj[foo ]\nobj[ 'foo']\nvar x = {[ b ]: a}\nobj[foo[ bar ]]",
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'lines-between-class-members',
    value: 'warn',
    shortDescription: 'Require or disallow an empty line between class members',
    longDescription: 'Examples of incorrect code for this rule:.',
    examples: {
      correct: 'class MyClass {\n  foo() {\n    //...\n  }\n\n  bar() {\n    //...\n  }\n}',
      incorrect: 'class MyClass {\n  foo() {\n    //...\n  }\n  bar() {\n    //...\n  }\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-restricted-globals',
    value: 'warn',
    shortDescription: 'Disallow specified global variables',
    longDescription: 'This rule allows you to specify global variable names that you don’t want to use in your application.',
    examples: {
      correct: '/*global event*/\n\n\nimport event from "event-module";',
      incorrect: '/*global event, fdescribe*/\n\n\nfunction onClick() {\n    console.log(event);\n}\n\nfdescribe("foo", function() {\n});',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'object-property-newline',
    value: 'warn',
    shortDescription: 'Enforce placing object properties on separate lines',
    longDescription: null,
    examples: {
      correct:
        'const obj1 = {\n    foo: "foo",\n    bar: "bar",\n    baz: "baz"\n};\n\nconst obj2 = {\n    foo: "foo"\n    , bar: "bar"\n    , baz: "baz"\n};\n\nconst user = process.argv[2];\nconst obj3 = {\n    user,\n    [process.argv[3] ? "foo" : "bar"]: 0,\n    baz: [\n        1,\n        2,\n        4,\n        8\n    ]\n};',
      incorrect:
        'const obj0 = { foo: "foo", bar: "bar", baz: "baz" };\n\nconst obj1 = {\n    foo: "foo", bar: "bar", baz: "baz"\n};\n\nconst obj2 = {\n    foo: "foo", bar: "bar",\n    baz: "baz"\n};\n\nconst obj3 = {\n    [process.argv[3] ? "foo" : "bar"]: 0, baz: [\n        1,\n        2,\n        4,\n        8\n    ]\n};\n\nconst a = "antidisestablishmentarianistically";\nconst b = "yugoslavyalılaştırabildiklerimizdenmişsiniz";\nconst obj4 = {a, b};\n\nconst domain = process.argv[4];\nconst obj5 = {\n    foo: "foo", [\n    domain.includes(":") ? "complexdomain" : "simpledomain"\n]: true};',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-template-curly-in-string',
    value: 'warn',
    shortDescription: 'Disallow template literal placeholder syntax in regular strings',
    longDescription:
      'This rule aims to warn when a regular string contains what looks like a template literal placeholder. It will warn when it finds a string containing the template literal place holder (${something}) that uses either " or \' for the quotes.',
    examples: {
      correct: '`Hello ${name}!`;\n`Time: ${12 * 60 * 60 * 1000}`;\n\ntemplateFunction`Hello ${name}`;',
      incorrect: '"Hello ${name}!";\n\'Hello ${name}!\';\n"Time: ${12 * 60 * 60 * 1000}";',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-lone-blocks',
    value: 'warn',
    shortDescription: 'Disallow unnecessary nested blocks',
    longDescription: 'This rule aims to eliminate unnecessary and potentially confusing blocks at the top level of a script or within other blocks.',
    examples: {
      correct:
        'while (foo) {\n    bar();\n}\n\nif (foo) {\n    if (bar) {\n        baz();\n    }\n}\n\nfunction bar() {\n    baz();\n}\n\n{\n    let x = 1;\n}\n\n{\n    const y = 1;\n}\n\n{\n    class Foo {}\n}\n\naLabel: {\n}',
      incorrect:
        '{}\n\nif (foo) {\n    bar();\n    {\n        baz();\n    }\n}\n\nfunction bar() {\n    {\n        baz();\n    }\n}\n\n{\n    function foo() {}\n}\n\n{\n    aLabel: {\n    }\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-invalid-regexp',
    value: 'warn',
    shortDescription: 'Disallow invalid regular expression strings in RegExp constructors',
    longDescription: 'This rule disallows invalid regular expression strings in RegExp constructors.',
    examples: { correct: "RegExp('.')\n\nnew RegExp\n\nthis.RegExp('[')", incorrect: "RegExp('[')\n\nRegExp('.', 'z')\n\nnew RegExp('\\\\')" },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-dupe-args',
    value: 'warn',
    shortDescription: 'Disallow duplicate arguments in function definitions',
    longDescription:
      'This rule disallows duplicate parameter names in function declarations or expressions. It does not apply to arrow functions or class methods, because the parser reports the error.',
    examples: {
      correct: 'function foo(a, b, c) {\n    console.log(a, b, c);\n}\n\nvar bar = function (a, b, c) {\n    console.log(a, b, c);\n};',
      incorrect:
        'function foo(a, b, a) {\n    console.log("value of the second a:", a);\n}\n\nvar bar = function (a, b, a) {\n    console.log("value of the second a:", a);\n};',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-empty-character-class',
    value: 'warn',
    shortDescription: 'Disallow empty character classes in regular expressions',
    longDescription: 'This rule disallows empty character classes in regular expressions.',
    examples: {
      correct:
        '/^abc/.test("abcdefg"); // true\n"abcdefg".match(/^abc/); // ["abc"]\n\n/^abc[a-z]/.test("abcdefg"); // true\n"abcdefg".match(/^abc[a-z]/); // ["abcd"]',
      incorrect: '/^abc[]/.test("abcdefg"); // false\n"abcdefg".match(/^abc[]/); // null',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-plusplus',
    value: 'warn',
    shortDescription: 'Disallow the unary operators ++ and --',
    longDescription: 'This rule disallows the unary operators ++ and --.',
    examples: {
      correct: 'var foo = 0;\nfoo += 1;\n\nvar bar = 42;\nbar -= 1;\n\nfor (i = 0; i &lt; l; i += 1) {\n    return;\n}',
      incorrect: 'var foo = 0;\nfoo++;\n\nvar bar = 42;\nbar--;\n\nfor (i = 0; i &lt; l; i++) {\n    return;\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-extra-parens',
    value: 'warn',
    shortDescription: 'Disallow unnecessary parentheses',
    longDescription: 'This rule always ignores extra parentheses around the following:.',
    examples: {
      correct:
        '(0).toString();\n\n(Object.prototype.toString.call());\n\n({}.toString.call());\n\n(function(){}) ? a() : b();\n\n(/^a$/).test(x);\n\nfor (a of (b, c));\n\nfor (a of b);\n\nfor (a in b, c);\n\nfor (a in b);',
      incorrect:
        'a = (b * c);\n\n(a * b) + c;\n\nfor (a in (b, c));\n\nfor (a in (b));\n\nfor (a of (b));\n\ntypeof (a);\n\n(function(){} ? a() : b());',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'new-cap',
    value: 'warn',
    shortDescription: 'Require constructor names to begin with a capital letter',
    longDescription:
      'This rule requires constructor names to begin with a capital letter. Certain built-in identifiers are exempt from this rule. These identifiers are:.',
    examples: { correct: 'function foo(arg) {\n    return Boolean(arg);\n}', incorrect: 'var friend = new person();' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-multi-str',
    value: 'warn',
    shortDescription: 'Disallow multiline strings',
    longDescription: 'This rule is aimed at preventing the use of multiline strings.',
    examples: { correct: 'var x = "Line 1\\n" +\n        "Line 2";', incorrect: 'var x = "Line 1 \\\n         Line 2";' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'array-bracket-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing inside array brackets',
    longDescription: 'This rule enforces consistent spacing inside array brackets.',
    examples: {
      correct:
        "var arr = [];\nvar arr = ['foo', 'bar', 'baz'];\nvar arr = [['foo'], 'bar', 'baz'];\nvar arr = [\n  'foo',\n  'bar',\n  'baz'\n];\nvar arr = ['foo',\n  'bar'\n];\nvar arr = [\n  'foo',\n  'bar'];\n\nvar [x, y] = z;\nvar [x,y] = z;\nvar [x, ...y] = z;\nvar [,,x,] = z;",
      incorrect:
        "var arr = [ 'foo', 'bar' ];\nvar arr = ['foo', 'bar' ];\nvar arr = [ ['foo'], 'bar'];\nvar arr = [[ 'foo' ], 'bar'];\nvar arr = [ 'foo',\n  'bar'\n];\nvar [ x, y ] = z;\nvar [ x,y ] = z;\nvar [ x, ...y ] = z;\nvar [ ,,x, ] = z;",
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'array-bracket-newline',
    value: 'warn',
    shortDescription: 'Enforce linebreaks after opening and before closing array brackets',
    longDescription: 'This rule enforces line breaks after opening and before closing array brackets.',
    examples: {
      correct:
        'var a = [\n];\nvar b = [\n    1\n];\nvar c = [\n    1, 2\n];\nvar d = [\n    1,\n    2\n];\nvar e = [\n    function foo() {\n        dosomething();\n    }\n];',
      incorrect: 'var a = [];\nvar b = [1];\nvar c = [1, 2];\nvar d = [1,\n    2];\nvar e = [function foo() {\n    dosomething();\n}];',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'func-name-matching',
    value: 'warn',
    shortDescription: 'Require function names to match the name of the variable or property to which they are assigned',
    longDescription:
      'This rule requires function names to match the name of the variable or property to which they are assigned. The rule will ignore property assignments where the property name is a literal that is not a valid identifier in the ECMAScript version specified in your configuration (default ES5).',
    examples: {
      correct:
        "// these are equivalent\n\n\nvar foo = function foo() {};\nvar foo = function() {};\nvar foo = () =&gt; {};\nfoo = function foo() {};\n\nobj.foo = function foo() {};\nobj['foo'] = function foo() {};\nobj['foo//bar'] = function foo() {};\nobj[foo] = function bar() {};\n\nvar obj = {foo: function foo() {}};\nvar obj = {[foo]: function bar() {}};\nvar obj = {'foo//bar': function foo() {}};\nvar obj = {foo: function() {}};\n\nobj['x' + 2] = function bar(){};\nvar [ bar ] = [ function bar(){} ];\n({[foo]: function bar() {}})\n\nmodule.exports = function foo(name) {};\nmodule['exports'] = function foo(name) {};",
      incorrect:
        "var foo = function bar() {};\nfoo = function bar() {};\nobj.foo = function bar() {};\nobj['foo'] = function bar() {};\nvar obj = {foo: function bar() {}};\n({['foo']: function bar() {}});",
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'indent',
    value: 'warn',
    shortDescription: 'Enforce consistent indentation',
    longDescription: 'This rule enforces a consistent indentation style. The default style is 4 spaces.',
    examples: {
      correct: 'if (a) {\n    b=c;\n    function foo(d) {\n        e=f;\n    }\n}',
      incorrect: 'if (a) {\n  b=c;\n  function foo(d) {\n    e=f;\n  }\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-empty-function',
    value: 'warn',
    shortDescription: 'Disallow empty functions',
    longDescription: 'This rule is aimed at eliminating empty functions.\nA function will not be considered a problem if it contains a comment.',
    examples: {
      correct:
        'function foo() {\n    // do nothing.\n}\n\nvar foo = function() {\n    // any clear comments.\n};\n\nvar foo = () =&gt; {\n    bar();\n};\n\nfunction* foo() {\n    // do nothing.\n}\n\nvar foo = function*() {\n    // do nothing.\n};\n\nvar obj = {\n    foo: function() {\n        // do nothing.\n    },\n\n    foo: function*() {\n        // do nothing.\n    },\n\n    foo() {\n        // do nothing.\n    },\n\n    *foo() {\n        // do nothing.\n    },\n\n    get foo() {\n        // do nothing.\n    },\n\n    set foo(value) {\n        // do nothing.\n    }\n};\n\nclass A {\n    constructor() {\n        // do nothing.\n    }\n\n    foo() {\n        // do nothing.\n    }\n\n    *foo() {\n        // do nothing.\n    }\n\n    get foo() {\n        // do nothing.\n    }\n\n    set foo(value) {\n        // do nothing.\n    }\n\n    static foo() {\n        // do nothing.\n    }\n\n    static *foo() {\n        // do nothing.\n    }\n\n    static get foo() {\n        // do nothing.\n    }\n\n    static set foo(value) {\n        // do nothing.\n    }\n}',
      incorrect:
        'function foo() {}\n\nvar foo = function() {};\n\nvar foo = () =&gt; {};\n\nfunction* foo() {}\n\nvar foo = function*() {};\n\nvar obj = {\n    foo: function() {},\n\n    foo: function*() {},\n\n    foo() {},\n\n    *foo() {},\n\n    get foo() {},\n\n    set foo(value) {}\n};\n\nclass A {\n    constructor() {}\n\n    foo() {}\n\n    *foo() {}\n\n    get foo() {}\n\n    set foo(value) {}\n\n    static foo() {}\n\n    static *foo() {}\n\n    static get foo() {}\n\n    static set foo(value) {}\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'keyword-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing before and after keywords',
    longDescription:
      'This rule enforces consistent spacing around keywords and keyword-like tokens: as (in module declarations), async (of async functions), await (of await expressions), break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, from (in module declarations), function, get (of getters), if, import, in, instanceof, let, new, of (in for-of statements), return, set (of setters), static, super, switch, this, throw, try, typeof, var, void, while, with, and yield. This rule is designed carefully not to conflict with other spacing rules: it does not apply to spacing where other rules report problems.',
    examples: {
      correct:
        'if (foo) {\n    //...\n} else if (bar) {\n    //...\n} else {\n    //...\n}\n\n// Avoid conflict with `array-bracket-spacing`\nlet a = [this];\nlet b = [function() {}];\n\n// Avoid conflict with `arrow-spacing`\nlet a = ()=&gt; this.foo;\n\n// Avoid conflict with `block-spacing`\n{function foo() {}}\n\n// Avoid conflict with `comma-spacing`\nlet a = [100,this.foo, this.bar];\n\n// Avoid conflict with `computed-property-spacing`\nobj[this.foo] = 0;\n\n// Avoid conflict with `generator-star-spacing`\nfunction *foo() {}\n\n// Avoid conflict with `key-spacing`\nlet obj = {\n    foo:function() {}\n};\n\n// Avoid conflict with `object-curly-spacing`\nlet obj = {foo: this};\n\n// Avoid conflict with `semi-spacing`\nlet a = this;function foo() {}\n\n// Avoid conflict with `space-in-parens`\n(function () {})();\n\n// Avoid conflict with `space-infix-ops`\nif ("foo"in {foo: 0}) {}\nif (10+this.foo&lt;= this.bar) {}\n\n// Avoid conflict with `jsx-curly-spacing`\nlet a = &lt;A foo={this.foo} bar={function(){}} /&gt;',
      incorrect: 'if (foo) {\n    //...\n}else if (bar) {\n    //...\n}else {\n    //...\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'id-length',
    value: 'warn',
    shortDescription: 'Enforce minimum and maximum identifier lengths',
    longDescription: 'This rule enforces a minimum and/or maximum identifier length convention.',
    examples: {
      correct:
        '// default is minimum 2-chars ({ "min": 2 })\n\n\nvar num = 5;\nfunction _f() { return 42; }\nfunction _func() { return 42; }\nobj.el = document.body;\nvar foo = function (evt) { /* do stuff */ };\ntry {\n    dangerousStuff();\n} catch (error) {\n    // ignore as many do\n}\nvar myObj = { apple: 1 };\n(num) =&gt; { num * num };\nfunction foo(num = 0) { }\nclass MyClass { }\nclass Foo { method() {} }\nfunction foo(...args) { }\nvar { prop } = {};\nvar { prop: a } = {};\nvar { prop: [x] } = {};\n({ prop: obj.longName } = {});\nvar data = { "x": 1 };  // excused because of quotes\ndata["y"] = 3;  // excused because of calculated property access',
      incorrect:
        '// default is minimum 2-chars ({ "min": 2 })\n\n\nvar x = 5;\nobj.e = document.body;\nvar foo = function (e) { };\ntry {\n    dangerousStuff();\n} catch (e) {\n    // ignore as many do\n}\nvar myObj = { a: 1 };\n(a) =&gt; { a * a };\nclass x { }\nclass Foo { x() {} }\nfunction foo(...x) { }\nvar { x } = {};\nvar { x: a} = {};\nvar { a: [x]} = {};\n({ prop: obj.x } = {});',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-mixed-operators',
    value: 'warn',
    shortDescription: 'Disallow mixed binary operators',
    longDescription: 'This rule checks BinaryExpression and LogicalExpression.',
    examples: {
      correct:
        'var foo = a || b || c;\nvar foo = a &amp;&amp; b &amp;&amp; c;\nvar foo = (a &amp;&amp; b &lt; 0) || c &gt; 0 || d + 1 === 0;\nvar foo = a &amp;&amp; (b &lt; 0 || c &gt; 0 || d + 1 === 0);\nvar foo = a + (b * c);\nvar foo = (a + b) * c;',
      incorrect: 'var foo = a &amp;&amp; b &lt; 0 || c &gt; 0 || d + 1 === 0;\nvar foo = a + b * c;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unused-vars',
    value: 'warn',
    shortDescription: 'Disallow unused variables',
    longDescription: 'This rule is aimed at eliminating unused variables, functions, and parameters of functions.',
    examples: {
      correct:
        'var x = 10;\nalert(x);\n\n// foo is considered used here\nmyFunc(function foo() {\n    // ...\n}.bind(this));\n\n(function(foo) {\n    return foo;\n})();\n\nvar myFunc;\nmyFunc = setTimeout(function() {\n    // myFunc is considered used\n    myFunc();\n}, 50);\n\n// Only the second argument from the descructured array is used.\nfunction getY([, y]) {\n    return y;\n}',
      incorrect:
        '/*global some_unused_var*/\n\n// It checks variables you have defined as global\nsome_unused_var = 42;\n\nvar x;\n\n// Write-only variables are not considered as used.\nvar y = 10;\ny = 5;\n\n// A read for a modification of itself is not considered as used.\nvar z = 0;\nz = z + 1;\n\n// By default, unused arguments cause warnings.\n(function(foo) {\n    return 5;\n})();\n\n// Unused recursive functions also cause warnings.\nfunction fact(n) {\n    if (n &lt; 2) return 1;\n    return n * fact(n - 1);\n}\n\n// When a function definition destructures an array, unused entries from the array also cause warnings.\nfunction getY([x, y]) {\n    return y;\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-alert',
    value: 'warn',
    shortDescription: 'Disallow the use of alert, confirm, and prompt',
    longDescription:
      'This rule is aimed at catching debugging code that should be removed and popup UI elements that should be replaced with less obtrusive, custom UIs. As such, it will warn when it encounters alert, prompt, and confirm function calls which are not shadowed.',
    examples: {
      correct:
        'customAlert("Something happened!");\n\ncustomConfirm("Are you sure?");\n\ncustomPrompt("Who are you?");\n\nfunction foo() {\n    var alert = myCustomLib.customAlert;\n    alert();\n}',
      incorrect: 'alert("here!");\n\nconfirm("Are you sure?");\n\nprompt("What\'s your name?", "John Doe");',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-new',
    value: 'warn',
    shortDescription: 'Disallow new operators outside of assignments or comparisons',
    longDescription:
      'This rule is aimed at maintaining consistency and convention by disallowing constructor calls using the new keyword that do not assign the resulting object to a variable.',
    examples: { correct: 'var thing = new Thing();\n\nThing();', incorrect: 'new Thing();' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unused-expressions',
    value: 'warn',
    shortDescription: 'Disallow unused expressions',
    longDescription: 'This rule aims to eliminate unused expressions which have no effect on the state of the program.',
    examples: {
      correct:
        '{} // In this context, this is a block statement, not an object literal\n\n{myLabel: someVar} // In this context, this is a block statement with a label and expression, not an object literal\n\nfunction namedFunctionDeclaration () {}\n\n(function aGenuineIIFE () {}());\n\nf()\n\na = 0\n\nnew C\n\ndelete a.b\n\nvoid a',
      incorrect:
        '0\n\nif(0) 0\n\n{0}\n\nf(0), {}\n\na &amp;&amp; b()\n\na, b()\n\nc = a, b;\n\na() &amp;&amp; function namedFunctionInExpressionContext () {f();}\n\n(function anIncompleteIIFE () {});\n\ninjectGlobal`body{ color: red; }`',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-proto',
    value: 'warn',
    shortDescription: 'Disallow the use of the __proto__ property',
    longDescription:
      'When an object is created __proto__ is set to the original prototype property of the object’s constructor function. getPrototypeOf is the preferred method of getting “the prototype”.',
    examples: { correct: 'var a = Object.getPrototypeOf(obj);', incorrect: 'var a = obj.__proto__;\n\nvar a = obj["__proto__"];' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-fallthrough',
    value: 'warn',
    shortDescription: 'Disallow fallthrough of case statements',
    longDescription:
      'This rule is aimed at eliminating unintentional fallthrough of one case to the other. As such, it flags any fallthrough scenarios that are not marked by a comment.',
    examples: {
      correct:
        'switch(foo) {\n    case 1:\n        doSomething();\n        break;\n\n    case 2:\n        doSomething();\n}\n\nfunction bar(foo) {\n    switch(foo) {\n        case 1:\n            doSomething();\n            return;\n\n        case 2:\n            doSomething();\n    }\n}\n\nswitch(foo) {\n    case 1:\n        doSomething();\n        throw new Error("Boo!");\n\n    case 2:\n        doSomething();\n}\n\nswitch(foo) {\n    case 1:\n    case 2:\n        doSomething();\n}\n\nswitch(foo) {\n    case 1:\n        doSomething();\n        // falls through\n\n    case 2:\n        doSomething();\n}',
      incorrect: 'switch(foo) {\n    case 1:\n        doSomething();\n\n    case 2:\n        doSomething();\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-sequences',
    value: 'warn',
    shortDescription: 'Disallow comma operators',
    longDescription: 'This rule forbids the use of the comma operator, with the following exceptions:.',
    examples: {
      correct:
        'foo = (doSomething(), val);\n\n(0, eval)("doSomething();");\n\ndo {} while ((doSomething(), !!test));\n\nfor (i = 0, j = 10; i &lt; j; i++, j--);\n\nif ((doSomething(), !!test));\n\nswitch ((val = foo(), val)) {}\n\nwhile ((val = foo(), val &lt; 42));\n\n// with ((doSomething(), val)) {}',
      incorrect:
        'foo = doSomething(), val;\n\n0, eval("doSomething();");\n\ndo {} while (doSomething(), !!test);\n\nfor (; doSomething(), !!test; );\n\nif (doSomething(), !!test);\n\nswitch (val = foo(), val) {}\n\nwhile (val = foo(), val &lt; 42);\n\nwith (doSomething(), val) {}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-delete-var',
    value: 'warn',
    shortDescription: 'Disallow deleting variables',
    longDescription: 'This rule disallows the use of the delete operator on variables.',
    examples: { correct: 'No example :(', incorrect: 'var x;\ndelete x;' },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-floating-decimal',
    value: 'warn',
    shortDescription: 'Disallow leading or trailing decimal points in numeric literals',
    longDescription:
      'This rule is aimed at eliminating floating decimal points and will warn whenever a numeric value has a decimal point but is missing a number either before or after it.',
    examples: { correct: 'var num = 0.5;\nvar num = 2.0;\nvar num = -0.7;', incorrect: 'var num = .5;\nvar num = 2.;\nvar num = -.7;' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'dot-notation',
    value: 'warn',
    shortDescription: 'Enforce dot notation whenever possible',
    longDescription:
      'This rule is aimed at maintaining code consistency and improving code readability by encouraging use of the dot notation style whenever possible. As such, it will warn when it encounters an unnecessary use of square-bracket notation.',
    examples: {
      correct: 'var x = foo.bar;\n\nvar x = foo[bar];    // Property name is a variable, square-bracket notation required',
      incorrect: 'var x = foo["bar"];',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-self-compare',
    value: 'warn',
    shortDescription: 'Disallow comparisons where both sides are exactly the same',
    longDescription:
      'This error is raised to highlight a potentially confusing and potentially pointless piece of code. There are almost no situations in which you would need to compare something to itself.',
    examples: { correct: 'No example :(', incorrect: 'var x = 10;\nif (x === x) {\n    x = 20;\n}' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-return-assign',
    value: 'warn',
    shortDescription: 'Disallow assignment operators in return statements',
    longDescription:
      'This rule aims to eliminate assignments from return statements. As such, it will warn whenever an assignment is found as part of return.',
    examples: {
      correct:
        'function doSomething() {\n    return foo == bar + 2;\n}\n\nfunction doSomething() {\n    return foo === bar + 2;\n}\n\nfunction doSomething() {\n    return (foo = bar + 2);\n}',
      incorrect: 'function doSomething() {\n    return foo = bar + 2;\n}\n\nfunction doSomething() {\n    return foo += 2;\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-duplicate-case',
    value: 'warn',
    shortDescription: 'Disallow duplicate case labels',
    longDescription: 'This rule disallows duplicate test expressions in case clauses of switch statements.',
    examples: {
      correct:
        'var a = 1,\n    one = 1;\n\nswitch (a) {\n    case 1:\n        break;\n    case 2:\n        break;\n    case 3:\n        break;\n    default:\n        break;\n}\n\nswitch (a) {\n    case one:\n        break;\n    case 2:\n        break;\n    case 3:\n        break;\n    default:\n        break;\n}\n\nswitch (a) {\n    case "1":\n        break;\n    case "2":\n        break;\n    case "3":\n        break;\n    default:\n        break;\n}',
      incorrect:
        'var a = 1,\n    one = 1;\n\nswitch (a) {\n    case 1:\n        break;\n    case 2:\n        break;\n    case 1:         // duplicate test expression\n        break;\n    default:\n        break;\n}\n\nswitch (a) {\n    case one:\n        break;\n    case 2:\n        break;\n    case one:         // duplicate test expression\n        break;\n    default:\n        break;\n}\n\nswitch (a) {\n    case "1":\n        break;\n    case "2":\n        break;\n    case "1":         // duplicate test expression\n        break;\n    default:\n        break;\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-octal-escape',
    value: 'warn',
    shortDescription: 'Disallow octal escape sequences in string literals',
    longDescription: 'This rule disallows octal escape sequences in string literals.',
    examples: {
      correct: 'var foo = "Copyright \\u00A9";   // unicode\n\nvar foo = "Copyright \\xA9";     // hexadecimal',
      incorrect: 'var foo = "Copyright \\251";',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-new-require',
    value: 'warn',
    shortDescription: 'Disallow new operators with calls to require',
    longDescription: 'This rule aims to eliminate use of the new require expression.',
    examples: {
      correct: "var AppHeader = require('app-header');\nvar appHeader = new AppHeader();",
      incorrect: "var appHeader = new require('app-header');",
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-useless-return',
    value: 'warn',
    shortDescription: 'Disallow redundant return statements',
    longDescription: 'This rule aims to report redundant return statements.',
    examples: {
      correct:
        'function foo() { return 5; }\n\nfunction foo() {\n  return doSomething();\n}\n\nfunction foo() {\n  if (condition) {\n    bar();\n    return;\n  } else {\n    baz();\n  }\n  qux();\n}\n\nfunction foo() {\n  switch (bar) {\n    case 1:\n      doSomething();\n      return;\n    default:\n      doSomethingElse();\n  }\n}\n\nfunction foo() {\n  for (const foo of bar) {\n    return;\n  }\n}',
      incorrect:
        'function foo() { return; }\n\nfunction foo() {\n  doSomething();\n  return;\n}\n\nfunction foo() {\n  if (condition) {\n    bar();\n    return;\n  } else {\n    baz();\n  }\n}\n\nfunction foo() {\n  switch (bar) {\n    case 1:\n      doSomething();\n    default:\n      doSomethingElse();\n      return;\n  }\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-useless-escape',
    value: 'warn',
    shortDescription: 'Disallow unnecessary escape characters',
    longDescription: 'This rule flags escapes that can be safely removed without changing behavior.',
    examples: {
      correct:
        '"\\"";\n\'\\\'\';\n"\\x12";\n"\\u00a9";\n"\\371";\n"xs\\u2111";\n`\\``;\n`\\${${foo}}`;\n`$\\{${foo}}`;\n/\\\\/g;\n/\\t/g;\n/\\w\\$\\*\\^\\./;',
      incorrect: '"\\\'";\n\'\\"\';\n"\\#";\n"\\e";\n`\\"`;\n`\\"${foo}\\"`;\n`\\#{foo}`;\n/\\!/;\n/\\@/;',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'max-depth',
    value: 'warn',
    shortDescription: 'Enforce a maximum depth that blocks can be nested',
    longDescription: 'This rule enforces a maximum depth that blocks can be nested to reduce code complexity.',
    examples: {
      correct:
        'function foo() {\n    for (;;) { // Nested 1 deep\n        let val = () =&gt; (param) =&gt; { // Nested 2 deep\n           if (true) { // Nested 3 deep\n                if (true) { // Nested 4 deep\n                }\n            }\n        };\n    }\n}',
      incorrect:
        'function foo() {\n    for (;;) { // Nested 1 deep\n        let val = () =&gt; (param) =&gt; { // Nested 2 deep\n            if (true) { // Nested 3 deep\n                if (true) { // Nested 4 deep\n                    if (true) { // Nested 5 deep\n                    }\n                }\n            }\n        };\n    }\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'linebreak-style',
    value: 'warn',
    shortDescription: 'Enforce consistent linebreak style',
    longDescription: 'This rule enforces consistent line endings independent of operating system, VCS, or editor used across your codebase.',
    examples: {
      correct: "var a = 'a', // \\n\n    b = 'b'; // \\n\n// \\n\nfunction foo(params) { // \\n\n    // do stuff \\n\n}// \\n",
      incorrect: "var a = 'a'; // \\r\\n",
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'prefer-promise-reject-errors',
    value: 'warn',
    shortDescription: 'Require using Error objects as Promise rejection reasons',
    longDescription: 'This rule aims to ensure that Promises are only rejected with Error objects.',
    examples: {
      correct:
        'Promise.reject(new Error("something bad happened"));\n\nPromise.reject(new TypeError("something bad happened"));\n\nnew Promise(function(resolve, reject) {\n  reject(new Error("something bad happened"));\n});\n\nvar foo = getUnknownValue();\nPromise.reject(foo);',
      incorrect:
        'Promise.reject("something bad happened");\n\nPromise.reject(5);\n\nPromise.reject();\n\nnew Promise(function(resolve, reject) {\n  reject("something bad happened");\n});\n\nnew Promise(function(resolve, reject) {\n  reject();\n});',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-script-url',
    value: 'warn',
    shortDescription: 'Disallow javascript: urls',
    longDescription: 'Examples of incorrect code for this rule:.',
    examples: { correct: 'No example :(', incorrect: 'location.href = "javascript:void(0)";' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-restricted-modules',
    value: 'warn',
    shortDescription: 'Disallow specified modules when loaded by require',
    longDescription: 'This rule allows you to specify modules that you don’t want to use in your application.',
    examples: { correct: "var crypto = require('crypto');", incorrect: "var fs = require('fs');\nvar cluster = require('cluster');" },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unmodified-loop-condition',
    value: 'warn',
    shortDescription: 'Disallow unmodified loop conditions',
    longDescription:
      'This rule finds references which are inside of loop conditions, then checks the\nvariables of those references are modified in the loop.',
    examples: {
      correct:
        'while (node) {\n    doSomething(node);\n    node = node.parent;\n}\n\nfor (var j = 0; j &lt; items.length; ++j) {\n    doSomething(items[j]);\n}\n\n// OK, the result of this binary expression is changed in this loop.\nwhile (node !== root) {\n    doSomething(node);\n    node = node.parent;\n}\n\n// OK, the result of this ternary expression is changed in this loop.\nwhile (node ? A : B) {\n    doSomething(node);\n    node = node.parent;\n}\n\n// A property might be a getter which has side effect...\n// Or "doSomething" can modify "obj.foo".\nwhile (obj.foo) {\n    doSomething(obj);\n}\n\n// A function call can return various values.\nwhile (check(obj)) {\n    doSomething(obj);\n}',
      incorrect:
        'while (node) {\n    doSomething(node);\n}\nnode = other;\n\nfor (var j = 0; j &lt; items.length; ++i) {\n    doSomething(items[j]);\n}\n\nwhile (node !== root) {\n    doSomething(node);\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'global-require',
    value: 'warn',
    shortDescription: 'Require require() calls to be placed at top-level module scope',
    longDescription:
      'This rule requires all calls to require() to be at the top level of the module, similar to ES6 import and export statements, which also can occur only at the top level.',
    examples: {
      correct:
        "// all these variations of require() are ok\nrequire('x');\nvar y = require('y');\nvar z;\nz = require('z').initialize();\n\n// requiring a module and using it in a function is ok\nvar fs = require('fs');\nfunction readFile(filename, callback) {\n    fs.readFile(filename, callback)\n}\n\n// you can use a ternary to determine which module to require\nvar logger = DEBUG ? require('dev-logger') : require('logger');\n\n// if you want you can require() at the end of your module\nfunction doSomethingA() {}\nfunction doSomethingB() {}\nvar x = require(\"x\"),\n    z = require(\"z\");",
      incorrect:
        "// calling require() inside of a function is not allowed\nfunction readFile(filename, callback) {\n    var fs = require('fs');\n    fs.readFile(filename, callback)\n}\n\n// conditional requires like this are also not allowed\nif (DEBUG) { require('debug'); }\n\n// a require() in a switch statement is also flagged\nswitch(x) { case '1': require('1'); break; }\n\n// you may not require() inside an arrow function body\nvar getModule = (name) =&gt; require(name);\n\n// you may not require() inside of a function body as well\nfunction getModule(name) { return require(name); }\n\n// you may not require() inside of a try/catch block\ntry {\n    require(unsafeModule);\n} catch(e) {\n    console.log(e);\n}",
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'require-unicode-regexp',
    value: 'warn',
    shortDescription: 'Enforce the use of u flag on RegExp',
    longDescription: 'This rule aims to enforce the use of u flag on regular expressions.',
    examples: {
      correct:
        'const a = /aaa/u\nconst b = /bbb/giu\nconst c = new RegExp("ccc", "u")\nconst d = new RegExp("ddd", "giu")\n\n// This rule ignores RegExp calls if the flags could not be evaluated to a static value.\nfunction f(flags) {\n    return new RegExp("eee", flags)\n}',
      incorrect: 'const a = /aaa/\nconst b = /bbb/gi\nconst c = new RegExp("ccc")\nconst d = new RegExp("ddd", "gi")',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-restricted-properties',
    value: 'warn',
    shortDescription: 'Disallow certain properties on certain objects',
    longDescription:
      'This rule looks for accessing a given property key on a given object name, either when reading the property’s value or invoking it as a function. You may specify an optional message to indicate an alternative API or a reason for the restriction.',
    examples: {
      correct:
        '/* eslint no-restricted-properties: [2, {\n    "object": "disallowedObjectName",\n    "property": "disallowedPropertyName"\n}] */\n\nvar example = disallowedObjectName.somePropertyName;\n\nallowedObjectName.disallowedPropertyName();',
      incorrect:
        '/* eslint no-restricted-properties: [2, {\n    "object": "disallowedObjectName",\n    "property": "disallowedPropertyName"\n}] */\n\nvar example = disallowedObjectName.disallowedPropertyName; /*error Disallowed object property: disallowedObjectName.disallowedPropertyName.*/\n\ndisallowedObjectName.disallowedPropertyName(); /*error Disallowed object property: disallowedObjectName.disallowedPropertyName.*/',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'max-lines',
    value: 'warn',
    shortDescription: 'Enforce a maximum number of lines per file',
    longDescription: 'This rule enforces a maximum number of lines per file, in order to aid in maintainability and reduce complexity.',
    examples: { correct: 'var a,\n    b, c;', incorrect: 'var a,\n    b,\n    c;' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-ternary',
    value: 'warn',
    shortDescription: 'Disallow ternary operators',
    longDescription: 'This rule disallows ternary operators.',
    examples: {
      correct:
        'var foo;\n\nif (isBar) {\n    foo = baz;\n} else {\n    foo = qux;\n}\n\nfunction quux() {\n    if (foo) {\n        return bar();\n    } else {\n        return baz();\n    }\n}',
      incorrect: 'var foo = isBar ? baz : qux;\n\nfunction quux() {\n  return foo ? bar() : baz();\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'radix',
    value: 'warn',
    shortDescription: 'Enforce the consistent use of the radix argument when using parseInt()',
    longDescription:
      'This rule is aimed at preventing the unintended conversion of a string to a number of a different base than intended or at preventing the redundant 10 radix if targeting modern environments only.',
    examples: {
      correct: 'var num = parseInt("071", 10);\n\nvar num = parseInt("071", 8);\n\nvar num = parseFloat(someValue);',
      incorrect: 'var num = parseInt("071");\n\nvar num = parseInt(someValue);\n\nvar num = parseInt("071", "abc");\n\nvar num = parseInt();',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'valid-typeof',
    value: 'warn',
    shortDescription: 'Enforce comparing typeof expressions against valid strings',
    longDescription: 'This rule enforces comparing typeof expressions to valid string literals.',
    examples: {
      correct: 'typeof foo === "string"\ntypeof bar == "undefined"\ntypeof foo === baz\ntypeof bar === typeof qux',
      incorrect: 'typeof foo === "strnig"\ntypeof foo == "undefimed"\ntypeof bar != "nunber"\ntypeof bar !== "fucntion"',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-empty',
    value: 'warn',
    shortDescription: 'Disallow empty block statements',
    longDescription:
      'This rule disallows empty block statements. This rule ignores block statements which contain a comment (for example, in an empty catch or finally block of a try statement to indicate that execution should continue regardless of errors).',
    examples: {
      correct:
        'if (foo) {\n    // empty\n}\n\nwhile (foo) {\n    /* empty */\n}\n\ntry {\n    doSomething();\n} catch (ex) {\n    // continue regardless of error\n}\n\ntry {\n    doSomething();\n} finally {\n    /* continue regardless of error */\n}',
      incorrect: 'if (foo) {\n}\n\nwhile (foo) {\n}\n\nswitch(foo) {\n}\n\ntry {\n    doSomething();\n} catch(ex) {\n\n} finally {\n\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-new-wrappers',
    value: 'warn',
    shortDescription: 'Disallow new operators with the String, Number, and Boolean objects',
    longDescription:
      'This rule aims to eliminate the use of String, Number, and Boolean with the new operator. As such, it warns whenever it sees new String, new Number, or new Boolean.',
    examples: {
      correct: 'var text = String(someValue);\nvar num = Number(someValue);\n\nvar object = new MyString();',
      incorrect:
        'var stringObject = new String("Hello world");\nvar numberObject = new Number(33);\nvar booleanObject = new Boolean(false);\n\nvar stringObject = new String;\nvar numberObject = new Number;\nvar booleanObject = new Boolean;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'comma-dangle',
    value: 'warn',
    shortDescription: 'Require or disallow trailing commas',
    longDescription: 'This rule enforces consistent use of trailing commas in object and array literals.',
    examples: {
      correct: 'var foo = {\n    bar: "baz",\n    qux: "quux"\n};\n\nvar arr = [1,2];\n\nfoo({\n  bar: "baz",\n  qux: "quux"\n});',
      incorrect: 'var foo = {\n    bar: "baz",\n    qux: "quux",\n};\n\nvar arr = [1,2,];\n\nfoo({\n  bar: "baz",\n  qux: "quux",\n});',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-extra-bind',
    value: 'warn',
    shortDescription: 'Disallow unnecessary calls to .bind()',
    longDescription:
      'This rule is aimed at avoiding the unnecessary use of bind() and as such will warn whenever an immediately-invoked function expression (IIFE) is using bind() and doesn’t have an appropriate this value. This rule won’t flag usage of bind() that includes function argument binding.',
    examples: {
      correct: 'var x = function () {\n    this.foo();\n}.bind(bar);\n\nvar x = function (a) {\n    return a + 1;\n}.bind(foo, bar);',
      incorrect:
        'var x = function () {\n    foo();\n}.bind(bar);\n\nvar x = (() =&gt; {\n    foo();\n}).bind(bar);\n\nvar x = (() =&gt; {\n    this.foo();\n}).bind(bar);\n\nvar x = function () {\n    (function () {\n      this.foo();\n    }());\n}.bind(bar);\n\nvar x = function () {\n    function foo() {\n      this.bar();\n    }\n}.bind(baz);',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'comma-style',
    value: 'warn',
    shortDescription: 'Enforce consistent comma style',
    longDescription: 'This rule enforce consistent comma style in array literals, object literals, and variable declarations.',
    examples: {
      correct:
        'var foo = 1, bar = 2;\n\nvar foo = 1,\n    bar = 2;\n\nvar foo = ["apples",\n           "oranges"];\n\nfunction bar() {\n    return {\n        "a": 1,\n        "b:": 2\n    };\n}',
      incorrect:
        'var foo = 1\n,\nbar = 2;\n\nvar foo = 1\n  , bar = 2;\n\nvar foo = ["apples"\n           , "oranges"];\n\nfunction bar() {\n    return {\n        "a": 1\n        ,"b:": 2\n    };\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-throw-literal',
    value: 'warn',
    shortDescription: 'Disallow throwing literals as exceptions',
    longDescription:
      'This rule is aimed at maintaining consistency when throwing exception by disallowing to throw literals and other expressions which cannot possibly be an Error object.',
    examples: {
      correct:
        'throw new Error();\n\nthrow new Error("error");\n\nvar e = new Error("error");\nthrow e;\n\ntry {\n    throw new Error("error");\n} catch (e) {\n    throw e;\n}',
      incorrect:
        'throw "error";\n\nthrow 0;\n\nthrow undefined;\n\nthrow null;\n\nvar err = new Error();\nthrow "an " + err;\n// err is recast to a string literal\n\nvar err = new Error();\nthrow `${err}`',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-regex-spaces',
    value: 'warn',
    shortDescription: 'Disallow multiple spaces in regular expressions',
    longDescription: 'This rule disallows multiple spaces in regular expression literals.',
    examples: {
      correct: 'var re = /foo {3}bar/;\nvar re = new RegExp("foo {3}bar");',
      incorrect: 'var re = /foo   bar/;\nvar re = new RegExp("foo   bar");',
    },
    isActive: false,
    isRecommended: true,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-array-constructor',
    value: 'warn',
    shortDescription: 'Disallow Array constructors',
    longDescription: 'This rule disallows Array constructors.',
    examples: { correct: 'Array(500)', incorrect: 'Array(0, 1, 2)' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-nested-ternary',
    value: 'warn',
    shortDescription: 'Disallow nested ternary expressions',
    longDescription: 'The no-nested-ternary rule disallows nested ternary expressions.',
    examples: {
      correct:
        'var thing = foo ? bar : foobar;\n\nvar thing;\n\nif (foo) {\n  thing = bar;\n} else if (baz === qux) {\n  thing = quxx;\n} else {\n  thing = foobar;\n}',
      incorrect: 'var thing = foo ? bar : baz === qux ? quxx : foobar;\n\nfoo ? baz === qux ? quxx() : foobar() : bar();',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'array-callback-return',
    value: 'warn',
    shortDescription: 'Enforce return statements in callbacks of array methods',
    longDescription: 'This rule finds callback functions of the following methods, then checks usage of return statement.',
    examples: {
      correct:
        'var indexMap = myArray.reduce(function(memo, item, index) {\n    memo[item] = index;\n    return memo;\n}, {});\n\nvar foo = Array.from(nodes, function(node) {\n    if (node.tagName === "DIV") {\n        return true;\n    }\n    return false;\n});\n\nvar bar = foo.map(node =&gt; node.getAttribute("id"));',
      incorrect:
        'var indexMap = myArray.reduce(function(memo, item, index) {\n    memo[item] = index;\n}, {});\n\nvar foo = Array.from(nodes, function(node) {\n    if (node.tagName === "DIV") {\n        return true;\n    }\n});\n\nvar bar = foo.filter(function(x) {\n    if (x) {\n        return true;\n    } else {\n        return;\n    }\n});',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'array-element-newline',
    value: 'warn',
    shortDescription: 'Enforce line breaks after each array element',
    longDescription: 'This rule enforces line breaks between array elements.',
    examples: {
      correct:
        'var a = [];\nvar b = [1];\nvar c = [1,\n    2];\nvar d = [1,\n    2,\n    3];\nvar e = [\n    function foo() {\n        dosomething();\n    },\n    function bar() {\n        dosomething();\n    }\n];',
      incorrect:
        'var c = [1, 2];\nvar d = [1, 2, 3];\nvar e = [\n    function foo() {\n        dosomething();\n    }, function bar() {\n        dosomething();\n    }\n];',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'consistent-return',
    value: 'warn',
    shortDescription: 'Require return statements to either always or never specify values',
    longDescription:
      'This rule requires return statements to either always or never specify values. This rule ignores function definitions where the name begins with an uppercase letter, because constructors (when invoked with the new operator) return the instantiated object implicitly if they do not return another object explicitly.',
    examples: {
      correct:
        'function doSomething(condition) {\n    if (condition) {\n        return true;\n    } else {\n        return false;\n    }\n}\n\nfunction Foo() {\n    if (!(this instanceof Foo)) {\n        return new Foo();\n    }\n\n    this.a = 0;\n}',
      incorrect:
        'function doSomething(condition) {\n    if (condition) {\n        return true;\n    } else {\n        return;\n    }\n}\n\nfunction doSomething(condition) {\n    if (condition) {\n        return true;\n    }\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'semi-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing before and after semicolons',
    longDescription: 'This rule aims to enforce spacing around a semicolon. This rule prevents the use of spaces before a semicolon in expressions.',
    examples: {
      correct:
        'var foo;\nvar foo; var bar;\nthrow new Error("error");\nwhile (a) { break; }\nfor (i = 0; i &lt; 10; i++) {}\nfor (;;) {}\nif (true) {;}\n;foo();',
      incorrect:
        'var foo ;\nvar foo;var bar;\nthrow new Error("error") ;\nwhile (a) { break ; }\nfor (i = 0 ; i &lt; 10 ; i++) {}\nfor (i = 0;i &lt; 10;i++) {}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-mixed-spaces-and-tabs',
    value: 'warn',
    shortDescription: 'Disallow mixed spaces and tabs for indentation',
    longDescription: 'This rule disallows mixed spaces and tabs for indentation.',
    examples: {
      correct: 'function add(x, y) {\n// ---&gt;return x + y;\n    return x + y;\n}',
      incorrect:
        'function add(x, y) {\n// ---&gt;..return x + y;\n\n      return x + y;\n}\n\nfunction main() {\n// ---&gt;var x = 5,\n// ---&gt;....y = 7;\n\n    var x = 5,\n        y = 7;\n}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-shadow-restricted-names',
    value: 'warn',
    shortDescription: 'Disallow identifiers from shadowing restricted names',
    longDescription: 'Examples of incorrect code for this rule:.',
    examples: {
      correct: 'var Object;\n\nfunction f(a, b){}',
      incorrect: 'function NaN(){}\n\n!function(Infinity){};\n\nvar undefined;\n\ntry {} catch(eval){}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'curly',
    value: 'warn',
    shortDescription: 'Enforce consistent brace style for all control statements',
    longDescription:
      'This rule is aimed at preventing bugs and increasing code clarity by ensuring that block statements are wrapped in curly braces. It will warn when it encounters blocks that omit curly braces.',
    examples: {
      correct: 'if (foo) {\n    foo++;\n}\n\nwhile (bar) {\n    baz();\n}\n\nif (foo) {\n    baz();\n} else {\n    qux();\n}',
      incorrect: 'if (foo) foo++;\n\nwhile (bar)\n    baz();\n\nif (foo) {\n    baz();\n} else qux();',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-negated-condition',
    value: 'warn',
    shortDescription: 'Disallow negated conditions',
    longDescription: 'This rule disallows negated conditions in either of the following:.',
    examples: {
      correct:
        'if (!a) {\n    doSomething();\n}\n\nif (!a) {\n    doSomething();\n} else if (b) {\n    doSomething();\n}\n\nif (a != b) {\n    doSomething();\n}\n\na ? b : c',
      incorrect:
        'if (!a) {\n    doSomething();\n} else {\n    doSomethingElse();\n}\n\nif (a != b) {\n    doSomething();\n} else {\n    doSomethingElse();\n}\n\nif (a !== b) {\n    doSomething();\n} else {\n    doSomethingElse();\n}\n\n!a ? c : b',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'max-statements',
    value: 'warn',
    shortDescription: 'Enforce a maximum number of statements allowed in function blocks',
    longDescription: 'This rule enforces a maximum number of statements allowed in function blocks.',
    examples: {
      correct:
        'function foo() {\n  var foo1 = 1;\n  var foo2 = 2;\n  var foo3 = 3;\n  var foo4 = 4;\n  var foo5 = 5;\n  var foo6 = 6;\n  var foo7 = 7;\n  var foo8 = 8;\n  var foo9 = 9;\n  var foo10 = 10;\n  return function () {\n\n    // The number of statements in the inner function does not count toward the\n    // statement maximum.\n\n    return 42;\n  };\n}\n\nlet foo = () =&gt; {\n  var foo1 = 1;\n  var foo2 = 2;\n  var foo3 = 3;\n  var foo4 = 4;\n  var foo5 = 5;\n  var foo6 = 6;\n  var foo7 = 7;\n  var foo8 = 8;\n  var foo9 = 9;\n  var foo10 = 10;\n  return function () {\n\n    // The number of statements in the inner function does not count toward the\n    // statement maximum.\n\n    return 42;\n  };\n}',
      incorrect:
        'function foo() {\n  var foo1 = 1;\n  var foo2 = 2;\n  var foo3 = 3;\n  var foo4 = 4;\n  var foo5 = 5;\n  var foo6 = 6;\n  var foo7 = 7;\n  var foo8 = 8;\n  var foo9 = 9;\n  var foo10 = 10;\n\n  var foo11 = 11; // Too many.\n}\n\nlet foo = () =&gt; {\n  var foo1 = 1;\n  var foo2 = 2;\n  var foo3 = 3;\n  var foo4 = 4;\n  var foo5 = 5;\n  var foo6 = 6;\n  var foo7 = 7;\n  var foo8 = 8;\n  var foo9 = 9;\n  var foo10 = 10;\n\n  var foo11 = 11; // Too many.\n};',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'func-style',
    value: 'warn',
    shortDescription: 'Enforce the consistent use of either function declarations or expressions',
    longDescription:
      'This rule enforces a particular type of function style throughout a JavaScript file, either declarations or expressions. You can specify which you prefer in the configuration.',
    examples: { correct: 'var foo = function() {\n    // ...\n};', incorrect: 'function foo() {\n    // ...\n}' },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-underscore-dangle',
    value: 'warn',
    shortDescription: 'Disallow dangling underscores in identifiers',
    longDescription: 'This rule disallows dangling underscores in identifiers.',
    examples: {
      correct: "var _ = require('underscore');\nvar obj = _.contains(items, item);\nobj.__proto__ = {};\nvar file = __filename;",
      incorrect: 'var foo_;\nvar __proto__ = {};\nfoo._bar();',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'unicode-bom',
    value: 'warn',
    shortDescription: 'Require or disallow Unicode byte order mark (BOM)',
    longDescription:
      'If the "always" option is used, this rule requires that files always begin\nwith the Unicode BOM character U+FEFF. If "never" is used, files must never\nbegin with U+FEFF.',
    examples: { correct: 'U+FEFF\nvar abc;', incorrect: 'var abc;' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'operator-linebreak',
    value: 'warn',
    shortDescription: 'Enforce consistent linebreak style for operators',
    longDescription: 'This rule enforces a consistent linebreak style for operators.',
    examples: {
      correct:
        'foo = 1 + 2;\n\nfoo = 1 +\n      2;\n\nfoo =\n    5;\n\nif (someCondition ||\n    otherCondition) {\n}\n\nanswer = everything ?\n  42 :\n  foo;',
      incorrect:
        'foo = 1\n+\n2;\n\nfoo = 1\n    + 2;\n\nfoo\n    = 5;\n\nif (someCondition\n    || otherCondition) {\n}\n\nanswer = everything\n  ? 42\n  : foo;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-control-regex',
    value: 'warn',
    shortDescription: 'Disallow control characters in regular expressions',
    longDescription: 'This rule disallows control characters in regular expressions.',
    examples: {
      correct: 'var pattern1 = /\\x20/;\nvar pattern2 = new RegExp("\\x20");',
      incorrect: 'var pattern1 = /\\x1f/;\nvar pattern2 = new RegExp("\\x1f");',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-buffer-constructor',
    value: 'warn',
    shortDescription: 'Disallow use of the Buffer() constructor',
    longDescription: 'This rule disallows calling and constructing the Buffer() constructor.',
    examples: {
      correct: 'Buffer.alloc(5);\nBuffer.allocUnsafe(5);\nBuffer.from([1, 2, 3]);\n\nBuffer.alloc(res.body.amount);\nBuffer.from(res.body.values);',
      incorrect:
        'new Buffer(5);\nnew Buffer([1, 2, 3]);\n\nBuffer(5);\nBuffer([1, 2, 3]);\n\nnew Buffer(res.body.amount);\nnew Buffer(res.body.values);',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-empty-pattern',
    value: 'warn',
    shortDescription: 'Disallow empty destructuring patterns',
    longDescription:
      'This rule aims to flag any empty patterns in destructured objects and arrays, and as such, will report a problem whenever one is encountered.',
    examples: {
      correct: 'var {a = {}} = foo;\nvar {a = []} = foo;\nfunction foo({a = {}}) {}\nfunction foo({a = []}) {}',
      incorrect:
        'var {} = foo;\nvar [] = foo;\nvar {a: {}} = foo;\nvar {a: []} = foo;\nfunction foo({}) {}\nfunction foo([]) {}\nfunction foo({a: {}}) {}\nfunction foo({a: []}) {}',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'semi-style',
    value: 'warn',
    shortDescription: 'Enforce location of semicolons',
    longDescription: 'This rule reports line terminators around semicolons.',
    examples: {
      correct: 'foo();\n[1, 2, 3].forEach(bar)\n\nfor (\n    var i = 0;\n    i &lt; 10;\n    ++i\n) {\n    foo()\n}',
      incorrect: 'foo()\n;[1, 2, 3].forEach(bar)\n\nfor (\n    var i = 0\n    ; i &lt; 10\n    ; ++i\n) {\n    foo()\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-restricted-syntax',
    value: 'warn',
    shortDescription: 'Disallow specified syntax',
    longDescription: 'This rule disallows specified (that is, user-defined) syntax.',
    examples: {
      correct: 'me.dontMess();\n\nfunction doSomething() {};\n\nfoo instanceof bar;',
      incorrect: 'with (me) {\n    dontMess();\n}\n\nvar doSomething = function () {};\n\nfoo in bar;',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'block-scoped-var',
    value: 'warn',
    shortDescription: 'Enforce the use of variables within the scope they are defined',
    longDescription:
      'This rule aims to reduce the usage of variables outside of their binding context and emulate traditional block scope from other languages. This is to help newcomers to the language avoid difficult bugs with variable hoisting.',
    examples: {
      correct:
        'function doIf() {\n    var build;\n\n    if (true) {\n        build = true;\n    }\n\n    console.log(build);\n}\n\nfunction doIfElse() {\n    var build;\n\n    if (true) {\n        build = true;\n    } else {\n        build = false;\n    }\n}\n\nfunction doTryCatch() {\n    var build;\n    var f;\n\n    try {\n        build = 1;\n    } catch (e) {\n        f = build;\n    }\n}',
      incorrect:
        'function doIf() {\n    if (true) {\n        var build = true;\n    }\n\n    console.log(build);\n}\n\nfunction doIfElse() {\n    if (true) {\n        var build = true;\n    } else {\n        var build = false;\n    }\n}\n\nfunction doTryCatch() {\n    try {\n        var build = 1;\n    } catch (e) {\n        var f = build;\n    }\n}',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-obj-calls',
    value: 'warn',
    shortDescription: 'Disallow calling global object properties as functions',
    longDescription: 'This rule disallows calling the Math, JSON and Reflect objects as functions.',
    examples: {
      correct: 'function area(r) {\n    return Math.PI * r * r;\n}\nvar object = JSON.parse("{}");\nvar value = Reflect.get({ x: 1, y: 2 }, "x");',
      incorrect: 'var math = Math();\nvar json = JSON();\nvar reflect = Reflect();',
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'max-nested-callbacks',
    value: 'warn',
    shortDescription: 'Enforce a maximum depth that callbacks can be nested',
    longDescription: 'This rule enforces a maximum depth that callbacks can be nested to increase code clarity.',
    examples: {
      correct:
        'foo1(handleFoo1);\n\nfunction handleFoo1() {\n    foo2(handleFoo2);\n}\n\nfunction handleFoo2() {\n    foo3(handleFoo3);\n}\n\nfunction handleFoo3() {\n    foo4(handleFoo4);\n}\n\nfunction handleFoo4() {\n    foo5();\n}',
      incorrect:
        'foo1(function() {\n    foo2(function() {\n        foo3(function() {\n            foo4(function() {\n                // Do something\n            });\n        });\n    });\n});',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-path-concat',
    value: 'warn',
    shortDescription: 'Disallow string concatenation with __dirname and __filename',
    longDescription: 'This rule aims to prevent string concatenation of directory paths in Node.js.',
    examples: {
      correct: 'var fullPath = dirname + "/foo.js";',
      incorrect: 'var fullPath = __dirname + "/foo.js";\n\nvar fullPath = __filename + "/foo.js";',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-useless-call',
    value: 'warn',
    shortDescription: 'Disallow unnecessary calls to .call() and .apply()',
    longDescription:
      'This rule is aimed to flag usage of Function.prototype.call() and Function.prototype.apply() that can be replaced with the normal function invocation.',
    examples: {
      correct:
        '// The `this` binding is different.\nfoo.call(obj, 1, 2, 3);\nfoo.apply(obj, [1, 2, 3]);\nobj.foo.call(null, 1, 2, 3);\nobj.foo.apply(null, [1, 2, 3]);\nobj.foo.call(otherObj, 1, 2, 3);\nobj.foo.apply(otherObj, [1, 2, 3]);\n\n// The argument list is variadic.\nfoo.apply(undefined, args);\nfoo.apply(null, args);\nobj.foo.apply(obj, args);',
      incorrect:
        '// These are same as `foo(1, 2, 3);`\nfoo.call(undefined, 1, 2, 3);\nfoo.apply(undefined, [1, 2, 3]);\nfoo.call(null, 1, 2, 3);\nfoo.apply(null, [1, 2, 3]);\n\n// These are same as `obj.foo(1, 2, 3);`\nobj.foo.call(obj, 1, 2, 3);\nobj.foo.apply(obj, [1, 2, 3]);',
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'jsx-quotes',
    value: 'warn',
    shortDescription: 'Enforce the consistent use of either double or single quotes in JSX attributes',
    longDescription: 'This rule enforces the consistent use of either double or single quotes in JSX attributes.',
    examples: { correct: 'No example :(', incorrect: 'No example :(' },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
];
