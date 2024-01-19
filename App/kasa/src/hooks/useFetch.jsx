import { useEffect, useState } from 'react';

function useFetch() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/logements.json');
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du JSON :", error);
      }
    };

    fetchData();

  }, []);

  return jsonData;
}

export default useFetch;
