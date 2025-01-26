import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timer as clock, toggleSession } from "../store/clockSlice";

const Timer = () => {
    const play = useSelector(state => state.clock.play)
    const timer = useSelector(state => state.clock.timer);
    const sessionLength = useSelector(state => state.clock.sessionLength);
    const breakLength = useSelector(state => state.clock.breakLength);
    const isSessionStore = useSelector(state => state.clock.isSession);

    const [timeLeft, setTimeLeft] = useState(timer);
    // const [isSession, setIsSession] = useState(isSessionStore);

    const dispatch = useDispatch();

    const secToMin = (seccond) => {
        const min = Math.floor(seccond / 60);
        const sec = seccond % 60;
        
        return (`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    };

    useEffect(() => {
        let interval;
        
        if(!play){
            setTimeLeft(timer);
        } else{
            setTimeLeft(timer);
            
            interval = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime === 0) {
                        // const nextSession = !isSession;

                        // setIsSession(nextSession);

                        dispatch(toggleSession());
                        
                        const nextTime = isSessionStore ? breakLength * 60 : sessionLength * 60;

                        dispatch(clock(nextTime)); 

                        return nextTime;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [play, sessionLength, breakLength, dispatch, timer, isSessionStore]);

    useEffect(() => {
        setTimeLeft(timer); 
    }, [timer]);

    useEffect(() => {
        dispatch(clock(sessionLength * 60));
    }, [sessionLength]);

    useEffect(() => {
        dispatch(clock(timeLeft));
    }, [timeLeft, dispatch]);

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
            <label 
            className="text-lg font-semibold text-gray-700 mb-2"
            id="timer-label">
                {
                    isSessionStore ? "Session" : "Break"
                }
            </label>
            <p 
            className="text-4xl font-bold text-gray-800 mb-4"
            id="time-left">
                {secToMin(timeLeft)}
            </p>
        </div>
    );
};

export default Timer;