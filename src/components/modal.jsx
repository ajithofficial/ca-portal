const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="w-full fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-lg font-semibold">Add Cusip</h2>
        <form className="min-w-min max-w-xl m-5 rounded-md border border-white">
          <div className="text-left">
            <label className="block text-sm font-bold mb-2" htmlFor="oldcusip">
              Old Cusip
            </label>
            <input
              className="mb-5 max-h-80 border border-black rounded-md p-2 text-black"
              id="oldcusip"
              name="text-oldcusip"
              placeholder="Enter old cusip"
            ></input>
          </div>
          <div className="text-left">
            <label className="block text-sm font-bold mb-2" htmlFor="newcusip">
              New Cusip
            </label>
            <input
              className="mb-5 max-h-80 border border-black rounded-md p-2 text-black"
              id="newcusip"
              name="text-newcusip"
              placeholder="Enter new cusip"
            ></input>
          </div>
          <div className="text-left">
          <label className="block text-sm font-bold mb-2" htmlFor="date-picker">
              Effective Date
            </label>
            <input
              type="date"
              id="date-picker"
              name="date-picker"
              class="block w-full px-4 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </form>
        <div className="flex gap-2 justify-end">
          <button
            className="mt-4 border rounded-md mb-2 px-4 py-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="mt-4 bg-cadeepdark rounded-md mb-2 text-white px-4 py-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;