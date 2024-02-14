const Button = ({ text }: { text: string }) => {
  return (
    <button type="submit" className="button">
      {text}
    </button>
  );
};
export default Button;
