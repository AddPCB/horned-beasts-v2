import HornedBeast from "./HornedBeast";

function Main({ handleModal, data, hornsFilter }) {
  const filteredData = hornsFilter
    ? data.filter((beast) => beast.horns === parseInt(hornsFilter))
    : data;

  const colls = Math.min(filteredData.length, 5);

  return (
    <main className="Main" style={{ gridTemplateColumns: `repeat(${colls}, 1fr)` }}>
      {filteredData.map((beast, index) => (
        <HornedBeast key={index} beast={beast} handleModal={handleModal} />
      ))}
    </main>
  );
}

export default Main;