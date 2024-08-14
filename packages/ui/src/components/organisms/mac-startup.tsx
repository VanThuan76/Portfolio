"use client";
import { m } from "framer-motion";

const MacStartupScreen = ({
  isActive,
  progress,
  logo,
}: {
  isActive: boolean;
  progress: number;
  logo: string;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
    inactive: {
      opacity: 0,
      height: 0,
      y: "-100vh",
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const logoVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 1, type: "spring" } },
  };

  const userNameVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } },
  };

  const progressBarVariants = {
    initial: { width: 0 },
    animate: {
      width: `${progress}%`,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };

  return (
    <m.div
      className="startup-screen"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? "visible" : "inactive"}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#555",
        color: "#fff",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <m.img
        className="logo"
        variants={logoVariants}
        width={150}
        height={150}
        src={logo}
        alt="Logo"
      />
      <m.span className="user-name" variants={userNameVariants}>
        Austin Vu
      </m.span>
      <m.div
        className="outer-bar mt-14 w-64 h-1 bg-gray-500 rounded-full overflow-hidden"
        style={{ boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)" }}
      >
        <m.div
          className="inner-bar h-full bg-white rounded-full"
          variants={progressBarVariants}
          initial="initial"
          animate="animate"
        />
      </m.div>
    </m.div>
  );
};

export default MacStartupScreen;
