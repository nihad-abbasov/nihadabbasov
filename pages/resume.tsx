import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2 flex flex-col"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Information Technologies</h5>
            <p className="font-semibold">
              Azerbaijan State Oil and Industry University (2017-2021)
            </p>
            <span className="text-xs">
              <i>Earlier experiences are noted in the Resume file</i>
            </span>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Frontend Developer</h5>
            <p className="font-semibold">Ante Techologies(07.2021-Present)</p>
            <span className="text-xs">
              <i>Additional education info noted in the Resume file</i>
            </span>
          </div>
        </motion.div>
      </div>

      {/* additional info */}
      <span className="text-sm self-center">
        <i>
          <b>
            The other educational and experience based info are in Resume file.
          </b>
        </i>
      </span>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
