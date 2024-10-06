import React from "react";
import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  // Handler for pagination link click
  const handlePageClick = (page: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    onPageChange(page);
  };

  const renderPaginationLinks = () => {
    const links = [];

    // First page and ellipsis if current page is beyond the first 3 pages
    if (currentPage > 3) {
      links.push(
        <PaginationItem key={1}>
          <PaginationLink href="#" isActive={currentPage === 1} onClick={handlePageClick(1)}>
            1
          </PaginationLink>
        </PaginationItem>,
      );
      links.push(
        <PaginationItem key="ellipsis-prev">
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    // Page numbers within the range of -1/+1 of the current page or the first 3 pages
    for (let page = 1; page <= totalPages; page++) {
      if (
        page === currentPage ||
        (page >= currentPage - 1 && page <= currentPage + 1) ||
        (currentPage <= 3 && page <= 3) ||
        (currentPage >= totalPages - 2 && page >= totalPages - 2)
      ) {
        links.push(
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              className={cn(
                "hover:bg-primary/90 hover:text-primary-foreground",
                currentPage === page && "border-0 bg-primary text-primary-foreground",
              )}
              isActive={currentPage === page}
              onClick={handlePageClick(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>,
        );
      }
    }

    // Last page and ellipsis if current page is far from the last few pages
    if (currentPage < totalPages - 2) {
      links.push(
        <PaginationItem key="ellipsis-next">
          <PaginationEllipsis />
        </PaginationItem>,
      );
      links.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            isActive={currentPage === totalPages}
            onClick={handlePageClick(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return links;
  };

  return (
    <PaginationUI>
      <PaginationContent className="flex-center flex-wrap gap-2">
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(Math.max(currentPage - 1, 1));
            }}
          />
        </PaginationItem>

        {/* Pagination Links */}
        <div className="flex flex-row gap-1">{renderPaginationLinks()}</div>

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(Math.min(currentPage + 1, totalPages));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationUI>
  );
};

export default Pagination;
