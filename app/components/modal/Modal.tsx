'use client';

import { useState } from 'react';

const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    showModal && (
      <div className="fixed bottom-10 right-10 bg-dark-gray text-white bg-opacity-80 backdrop-blur-xl max-w-lg p-5 rounded-xl overflow-hidden font-montserrat font-medium text-[15px] border-[1px] border-light-gray border-opacity-30">
        <p className=" mb-5">
          <span className="font-semibold">Please note: </span>This site is
          currently in its developmental phase. For the best viewing experience,
          kindly access it from a desktop. I appreciate your understanding and
          patience as I work to optimize for all devices.
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="bg-white text-dark-gray font-medium py-1 px-3 rounded-full hover:bg-neutral-300 transition-colors duration-200"
        >
          Got It!
        </button>
      </div>
    )
  );
};
export default Modal;
