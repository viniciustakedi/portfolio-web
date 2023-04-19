import React, { useEffect } from "react";
import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from "react-icons/io5";

interface PlaylistModalProps {
  isOpen: boolean;
  onClose: (args: boolean) => void;
  responseContent: { status: 'error' | 'success', message: string };
}

const ResponseModal: React.FC<PlaylistModalProps> = ({ isOpen, onClose, responseContent }) => {
  useEffect(() => {
    setTimeout(() => onClose(false), 5000);
  }, [isOpen]);

  return (
    <div className={`${isOpen ? 'visible top-28 right-0' : ' invisible opacity-0 fixed top-28 right-[-14rem]'} fixed flex justify-start items-center  p-6 bg-white rounded-l-lg lg:w-96 lg:h-16 md:w-96 md:h-16 opacity-100 w-64 h-14 z-50 transition-all`}>
      {(
        responseContent.status === 'success'
          ? <IoCheckmarkCircleSharp size={32} color='	#00FF00' />
          : <IoCloseCircleSharp size={32} color='#FF0000' />
      )}
      <p className="text-lg text-dark-blue leading-6 font-semibold ml-2">{responseContent.message}</p>
    </div>
  );
}

export default ResponseModal;