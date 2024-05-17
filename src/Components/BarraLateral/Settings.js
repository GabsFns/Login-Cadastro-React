import { MdOutlineContactSupport } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { motion } from "framer-motion";
import styles from "../../styles/AbaConfig.module.css";

function Settings() {
  const AbaConfig = [
    {
      icon: <MdOutlineContactSupport size={80} />,
      title: "Rules",
      description:
        "Stay informed about the rules and guidelines to ensure a safe and enjoyable experience for all users. Read carefully to avoid violations.",
    },
    {
      icon: <MdOutlineSupportAgent size={80} />,
      title: "Contact Support",
      description:
        "Need help? Contact our technical support to resolve any issues or questions you may have. We're here to assist you!",
    },
    {
      icon: <AiFillCheckCircle size={80} />,
      title: "Help | Support and Guidance",
      description:
        "Find answers to your questions and learn how to use all available features. The help section provides tutorials, FAQs, and helpful tips.",
    },
    {
      icon: <AiOutlineBars size={80} />,
      title: "Environment Settings",
      description:
        "Customize your environment settings according to your preferences. Modify appearance options, notifications, and other parameters to make your experience more enjoyable.",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -10,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.1, duration: 0.5 },
      }}
      exit={{
        opacity: 0,
        x: 30,
        transition: { duration: 0.1 },
      }}
    >
      <div className={styles.LayoutArray}>
        {AbaConfig.map((item, index) => (
          <motion.div
            key={index}
            className={styles.LayoutAbaConfig}
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3 + index * 0.25, duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              x: 30,
              transition: { duration: 0.3 },
            }}
          >
            <figure>{item.icon}</figure>
            <div className={styles.AbaConfigTitle}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
export default Settings;
