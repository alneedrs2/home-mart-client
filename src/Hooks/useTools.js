import { useEffect, useState } from "react";

const useTools = () => {
  const [tool, setTool] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  return [tool, setTool];
};

export default useTools;
