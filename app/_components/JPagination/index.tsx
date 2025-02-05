import { FC } from "react";

import classNames from "classnames";

interface PaginationProps {
  page: number;
  total: number;
  size?: number;
  className?: string;

  setPage: (page: number) => void;
}

const VISIBLE_PAGES = 4;

const JPagination: FC<PaginationProps> = ({ 
  page, 
  total, 
  size = 20, 
  className = '', 

  setPage 
}) => {
  const pageCount = Math.ceil(total / size);
  
  if (pageCount <= 1) return null;

  const getVisiblePages = (): number[] => {

    const allPages = Array.from({ length: pageCount }, (_, i) => i);
    
    if (page < VISIBLE_PAGES - 1) {
      return allPages.slice(0, VISIBLE_PAGES);
    }
    if (page > pageCount - VISIBLE_PAGES) {
      return allPages.slice(-VISIBLE_PAGES);
    }

    return allPages.slice(page - 2, page + 2);
  };


  return (
    <ul className={classNames("pagination", className)}>
      <PageButton 
        onClick={() => page > 0 && setPage(page - 1)}

        disabled={page === 0}
        className="previous"
      >
        Trước
      </PageButton>
      
      {getVisiblePages().map(pageNum => (

        <PageButton
          key={pageNum}
          onClick={() => setPage(pageNum)}
          className={page === pageNum ? 'active' : ''}
        >
          {pageNum + 1}
        </PageButton>
      ))}

      <PageButton 
        onClick={() => page < pageCount - 1 && setPage(page + 1)}

        disabled={page === pageCount - 1}
        className="next"
      >
        Sau
      </PageButton>
    </ul>
  );
};

interface PageButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const PageButton: FC<PageButtonProps> = ({ 
  children, 
  onClick, 
  disabled, 
  className 
}) => (
  <li
    className={classNames("paginate_button page-item", className, { disabled })}
    onClick={onClick}
  >
    <a href="#" className="page-link" onClick={(e) => e.preventDefault()}>
      {children}
    </a>
  </li>
);

export default JPagination;
