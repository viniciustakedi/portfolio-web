interface ITag {
  children: React.ReactNode;
}

const Tag: React.FC<ITag> = ({ children }) => {
  return (
    <h1 className="bg-blue w-32 text-center rounded-full p-1 font-bold text-white">
      {children}
    </h1>
  );
}

export default Tag