import Lodging from "./Lodging";
import Routemap from "./Routemap";

import Routenotes from "./Routenotes";
import Routesummary from "./Routesummary";

function Home() {
  return (
    <div className="container">

      <Routesummary />
     {/*  <Routemap /> */}
        {/* <Routenotes />       */}
        <Lodging />
    </div>
  );
}

export default Home;
