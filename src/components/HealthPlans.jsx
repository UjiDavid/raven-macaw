import { healthPlans } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const PlansCard = ({ image, title, text, index }) => (
  <div className={`flex flex-col rounded-t-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feature-card`}>
    <img src={image} alt={title} className="w-[100%] h-[50%] object-fit rounded-t-[20px]" />
    <div className="flex flex-col mx-3">
      <h4 className="font-markazi font-semibold text-black text-[28px] leading-[23px] my-4">{title}</h4>
      <p className="font-poppins font-normal text-gray-800 text-[18px] leading-[24px] my-2">{text}</p>
    </div>
    <Button title="Learn More" link="plans" styles="m-3" />
  </div>
);

const HealthPlans = () => (
  <section className={`${styles.paddingY} flex-col relative`}>
    <h1 className="text-left flex-1 font-markazi font-bold ss:text-[72px] text-[60px] text-gradient ss:leading-[80px] leading-[75px]">
      Our Health Plans.
    </h1>
    <div className="flex flex-wrap justify-start lg:justify-center w-full feedback-container relative z-[1]">
      {healthPlans.map((plan, index) => (
        <PlansCard key={plan.id} {...plan} />
      ))}
    </div>
  </section>
);

export default HealthPlans;
