
import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function PaginationComponent(props) {


    function handlePageClick(pageNumber) {
        props.setPageNumber(pageNumber);
    }

    function createPagesNumbers() {
        let pagesNumbers = [];

        let i = 1;
        while (i <= props.pagesTotal) {
            const pageNumber = i;

            pagesNumbers.push(
                <PaginationItem key={i - 1} active={pageNumber === props.page ? true : false} onClick={() => handlePageClick(pageNumber)}>
                    <PaginationLink>
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );

            i++;
        }
        return pagesNumbers;
    }

    const pagesLinks = createPagesNumbers();

    function setDisabledStatus(controlsPlace) {
        if (controlsPlace === "start") {
            return props.page === 1 ? true : false;
        } else if (controlsPlace === "end") {
            return props.page === props.pagesTotal ? true : false;
        }
    }

    const isDisabledStart = setDisabledStatus("start");
    const isDisabledEnd = setDisabledStatus("end");

    function goToLastPage(pagesTotalNum) {
        props.setPageNumber(pagesTotalNum);
    }

    function goToFirstPage() {
        props.setPageNumber(1);
    }

    function goToNextPage(pageNum, pagesTotalNum) {
        if (pageNum !== pagesTotalNum) {
            props.setPageNumber(pageNum + 1);
        }
    }

    function goToPreviousPage(pageNum) {
        if (pageNum !== 1) {
            props.setPageNumber(pageNum - 1);
        }
    }

    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem disabled={isDisabledStart} onClick={goToFirstPage}>
                <PaginationLink first />
            </PaginationItem>
            <PaginationItem disabled={isDisabledStart} onClick={() => goToPreviousPage(props.page)}>
                <PaginationLink previous />
            </PaginationItem>
            {pagesLinks}
            <PaginationItem disabled={isDisabledEnd} onClick={() => goToNextPage(props.page, props.pagesTotal)}>
                <PaginationLink next />
            </PaginationItem>
            <PaginationItem disabled={isDisabledEnd} onClick={() => goToLastPage(props.pagesTotal)}>
                <PaginationLink last />
            </PaginationItem>
        </Pagination>
    );
}