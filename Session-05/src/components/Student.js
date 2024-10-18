

export function Student (props) {
    
    return (
        <div>

            {/* accessing values from props object using dot notation which is sent from parent component */}

            <h1>Name : {props.name}</h1>        
            <h1>Age : {props.age}</h1>        
            <h1>Add : {props.address}</h1>
            <h1>Add : {props.mob}</h1>
            <hr />       
        </div>
    )
}