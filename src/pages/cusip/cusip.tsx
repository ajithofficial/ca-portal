import { useCallback, useState } from "react";
import Modal from "../../components/modal";
import GridExample from "./cusip.grid";

const Cusip = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleRowSelection = useCallback((param: boolean) => {
    setRowSelected(param);
  }, []);
  return (
    <div>
      <div className="flex justify-between">
      <h1 className="sticky text-3xl font-bold text-center mb-5 relative">Cusip Managment</h1>
        <div className="flex gap-2">{rowSelected && <><button className="p-2 bg-white rounded-sm mb-2 border border-black text-black" onClick={openModal}>Delete</button>
          <button className="p-2 bg-slate-600 rounded-sm mb-2 text-white" onClick={openModal}>Process</button></>}
        <button className="p-2 bg-cadeepdark rounded-sm mb-2 text-white" onClick={openModal}>Add</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <GridExample onSelection={handleRowSelection} />
    </div>
  )
};

export default Cusip;