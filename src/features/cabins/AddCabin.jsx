import { useState, useEffect, useRef } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  // <div>
  //   <Modal>
  //     <Modal.Open opens="cabin-form">
  //       <Button>Add new cabin</Button>
  //     </Modal.Open>
  //     <Modal.Window name="cabin-form">
  //       <CreateCabinForm />
  //     </Modal.Window>
  //   </Modal>
  // </div>;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const ref = useRef();

  useEffect(function () {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpenModal(false);
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <div>
      <Button onClick={() => setIsOpenModal(true)}>Add new cabin</Button>
      {isOpenModal && (
        <Modal ref={ref} onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm closeForm={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
