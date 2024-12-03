
import logBG from '@/public/bg-home.png'
type Props = {
  children?: React.ReactNode;
};
export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24  bg-cover bg-center" style={{backgroundImage:`url(${logBG.src})`,
        backgroundColor: "#161617"}}>
        {children}
      </div>
      
    </>
  );
}
