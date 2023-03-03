import "./css/App.css";
import data from "./data.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [hornsFilter, setHornsFilter] = useState("");
  const handleModal = (beast) => {
    setSelectedBeast(beast);
    setModal(!modal);
  };

  return (
    <div className="App">
      <Header hornsFilter={hornsFilter} setHornsFilter={setHornsFilter} />
      <Main handleModal={handleModal} data={data} hornsFilter={hornsFilter} />
      <Footer />
      {modal && (
        <div className="modal-background" onClick={handleModal}>
          <div className="modal-container">
            <Modal beast={selectedBeast} handleModal={handleModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
