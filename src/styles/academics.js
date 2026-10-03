import styled from "styled-components";

export const SectionHeading = styled.div`
  ${({ $centered }) =>
    $centered && "max-width: 760px; margin: 0 auto; text-align: center;"}
  h2 {
    margin: 18px 0 16px;
    color: var(--ink);
    font-family: var(--display);
    font-size: 58px;
    font-weight: 500;
    line-height: 1.06;
  }
  p {
    max-width: 590px;
    margin: 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.8;
  }
  ${({ $centered }) => $centered && "p { margin-inline: auto; }"}
  @media (max-width: 760px) {
    h2 {
      font-size: 42px;
    }
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 36px;
    }
  }
`;

export const SectionIntro = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 50px;
  .section-aside {
    max-width: 220px;
    margin: 0 0 5px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.7;
    text-align: right;
  }
  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 18px;
    .section-aside {
      text-align: left;
    }
  }
`;

export const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 27px;
  .programme {
    min-width: 0;
  }
  .programme-image {
    position: relative;
    aspect-ratio: 3 / 3.7;
    overflow: hidden;
    background: var(--surface-soft);
  }
  .programme-image::after {
    content: "";
    position: absolute;
    inset: 40% 0 0;
    background: linear-gradient(transparent, rgba(15, 35, 28, 0.35));
    pointer-events: none;
  }
  .programme-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 600ms ease;
  }
  .programme:hover .programme-image img,
  .programme:active .programme-image img,
  .programme:focus-within .programme-image img {
    transform: scale(1.045);
  }
  .programme-image > span {
    position: absolute;
    z-index: 1;
    top: 13px;
    left: 13px;
    padding: 7px 9px;
    background: var(--paper);
    color: var(--ink);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
  .programme-title {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 19px;
  }
  .programme-title h3 {
    margin: 0;
    font-family: var(--display);
    font-size: 26px;
    font-weight: 500;
  }
  .programme-title > span {
    color: var(--coral-dark);
    font-size: 11px;
  }
  .programme > p {
    min-height: 98px;
    margin: 10px 0 14px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.75;
  }
  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 34px 20px;
    .programme > p {
      min-height: auto;
    }
  }
  @media (max-width: 480px) {
    gap: 28px 14px;
    .programme-title h3 {
      font-size: 22px;
    }
    .programme > p {
      font-size: 11px;
    }
  }
`;

export const CampusImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 50%;
`;
