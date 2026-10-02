import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  min-height: min(820px, 100svh);
  min-height: max(710px, 100svh);
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--deep);
  color: #fff;
  .hero-image-note {
    position: absolute;
    right: max(36px, calc((100vw - 1240px) / 2));
    bottom: 34px;
    display: flex;
    gap: 20px;
    align-items: center;
    color: rgba(255, 255, 255, 0.84);
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .hero-image-note span:first-child {
    color: var(--coral);
  }
  @media (max-width: 760px) {
    min-height: 800px;
    min-height: max(760px, 100svh);
    align-items: flex-end;
    padding-bottom: 74px;
    .hero-image-note {
      display: none;
    }
  }
`;

export const HeroImage = styled.div`
  position: absolute;
  inset: 0 0 0 32%;
  background-image:
    linear-gradient(
      90deg,
      var(--deep) 0%,
      rgba(24, 40, 51, 0.92) 10%,
      rgba(24, 40, 51, 0.42) 46%,
      rgba(24, 40, 51, 0.05) 100%
    ),
    linear-gradient(0deg, rgba(24, 40, 51, 0.18), transparent 40%),
    url("/images/campus.webp");
  background-position:
    center,
    center,
    center 42%;
  background-size: cover;
  transform: scale(1.02);
  animation: hero-enter 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  @keyframes hero-enter {
    from {
      opacity: 0.45;
      transform: scale(1.08);
    }
    to {
      opacity: 1;
      transform: scale(1.02);
    }
  }
  @media (max-width: 760px) {
    inset: 0;
    background-image:
      linear-gradient(
        0deg,
        var(--deep) 7%,
        rgba(24, 40, 51, 0.88) 40%,
        rgba(24, 40, 51, 0.2) 100%
      ),
      url("/images/campus.webp");
    background-position:
      center,
      56% center;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  width: min(720px, 66%);
  padding-top: 105px;
  animation: content-enter 700ms 120ms both;
  @keyframes content-enter {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  h1 {
    max-width: 720px;
    margin: 22px 0 20px;
    font-family: var(--display);
    font-size: 96px;
    font-weight: 500;
    line-height: 0.94;
    letter-spacing: 0;
  }
  > p {
    max-width: 470px;
    margin: 0;
    color: rgba(255, 255, 255, 0.82);
    font-size: 15px;
    line-height: 1.8;
  }
  .hero-actions {
    display: flex;
    align-items: center;
    gap: 26px;
    margin-top: 30px;
  }
  .text-link {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 12px;
    font-weight: 600;
  }
  .text-link svg {
    color: var(--coral);
    transition: transform 180ms ease;
  }
  .text-link:hover svg {
    transform: translateY(3px);
  }
  @media (max-width: 760px) {
    width: 100%;
    padding-top: 100px;
    h1 {
      font-size: 56px;
    }
    > p {
      max-width: 470px;
      font-size: 14px;
    }
    .hero-actions {
      align-items: flex-start;
      flex-direction: column;
      gap: 18px;
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 46px;
    }
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--coral);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.8px;
  line-height: 1.5;
  text-transform: uppercase;
  &::before {
    content: "";
    width: 23px;
    height: 1px;
    background: currentColor;
  }
`;

export const AccentText = styled.em`
  color: var(--coral);
  font-weight: 400;
  font-style: italic;
`;

export const HeroStats = styled.div`
  display: flex;
  gap: clamp(22px, 4vw, 54px);
  margin-top: 45px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.32);
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  strong {
    color: var(--gold);
    font-family: var(--display);
    font-size: 27px;
    font-weight: 500;
  }
  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 9px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
  @media (max-width: 760px) {
    gap: 18px;
    margin-top: 34px;
    strong {
      font-size: 24px;
    }
    span {
      font-size: 8px;
      letter-spacing: 0.45px;
    }
  }
  @media (max-width: 380px) {
    gap: 12px;
  }
`;

export const ImpactBand = styled.section`
  padding: 30px 0 80px;
  background: var(--deep);
  color: #f4f4ed;
  @media (max-width: 760px) {
    padding: 26px 0 58px;
  }
`;

export const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0 0 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.17);
  color: rgba(255, 255, 255, 0.72);
  font-size: 11px;
  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding-top: 31px;
  > * {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  strong {
    color: var(--gold);
    font-family: var(--display);
    font-size: 60px;
    font-weight: 400;
    line-height: 1;
  }
  span {
    margin-top: 13px;
    font-size: 12px;
    font-weight: 600;
  }
  small {
    margin-top: 6px;
    color: rgba(255, 255, 255, 0.62);
    font-size: 11px;
  }
  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px 16px;
  }
`;

export const AboutSection = styled.section`
  background: var(--paper);
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  align-items: center;
  gap: clamp(48px, 8vw, 108px);
  .about-visual {
    position: relative;
    padding: 0 36px 28px 0;
  }
  .about-copy h2 {
    max-width: 600px;
    margin: 19px 0 22px;
    font-family: var(--display);
    font-size: 56px;
    font-weight: 500;
    line-height: 1.06;
  }
  .about-copy > p {
    max-width: 550px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.85;
  }
  .about-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 22px;
    margin: 27px 0;
    color: var(--green);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }
  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    gap: 50px;
    .about-visual {
      max-width: 600px;
    }
    .about-copy h2 {
      font-size: 44px;
    }
  }
  @media (max-width: 520px) {
    .about-copy h2 {
      font-size: 38px;
    }
    .about-visual {
      padding-right: 18px;
    }
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  height: clamp(400px, 48vw, 590px);
  overflow: hidden;
  background: var(--surface-soft);
  &::after {
    content: "";
    position: absolute;
    inset: 50% 0 0;
    background: linear-gradient(transparent, rgba(18, 43, 35, 0.55));
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1);
  ${ImageWrap}:hover & {
    transform: scale(1.035);
  }
`;

export const ImageLabel = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 22px;
  left: 24px;
  color: white;
  font-family: var(--display);
  font-size: 23px;
  font-style: italic;
`;

export const AboutNote = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 0;
  width: min(250px, 64%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 22px;
  background: var(--coral);
  color: #1c352e;
  strong {
    font-family: var(--display);
    font-size: 32px;
    font-weight: 500;
  }
  span {
    font-size: 11px;
    line-height: 1.6;
  }
`;

export const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--coral-dark);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  &::before {
    content: "";
    width: 22px;
    height: 1px;
    background: currentColor;
  }
`;
