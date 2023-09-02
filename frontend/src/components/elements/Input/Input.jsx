const input = (props) => {
  const { name, type, placeholder } = props;

  return (
    <input
      name={name}
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
      placeholder={placeholder}
    />
  );
};

export default input;
