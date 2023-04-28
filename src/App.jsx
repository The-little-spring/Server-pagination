import { useState } from "react";
import "./App.css";
import useFetchedData from "./useFetchedData";
import Card from "./Components/card";
import Pagination from "./Components/pagination";

const pageSize = 3;
function App() {
  const [page, setPage] = useState(1);
  const [isLoading, programmers] = useFetchedData({ page, pageSize });

  return (
    <div className="container">
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spiner-border"></div>
        </div>
      )}
      {!isLoading && (
        <>
          <div className="d-flex justify-content-center">
            {programmers.data.map(({ id, ...programmer }) => {
              return (
                <div className="col-4" key={id}>
                  <Card {...programmer} />
                </div>
              );
            })}
          </div>
          <div className="row">
            <Pagination
              pages={Math.ceil(programmers.totalRecords / pageSize)}
              setPage={setPage}
              page={page}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
