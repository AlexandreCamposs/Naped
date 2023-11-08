data.map((data, i) => (
  <div
    className="flex flex-col justify-between    w-full sm:w-1/3 lg:w-1/4   m-4 border rounded p-4"
    key={i}
  >
    <div>
      <img src={'https://image.tmdb.org/t/p/w500/' + data.poster_path} alt="" />
      <h2 className="text-center my-4 text-2xl md:text-3xl ">
        {data.original_title}
      </h2>

      <p className=" line-clamp-4 text-ellipsis mb-4">{data.overview}</p>
    </div>
    <Link className="	w-max mx-auto bg-white text-dark10 px-8 py-2 rounded font-bold">
      Ver mais
    </Link>
  </div>
));
