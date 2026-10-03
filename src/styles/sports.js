import styled from "styled-components";

export const SportsLayout = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  gap: clamp(40px, 7vw, 96px);
  .sports-intro {
    min-width: 0;
  }
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const SportsVisual = styled.div`
  position: relative;
  height: clamp(310px, 34vw, 460px);
  margin-top: 38px;
  overflow: hidden;
  background: var(--surface-soft);
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: opacity, transform;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 50% 0 0;
    background: linear-gradient(transparent, rgba(17, 39, 31, 0.7));
  }
  span {
    position: absolute;
    z-index: 1;
    bottom: 19px;
    left: 22px;
    color: #fff;
    font-family: var(--display);
    font-size: 25px;
  }
  @media (max-width: 520px) {
    height: 280px;
  }
`;

export const SportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
`;

export const SportButton = styled.button`
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 16px;
  border: 0;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: ${({ $active }) => ($active ? "var(--green)" : "transparent")};
  color: ${({ $active }) => ($active ? "var(--paper)" : "var(--ink)")};
  cursor: pointer;
  text-align: left;
  font-size: 14px;
  transition:
    background 180ms ease,
    color 180ms ease;
  svg {
    color: var(--coral);
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 180ms ease;
    flex: 0 0 auto;
  }
  &:hover svg,
  &:focus-visible svg,
  &:active svg {
    opacity: 1;
  }
  &:hover,
  &:focus-visible,
  &:active {
    background: var(--surface-soft);
    color: var(--ink);
  }
  ${({ $active }) =>
    $active &&
    "&:hover, &:focus-visible, &:active { background: var(--green); color: var(--paper); }"}
`;

export const RecognitionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 56px;
  border: 1px solid var(--line);
  > * {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-right: 1px solid var(--line);
    text-align: center;
  }
  > *:last-child {
    border-right: 0;
  }
  strong {
    color: var(--coral-dark);
    font-family: var(--display);
    font-size: 51px;
    font-weight: 500;
  }
  span {
    margin-top: 7px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  }
  p {
    max-width: 190px;
    margin: 11px 0 0;
    color: var(--muted);
    font-size: 10px;
    line-height: 1.6;
  }
  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    > *:nth-child(2) {
      border-right: 0;
    }
    > *:nth-child(-n + 2) {
      border-bottom: 1px solid var(--line);
    }
  }
`;
