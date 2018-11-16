export const rules = [
  {
    name: 'for-direction',
    shortDescription: 'Enforce “for” loop update clause moving the counter in the right direction',
    longDescription: 'A for loop with a stop condition that can never be reached, such as one with a counter that moves in the wrong direction, will run infinitely. While there are occasions when an infinite loop is intended, the convention is to construct such loops as while loops. More typically, an infinite for loop is a bug.',
    examples: {
      correct: `// 1
for (var i = 0; i < 10; i++) {}`,
      incorrect: `// 1
for (var i = 0; i < 10; i--) {}

// 2
for (var i = 10; i >= 0; i++) {}`,
    },
    isActive: true,
    isRecommended: true,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-async-promise-executor',
    shortDescription: 'Disallow using an async function as a Promise executor',
    longDescription: 'This rule aims to disallow async Promise executor functions.',
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
    shortDescription: 'Disallow await inside of loops',
    longDescription: 'This rule disallows the use of await within loop bodies.',
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
    shortDescription: 'Disallow comparing against -0',
    longDescription: 'The rule should warn against code that tries to compare against -0, since that will not work as intended. That is, code like x === -0 will pass for both +0 and -0. The author probably intended Object.is(x, -0).',
    examples: {
      correct: `// 1
if (x === 0) {}

// 2
if (Object.is(x, -0)) {}`,
      incorrect: `// 1
if (x === -0) {}`,
    },
    isActive: false,
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-control-regex',
    shortDescription: 'Disallow control characters in regular expressions',
    longDescription: 'This rule disallows control characters in regular expressions.',
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
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  {
    name: 'no-debugger',
    shortDescription: 'Disallow the use of debugger',
    longDescription: 'This rule disallows debugger statements.',
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
    isRecommended: false,
    isFixable: false,
    isTurnedOn: false,
  },
  // {
  //   name: '',
  //   shortDescription: '',
  //   longDescription: '',
  //   examples: {
  //     correct: ``,
  //     incorrect: ``,
  //   },
  //   isActive: false,
  //   isRecommended: false,
  //   isFixable: false,
  //   isTurnedOn: false,
  // },
];