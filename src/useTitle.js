import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -Saiful News`;
  }, [title]);
};

export default useTitle;
