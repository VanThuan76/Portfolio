"use client";
import { motion, m } from "framer-motion";

const MacSleepScreen = ({
  isActive,
  logo,
  handleSuccess,
  swiped,
  setSwiped,
}: {
  isActive: boolean;
  logo: string;
  swiped: boolean;
  handleSuccess: any;
  setSwiped: any;
}) => {
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { y: number } },
  ) => {
    if (info.offset.y < -50) {
      setSwiped(true);
      setTimeout(() => {
        handleSuccess();
      }, 1000);
    }
  };

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

  const swipeBarVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1.3 },
    },
  };

  return (
    <motion.div
      className="sleep-screen"
      variants={containerVariants}
      initial="hidden"
      animate={swiped ? "inactive" : isActive ? "visible" : "hidden"}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1001,
        overflow: "hidden",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
      <motion.div
        className="swipe-bar"
        variants={swipeBarVariants}
        drag="y"
        dragConstraints={{ top: 0, bottom: 100 }}
        onDragEnd={handleDragEnd}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          width: "80px",
          height: "5px",
          backgroundColor: "#fff",
          borderRadius: "2.5px",
          position: "absolute",
          bottom: "50px",
          cursor: "grab",
        }}
      />
    </motion.div>
  );
};

export default MacSleepScreen;
