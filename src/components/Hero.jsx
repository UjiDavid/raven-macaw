import styles from '../style';
import { discount } from '../assets';
import Button from './Button';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`font-poppins font-normal text-[18px] leading-[30.8px] text-black ml-2`}>
          <span className="text-right">20%</span> Discount For <span className="text-secondary">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-markazi font-bold ss:text-[72px] text-[60px] text-gradient ss:leading-[80px] leading-[75px]">
          Healthcare For The <br /> Entire Family.
        </h1>
      </div>
      <p className={`font-poppins font-normal text-[25px] leading-[30.8px] text-white max-w-[470px] mt-5`}>
        We've got you covered with superior healthcare solutions that are cost effective, convenient, and tailored to suit the needs of every member
        of the family anywhere in the world.
      </p>
      <Button styles="mt-4" title="Health Plans" link="plans" />
    </div>
  </section>
);

export default Hero;
