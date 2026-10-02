import { ArrowUpRight, MapPin } from "lucide-react";
import { CampusImage, SectionIntro, TwoColumn } from "../../styles/academics";
import { AccentText, Eyebrow } from "../../styles/home";
import { Container } from "../../styles/layout";
import { programmes } from "../../data/homepage";
import { RevealBlock } from "../animation/RevealBlock";
import { SectionTitle } from "./SectionTitle";

export function AcademicsCampusSections() {
  return (
    <>
      <section id="academics">
        <Container>
          <SectionIntro>
            <SectionTitle
              eyebrow="Academic programmes"
              title={
                <>
                  A curriculum that turns <AccentText>inquiry</AccentText> into
                  intellect.
                </>
              }
              description="A CBSE journey from Grade IV to XII, structured as four chapters of growth, each with its own rhythm, rigour and reward."
            />
            <p className="section-aside">
              Mentors who know the student, not just the syllabus.
            </p>
          </SectionIntro>
          <TwoColumn>
            {programmes.map((programme, index) => (
              <RevealBlock
                as="article"
                key={programme.title}
                delay={index * 0.08}
                className="programme"
              >
                <div className="programme-image">
                  <img
                    src={programme.image}
                    alt={`${programme.title} students at school`}
                    loading="lazy"
                  />
                  <span>{programme.years}</span>
                </div>
                <div className="programme-title">
                  <h3>{programme.title}</h3>
                  <span>0{index + 1}</span>
                </div>
                <p>{programme.description}</p>
                <a className="underlined-link" href="#admissions">
                  Enquire <ArrowUpRight size={15} />
                </a>
              </RevealBlock>
            ))}
          </TwoColumn>
        </Container>
      </section>

      <section id="campus" className="campus-section">
        <Container>
          <RevealBlock className="campus-story">
            <CampusImage
              src="/images/campus.webp"
              alt="A school campus set among green grounds"
              loading="lazy"
            />
            <div className="campus-overlay">
              <Eyebrow>The living campus</Eyebrow>
              <h2>22 acres of the Doon Valley. A campus built for wonder.</h2>
              <a
                href="https://maps.app.goo.gl/maBF8syXueQkw31E6"
                target="_blank"
                rel="noreferrer"
              >
                Explore our location <ArrowUpRight size={16} />
              </a>
            </div>
          </RevealBlock>
          <div className="campus-caption">
            <p>
              Set against the Himalayan foothills, the TIS estate is a
              pollution-free environment where learning moves between classroom,
              field, studio and the quiet of nature.
            </p>
            <div>
              <MapPin size={17} />
              <span>
                Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun – 248011,
                Uttarakhand
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
