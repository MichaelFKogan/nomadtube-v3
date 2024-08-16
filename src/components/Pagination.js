import "../styles/pagination.css"

function Pagination({handlePageChange, currentPage, pageNumbers, totalPages}) {

    return (
        <div className="pagination">
            <div className='d-flex align-center justify-center col-gap-10'>
                <button className="previous" onClick={() => { handlePageChange(currentPage - 1); document.documentElement.scrollTop = 0; }}
                    disabled={currentPage === 1}>Previous</button>

                {/* <div className='pages'>{`Page ${currentPage} of ${totalPages}`}</div> */}

                <button className="next" onClick={() => { handlePageChange(currentPage + 1); document.documentElement.scrollTop = 0; }}
                    disabled={currentPage === totalPages}>Next</button>
            </div>

                <div className='pages page-numbers'>
                    {pageNumbers.map(pageNumber => (
                        <div key={pageNumber}
                            onClick={() => { if (currentPage !== pageNumber) { handlePageChange(pageNumber); document.documentElement.scrollTop = 0; } }}
                            className={`page-number ${currentPage === pageNumber ? 'disabled' : ''}`}>
                            {pageNumber}
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Pagination;