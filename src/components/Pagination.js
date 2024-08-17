import React from 'react';
import "../styles/pagination.css"

function Pagination({ currentPage, totalPages, handlePageChange }) {

    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const renderPageButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <div
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`page-number ${i === currentPage ? 'active' : ''}`}
                >
                    {i}
                </div>
            );
        }
        return buttons;
    };

    return (
        <div className="pagination">
            <div className='next-buttons'>
            <button className="previous" onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
            <div className="total-pages">{`Page ${currentPage} of ${totalPages}`}</div>
            <button className="next" onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
            </div>

            {/* Render page buttons below the main pagination controls */}
            <div className="page-buttons pages page-numbers">
                {renderPageButtons()}
            </div>
        </div>
    );
}

export default Pagination;
