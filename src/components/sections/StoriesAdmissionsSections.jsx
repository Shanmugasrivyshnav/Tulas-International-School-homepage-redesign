import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { AccentText, Eyebrow } from "../../styles/home";
import { Button, Container } from "../../styles/layout";
import {
  AdmissionsSection,
  QuotePanel,
  StoryButton,
} from "../../styles/stories";
import { stories } from "../../data/homepage";

export function StoriesAdmissionsSections() {
  const [activeStory, setActiveStory] = useState(0);
  const selectedStory = stories[activeStory];

  return (
    <>
      <section className="stories-section">
        <Container>
          <QuotePanel>
            <div className="story-copy" aria-live="polite">
              <Eyebrow>Voices from Tulas</Eyebrow>
              <motion.div
                key={activeStory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote>{selectedStory.text}</blockquote>
                <p>{selectedStory.detail}</p>
                <span>— {selectedStory.label}</span>
              </motion.div>
            </div>
            <div className="story-tabs" aria-label="School stories">
              {stories.map((story, index) => (
                <StoryButton
                  key={story.label}
                  type="button"
                  $active={activeStory === index}
                  aria-pressed={activeStory === index}
                  onClick={() => setActiveStory(index)}
                >
                  <span>0{index + 1}</span>
                  {story.label}
                  <ArrowUpRight size={16} />
                </StoryButton>
              ))}
            </div>
          </QuotePanel>
        </Container>
      </section>

      <section id="admissions">
        <Container>
          <AdmissionsSection>
            <div>
              <Eyebrow>Admissions open</Eyebrow>
              <h2>
                Begin the Tulas <AccentText>journey.</AccentText>
              </h2>
              <p>
                Admissions are open for Grade IV–XII. Enquire today or book a
                campus visit to experience the 22-acre estate and meet the
                people who make TIS home.
              </p>
            </div>
            <div className="admissions-actions">
              <Button
                href="https://admission.tis.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                Apply online <ArrowUpRight size={17} />
              </Button>
              <a href="tel:+91-9837983791" className="phone-link">
                <Phone size={16} /> +91-9837983791
              </a>
              <span>Admissions helpline · 0135-2699444</span>
            </div>
          </AdmissionsSection>
        </Container>
      </section>
    </>
  );
}
