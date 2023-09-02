const button = (props) => {
  const { children, style, onClick = () => {} } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${style}`}
      type="submit"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default button;
