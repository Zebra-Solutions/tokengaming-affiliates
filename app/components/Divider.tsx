import './styles.css';

interface DividerProps {
  reverse?: boolean;
}

const Divider: React.FC<DividerProps> = ({ reverse = false }) => {
  return (
    <div
      className={`w-11/12 h-0.5 my-5 mx-auto bg-purple-400 neon-line ${
        reverse ? 'rotate-negative' : 'rotate-positive'
      }`}
    ></div>
  );
};

export default Divider;
