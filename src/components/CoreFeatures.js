import Image from "next/image";
import Link from "next/link";

const CoreFeatures = () => {
  return (
    <section className="container mx-auto px-4 md:px-16 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-rose-600 uppercase block font-semibold tracking-widest">
        
        </span>
        <h2 className=" capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">
       Need Help?
        </h2>
        <p className="text-lg leading-loose">
        Ready to transform your space or stock up on urban essentials? Citystead is here to help. Contact us to schedule a consultation or visit our retail outlet to explore our selection of premium goods.
        </p>
        <Link href="/contact">
        <button className="mt-5 w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:shadow-rose-600 hover:shadow-2xl rounded-full">
          Contact Us
        </button>
        </Link>
    
      </div>

      <div className="flex-1 relative w-full">
        <div className="md:before:w-full md:before:h-full md:before:absolute md:before:-bottom-24 lg:before:-bottom-20 xl:before:-right-5 lg:before:-right-12 md:before:-right-16 md:before:bg-right-bottom md:before:bg-contain md:before:bg-no-repeat before:-z-50 before:bg-none md:before:bg-[url('/videobg.png')]">
          <Image
            src={"https://th.bing.com/th/id/R.d2cee5f41bd49e4ec25baaed939b4e27?rik=ZJVnIqFDzo0W3w&pid=ImgRaw&r=0"}
            width={300}
            height={300}
            alt="core features"
            className="object-cover w-full md:w-[90%] xl:w-4/5"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
