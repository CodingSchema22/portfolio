import { motion } from "framer-motion";
const Resume = () =>{
return(
    <>
    <section id="resume">
          <motion.div
        id="cont-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
    <div id="res">
        <div className="resume">
<h1 id="hea"> Resume </h1>

            <div className="bar">
                <h2>Eduction</h2>
                |
                <h2>Skills</h2>
            </div>
            <div className="eductions">
<div className="boxes">
    <p className="date">2018-19</p>
    <h2>Completed Matriculation</h2>
    <p>The Quest High School
Completed matriculation in 2018-2019, eager to explore new educational opportunities</p>
</div>
<div className="boxes">
      <p className="date">2018-19</p>
    <h2>Completed Matriculation</h2>
    <p>The Quest High School
Completed matriculation in 2018-2019, eager to explore new educational opportunities</p>
</div>
<div className="boxes">
      <p className="date">2018-19</p>
    <h2>Completed Matriculation</h2>
    <p>The Quest High School
Completed matriculation in 2018-2019, eager to explore new educational opportunities</p>
</div>
            </div>
        </div>
    </div>
   </motion.div>
    </section>
    </>
)
}
export default Resume;