import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ pages, setActivePage, activePage }) => {
  const prevPage = () => {
    setActivePage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = pages;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setActivePage((oldPage) => {
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
            className={`page-item ${index + 1 === activePage ? "active" : ""}`}
            onClick={() => setActivePage(index + 1)}
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
  setActivePage: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
};

export default Pagination;
