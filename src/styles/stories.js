import styled from "styled-components";

export const StoryButton = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: 28px 1fr 16px;
  align-items: center;
  gap: 12px;
  padding: 17px 16px;
  border: 0;
  border-left: 2px solid
    ${({ $active }) => ($active ? "var(--coral)" : "transparent")};
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,0.08)" : "transparent"};
  color: ${({ $active }) => ($active ? "#fff" : "rgba(255,255,255,0.62)")};
  cursor: pointer;
  text-align: left;
  font-size: 12px;
  transition:
    background 180ms ease,
    color 180ms ease;
  > span {
    color: var(--coral);
    font-family: var(--display);
    font-size: 14px;
  }
  > svg {
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 180ms ease;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
  }
`;

export const QuotePanel = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: clamp(40px, 7vw, 100px);
  align-items: center;
  padding: clamp(36px, 7vw, 82px);
  background: var(--deep);
  color: #fff;
  .story-copy blockquote {
    max-width: 700px;
    margin: 24px 0 22px;
    font-family: var(--display);
    font-size: 46px;
    font-weight: 400;
    line-height: 1.17;
  }
  .story-copy p {
    max-width: 600px;
    color: rgba(255, 255, 255, 0.68);
    font-size: 13px;
    line-height: 1.8;
  }
  .story-copy > div > span {
    display: block;
    margin-top: 19px;
    color: var(--coral);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 32px 24px;
    .story-copy blockquote {
      font-size: 34px;
    }
  }
`;

export const AdmissionsSection = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 40px;
  overflow: hidden;
  padding: clamp(36px, 6vw, 76px);
  background: var(--deep);
  color: #fff;
  &::after {
    content: "";
    position: absolute;
    top: -160px;
    right: 8%;
    width: 400px;
    height: 400px;
    border: 1px solid rgba(255, 255, 255, 0.13);
    border-radius: 50%;
    box-shadow:
      0 0 0 45px rgba(255, 255, 255, 0.025),
      0 0 0 90px rgba(255, 255, 255, 0.02);
    pointer-events: none;
  }
  > div {
    position: relative;
    z-index: 1;
  }
  h2 {
    max-width: 660px;
    margin: 17px 0;
    font-family: var(--display);
    font-size: 60px;
    font-weight: 500;
    line-height: 1.03;
  }
  p {
    max-width: 570px;
    margin: 0;
    color: rgba(255, 255, 255, 0.73);
    font-size: 13px;
    line-height: 1.8;
  }
  .admissions-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  .phone-link {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-size: 13px;
  }
  .phone-link svg {
    color: var(--coral);
  }
  .admissions-actions > span {
    color: rgba(255, 255, 255, 0.58);
    font-size: 10px;
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 26px;
    h2 {
      font-size: 42px;
    }
    .admissions-actions {
      align-items: flex-start;
    }
  }
`;
