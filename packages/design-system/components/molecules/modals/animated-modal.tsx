"use client";

import { AnimatePresence, m } from "framer-motion";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@repo/design-system/utils/tw";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  setClose: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({
  children,
  open: controlledOpen,
  setOpen: controlledSetOpen,
  setClose: controlledSetClose,
}: {
  children: ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  setClose?: () => void;
}) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen =
    controlledSetOpen !== undefined ? controlledSetOpen : setInternalOpen;
  const setClose =
    controlledSetClose !== undefined
      ? controlledSetClose
      : () => setOpen(false);

  return (
    <ModalContext.Provider value={{ open, setOpen, setClose }}>
      <div data-lenis-prevent="true">{children}</div>
    </ModalContext.Provider>
  );
};

export const Modal = ({
  children,
  open,
  setOpen,
  setClose,
}: {
  children: ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  setClose?: () => void;
}) => {
  return (
    <ModalProvider open={open} setOpen={setOpen} setClose={setClose}>
      {children}
    </ModalProvider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalTrigger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { setOpen } = useModal();
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
        className,
      )}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  );
};

export const ModalBody = ({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: any;
}) => {
  const modalRef = useRef(null);
  const { setOpen, setClose, open } = useModal();
  useOutsideClick(modalRef, () => {
    setOpen(false);
    setClose();
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <m.div
          layoutId={`modal-wrapper-body-${String(children)}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backdropFilter: "blur(10px)",
          }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
          }}
          transition={{ type: "tween", duration: 0.1, ease: "easeInOut" }}
          style={{
            willChange: "opacity, transform",
            ...style,
          }}
          className="fixed inset-0 h-full w-full flex justify-center items-end md:items-center z-[9999999]"
        >
          <Overlay />

          <m.div
            layoutId={`modal-body-${String(children)}`}
            ref={modalRef}
            className={cn(
              "relative h-fit w-fit bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 rounded-2xl z-50 flex flex-col overflow-hidden",
              className,
            )}
            initial={{ opacity: 0.5, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.5, y: 20 }}
          >
            <CloseIcon />
            {children}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export const ModalContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col flex-1 p-8 md:p-10", className)}>
      {children}
    </div>
  );
};

export const ModalFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-end p-4 bg-gray-100 dark:bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Overlay = ({ className }: { className?: string }) => {
  return (
    <m.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(10px)",
      }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0px)",
      }}
      className={`fixed inset-0 h-full w-full bg-black/50 bg-opacity-50 z-50 ${className}`}
    />
  );
};

const CloseIcon = () => {
  const { setOpen, setClose } = useModal();
  return (
    <button
      onClick={() => {
        setOpen(false);
        setClose();
      }}
      className="absolute z-50 cursor-pointer top-1 right-2 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 text-black transition duration-200 dark:text-white group-hover:scale-125 group-hover:rotate-3"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  );
};

// Hook to detect clicks outside of a component.
// Add it in a separate file, I've added here for simplicity
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function,
) => {
  useEffect(() => {
    const listener = (event: any) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
