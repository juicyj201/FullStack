React

# Components
    functions or elements that can be reused within components are placed in other functions to be displayed to the user. Component names must be in pascalcase. The content of a component usually needs one root element, such as a div

# Fragments
    Wrapping elements returned by the component with an empty element, can avoid using other root elements such as div's for components

# logging
    use console.log('example log') to display information and test certain functions or properties

# props
    You can pass data to components using props which are basically objects with attributes, and either hardcode the values or use js expressions. You must use curly braces to set these values and the type nor the value is explcitly set (it can be considered an implicitly typed variable). Remember that the variables set in App is passed as attributes of a variable itself. For example if App has variables name = 'Johnny' and age = 12, then to access it you would use an object parameter and then use the attributes from there, <h1>Name: {props.name}</h1>

