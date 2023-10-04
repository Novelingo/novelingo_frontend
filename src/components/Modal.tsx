// Modal.tsx
import React from "react";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi'
import        { useState } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, title, children }) => {
  if (!show) return null;
  const [saveWord, setSave] = useState(false);

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-darkest opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-light rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-light  px-4 pt-5 pb-10 sm:p-10 sm:pb-15">
            <div className="sm:flex justify-center sm:items-start">
              <div className=" text-center  ">
                <div
                 className="text-darkest flex px-10 justify-center"
                >
               <BsFillVolumeUpFill size={25} />
                 <h3 className="text-lg leading-6 mx-32 font-medium "
                  id="modal-headline" >{title}</h3> 
                  <div onClick={()=> setSave(!saveWord)}>
                        {saveWord? <BiSolidBookmark size={25}  /> :  <BiBookmark size={25}/>}

                  </div>

                </div>
                <p className="mt-4 text-center  text-purple">{children}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
