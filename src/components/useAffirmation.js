import { useState, useEffect } from "react";
import axios from "axios";

const useAffirmation = () => {
  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    axios
      .get("https://www.affirmations.dev/")
      .then((response) => {
        console.log(response.data.affirmation);
        setAffirmation(response.data.affirmation);
      })
      .catch((error) => {
        console.log(error);
        setAffirmation("It's going to be a good day!");
      });
  }, []);

  return affirmation;
};

export default useAffirmation;
