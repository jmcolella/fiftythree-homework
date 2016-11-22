import React from 'react';

const ModalContent = ( props ) => {
  return (
    <div className="modal-content">
      <p>{ props.message }</p>
      <button
        onClick={
          () => props.onCloseModal()
        }
      >
        Accept
      </button>
      <button
        onClick={
          () => props.onCloseModal()
        }
      >
        Dismiss
      </button>
    </div>
  )
};

export default ModalContent;
