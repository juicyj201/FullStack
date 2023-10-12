React

# Components
    functions or elements that can be reused within components are placed in other functions to be displayed to the user. Component names must be in pascalcase. The content of a component usually needs one root element, such as a div

# Fragments
    Wrapping elements returned by the component with an empty element, can avoid using other root elements such as div's for components

# logging
    use console.log('example log') to display information and test certain functions or properties

# props
    You can pass data to components using props which are basically objects with attributes, and either hardcode the values or use js expressions. You must use curly braces to set these values and the type nor the value is explcitly set (it can be considered an implicitly typed variable). Remember that the variables set in App is passed as attributes of itself. For example if App has variables name = 'Johnny' and age = 12, then to access it you would use an object parameter and then initialize new attributes from there, <h1>Name: {props.name}</h1>
    
    where <Name props={name}>

# Variables
    const - creates an immutable variable
    var - creates a global mutable variable
    let - creates a local mutable variable (and is often preferred over var)

# Arrays
    You can loop through an array using a foreach operator [ => ]. It can also recieve other arguments

## Array methods
    concat - creates a new array with added items and returns it

    eg) const t = [1, -1, 3]
        const t2 = t.concat(5) 

    map - creates a new array with parameters that transform the data in some form

    eg) const t = [1, 2, 3]
        const m1 = t.map(value => value * 2)

    destructuring assignment - individual items of an array are assigned to variables

    eg) const t = [1, 2, 3, 4, 5]
        const [first, second, ...rest] = t
        console.log(first, second)  // 1, 2 is printed  
        console.log(rest)          // [3, 4, 5] is printed of the 'array' rest

# Objects
    Define object using object literals, by listing its properties within curly braces. The values of properties can be of any type

    eg) const object1 = {
            name: 'Arto Hellas',
            age: 35,
            education: 'PhD',
        }   

    We can use dot notation to set properties or brackets to create a new property
    
    eg) object1.address = 'Helsinki'
        object1['secret number'] = 12341

# Functions
    We can create an arrow function using the arrow expression syntax

    eg1) const sum = (p1, p2) => {
            console.log(p1)
            console.log(p2)
            return p1 + p2
        }
    
    eg3) const square = p => {
            console.log(p)
            return p * p
        }

    eg4) const square = p => p * p

    We can create a function using the function keyword or by using a function expression (here we just use the variable that is set to a function)


