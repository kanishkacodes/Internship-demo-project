import Image from "next/legacy/image";
import Link from "next/link";


function Reservations() {
  return (
    <div className="bg-fixed">
      <div className="relative min-h-screen flex justify-center items-center">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1710880694019-0e03ea3f011c?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="reservation"
          layout="fill"
          objectFit="cover"
          className="opacity-90 w-full h-full"
        />
        {/* Transparent Black Rectangular Card */}
        
        <div className="absolute bg-black bg-opacity-70 md:rounded-lg p-10 text-white w-full md:w-3/4 lg:w-1/2 xl:w-1/3 ">
          {/* Heading */}
          <h1 className="text-3xl font-bold mb-4">Reservation</h1>
          {/* Description */}
          <p className="mb-6">
            Looking to reserve a table for a small group, or a party?
            <br />
            Call our toll-free number 080-47166-256/245 to directly reserve a
            table!
          </p>
          {/* Rules */}
          <ul className="mb-6">
            <li className="list-disc">The table will be held ONLY for 15 mins past the reservation time.</li>
            <li className="list-disc">There is no specific table booking on weekends, it depends on availability!</li>
          </ul>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row md:justify-between">
            <Link href="/">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded mb-4 md:mb-0 md:mr-2 focus:outline-none">
              Book a Table
            </button>
            </Link>
            <Link href="/">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6  py-3 rounded focus:outline-none">
              Party Reservations
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
