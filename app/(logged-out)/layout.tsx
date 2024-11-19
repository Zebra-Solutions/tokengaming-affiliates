
import logBG from '@/public/Cardblue1.jpg'
type Props = {
  children?: React.ReactNode;
};
export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24 bg-[#161617] bg-cover bg-center" style={{backgroundImage:`url(${logBG.src})`, backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
        {children}
      </div>
      
    </>
  );
}
