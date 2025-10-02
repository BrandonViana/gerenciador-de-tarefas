const Button = (props) => {
  return (
    <button
      className="bg-blue-950 dark:bg-slate-200 dark:text-blue-950 p-2 rounded-md text-slate-200 cursor-pointer transition "
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
