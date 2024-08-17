import React, {useState} from 'react';
import "../styles/pagination.css"

function Pagination({ currentPage, totalPages, handlePageChange }) {

    const [showAll, setShowAll] = useState(false);

    const scrollToTop = () => {
        document.documentElement.scrollTop = 0;
    }

    const showAllPages = () => {
        setShowAll(!showAll);
    }

    const handlePrevious = () => {
        scrollToTop();
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        scrollToTop();
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

    const renderPageButtonsTen = () => {
        const buttons = [];
        const maxPagesToShow = 3;
        let startPage = Math.max(currentPage - maxPagesToShow, 1);
        let endPage = Math.min(currentPage + maxPagesToShow, totalPages);

        // Adjust the start and end pages if we don't have enough pages on one side
        if (currentPage - maxPagesToShow < 1) {
            endPage = Math.min(endPage + (maxPagesToShow - (currentPage - 1)), totalPages);
        }
        if (currentPage + maxPagesToShow > totalPages) {
            startPage = Math.max(startPage - (maxPagesToShow - (totalPages - currentPage)), 1);
        }

        for (let i = startPage; i <= endPage; i++) {
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

                {totalPages > 10 ? <>
                    <div className={`d-flex flex-col ${showAll ? "d-none" : ""}`}>
                        <div className={`page-buttons pages page-numbers`}>
                            {currentPage !== 1 && currentPage >= 5 ? <>
                                <div key={1} onClick={() => handlePageChange(1)} className={`page-number`}>{1}</div>
                                <div className={`page-number`} onClick={() => showAllPages()}>...</div>
                            </> : null}

                                    {renderPageButtonsTen()}

                            {currentPage !== totalPages && currentPage < totalPages - 3 ? <>
                                <div className={`page-number`} onClick={() => showAllPages()}>...</div>
                                <div key={totalPages} onClick={() => handlePageChange(totalPages)} className={`page-number`}>{totalPages}</div>
                            </> : null}

                        </div>
                    </div>
                        <div className={`page-number ${showAll ? "d-none" : ""}`} onClick={showAllPages} style={{width: "auto", marginTop: "-10px", marginBottom: "-10px"}}>
                            Expand
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                        <div className={`page-number ${showAll ? "" : "d-none"}`} onClick={showAllPages} style={{width: "auto", marginTop: "-10px", marginBottom: "-10px"}}>
                            Hide
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
                            </div>
                </> : null}

                {totalPages >= 10 ? <>
                    <div className={`d-flex flex-col ${showAll ? "" : "d-none"}`}>
                            <div className={`page-buttons pages page-numbers d-flex`}>
                                {renderPageButtons()}
                            </div>
                    </div>
                </>: null}

                {totalPages < 10 ? <>
                    <div className={`d-flex flex-col`}>
                        <div className={`page-buttons pages page-numbers d-flex`}>
                            {renderPageButtons()}
                        </div>
                    </div>
                </>: null}
        </div>
    );
}

export default Pagination;
