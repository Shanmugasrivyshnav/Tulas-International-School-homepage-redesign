import { Reveal } from "../../styles/animation";

export function RevealBlock({ children, delay = 0, ...props }) {
  return (
    <Reveal
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Reveal>
  );
}
