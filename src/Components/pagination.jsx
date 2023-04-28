import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ pages, setPage, page }) => {
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = pages;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage + 1;
      if (prevPage > pages) {
        prevPage = 1;
      }
      return prevPage;
    });
  };

  return (
    <nav>
      <ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
        <li className="page-item">
          <a href="#" className="page-link" onClick={prevPage}>
            قبلی
          </a>
        </li>
        {_.times(pages, (index) => (
          <li
            key={`pagination-` + index}
            className={`page-item ${index + 1 === page ? "active" : ""}`}
            onClick={() => setPage(index + 1)}
          >
            <a className="page-link" href="#">
              {index + 1}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a href="#" className="page-link" onClick={nextPage}>
            بعدی
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Pagination;
