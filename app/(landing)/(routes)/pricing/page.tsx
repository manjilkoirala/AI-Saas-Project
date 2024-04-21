"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useProModal } from "@/hooks/use-pro-modal";

const PricingPage = () => {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  
  const proModal = useProModal();
  const handleClick = (event:any) => {
    event.preventDefault();
    if (isSignedIn) {
      proModal.onOpen()
      
    }
    else {
      router.push('/sign-in'); // Use the router to navigate
    }
  }
  return (
    <div className="flex flex-col items-center h-full mt-32 py-2">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Our Pricing</h1>
      <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-white mb-6 text-center px-4">
        Choose the plan that suits you best. Upgrade, downgrade, or cancel anytime.
      </p>
      <div className="flex flex-wrap items-start justify-around max-w-4xl mt-6 sm:w-full mb-10">
        <div className="p-6 mt-6 text-left border w-96 h-full rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg">
          <h3 className="text-xl font-bold">General</h3>
          <p className="mt-4 text-md">
            Access to basic features.
          </p>
          <ul className="mt-4">
            <li>Limited Access</li>
          </ul>
          <Link href={"/dashboard"}>
            <Button variant="premium" className="mt-6 md:text-lg p-4 md:p-6 rounded-full font-semibold">
              Get Started For Free
            </Button>
          </Link>
        </div>

        <div className="p-6 mt-6 text-left border w-96 h-full rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg">
          <h3 className="text-xl font-bold">Pro</h3>
          <p className="mt-4 text-md">
            Unlimited access to all features.
          </p>
         
          <p className="mt-4 text-lg">
            $20/month
          </p>
          <a onClick={handleClick} href="/sign-in">
            <Button  variant="premium" className="mt-6 md:text-lg p-4 md:p-6 rounded-full font-semibold">
              Start Pro Mode
            </Button>
          </a>
        </div>
      </div>
      <div className="my-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Why Choose Us?</h2>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-white mb-6 text-center px-4">
          We provide the best service in the industry. Our plans are flexible and tailored to your needs. Join us and experience the difference.
        </p>
        
      </div>
    </div>
  );
}

export default PricingPage;