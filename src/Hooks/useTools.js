import { useEffect, useState } from "react";

const useTools = () => {
  const [tool, setTool] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-mountain-12032.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  return [tool, setTool];
};

export default useTools;
