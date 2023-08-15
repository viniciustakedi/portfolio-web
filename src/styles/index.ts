
export const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isFocused ? '#FFF' : '#748CAB',
    cursor: 'pointer',
    backgroundColor: state.isFocused ?'#748CAB' : '#FFF',
  }),
  control: () => ({
    display: 'flex',
    background: "white",
    border: 0,
    maxWidth: '100%',
    minWidth: '10rem',
    height: "3rem",
    borderRadius: "0 .5rem .5rem 0",
    outline: "none",
    fontSize: " 1.125rem",
    lineHeight: "1.75rem",
    color: "rgb(29 45 68 10)",
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 100ms';
    

    return { ...provided, opacity, transition };
  },
  multiValue: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: '#748CAB',
    borderRadius: '0.5rem',
    color: '#FFF',
  }),
  multiValueLabel: (provided: any, state: any) => ({
    ...provided,
    color: '#FFF',
  }),
  multiValueRemove: (provided: any, state: any) => ({
    ...provided,
    color: '#FFF',
    ':hover': {
      borderRadius: '0.5rem',
      backgroundColor: '#1D2D44',
      color: '#FFF',
    },
  }),
};