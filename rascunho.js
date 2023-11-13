data.map((data, i) => (
  <div
    className="m-4 flex w-full    flex-col justify-between rounded   border p-4 sm:w-1/3 lg:w-1/4"
    key={i}
  >
    <div>
      <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} alt="" />
      <h2 className="my-4 text-center text-2xl md:text-3xl ">
        {data.original_title}
      </h2>

      <p className=" mb-4 line-clamp-4 text-ellipsis">{data.overview}</p>
    </div>
    <Link className="	mx-auto w-max rounded bg-white px-8 py-2 font-bold text-dark10">
      Ver mais
    </Link>
  </div>
));
