// import { motion } from "framer-motion";
import { styles } from "../styles"
import { socials } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-1.5 rounded-full sm:h-80 h-40 white-gradient" />
        </div>

        <div>
          <h1 className={`${styles.sectionHeadText} text-white`}>
            Hi, I'm <span className="text-white">Calvin</span>
          </h1>
          <p className={`${styles.sectionDescriptionText}`}>
            I'm a recent graduate from BCIT - CST Diploma Program
            <br className="sm:block hidden" />
            Currently looking for internships or junior developer positions
            <br className="sm:block hidden" />
          </p>

          <div>
            <p className={`${styles.sectionDescriptionText}`}>
              Here are my socials :
            </p>
          </div>
          <div className="flex flex-row">
            {socials.map((soc, index) => (
              <div
                key={index}
                onClick={() => window.open(soc.link, "_blank")}
                className="w-10 h-10 flex items-center cursor-pointer"
              >
                <img
                  src={soc.icon}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero