import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  RecognitionGrid,
  SportButton,
  SportGrid,
  SportsLayout,
  SportsVisual,
} from "../../styles/sports";
import { Container } from "../../styles/layout";
import { people, rankings, sportImages, sports } from "../../data/homepage";
import { RevealBlock } from "../animation/RevealBlock";
import { AccentText, SectionTitle } from "./SectionTitle";

export function SportsRecognitionSections() {
  const [activeSport, setActiveSport] = useState("Football");

  return (
    <>
      <section id="sports">
        <Container>
          <SportsLayout>
            <div className="sports-intro">
              <SectionTitle
                eyebrow="Sport & discipline"
                title={
                  <>
                    Not just a facility. <AccentText>A foundation.</AccentText>
                  </>
                }
                description="16+ curated Olympic sports bring joy and discipline in equal measure, with space to find a game that feels like yours."
              />
              <SportsVisual>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSport}
                    src={sportImages[activeSport].src}
                    alt={sportImages[activeSport].alt}
                    initial={{ opacity: 0, scale: 1.035 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.38, ease: "easeOut" }}
                    loading="lazy"
                  />
                </AnimatePresence>
                <span>{activeSport}</span>
              </SportsVisual>
            </div>
            <div className="sports-picker">
              <div className="sports-heading">
                <span>Find your field</span>
                <span>16 sports</span>
              </div>
              <SportGrid>
                {sports.map((sport) => (
                  <SportButton
                    type="button"
                    key={sport}
                    $active={activeSport === sport}
                    aria-pressed={activeSport === sport}
                    onClick={() => setActiveSport(sport)}
                  >
                    {sport}
                    <ArrowUpRight size={14} />
                  </SportButton>
                ))}
              </SportGrid>
              <p className="sports-caption" aria-live="polite">
                {activeSport} selected · a representative list of sports offered
                at TIS.
              </p>
            </div>
          </SportsLayout>
        </Container>
      </section>

      <section id="recognition" className="recognition-section">
        <Container>
          <RevealBlock>
            <SectionTitle
              centered
              eyebrow="Recognition"
              title={
                <>
                  Among India’s finest{" "}
                  <AccentText>boarding schools.</AccentText>
                </>
              }
              description="Independent recognition of TIS across Dehradun, Uttarakhand, North India and the nation."
            />
          </RevealBlock>
          <RecognitionGrid>
            {rankings.map(([rank, place, award], index) => (
              <RevealBlock key={place} delay={index * 0.08}>
                <strong>{rank}</strong>
                <span>{place}</span>
                <p>{award}</p>
              </RevealBlock>
            ))}
          </RecognitionGrid>
          <div className="people-heading">
            <span className="eyebrow">Influential personalities on campus</span>
            <h3>Mentored by champions, visited by legends.</h3>
          </div>
          <div className="people-grid">
            {people.map(([name, achievement], index) => (
              <RevealBlock key={name} delay={(index % 3) * 0.06}>
                <h4>{name}</h4>
                <p>{achievement}</p>
              </RevealBlock>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
