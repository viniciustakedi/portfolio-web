interface ITag {
  children: React.ReactNode;
  width?: 'w-44' | 'w-56' | 'w-32';
}

const Tag: React.FC<ITag> = ({ width, children }) => {
  return (
    <h1 className={`bg-blue ${width || 'w-32'} text-center rounded-full p-1 font-bold text-white`}>
      {children}
    </h1>
  );
}

export default Tag