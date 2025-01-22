const Session = () => {
    return (
        <div>
            <label id="session-label" >
                Session Length
            </label>
            <div>
                <button 
                id="session-decrement" ></button>
                <p 
                id="session-length" >
                    {}
                </p>
                <button
                id="session-increment" ></button>
            </div>
        </div>
    );
};

export default Session;