import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { breakIncrement, breakDecrement } from '../store/clockSlice';

const Break = () => {
    const dispatch = useDispatch();

    const breakLength = useSelector(state => state.clock.breakLength);

    return (
        <div className='flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md'>
            <label 
            className='text-lg font-semibold text-gray-700 mb-2'
            id="break-label" >
                Break Length
            </label>
            <div className='flex items-center space-x-4'>
                <button 
                onClick={() => dispatch(breakDecrement())}
                className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                id="break-decrement" >
                    <FaMinus />
                </button>
                <p
                className='text-2xl font-bold text-gray-800'
                id="break-length" >
                    {breakLength}
                </p>
                <button
                onClick={() => dispatch(breakIncrement())}
                className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
                id="break-increment" >
                    <FaPlus />
                </button>
            </div>
        </div>
    );
};

export default Break;