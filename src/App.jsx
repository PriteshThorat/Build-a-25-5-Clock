import { Break, Timer, Session } from './components/index';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { playPause as TogglePlayPause, reset } from './store/clockSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const audioRef = useRef(null);

  const timer = useSelector(state => state.clock.timer);

  useEffect(() => {
    if(timer === 0){
      audioRef.current.play();
    }
  }, [timer]);

  const playPause = () => {
    dispatch(TogglePlayPause());
  };

  const resetHandler = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    dispatch(reset());
  }

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-200 p-4 space-y-8'>
      <h1 className='text-3xl font-bold text-gray-800 mb-8'>
        25 + 5 Clock
      </h1>
      <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-8'>
        <Break />
        <Session />
      </div>
      <div>
        <Timer />
      </div>
      <div className="flex space-x-4">
        <button
        onClick={playPause}
        className="px-4 py-2 flex bg-blue-500 text-white rounded hover:bg-blue-600"
        id="start_stop">
          <FaPlay className="mr-2" />
          <FaPause className="mr-2" />
        </button>
        <button 
        onClick={resetHandler}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        id="reset">
          <FaRedo className="mr-2" />
        </button>
        <audio 
        src="beep.mp3"
        ref={audioRef}
        id="beep"></audio>
      </div>
      <div className="mt-8">
        <a 
          href="https://github.com/PriteshThorat/Build-a-25-5-Clock" 
          className="text-blue-500 hover:underline"
          target="_blank" 
          rel="noopener noreferrer">
          View Source Code
        </a>
      </div>
    </div>
  )
}

export default App
