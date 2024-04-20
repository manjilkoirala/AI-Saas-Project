import Image from "next/image"; 
import Link from "next/link";

const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <main className="h-full bg-[#111827] flex items-center justify-center flex-col gap-y-4">
      
      
      <div className=""><Link href="/" className="flex items-center">
        <div className="relative h-12 w-12 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className=' text-3xl font-bold font-sans text-white'>
          VersaAI
        </h1>
      </Link></div>
      {children}

   
      
    </main>
  );
}
 
export default AuthLayout;