function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-0 z-40 "
      aria-modal="true"
      role="dialog"
      onClick={closeModal}
    >
      <div
        className="bg-white p-5 rounded-lg] h-auto w-auto right-10 top-12 absolute z-50 rounded-lg shadow-lg border"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
export default Modal;
