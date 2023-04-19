import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoArrowForwardSharp, IoCloseSharp, IoMusicalNotesSharp } from "react-icons/io5";

interface PlaylistModalProps {
  isOpen: boolean;
  onClose: (args: boolean) => void;
  musicContent: { image: any, artist: string, link: string };
}

const PlaylistModal: React.FC<PlaylistModalProps> = ({ isOpen, onClose, musicContent }) => {
  const ref = useRef() as any;

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        onClose(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => { document.removeEventListener("mousedown", checkIfClickedOutside); };
  }, [isOpen]);

  return (
    <div className={`${isOpen ? 'visible' : ' invisible opacity-0'} flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black-alpha z-50 transition-all`}>
      <div ref={ref} className="relative overflow-hidden lg:w-96 lg:h-96 md:w-96 md:h-96 opacity-100 w-4/5 h-2/5">
        <Image className="w-full h-full scale-110 object-cover rounded-lg" src={musicContent.image} alt="music-image" />
        <p className="absolute top-4 left-4 flex justify-center p-2 w-40 rounded-lg gap-1 text-white font-bold transition-all bg-dark-blue">
          {musicContent.artist}
        </p>
        <Link
          href={musicContent.link}
          target="_blank"
          className="absolute bottom-4 right-4 flex justify-center p-2 w-40 rounded-lg gap-1 text-soft-blue font-bold hover:text-blue transition-all bg-white"
        >
          <IoMusicalNotesSharp size={22} className="mr-2" />
          Youtube
          <IoArrowForwardSharp size={22} />
        </Link>
      </div>
    </div>
  );
}

export default PlaylistModal;