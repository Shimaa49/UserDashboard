import React from "react";

export default function PaginationBar(props) {
  const page = props.page;
  const pageSize = props.pageSize;
  const totalItems = props.totalItems;
  const onPageChange = props.onPageChange;
  const onPageSizeChange = props.onPageSizeChange;
  const maxPagesShown = props.maxPagesShown || 5;

  const totalPages = Math.ceil(totalItems / pageSize);

  const half = Math.floor(maxPagesShown / 2);
  let start = Math.max(1, page - half);
  let end = Math.min(totalPages, start + maxPagesShown - 1);

  if (end - start + 1 < maxPagesShown) {
    start = Math.max(1, end - maxPagesShown + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="d-flex justify-content-between align-items-center my-3">
      <div>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        {pages.map((p) => (
          <button
            key={p}
            className={`btn btn-sm me-1 ${
              p === page ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}

        <button
          className="btn btn-sm btn-outline-primary ms-2"
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

      <div className="d-flex align-items-center">
        <label className="me-2">Rows per page:</label>
        <select
          className="form-select form-select-sm"
          style={{ width: "auto" }}
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  );
}
