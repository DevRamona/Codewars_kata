// Template Literal Tidbits: Your company website needs a dynamic welcome message. 
// Write a function greetUser(name) that uses template literals to create a personalized
//  greeting message like "Welcome back, ${name}!".


function greetUser(name) {
    
    return `Welcome back, ${name} `
}


// Symbolic Secrets: You're building a secure configuration system. 
// Create a function secureConfig(config) that takes an object config and uses a
//  Symbol as a key to store a private property named apiKey. Return the modified config object.

const symbolKey = Symbol['apiKey'];
const secureConfig = config  => {
     config[symbolKey] = "An actual key" 
     return config

}
     