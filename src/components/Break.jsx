const Break = () => {
    return (
        <div>
            <label 
            id="break-label" >
                Break Length
            </label>
            <div>
                <button 
                id="break-decrement" ></button>
                <p
                id="break-length" >
                    {}
                </p>
                <button
                id="break-increment" ></button>
            </div>
        </div>
    );
};

export default Break;