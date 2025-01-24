import { useNavigate } from 'react-router-dom';
import videoSource from '../../assets/film.mp4';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      <video
        className="absolute w-full h-full object-cover"
        src={videoSource}
        autoPlay
        loop
        muted
      ></video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl text-white font-bold">
          Welcome to Essentia Perfume Shop
        </h1>
        <p className="text-lg md:text-xl text-white mt-4">
          Explore our exclusive collection of fragrances
        </p>
        <button
          onClick={() => navigate('/products')}
          className="mt-8 px-6 py-3 bg-white text-black text-lg font-bold rounded-lg hover:bg-gray-200"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;