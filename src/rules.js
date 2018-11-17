export const rules = [
  {
    name: 'for-direction',
    value: 'warn',
    shortDescription: 'Enforce “for” loop update clause moving the counter in the right direction',
    longDescription: 'Enforce “for” loop update clause moving the counter in the right direction',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'getter-return',
    value: 'warn',
    shortDescription: 'Enforce return statements in getters',
    longDescription: 'Enforce return statements in getters',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-async-promise-executor',
    value: 'warn',
    shortDescription: 'Disallow using an async function as a Promise executor',
    longDescription: 'Disallow using an async function as a Promise executor',
    examples: {
      correct: `// 1
const result = new Promise((resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

// 2
const result = Promise.resolve(foo);`,
      incorrect: `// 1
const result = new Promise(async (resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

// 2
const result = new Promise(async (resolve, reject) => {
  resolve(await foo);
});`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-await-in-loop',
    value: 'warn',
    shortDescription: 'Disallow await inside of loops',
    longDescription: 'Disallow await inside of loops',
    examples: {
      correct: `// 1
async function foo(things) {
  const results = [];
  
  for (const thing of things) {
    results.push(bar(thing));
  }
  
  return baz(await Promise.all(results));
}`,
      incorrect: `// 1
async function foo(things) {
  const results = [];
  
  for (const thing of things) {
    results.push(await bar(thing));
  }
  
  return baz(results);
}`,
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
    longDescription: 'Disallow comparing against -0',
    examples: {
      correct: `// 1
if (x === 0) {}

// 2
if (Object.is(x, -0)) {}`,
      incorrect: `// 1
if (x === -0) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-cond-assign',
    value: 'warn',
    shortDescription: 'Disallow assignment operators in conditional expressions',
    longDescription: 'Disallow assignment operators in conditional expressions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-console',
    value: 'warn',
    shortDescription: 'Disallow the use of console',
    longDescription: 'Disallow the use of console',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-constant-condition',
    value: 'warn',
    shortDescription: 'Disallow constant expressions in conditions',
    longDescription: 'Disallow constant expressions in conditions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-control-regex',
    value: 'warn',
    shortDescription: 'Disallow control characters in regular expressions',
    longDescription: 'Disallow control characters in regular expressions',
    examples: {
      correct: `// 1
var pattern = /\x20/;

// 2
var pattern = new RegExp("\x20");`,
      incorrect: `// 1
var pattern = /\x1f/;

// 2
var pattern = new RegExp("\x1f");`,
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
    longDescription: 'Disallow the use of debugger',
    examples: {
      correct: `// 1
function isTruthy(x) {
    return Boolean(x); // set a breakpoint at this line
}`,
      incorrect: `// 1
function isTruthy(x) {
    debugger;
    return Boolean(x);
}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-dupe-args',
    value: 'warn',
    shortDescription: 'Disallow duplicate arguments in function definitions',
    longDescription: 'Disallow duplicate arguments in function definitions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-dupe-keys',
    value: 'warn',
    shortDescription: 'Disallow duplicate keys in object literals',
    longDescription: 'Disallow duplicate keys in object literals',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-duplicate-case',
    value: 'warn',
    shortDescription: 'Disallow duplicate case labels',
    longDescription: 'Disallow duplicate case labels',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow empty block statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow empty character classes in regular expressions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow reassigning exceptions in catch clauses',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-extra-boolean-cast',
    value: 'warn',
    shortDescription: 'Disallow unnecessary boolean casts',
    longDescription: 'Disallow unnecessary boolean casts',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-extra-parens',
    value: 'warn',
    shortDescription: 'Disallow unnecessary parentheses',
    longDescription: 'Disallow unnecessary parentheses',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-extra-semi',
    value: 'warn',
    shortDescription: 'Disallow unnecessary semicolons',
    longDescription: 'Disallow unnecessary semicolons',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-func-assign',
    value: 'warn',
    shortDescription: 'Disallow reassigning function declarations',
    longDescription: 'Disallow reassigning function declarations',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-inner-declarations',
    value: 'warn',
    shortDescription: 'Disallow variable or function declarations in nested blocks',
    longDescription: 'Disallow variable or function declarations in nested blocks',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-invalid-regexp',
    value: 'warn',
    shortDescription: 'Disallow invalid regular expression strings in RegExp constructors',
    longDescription: 'Disallow invalid regular expression strings in RegExp constructors',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-irregular-whitespace',
    value: 'warn',
    shortDescription: 'Disallow irregular whitespace outside of strings and comments',
    longDescription: 'Disallow irregular whitespace outside of strings and comments',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-misleading-character-class',
    value: 'warn',
    shortDescription: 'Disallow characters which are made with multiple code points in character class syntax',
    longDescription: 'Disallow characters which are made with multiple code points in character class syntax',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow calling global object properties as functions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-prototype-builtins',
    value: 'warn',
    shortDescription: 'Disallow calling some Object.prototype methods directly on objects',
    longDescription: 'Disallow calling some Object.prototype methods directly on objects',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow multiple spaces in regular expressions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-sparse-arrays',
    value: 'warn',
    shortDescription: 'Disallow sparse arrays',
    longDescription: 'Disallow sparse arrays',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-template-curly-in-string',
    value: 'warn',
    shortDescription: 'Disallow template literal placeholder syntax in regular strings',
    longDescription: 'Disallow template literal placeholder syntax in regular strings',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unexpected-multiline',
    value: 'warn',
    shortDescription: 'Disallow confusing multiline expressions',
    longDescription: 'Disallow confusing multiline expressions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unreachable',
    value: 'warn',
    shortDescription: 'Disallow unreachable code after return, throw, continue, and break statements',
    longDescription: 'Disallow unreachable code after return, throw, continue, and break statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unsafe-finally',
    value: 'warn',
    shortDescription: 'Disallow control flow statements in finally blocks',
    longDescription: 'Disallow control flow statements in finally blocks',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unsafe-negation',
    value: 'warn',
    shortDescription: 'Disallow negating the left operand of relational operators',
    longDescription: 'Disallow negating the left operand of relational operators',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'require-atomic-updates',
    value: 'warn',
    shortDescription: 'Disallow assignments that can lead to race conditions due to usage of await or yield',
    longDescription: 'Disallow assignments that can lead to race conditions due to usage of await or yield',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'use-isnan',
    value: 'warn',
    shortDescription: 'Require calls to isNaN() when checking for NaN',
    longDescription: 'Require calls to isNaN() when checking for NaN',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'valid-jsdoc',
    value: 'warn',
    shortDescription: 'Enforce valid JSDoc comments',
    longDescription: 'Enforce valid JSDoc comments',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'valid-typeof',
    value: 'warn',
    shortDescription: 'Enforce comparing typeof expressions against valid strings',
    longDescription: 'Enforce comparing typeof expressions against valid strings',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce getter and setter pairs in objects',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce return statements in callbacks of array methods',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce the use of variables within the scope they are defined',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'class-methods-use-this',
    value: 'warn',
    shortDescription: 'Enforce that class methods utilize this',
    longDescription: 'Enforce that class methods utilize this',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'complexity',
    value: 'warn',
    shortDescription: 'Enforce a maximum cyclomatic complexity allowed in a program',
    longDescription: 'Enforce a maximum cyclomatic complexity allowed in a program',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'consistent-return',
    value: 'warn',
    shortDescription: 'Require return statements to either always or never specify values',
    longDescription: 'Require return statements to either always or never specify values',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce consistent brace style for all control statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'default-case',
    value: 'warn',
    shortDescription: 'Require default cases in switch statements',
    longDescription: 'Require default cases in switch statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'dot-location',
    value: 'warn',
    shortDescription: 'Enforce consistent newlines before and after dots',
    longDescription: 'Enforce consistent newlines before and after dots',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'dot-notation',
    value: 'warn',
    shortDescription: 'Enforce dot notation whenever possible',
    longDescription: 'Enforce dot notation whenever possible',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'eqeqeq',
    value: 'warn',
    shortDescription: 'Require the use of === and !==',
    longDescription: 'Require the use of === and !==',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'guard-for-in',
    value: 'warn',
    shortDescription: 'Require for-in loops to include an if statement',
    longDescription: 'Require for-in loops to include an if statement',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'max-classes-per-file',
    value: 'warn',
    shortDescription: 'Enforce a maximum number of classes per file',
    longDescription: 'Enforce a maximum number of classes per file',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-alert',
    value: 'warn',
    shortDescription: 'Disallow the use of alert, confirm, and prompt',
    longDescription: 'Disallow the use of alert, confirm, and prompt',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow the use of arguments.caller or arguments.callee',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-case-declarations',
    value: 'warn',
    shortDescription: 'Disallow lexical declarations in case clauses',
    longDescription: 'Disallow lexical declarations in case clauses',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-div-regex',
    value: 'warn',
    shortDescription: 'Disallow division operators explicitly at the beginning of regular expressions',
    longDescription: 'Disallow division operators explicitly at the beginning of regular expressions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-else-return',
    value: 'warn',
    shortDescription: 'Disallow else blocks after return statements in if statements',
    longDescription: 'Disallow else blocks after return statements in if statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow empty functions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow empty destructuring patterns',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-eq-null',
    value: 'warn',
    shortDescription: 'Disallow null comparisons without type-checking operators',
    longDescription: 'Disallow null comparisons without type-checking operators',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-eval',
    value: 'warn',
    shortDescription: 'Disallow the use of eval()',
    longDescription: 'Disallow the use of eval()',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow extending native types',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-extra-bind',
    value: 'warn',
    shortDescription: 'Disallow unnecessary calls to .bind()',
    longDescription: 'Disallow unnecessary calls to .bind()',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-extra-label',
    value: 'warn',
    shortDescription: 'Disallow unnecessary labels',
    longDescription: 'Disallow unnecessary labels',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-fallthrough',
    value: 'warn',
    shortDescription: 'Disallow fallthrough of case statements',
    longDescription: 'Disallow fallthrough of case statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-floating-decimal',
    value: 'warn',
    shortDescription: 'Disallow leading or trailing decimal points in numeric literals',
    longDescription: 'Disallow leading or trailing decimal points in numeric literals',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-global-assign',
    value: 'warn',
    shortDescription: 'Disallow assignments to native objects or read-only global variables',
    longDescription: 'Disallow assignments to native objects or read-only global variables',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-implicit-coercion',
    value: 'warn',
    shortDescription: 'Disallow shorthand type conversions',
    longDescription: 'Disallow shorthand type conversions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-implicit-globals',
    value: 'warn',
    shortDescription: 'Disallow variable and function declarations in the global scope',
    longDescription: 'Disallow variable and function declarations in the global scope',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-implied-eval',
    value: 'warn',
    shortDescription: 'Disallow the use of eval()-like methods',
    longDescription: 'Disallow the use of eval()-like methods',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow this keywords outside of classes or class-like objects',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow the use of the __iterator__ property',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow labeled statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow unnecessary nested blocks',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-loop-func',
    value: 'warn',
    shortDescription: 'Disallow function declarations and expressions inside loop statements',
    longDescription: 'Disallow function declarations and expressions inside loop statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow magic numbers',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow multiple spaces',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-multi-str',
    value: 'warn',
    shortDescription: 'Disallow multiline strings',
    longDescription: 'Disallow multiline strings',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow new operators outside of assignments or comparisons',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-new-func',
    value: 'warn',
    shortDescription: 'Disallow new operators with the Function object',
    longDescription: 'Disallow new operators with the Function object',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-new-wrappers',
    value: 'warn',
    shortDescription: 'Disallow new operators with the String, Number, and Boolean objects',
    longDescription: 'Disallow new operators with the String, Number, and Boolean objects',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-octal',
    value: 'warn',
    shortDescription: 'Disallow octal literals',
    longDescription: 'Disallow octal literals',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow octal escape sequences in string literals',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-param-reassign',
    value: 'warn',
    shortDescription: 'Disallow reassigning function parameters',
    longDescription: 'Disallow reassigning function parameters',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow the use of the __proto__ property',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-redeclare',
    value: 'warn',
    shortDescription: 'Disallow variable redeclaration',
    longDescription: 'Disallow variable redeclaration',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-restricted-properties',
    value: 'warn',
    shortDescription: 'Disallow certain properties on certain objects',
    longDescription: 'Disallow certain properties on certain objects',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-return-assign',
    value: 'warn',
    shortDescription: 'Disallow assignment operators in return statements',
    longDescription: 'Disallow assignment operators in return statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-return-await',
    value: 'warn',
    shortDescription: 'Disallow unnecessary return await',
    longDescription: 'Disallow unnecessary return await',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow javascript: urls',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow assignments where both sides are exactly the same',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-self-compare',
    value: 'warn',
    shortDescription: 'Disallow comparisons where both sides are exactly the same',
    longDescription: 'Disallow comparisons where both sides are exactly the same',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-sequences',
    value: 'warn',
    shortDescription: 'Disallow comma operators',
    longDescription: 'Disallow comma operators',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-throw-literal',
    value: 'warn',
    shortDescription: 'Disallow throwing literals as exceptions',
    longDescription: 'Disallow throwing literals as exceptions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unmodified-loop-condition',
    value: 'warn',
    shortDescription: 'Disallow unmodified loop conditions',
    longDescription: 'Disallow unmodified loop conditions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unused-expressions',
    value: 'warn',
    shortDescription: 'Disallow unused expressions',
    longDescription: 'Disallow unused expressions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unused-labels',
    value: 'warn',
    shortDescription: 'Disallow unused labels',
    longDescription: 'Disallow unused labels',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-useless-call',
    value: 'warn',
    shortDescription: 'Disallow unnecessary calls to .call() and .apply()',
    longDescription: 'Disallow unnecessary calls to .call() and .apply()',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow unnecessary concatenation of literals or template literals',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-useless-escape',
    value: 'warn',
    shortDescription: 'Disallow unnecessary escape characters',
    longDescription: 'Disallow unnecessary escape characters',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-useless-return',
    value: 'warn',
    shortDescription: 'Disallow redundant return statements',
    longDescription: 'Disallow redundant return statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow void operators',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow specified warning terms in comments',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow with statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'prefer-promise-reject-errors',
    value: 'warn',
    shortDescription: 'Require using Error objects as Promise rejection reasons',
    longDescription: 'Require using Error objects as Promise rejection reasons',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce the consistent use of the radix argument when using parseInt()',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow async functions which have no await expression',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce the use of u flag on RegExp',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'vars-on-top',
    value: 'warn',
    shortDescription: 'Require var declarations be placed at the top of their containing scope',
    longDescription: 'Require var declarations be placed at the top of their containing scope',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require parentheses around immediate function invocations',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'yoda',
    value: 'warn',
    shortDescription: 'Require or disallow “Yoda” conditions',
    longDescription: 'Require or disallow “Yoda” conditions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require or disallow strict mode directives',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'init-declarations',
    value: 'warn',
    shortDescription: 'Require or disallow initialization in variable declarations',
    longDescription: 'Require or disallow initialization in variable declarations',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow deleting variables',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-label-var',
    value: 'warn',
    shortDescription: 'Disallow labels that share a name with a variable',
    longDescription: 'Disallow labels that share a name with a variable',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-restricted-globals',
    value: 'warn',
    shortDescription: 'Disallow specified global variables',
    longDescription: 'Disallow specified global variables',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-shadow',
    value: 'warn',
    shortDescription: 'Disallow variable declarations from shadowing variables declared in the outer scope',
    longDescription: 'Disallow variable declarations from shadowing variables declared in the outer scope',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-shadow-restricted-names',
    value: 'warn',
    shortDescription: 'Disallow identifiers from shadowing restricted names',
    longDescription: 'Disallow identifiers from shadowing restricted names',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow the use of undeclared variables unless mentioned in /*global */ comments',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-undef-init',
    value: 'warn',
    shortDescription: 'Disallow initializing variables to undefined',
    longDescription: 'Disallow initializing variables to undefined',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow the use of undefined as an identifier',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow unused variables',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-use-before-define',
    value: 'warn',
    shortDescription: 'Disallow the use of variables before they are defined',
    longDescription: 'Disallow the use of variables before they are defined',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'callback-return',
    value: 'warn',
    shortDescription: 'Require return statements after callbacks',
    longDescription: 'Require return statements after callbacks',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require require() calls to be placed at top-level module scope',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require error handling in callbacks',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-buffer-constructor',
    value: 'warn',
    shortDescription: 'Disallow use of the Buffer() constructor',
    longDescription: 'Disallow use of the Buffer() constructor',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-mixed-requires',
    value: 'warn',
    shortDescription: 'Disallow require calls to be mixed with regular variable declarations',
    longDescription: 'Disallow require calls to be mixed with regular variable declarations',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow new operators with calls to require',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow string concatenation with __dirname and __filename',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-process-env',
    value: 'warn',
    shortDescription: 'Disallow the use of process.env',
    longDescription: 'Disallow the use of process.env',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-process-exit',
    value: 'warn',
    shortDescription: 'Disallow the use of process.exit()',
    longDescription: 'Disallow the use of process.exit()',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-restricted-modules',
    value: 'warn',
    shortDescription: 'Disallow specified modules when loaded by require',
    longDescription: 'Disallow specified modules when loaded by require',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-sync',
    value: 'warn',
    shortDescription: 'Disallow synchronous methods',
    longDescription: 'Disallow synchronous methods',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'array-bracket-newline',
    value: 'warn',
    shortDescription: 'Enforce linebreaks after opening and before closing array brackets',
    longDescription: 'Enforce linebreaks after opening and before closing array brackets',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'array-bracket-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing inside array brackets',
    longDescription: 'Enforce consistent spacing inside array brackets',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'array-element-newline',
    value: 'warn',
    shortDescription: 'Enforce line breaks after each array element',
    longDescription: 'Enforce line breaks after each array element',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'block-spacing',
    value: 'warn',
    shortDescription: 'Disallow or enforce spaces inside of blocks after opening block and before closing block',
    longDescription: 'Disallow or enforce spaces inside of blocks after opening block and before closing block',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'brace-style',
    value: 'warn',
    shortDescription: 'Enforce consistent brace style for blocks',
    longDescription: 'Enforce consistent brace style for blocks',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'camelcase',
    value: 'warn',
    shortDescription: 'Enforce camelcase naming convention',
    longDescription: 'Enforce camelcase naming convention',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce or disallow capitalization of the first letter of a comment',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'comma-dangle',
    value: 'warn',
    shortDescription: 'Require or disallow trailing commas',
    longDescription: 'Require or disallow trailing commas',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'comma-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing before and after commas',
    longDescription: 'Enforce consistent spacing before and after commas',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce consistent comma style',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'computed-property-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing inside computed property brackets',
    longDescription: 'Enforce consistent spacing inside computed property brackets',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'consistent-this',
    value: 'warn',
    shortDescription: 'Enforce consistent naming when capturing the current execution context',
    longDescription: 'Enforce consistent naming when capturing the current execution context',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require or disallow newline at the end of files',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'func-call-spacing',
    value: 'warn',
    shortDescription: 'Require or disallow spacing between function identifiers and their invocations',
    longDescription: 'Require or disallow spacing between function identifiers and their invocations',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require function names to match the name of the variable or property to which they are assigned',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'func-names',
    value: 'warn',
    shortDescription: 'Require or disallow named function expressions',
    longDescription: 'Require or disallow named function expressions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce the consistent use of either function declarations or expressions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'function-paren-newline',
    value: 'warn',
    shortDescription: 'Enforce consistent line breaks inside function parentheses',
    longDescription: 'Enforce consistent line breaks inside function parentheses',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow specified identifiers',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'id-length',
    value: 'warn',
    shortDescription: 'Enforce minimum and maximum identifier lengths',
    longDescription: 'Enforce minimum and maximum identifier lengths',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require identifiers to match a specified regular expression',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce the location of arrow function bodies',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'indent',
    value: 'warn',
    shortDescription: 'Enforce consistent indentation',
    longDescription: 'Enforce consistent indentation',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'jsx-quotes',
    value: 'warn',
    shortDescription: 'Enforce the consistent use of either double or single quotes in JSX attributes',
    longDescription: 'Enforce the consistent use of either double or single quotes in JSX attributes',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'key-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing between keys and values in object literal properties',
    longDescription: 'Enforce consistent spacing between keys and values in object literal properties',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'keyword-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing before and after keywords',
    longDescription: 'Enforce consistent spacing before and after keywords',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'line-comment-position',
    value: 'warn',
    shortDescription: 'Enforce position of line comments',
    longDescription: 'Enforce position of line comments',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce consistent linebreak style',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'lines-around-comment',
    value: 'warn',
    shortDescription: 'Require empty lines around comments',
    longDescription: 'Require empty lines around comments',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require or disallow an empty line between class members',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'max-depth',
    value: 'warn',
    shortDescription: 'Enforce a maximum depth that blocks can be nested',
    longDescription: 'Enforce a maximum depth that blocks can be nested',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'max-len',
    value: 'warn',
    shortDescription: 'Enforce a maximum line length',
    longDescription: 'Enforce a maximum line length',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce a maximum number of lines per file',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce a maximum number of line of code in a function',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'max-nested-callbacks',
    value: 'warn',
    shortDescription: 'Enforce a maximum depth that callbacks can be nested',
    longDescription: 'Enforce a maximum depth that callbacks can be nested',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce a maximum number of parameters in function definitions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce a maximum number of statements allowed in function blocks',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'max-statements-per-line',
    value: 'warn',
    shortDescription: 'Enforce a maximum number of statements allowed per line',
    longDescription: 'Enforce a maximum number of statements allowed per line',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce a particular style for multiline comments',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'multiline-ternary',
    value: 'warn',
    shortDescription: 'Enforce newlines between operands of ternary expressions',
    longDescription: 'Enforce newlines between operands of ternary expressions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'new-cap',
    value: 'warn',
    shortDescription: 'Require constructor names to begin with a capital letter',
    longDescription: 'Require constructor names to begin with a capital letter',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require parentheses when invoking a constructor with no arguments',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'newline-per-chained-call',
    value: 'warn',
    shortDescription: 'Require a newline after each call in a method chain',
    longDescription: 'Require a newline after each call in a method chain',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-array-constructor',
    value: 'warn',
    shortDescription: 'Disallow Array constructors',
    longDescription: 'Disallow Array constructors',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-bitwise',
    value: 'warn',
    shortDescription: 'Disallow bitwise operators',
    longDescription: 'Disallow bitwise operators',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-continue',
    value: 'warn',
    shortDescription: 'Disallow continue statements',
    longDescription: 'Disallow continue statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-inline-comments',
    value: 'warn',
    shortDescription: 'Disallow inline comments after code',
    longDescription: 'Disallow inline comments after code',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow if statements as the only statement in else blocks',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-mixed-operators',
    value: 'warn',
    shortDescription: 'Disallow mixed binary operators',
    longDescription: 'Disallow mixed binary operators',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-mixed-spaces-and-tabs',
    value: 'warn',
    shortDescription: 'Disallow mixed spaces and tabs for indentation',
    longDescription: 'Disallow mixed spaces and tabs for indentation',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-multi-assign',
    value: 'warn',
    shortDescription: 'Disallow use of chained assignment expressions',
    longDescription: 'Disallow use of chained assignment expressions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-multiple-empty-lines',
    value: 'warn',
    shortDescription: 'Disallow multiple empty lines',
    longDescription: 'Disallow multiple empty lines',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow negated conditions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-nested-ternary',
    value: 'warn',
    shortDescription: 'Disallow nested ternary expressions',
    longDescription: 'Disallow nested ternary expressions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-new-object',
    value: 'warn',
    shortDescription: 'Disallow Object constructors',
    longDescription: 'Disallow Object constructors',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-plusplus',
    value: 'warn',
    shortDescription: 'Disallow the unary operators ++ and --',
    longDescription: 'Disallow the unary operators ++ and --',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-restricted-syntax',
    value: 'warn',
    shortDescription: 'Disallow specified syntax',
    longDescription: 'Disallow specified syntax',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow all tabs',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-ternary',
    value: 'warn',
    shortDescription: 'Disallow ternary operators',
    longDescription: 'Disallow ternary operators',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-trailing-spaces',
    value: 'warn',
    shortDescription: 'Disallow trailing whitespace at the end of lines',
    longDescription: 'Disallow trailing whitespace at the end of lines',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'no-underscore-dangle',
    value: 'warn',
    shortDescription: 'Disallow dangling underscores in identifiers',
    longDescription: 'Disallow dangling underscores in identifiers',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-unneeded-ternary',
    value: 'warn',
    shortDescription: 'Disallow ternary operators when simpler alternatives exist',
    longDescription: 'Disallow ternary operators when simpler alternatives exist',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow whitespace before properties',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'nonblock-statement-body-position',
    value: 'warn',
    shortDescription: 'Enforce the location of single-line statements',
    longDescription: 'Enforce the location of single-line statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'object-curly-newline',
    value: 'warn',
    shortDescription: 'Enforce consistent line breaks inside braces',
    longDescription: 'Enforce consistent line breaks inside braces',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'object-curly-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing inside braces',
    longDescription: 'Enforce consistent spacing inside braces',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'object-property-newline',
    value: 'warn',
    shortDescription: 'Enforce placing object properties on separate lines',
    longDescription: 'Enforce placing object properties on separate lines',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce variables to be declared either together or separately in functions',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require or disallow newlines around variable declarations',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'operator-assignment',
    value: 'warn',
    shortDescription: 'Require or disallow assignment operator shorthand where possible',
    longDescription: 'Require or disallow assignment operator shorthand where possible',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'operator-linebreak',
    value: 'warn',
    shortDescription: 'Enforce consistent linebreak style for operators',
    longDescription: 'Enforce consistent linebreak style for operators',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'padded-blocks',
    value: 'warn',
    shortDescription: 'Require or disallow padding within blocks',
    longDescription: 'Require or disallow padding within blocks',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require or disallow padding lines between statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'quote-props',
    value: 'warn',
    shortDescription: 'Require quotes around object literal property names',
    longDescription: 'Require quotes around object literal property names',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Enforce the consistent use of either backticks, double, or single quotes',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'require-jsdoc',
    value: 'warn',
    shortDescription: 'Require JSDoc comments',
    longDescription: 'Require JSDoc comments',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'semi',
    value: 'warn',
    shortDescription: 'Require or disallow semicolons instead of ASI',
    longDescription: 'Require or disallow semicolons instead of ASI',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'semi-spacing',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing before and after semicolons',
    longDescription: 'Enforce consistent spacing before and after semicolons',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'semi-style',
    value: 'warn',
    shortDescription: 'Enforce location of semicolons',
    longDescription: 'Enforce location of semicolons',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require object keys to be sorted',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require variables within the same declaration block to be sorted',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'space-before-blocks',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing before blocks',
    longDescription: 'Enforce consistent spacing before blocks',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'space-before-function-paren',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing before function definition opening parenthesis',
    longDescription: 'Enforce consistent spacing before function definition opening parenthesis',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'space-in-parens',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing inside parentheses',
    longDescription: 'Enforce consistent spacing inside parentheses',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'space-infix-ops',
    value: 'warn',
    shortDescription: 'Require spacing around infix operators',
    longDescription: 'Require spacing around infix operators',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'space-unary-ops',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing before or after unary operators',
    longDescription: 'Enforce consistent spacing before or after unary operators',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'spaced-comment',
    value: 'warn',
    shortDescription: 'Enforce consistent spacing after the // or /* in a comment',
    longDescription: 'Enforce consistent spacing after the // or /* in a comment',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'switch-colon-spacing',
    value: 'warn',
    shortDescription: 'Enforce spacing around colons of switch statements',
    longDescription: 'Enforce spacing around colons of switch statements',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require or disallow spacing between template tags and their literals',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
  {
    name: 'unicode-bom',
    value: 'warn',
    shortDescription: 'Require or disallow Unicode byte order mark (BOM)',
    longDescription: 'Require or disallow Unicode byte order mark (BOM)',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
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
    longDescription: 'Require parenthesis around regex literals',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: true,
    isTurnedOn: false,
  },
];
