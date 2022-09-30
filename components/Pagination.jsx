const Pagination = ({ pagiPrev, pagiNext, prevVal, nextVal }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <nav aria-label="pokedex-pagination">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="btn btn-light me-2"
              onClick={pagiPrev}
              disabled={prevVal}
            >
              Prev
            </button>
          </li>
          <li className="page-item">
            <button
              className="btn btn-light"
              onClick={pagiNext}
              disabled={nextVal}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
