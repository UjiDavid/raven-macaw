import { apple, download, google } from '../assets';
import styles, { layout } from '../style';

const DownloadApp = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img src={download} alt="download-app" className="w-[60%] relative z-[5] md:w-[70%]" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className="font-markazi font-bold xs:text-[70px] text-[50px] text-black leading-[60px] w-full">
        Download Our App <br className="sm:block hidden" /> Enjoy Convenience.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="Apple_Store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="Google_Play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default DownloadApp;
