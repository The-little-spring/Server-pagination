import { useEffect, useState } from "react";

const useFetchedData = (sieveModel) => {
  const [isLoading, setIsLoading] = useState(true);
  const [programmers, setProgrammers] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://react-mini-projects-api.classbon.com/Programmer/sieve",
      {
        method: "POST",
        body: JSON.stringify(sieveModel),
        headers: {
          "content-type": "application/json;charset-UTF-8",
        },
      }
    );
    const data = await response.json();

    setProgrammers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [sieveModel.page]);

  return [isLoading, programmers];
};

export default useFetchedData;
