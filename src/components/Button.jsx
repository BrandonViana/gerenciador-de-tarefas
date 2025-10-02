function Button(props) {
  return (
    <button
      className="bg-blue-950 dark:bg-blue-50 dark:text-blue-950 p-2 rounded-md text-blue-50 cursor-pointer transition "
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
