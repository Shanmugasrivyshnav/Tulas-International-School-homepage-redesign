import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  AboutGrid,
  AboutImage,
  AboutNote,
  AboutSection,
  AccentText,
  Eyebrow,
  FeatureGrid,
  Hero,
  HeroContent,
  HeroImage,
  HeroStats,
  ImageLabel,
  ImageWrap,
  ImpactBand,
  SectionLabel,
  TopLine,
} from "../../styles/home";
import { Button, Container } from "../../styles/layout";
import { RevealBlock } from "../animation/RevealBlock";

export function WelcomeSections() {
  return (
    <>
      <Hero id="top">
        <HeroImage
          role="img"
          aria-label="Students learning together on a bright school day"
        />
        <Container>
          <HeroContent>
            <Eyebrow>Established 2012 · Dehradun</Eyebrow>
            <h1>
              A wider world
              <br />
              <AccentText>starts here.</AccentText>
            </h1>
            <p>
              A co-educational CBSE boarding and day school where bright minds
              find room to grow, on a 22-acre campus in the Doon Valley.
            </p>
            <div className="hero-actions">
              <Button href="https://admission.tis.edu.in/" target="_blank">
                Begin your enquiry <ArrowUpRight size={17} />
              </Button>
              <a className="text-link" href="#about">
                Get to know Tulas <ArrowDown size={15} />
              </a>
            </div>
            <HeroStats>
              <div>
                <strong>22</strong>
                <span>acre campus</span>
              </div>
              <div>
                <strong>16+</strong>
                <span>Olympic sports</span>
              </div>
              <div>
                <strong>6:1</strong>
                <span>student–teacher ratio</span>
              </div>
            </HeroStats>
          </HeroContent>
        </Container>
        <div className="hero-image-note">
          <span>01 / 06</span>
          <span>Learning without limits</span>
        </div>
      </Hero>

      <ImpactBand>
        <Container>
          <TopLine>
            <span>Education, with a little more room to become.</span>
            <span>CBSE · Grade IV–XII</span>
          </TopLine>
          <FeatureGrid>
            <RevealBlock>
              <strong>22</strong>
              <span>Acre pollution-free campus</span>
              <small>Set in the Doon Valley foothills</small>
            </RevealBlock>
            <RevealBlock delay={0.08}>
              <strong>16+</strong>
              <span>Olympic sports</span>
              <small>From archery to equestrian</small>
            </RevealBlock>
            <RevealBlock delay={0.16}>
              <strong>6:1</strong>
              <span>Student–teacher ratio</span>
              <small>Personal, attentive mentoring</small>
            </RevealBlock>
            <RevealBlock delay={0.24}>
              <strong>24/7</strong>
              <span>Medical assistance</span>
              <small>Round-the-clock care on campus</small>
            </RevealBlock>
          </FeatureGrid>
        </Container>
      </ImpactBand>

      <AboutSection id="about">
        <Container>
          <AboutGrid>
            <RevealBlock className="about-visual">
              <ImageWrap>
                <AboutImage
                  src="/images/about.webp"
                  alt="Students learning together in a sunlit classroom"
                  loading="lazy"
                />
                <ImageLabel>Room to think. Space to grow.</ImageLabel>
              </ImageWrap>
              <AboutNote>
                <strong>2012</strong>
                <span>
                  Founded under the aegis of the Rishabh Educational Trust.
                </span>
              </AboutNote>
            </RevealBlock>
            <RevealBlock className="about-copy">
              <SectionLabel>Why Tulas</SectionLabel>
              <h2>A school that sees the person, not just the potential.</h2>
              <p>
                Tulas International School was established in 2012 under the
                aegis of the Rishabh Educational Trust, built around the belief
                that the classroom is only the beginning.
              </p>
              <p>
                On a 22-acre campus in the Doon Valley, academic rigour and the
                quiet disciplines of sport, art and community come together as
                one education. Every student is encouraged to grow as an
                individual.
              </p>
              <div className="about-meta">
                <span>CBSE · Grade IV–XII</span>
                <span>Co-educational boarding & day school</span>
              </div>
              <a className="underlined-link" href="#academics">
                Discover programmes <ArrowUpRight size={17} />
              </a>
            </RevealBlock>
          </AboutGrid>
        </Container>
      </AboutSection>
    </>
  );
}
