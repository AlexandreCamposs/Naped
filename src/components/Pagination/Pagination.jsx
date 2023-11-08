import React from 'react';

const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumber = [];
  console.log(pageNumber);

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }
  console.log(pageNumber);
  console.log(dataPerPage);
  console.log(totalData);
  console.log(paginate);
  return (
    <navv>
      <ul className="flex ">
        {pageNumber.map((number) => (
          <li
            key={number}
            className="cursor-pointer py-2 px-4 mb-4   hover:bg-gray-700 rounded "
            onClick={(e) => {
              paginate(number);
              e.preventDefault();
            }}
          >
            {number}
          </li>
        ))}
      </ul>
    </navv>
  );
};

export default Pagination;
