import React from "react";
import Box from "./Box";

const Main = () => {
  return (
    <main>
      <div>
        <Box name="Akseli" age="25" title="CEO" />
        <Box name="Ansku" age="22" title="designer" />
        <Box name="Roosa" age="27" title="developer" />
      </div>
    </main>
  );
};

export default Main;
