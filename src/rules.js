export const rules = [
  {
    name: 'for-direction',
    shortDescription: 'Enforce “for” loop update clause moving the counter in the right direction',
    longDescription: 'A for loop with a stop condition that can never be reached, such as one with a counter that moves in the wrong direction, will run infinitely. While there are occasions when an infinite loop is intended, the convention is to construct such loops as while loops. More typically, an infinite for loop is a bug.',
    examples: {
      correct: `for (var i = 0; i < 10; i++) {}`,
      incorrect: `for (var i = 0; i < 10; i--) {
}

for (var i = 10; i >= 0; i++) {
}`,
    },
    isActive: true,
    isChecked: false,
  },
  {
    name: 'no-async-promise-executor',
    shortDescription: 'Disallow using an async function as a Promise executor',
    longDescription: 'This rule aims to disallow async Promise executor functions.',
    examples: {
      correct: `const result = new Promise((resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const result = Promise.resolve(foo);`,
      incorrect: `const result = new Promise(async (resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const result = new Promise(async (resolve, reject) => {
  resolve(await foo);
});`,
    },
    isActive: false,
    isChecked: false,
  },
  {
    name: 'no-await-in-loop',
    shortDescription: 'Disallow await inside of loops',
    longDescription: 'This rule disallows the use of await within loop bodies.',
    examples: {
      correct: `async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Good: all asynchronous operations are immediately started.
    results.push(bar(thing));
  }
  // Now that all the asynchronous operations are running, here we wait until they all complete.
  return baz(await Promise.all(results));
}`,
      incorrect: `async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await bar(thing));
  }
  return baz(results);
}`,
    },
    isActive: false,
    isChecked: false,
  },
  {
    name: 'no-compare-neg-zero',
    shortDescription: 'Disallow comparing against -0',
    longDescription: 'The rule should warn against code that tries to compare against -0, since that will not work as intended. That is, code like x === -0 will pass for both +0 and -0. The author probably intended Object.is(x, -0).',
    examples: {
      correct: `if (x === 0) {
    // doSomething()...
}

if (Object.is(x, -0)) {
    // doSomething()...
}`,
      incorrect: `if (x === -0) {
    // doSomething()...
}`,
    },
    isActive: false,
    isChecked: false,
  },
  {
    name: 'no-control-regex',
    shortDescription: 'Disallow control characters in regular expressions',
    longDescription: 'This rule disallows control characters in regular expressions.',
    examples: {
      correct: `var pattern1 = /\x20/;
var pattern2 = new RegExp("\x20");`,
      incorrect: `var pattern1 = /\x1f/;
var pattern2 = new RegExp("\x1f");`,
    },
    isActive: false,
    isChecked: false,
  },
  {
    name: 'no-debugger',
    shortDescription: 'Disallow the use of debugger',
    longDescription: 'This rule disallows debugger statements.',
    examples: {
      correct: `function isTruthy(x) {
    return Boolean(x); // set a breakpoint at this line
}`,
      incorrect: `function isTruthy(x) {
    debugger;
    return Boolean(x);
}`,
    },
    isActive: false,
    isChecked: false,
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
  //   isChecked: false,
  // },
];