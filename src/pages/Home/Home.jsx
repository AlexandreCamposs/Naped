import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <div className="relative text-center">
        <AiOutlineSearch className="absolute top-1/2 ml-8 inline-block bg-transparent text-2xl"/>
        <input
          type="text"
          placeholder="Pesquise aqui..."
          className="mx-4 mt-4 w-4/5 rounded bg-dark20 py-4 pl-12 focus:text-white focus:outline-none sm:w-1/2
          "/>
      </div>
    </div>
  );
};

export default Home;
