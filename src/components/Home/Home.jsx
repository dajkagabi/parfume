import { useNavigate } from 'react-router-dom';
import videoSource from '../../assets/film.mp4';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      {/* Videó beállítása */}
      <video
        className="absolute w-full h-full object-cover"
        src={videoSource}
        autoPlay
        loop
        muted
      ></video>

      {/* Tartalom */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold">
          Welcome to Essentia Perfume Shop
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white mt-4">
          Explore our exclusive collection of fragrances
        </p>
        <button
          onClick={() => navigate('/products')}
          className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black text-base sm:text-lg font-bold rounded-lg hover:bg-gray-200 transition"
        >
          Shop Now
        </button>
      </div>

      {/* Háttér árnyékolása olvashatóság miatt */}
      <div className="absolute top-0 left-0 w-full h-full "></div>
    </div>
  );
};

export default Home;
