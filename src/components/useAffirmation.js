import { useState } from "react";
import axios from "axios";

const useAffirmation = () => {
  const [affirmation, setAffirmation] = useState(
    "It's going to be a good day!"
  );
  axios
    .get("https://www.affirmations.dev/")
    .then((response) => {
      setAffirmation(response.data.affirmation);
    })
    .catch((error) => {
      console.log(error);
    });

  return affirmation;
};
export default useAffirmation;
