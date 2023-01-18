function Button(props) {
  return (
    <button
      disabled={props.disabled}
      className="disabled:opacity-50 bg-transparent hover:bg-blue-500 disabled:hover:bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 disabled:hover:border-blue-500  disabled:hover:text-blue-700 hover:border-transparent rounded"
      onClick={props.buttonTouch}
    >
      {props.children || props.text}
    </button>
  );
}

export default Button;
