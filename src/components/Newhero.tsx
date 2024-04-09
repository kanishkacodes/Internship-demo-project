import Image from "next/image";

function Newhero() {
  return (
    <div>
      <Image 
        src="/images/test.jpg"
        alt="test"
        className="static inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        width={5472}
        height={3648}
      />
    </div>
  );
}

export default Newhero;
