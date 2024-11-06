import React, { useCallback, useEffect, useState } from "react";
import { createPersonGenerator } from "./mockApi"; // Import the generator function

const personGenerator = createPersonGenerator();

const PaginationTable = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPageData, setCurrentPageData] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const { value, done } = await personGenerator.next();
    if (!done) {
      setCurrentPageData(value);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (persons.length === 0) {
      console.log("running");
      fetchData(); // Initial fetch
    }
  }, [fetchData, persons.length]);

  const handleNextPage = () => {
    fetchData();
  };

  useEffect(() => {
    setPersons((prev) => [...prev, ...currentPageData]);
  }, [currentPageData]);

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <p>Loading...</p>}
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
};

export default PaginationTable;
