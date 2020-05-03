const CustomInput = ({
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange = () => {},
}) => {
  return (
    <div className="custom-input">
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
