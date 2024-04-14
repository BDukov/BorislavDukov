import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import "./Projects.css";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="projects">
        <motion.p
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          id="headline"
        >
          Some of my lastest work
        </motion.p>

        <div className="container">
          <motion.article
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <div className="image-container">
              <img src="./Projects/dicheva-home.png" alt="" />
            </div>
            <h3>Nadezhda Dicheva</h3>
            <p>Portfolio Website</p>
          </motion.article>

          <motion.article
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
          >
            <div className="image-container">
              <img src="./Projects/honey-app.png" alt="" />
            </div>
            <h3>Honey</h3>
            <p>Blog</p>
          </motion.article>

          <motion.article
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
            }}
          >
            <div className="image-container">
              <img src="./Projects/Plan B - Contacts.png" alt="" />
            </div>
            <h3>PlanB Web Services</h3>
            <p>Portfolio Website</p>
          </motion.article>
        </div>
      </div>
    </>
  );
}
