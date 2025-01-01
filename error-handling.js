// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try{ let res = sum(null);
console.log(res);
} catch (error) {
  if (error instanceof TypeError) {
    console.error(`Wrong Type: ${error.message}`);
  } else {
    console.error(error.message);
  }
}


// 2.
// tests

// Your code here
sayName = (name) => {
  if (typeof name !== String) {
    throw new Error(`Invalid name! Must be a string!`)
  } else {
    console.log(name);
  }
}

try {
  sayName("Alex");
sayName(1);
} catch (error) {
  console.error(error.message)

}
// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet()
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Hello, World!")
}