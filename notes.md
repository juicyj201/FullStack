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
    There are other useful functions such as filter, map, concat and forEach.
    To iterate over a list in js you will need to provide a key for the il tag.

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

# Object methods and this
    'this' keyword can be used to reference an object of itself (just like in c# or java, except it refers to objects rather than classes). When using 'this' make sure to not use references to attributes or methods, since it loses the memory of that objects properties and information and sets it to a default global object. You can also use bind, which creates a new function where this is bound to point to the object, independent of whee and how the method is being called.

# Component state and event handlers

## Destructuring
    this makes assignment of variables easier:
    
    eg) const { name, age } = props
    
    where props = {
        name: 'Arto Hellas',
        age: 35
    }

    This can be done even simpler, by passing destructured attributes as arguments to a method

    eg) const Hello = ({ name, age }) => {
    
    instead of:
        const Hello = (props) => {
            const { name, age } = props

# Page re-rendering
    you can set the main page's render method to a function/const func in order to call it to render the page again

# Stateful Component
    You can import the useState function from the react libary, in order to change the state of the app (basically re-render a component when needed). It renders the page again when there are changes to a variable that is called by a function or event handler

    eg) import { useState } from 'react'

        const App = () => {
        const [ counter, setCounter ] = useState(0)

# Event handling
    Events can be triggered when certain user input or certain events occur. The most common example is the onClick event handler, wich calls a method or a lambda function

# Complex state
    It is forbidden in React to mutate state directly, since it can result in unexpected side effects

# String interpolation
    You can use the `` sign to interpolate strings:
    eg) `${newName} is already added to phonebook`
    which returns)
        `Arto Hellas is already added to phonebook`

    You can also use string concatenation with a plus operator, but it would be better to use string interpolation

Server
# Promises
    This is an object representing the eventual completion or failure of an asynchronous operation
    It can have 3 distinct states:
        Pending (the final value is not available yet)
        Fulfilled (operation has completed and the final value is available)
        Rejected (an error prevented the final value from being determined - a failed operation)

    to achieve the result of the operation represented by the promise we have to add an event handler, using then. For error handling we can also use, catch

# Effect Hooks
    The Effect Hook lets you perform side effects on function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. It is useful when fetching or updating data used in servers when external changes need to be made outside of the UI.

# Better way for object init
    Instead of using the older way of object initialization:
    
    (where)
    const name = 'Leevi'
    const age = 0

    eg) const person = {
        name: name, 
        age: age
    }

    We can use a simplified expression:

    eg) const person = {name, age}

