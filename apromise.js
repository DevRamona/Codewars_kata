// Create a resolved javascript Promise that will return 'Hello World!'.

async function promiseHelloWorld() {
    return 'Hello World!';
  }

  function promiseHelloWorld() {
    return new Promise((resolve, reject) => {
        return resolve("Hello World!")
    })
  }