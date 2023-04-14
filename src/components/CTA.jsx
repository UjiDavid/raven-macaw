import styles from '../style';
import Button from './Button';

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col cta rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className="font-markazi font-bold xs:text-[70px] text-white leading-[50px] w-full">We got you covered</h2>
      <h4 className="font-markazi font-bold xs:text-[50px] text-[60px] text-gradient leading-[50px] w-full">
        Partner With Us Today, Reach Out to Us
      </h4>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles="mt-10" title="Get Started" link="contact-us" />
    </div>
  </section>
);

export default CTA;
