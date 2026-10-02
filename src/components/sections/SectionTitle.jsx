import { SectionHeading } from "../../styles/academics";
import { AccentText, Eyebrow } from "../../styles/home";

export function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <SectionHeading $centered={centered}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </SectionHeading>
  );
}

export { AccentText };
