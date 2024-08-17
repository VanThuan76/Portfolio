"use client";
import { useEffect } from 'react'
import { m } from "framer-motion";

const MacLaunchPadScreen = ({
  isActive,
  applications,
}: {
  isActive: boolean;
  applications: [{ name: string; image: string }];
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

  const imageVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 1, type: "spring" } },
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isActive]);

  return (
    <m.div
      className="sleep-screen"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <m.div className="absolute top-10">Search</m.div>
      {applications.map((application) => {
        return (
          <m.div
            className="app"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", damping: 10, stiffness: 200 }}
            key={application.name}
          >
            <m.img
              className="image"
              variants={imageVariants}
              width={50}
              height={50}
              src={application.image}
              alt="Logo"
            />
            <m.span className="name">{application.name}</m.span>
          </m.div>
        );
      })}
    </m.div>
  );
};

export default MacLaunchPadScreen;
