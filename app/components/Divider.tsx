import './styles.css';

interface DividerProps {
  reverse?: boolean;
}

const Divider: React.FC<DividerProps> = ({ reverse = false }) => {
  return (
    <div
      className={`w-full h-2 my-5 mx-auto px-6 bg-repeat-x ${reverse ? 'rotate-negative' : 'rotate-positive'}`}
      style={{
        backgroundImage: `url('/logo.png')`,
        paddingLeft: '100px',
        backgroundSize: '130px', // Adjust size as needed
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        filter: 'invert(44%) sepia(100%) saturate(6785%) hue-rotate(195deg) brightness(65%) contrast(150%)'
      }}
    ></div>
  );
};

export default Divider;
