function Routesummary() {
  return (
    <>
      <span className="text-center">
        <h1 className="font-bold text-gray-500 mb-10 mt-5">
          Route #: 214 | Total Distance 3,753mi
        </h1>
      </span>

      <div className="flex flex-row justify-evenly gap-3">
        <span className="route-summary">Stops 13</span>

        <span className="route-summary">
          <h3>Drops 7</h3>
        </span>

        <span className="route-summary">
          <h3>Installs 4</h3>
        </span>

        <span className="route-summary">
          <h3>Pickups 3</h3>
        </span>
      </div>
    </>
  );
}

export default Routesummary;
