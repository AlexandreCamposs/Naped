import React from 'react';

const Pagination = ({ dataPerPage, totalData, paginate }) => {
	const pageNumber = [];
	// console.log(pageNumber);

	for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
		pageNumber.push(i);
	}
	// console.log(pageNumber);
	// console.log(dataPerPage);
	// console.log(totalData);
	// console.log(paginate);
	return (
		<nav>
			<ul className="flex justify-center">
				{pageNumber.map((number) => (
					<li
						key={number}
						className="hover:bg-gray-700mb-4 cursor-pointer  rounded px-4 py-2"
						onClick={(e) => {
							paginate(number);
							e.preventDefault();
						}}
					>
						{number}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
