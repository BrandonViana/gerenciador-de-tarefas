const Input = (props) => {
  return (
    <input
      className="border border-blue-900 text-blue-950 dark:text-white dark:border-white px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-950 focus:transition-discrete"
      {...props}
    />
  );
};

export default Input;
