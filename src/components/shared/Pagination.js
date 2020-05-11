
import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import '../../styles/css/pagination.css';

export default function PaginationComponent(props) {

    //create pages buttons
    function handlePageButtonClick(pageNumber) {
        props.setPageNumber(pageNumber);
    }

    function setActive(pageNum) {
        return pageNum === props.page ? true : false;
    }



    function setBootstrapClassesPageButton(active) {
        return active ? "text-dark ".concat("bg-info border border-dark") : "text-dark";
    }


    function createPagesNumbers() {
        let pagesNumbers = [];

        let i = 1;
        while (i <= props.pagesTotal) {
            const pageNumber = i;
            const isActivePage = setActive(pageNumber);
            const pageButtonClasses = setBootstrapClassesPageButton(isActivePage);

            pagesNumbers.push(
                <PaginationItem key={i - 1} active={isActivePage} onClick={() => handlePageButtonClick(pageNumber)}>
                    <PaginationLink className={pageButtonClasses}>
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );

            i++;
        }
        return pagesNumbers;
    }

    const pagesButtons = createPagesNumbers();

    //create controls
    function setDisabled(controlsPlace) {
        if (controlsPlace === "start") {
            return props.page === 1
                ? true
                : false;
        } else if (controlsPlace === "end") {
            return props.page === props.pagesTotal
                ? true
                : false;
        }
    }

    const isDisabledStartControls = setDisabled("start");
    const isDisabledEndControls = setDisabled("end");

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

    function findControlsColor(disabled) {
        if (disabled) {
            return "text-secondary"
        } else {
            return "text-dark"
        }
    }

    const startControlsColor = findControlsColor(isDisabledStartControls);
    const endControlsColor = findControlsColor(isDisabledEndControls);

    return (
        <Pagination aria-label="Page pagination. CodePen Projects.">
            <PaginationItem disabled={isDisabledStartControls} onClick={goToFirstPage}>
                <PaginationLink first className={startControlsColor} />
            </PaginationItem>
            <PaginationItem disabled={isDisabledStartControls} onClick={() => goToPreviousPage(props.page)}>
                <PaginationLink previous className={startControlsColor} />
            </PaginationItem>
            {pagesButtons}
            <PaginationItem disabled={isDisabledEndControls} onClick={() => goToNextPage(props.page, props.pagesTotal)}>
                <PaginationLink next className={endControlsColor} />
            </PaginationItem>
            <PaginationItem disabled={isDisabledEndControls} onClick={() => goToLastPage(props.pagesTotal)}>
                <PaginationLink last className={endControlsColor} />
            </PaginationItem>
        </Pagination>
    );
}