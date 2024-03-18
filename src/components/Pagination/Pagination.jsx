import React from 'react';
import { PaginationBtn, PaginationSvg } from './Pagination.styled';
import sprite from '../../img/sprite.svg';

export default function Pagination({  totalPages, handlePageChange, page }) {
  return (
    <div>
      <PaginationBtn disabled={page === 1} onClick={() => handlePageChange(page - 1)} >
        <PaginationSvg stoke={page === 1 ? "true" : ''}>
          <use href={`${sprite}#icon-chevron-left`} />
        </PaginationSvg>
      </PaginationBtn>
      <PaginationBtn disabled={page === totalPages} onClick={() => handlePageChange(page + 1)}>
        <PaginationSvg stoke={page === totalPages ? "true" : ''} >
          <use href={`${sprite}#icon-chevron-right`} />
        </PaginationSvg>
      </PaginationBtn>
    </div>
  );
};