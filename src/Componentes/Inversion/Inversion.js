const Inversion = ({firstName, lastName, hairColor, age}) => {

    
        return (
            <div className="card">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>

            </div>
        )
    }


export default Inversion;