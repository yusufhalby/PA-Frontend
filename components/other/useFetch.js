// this file is used to fetch any data from any api
import { useState, useEffect } from "react";

function useFetch(url,token,method) {
  const [data, setData] = useState(null);
  const [isLoading, SetLoading] = useState(true);
    const [myError, setError] = useState(null);
      

  useEffect(() => {
      fetch(url, {
        headers: {
          method:method,
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("can't get these data for some problems");
          }
          // console.log(res);
          return res.json();
        })
        .then((mydata) =>
        {
          setData(mydata);
          SetLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          SetLoading(false);
        });
      });
      
      console.log(data);
      return { data, isLoading, myError };

    
}

export default useFetch;
