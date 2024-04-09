import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-yellow-600 bg-opacity-50 text-black text-center py-8">
        <div className=" md:mr-4 md:ml-4">
      <h2 className="text-2xl font-bold mb-8">Our Addresses</h2>
      <div className="flex flex-col md:flex-row justify-between gap-0 md:gap-12">
  {/* Address 1 */}
  <div className="flex flex-col mx-4 mb-4 md:mb-0">
    <span className="text-left">
      Brewsky Hennur Brewery Private Limited - Survey No 22 and 125, Byrathi Village, Bidarahalli Hobli, Karnataka 560077
    </span>
    <span className="text-left mt-2 mb-2 ">
    Email:  
      <span className="text-blue-600"><Link href="mailto:business@example.com">business@example.com</Link></span>
    </span>
    <span className="text-left">Phone : +917618755487</span>
  </div>
  {/* Address 2 */}
  <div className="flex flex-col mx-4 mb-4 md:mb-0">
    <span className="text-left">
      Brewsky Hennur Brewery Private Limited - Survey No 22 and 125, Byrathi Village, Bidarahalli Hobli, Karnataka 560077
    </span>
    <span className="text-left mt-2 mb-2 ">
    Email:  
      <span className="text-blue-600"><Link href="mailto:business@example.com">business@example.com</Link></span>
    </span>
    <span className="text-left">Phone : +917618755487</span>
  </div>
  {/* Address 3 */}
  <div className="flex flex-col mx-4">
    <span className="text-left">
      Brewsky Hennur Brewery Private Limited - Survey No 22 and 125, Byrathi Village, Bidarahalli Hobli, Karnataka 560077
    </span>
    <span className="text-left mt-2 mb-2 ">
    Email:  
      <span className="text-blue-600"><Link href="mailto:business@example.com">business@example.com</Link></span>
    </span>
    <span className="text-left">Phone : +917618755487</span>
  </div>
</div>



      <div>
        <Link
          href="https://gyltbangalore.com/"
          className="block text-xl font-bold my-4 mt-10 hover:text-gray-500"
        >
          gyltbangalore.com
        </Link>
      </div>

      <div className="text-xl font-bold my-4">Connect with us</div>
      <div className="flex justify-center space-x-4">
        <Link href="/">
          <Image
            src="/flaticon/facebookdemo.png"
            alt="facebook"
            width={28}
            height={28}
          />
        </Link>
        <Link href="/">
          <Image
            src="/flaticon/instagramdemo.png"
            alt="instagram"
            width={28}
            height={28}
          />
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Footer;
