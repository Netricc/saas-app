const Button = ({ text }) => {
  return (
    <button className="py-[8px] px-[12px] bg-black text-white rounded-[8px] hover:bg-slate-800 duration-200">
      {text}
    </button>
  );
};

export default Button;
