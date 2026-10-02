import { useEffect, useState } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { CustomCursorRing } from "../../styles/layout";

export function CustomCursor() {
  const pointerX = useMotionValue(-40);
  const pointerY = useMotionValue(-40);
  const x = useSpring(pointerX, { stiffness: 520, damping: 38, mass: 0.35 });
  const y = useSpring(pointerY, { stiffness: 520, damping: 38, mass: 0.35 });
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer || reducedMotion) return undefined;
    document.body.dataset.customCursor = "true";

    const onPointerMove = (event) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setVisible(true);
    };
    const onPointerOver = (event) => {
      const target = event.target;
      setHovering(
        target instanceof Element &&
          Boolean(target.closest("a, button, [data-cursor-target]")),
      );
    };
    const onPointerLeave = () => {
      setVisible(false);
      setHovering(false);
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    return () => {
      delete document.body.dataset.customCursor;
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );
    };
  }, [pointerX, pointerY, reducedMotion]);

  return (
    <CustomCursorRing
      className="custom-cursor"
      aria-hidden="true"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0, scale: hovering ? 1.65 : 1 }}
      transition={{ opacity: { duration: 0.16 }, scale: { duration: 0.2 } }}
    >
      <span />
    </CustomCursorRing>
  );
}
