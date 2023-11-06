import React from "react";

interface PaginationProps {
	totalPage: number;
	onPageChange: (page: number) => void;
	currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
	totalPage,
	onPageChange,
	currentPage,
}) => {
	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPage) {
			onPageChange(page);
		}
	};

	const renderPageNumbers = () => {
		const pages = [];

		if (totalPage <= 5) {
			for (let i = 1; i <= totalPage; i++) {
				pages.push(i);
			}
		} else {
			if (currentPage <= 3) {
				pages.push(1, 2, 3, 4, "...", totalPage);
			} else if (currentPage > totalPage - 3) {
				pages.push(
					1,
					"...",
					totalPage - 3,
					totalPage - 2,
					totalPage - 1,
					totalPage
				);
			} else {
				pages.push(
					1,
					"...",
					currentPage - 1,
					currentPage,
					currentPage + 1,
					"...",
					totalPage
				);
			}
		}

		return pages.map((page, index) => {
			if (typeof page === "number") {
				return (
					<button
						key={index}
						className={`w-8 h-8 text-white outline  outline-2 flex justify-center items-center m-2  ${
							page === currentPage ? "outline outline-pink text-white" : ""
						}`}
						onClick={() => handlePageChange(page)}
					>
						{page}
					</button>
				);
			} else {
				return (
					<span
						key={index}
						className="w-10 h-10 flex justify-center items-center m-2"
					>
						{page}
					</span>
				);
			}
		});
	};

	return (
		<div className="text-white flex justify-center items-center mt-4">
			<button
				className="w-8 h-8 outline outline-white outline-2 flex justify-center items-center m-2 "
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				«
			</button>

			{renderPageNumbers()}

			<button
				className="w-8 h-8 outline outline-white outline-2 flex justify-center items-center m-2"
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPage}
			>
				»
			</button>
		</div>
	);
};

export default Pagination;
