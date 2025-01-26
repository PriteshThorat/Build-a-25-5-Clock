import { useState } from "react";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { sessionIncrement, sessionDecrement } from '../store/clockSlice';
import { useDispatch, useSelector } from "react-redux";

const Session = () => {
    const sessionLength = useSelector(state => state.clock.sessionLength);

    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
            <label 
            className="text-lg font-semibold text-gray-700 mb-2"
            id="session-label" >
                Session Length
            </label>
            <div className="flex items-center space-x-4">
                <button 
                onClick={() => dispatch(sessionDecrement())}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                id="session-decrement" >
                    <FaMinus />
                </button>
                <p 
                className="text-2xl font-bold text-gray-800"
                id="session-length" >
                    {sessionLength}
                </p>
                <button
                onClick={() => dispatch(sessionIncrement())}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                id="session-increment" >
                    <FaPlus />
                </button>
            </div>
        </div>
    );
};

export default Session;