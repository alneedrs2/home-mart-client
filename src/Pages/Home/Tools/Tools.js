import React from "react";
import useTools from "../../../Hooks/useTools";
import SingleTool from "../SingleTool/SingleTool";

const Tools = () => {
  const [tools] = useTools();
  return (
    <div className="text-center">
      <div id="tool" className="container mx-auto">
        <h1 className="text-primary text-center text-3xl font-bold mt-5">
          All Tools
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {tools.map((tool) => (
            <SingleTool key={tool._id} tool={tool}></SingleTool>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
