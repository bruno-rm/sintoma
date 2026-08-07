import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    
    <div className="flex justify-center">
      <Image
        className="py-4 px-4"
        src="/assets/images/orfeu-low.png" //sintoma-de-morte-logo-branco-low-768x326.png Path from the public directory
        width={747} // Desired width in pixels
        height={1015} // Desired height in pixels
        alt="woman crying" // Alt text for accessibility
      />
    </div>
    
  );
}
