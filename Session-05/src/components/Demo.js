

// Three ways to write functional component in react - 


// using function declaration -

export function Header () {
    
    return (
        <div>
            <h1>Hello Sandhya ! Function Declaration</h1>
        </div>
    )
}


// using function declaration -

export const Header1 = function(){

    return (
        <div>
            <h1>Hello Sandhya ! Anonymos Function</h1>
        </div>
    )
}

// Arrow Function - 

export const Header2 = () => {

    return (
        <div>
            <h1>Hello Sandhya ! Arrow Function</h1>
        </div>
    )
}

// export default Header




