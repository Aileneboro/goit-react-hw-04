import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({
  closeModal,
  modalIsOpen,
  imageSrc,
  imageAltDescription,
  imageDescription,
  imageAuthor,
  imageLikes,
}) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <div>
        <div>
          <img src={imageSrc} alt={imageAltDescription} />
        </div>
        <div>
          <p>{imageDescription}</p>
          <p>Author: {imageAuthor}</p>
          <p>Likes: {imageLikes}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
