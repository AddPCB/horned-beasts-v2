import HornedBeast from "./HornedBeast";

function Main({ handleModal, data, hornsFilter }) {
  const filteredData = hornsFilter
    ? data.filter((beast) => beast.horns === parseInt(hornsFilter, 10))
    : data;
  const beastCount = filteredData.length >= 4 ? filteredData.length : 4;

  return (
    <main className="Main">
      {[...Array(beastCount)].map((_, index) => {
        const beast = index < filteredData.length ? filteredData[index] : null;
        return <HornedBeast key={index} beast={beast} handleModal={handleModal} />;
      })}
    </main>
  );
}
export default Main;
