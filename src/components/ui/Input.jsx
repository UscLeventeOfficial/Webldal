const Input = ({ placeholder, type, icon: Icon, design }) => {
  return (
    <label
      class={`input input-bordered flex items-center mb-4 gap-2  ${design}`}
    >
      {Icon && <Icon />}
      <input type={type} class="grow" placeholder={placeholder} required />
    </label>
  );
};

export default Input;
