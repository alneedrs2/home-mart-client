import { useEffect, useState } from "react";

const useTools = () => {
  const [tool, setTool] = useState([]);
  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  return [tool, setTool];
};

export default useTools;
