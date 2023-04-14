import { AboutImage } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const AboutSection = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h3 className="font-markazi font-bold xs:text-[30px] text-[20px] text-black leading-[50px] w-full">About Raven and Macaw HMO</h3>
      <h2 className="font-markazi font-bold xs:text-[70px] text-[50px] text-gradient leading-[60px] w-full">
        Quality Healthcare <br className="sm:block hidden" />
        Plans for Everyone
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10" title="Get Started" link="plans" />
    </div>
    <div className={layout.sectionImg}>
      <img src={AboutImage} alt="About Raven and Macaw" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default AboutSection;
