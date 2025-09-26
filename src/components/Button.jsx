function Button(props) {
  return (
    <button
      className="bg-blue-950 p-2 rounded-md text-white cursor-pointer transition "
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
