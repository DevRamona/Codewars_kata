// Here are some classic Christmas cracker jokes.

// There is a made up API URL (http://great.jokes/christmas) that you can call to a get list of Christmas jokes in JSON format.

// Your challenge
// Write an async function which takes an apiUrl and jokeId which returns a promise.
// The data will need to be filtered to get the specified joke by id.
// When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.
// Handle error cases

// If a joke can't be found throw an error message in this format new Error('No jokes found id: {jokeId}').
// Getting jokes from a another API URL may return a different data shape, throw this error message new Error('No jokes at url: {url}') for an unexpected shape.
// Throw error in a promise style

// Info
// Get the data using the mocked fetch(url) function, which implements the basics of the fetch api. Learn about fetch. Learn about async/await.

// Joke data shape:

// {
//   jokes: [{ 
//     id: 101,
//     setup: "Who is Santa's favorite singer?",
//     punchLine: "Elf-is Presley!"
//   },
// ...moreJokes]
// // Use for your tests ^^



const apiUrl = `http://great.jokes/christmas`

const sayJoke = async(apiUrl, jokeId) => {
  try {
    const data = await fetch(apiUrl)
  const response = await data.json();
    if(!response.jokes) {
    throw new Error(`No jokes at url: ${apiUrl}`)
    }
  const specifiedJoke = response.jokes.find(joke => joke.id === jokeId)
  if(!specifiedJoke) {
   throw new Error(`No jokes found id: ${jokeId}`)
    
  }
    return {
      saySetup : () => specifiedJoke.setup,
      sayPunchLine : () => specifiedJoke.punchLine
    }
  
    
  }catch(error) {
    throw new Error(error.message)
}
  
}