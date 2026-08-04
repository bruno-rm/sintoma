// import SignupForm from "@/components/signup-form";
import { Suspense } from "react";

export default function Signup() {
  return (
    <main className="flex items-center justify-center p-15 bg-black h-90">      
        
        <Suspense>
          {/* <SignupForm /> */}
          <p className="text-white">Acesso restrito</p>
        </Suspense>
      
    </main>
  );
}


