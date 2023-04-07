import React from 'react';
import _ from 'lodash'; // optimized version of the underscore library
// import PropTypes from "prop-types";


const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    // Array of page numbers and page size
    // props has itemCount and pageSize properties and are part of the interface

    // console.log(currentPage)

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount == 1) return null

    // Now creating anarray ranging from [1 ... pageCount] to map


    const pages = _.range(1, pagesCount + 1)
    // console.log(pages)
    return (
        <nav className='flex justify-center  mx-3 px-7'>
            <ul className="inline-flex items-center -space-x-px">
                {pages.map(page => (
                    <li key={page}>
                        <a
                            className="px-5 py-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
                            // not using props.onPageChange cuz already destructured above
                            onClick={() => onPageChange(page)}>
                            {page}
                        </a>
                    </li>
                ))}

            </ul>

        </nav>
    );
}


// TO check types of properties and whether required or optional
// Pagination.propTypes = {
//     itemsCount: PropTypes.number.isRequired,
//     pageSize: PropTypes.number.isRequired,
//     onPageChange: PropTypes.func.isRequired,
//     currentPage: PropTypes.number.isRequired
// }

export default Pagination;