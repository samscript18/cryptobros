interface Props {
  title: string;
  text: string;
}

const Title = ({ title, text }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-gray-500 text-[1rem] font-bold pt-4 pb-2">{title}</h2>
      <p className="text-secondary text-[2rem] font-bold">{text}</p>
    </div>
  );
};
export default Title;
