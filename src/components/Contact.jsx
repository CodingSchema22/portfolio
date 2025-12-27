import { motion } from "framer-motion";
const Contact = () =>{
    return(
        <>
     <section id="contact">
  <motion.div
    id="cont-2"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div id="contact">
      <div id="full">

        <motion.div
          className="image"
          id="relate"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="img2.jpg" alt="Contact" />
        </motion.div>

        <div className="form">
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Message</label>
            <textarea id="msg" placeholder="Enter your message"></textarea>

            <div className="btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </motion.div>
</section>

        </>
    )
}
// export default Contact
export default Contact;