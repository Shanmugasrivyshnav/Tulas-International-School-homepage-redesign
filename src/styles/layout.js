import styled from "styled-components";
import { motion } from "framer-motion";

export const ProgressBar = styled(motion.div)`
  position: fixed;
  z-index: 100;
  inset: 0 auto auto 0;
  width: 100%;
  height: 3px;
  transform-origin: 0 50%;
  background: var(--coral);
`;

export const CustomCursorRing = styled(motion.div)`
  position: fixed;
  z-index: 120;
  top: 0;
  left: 0;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid var(--coral);
  border-radius: 50%;
  background: rgba(79, 143, 185, 0.12);
  pointer-events: none;
  translate: -50% -50%;
  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--coral);
  }
  @media (pointer: coarse), (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const Container = styled.div`
  width: min(1240px, calc(100% - 72px));
  margin: 0 auto;
  @media (max-width: 760px) {
    width: min(100% - 40px, 600px);
  }
`;

export const Header = styled.header`
  position: fixed;
  z-index: 30;
  inset: 0 0 auto;
  width: 100%;
  color: ${({ $scrolled }) => ($scrolled ? "var(--ink)" : "#fff")};
  border-bottom: ${({ $scrolled }) =>
    $scrolled
      ? "1px solid var(--line)"
      : "1px solid rgba(255, 255, 255, 0.24)"};
  background: ${({ $scrolled }) =>
    $scrolled ? "var(--surface)" : "rgba(24, 40, 51, 0.26)"};
  backdrop-filter: blur(12px);
  transition:
    background 220ms ease,
    color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 8px 24px rgba(24, 40, 51, 0.08)" : "none"};
`;

export const TopNav = styled.nav`
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  > a {
    display: inline-flex;
    align-items: center;
    gap: 11px;
    flex-shrink: 0;
  }
  .brand-name {
    display: flex;
    flex-direction: column;
    font-family: var(--display);
    font-size: 17px;
    line-height: 1.05;
  }
  .brand-name small {
    margin-top: 5px;
    font-family: var(--body);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    opacity: 0.76;
  }
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  @media (max-width: 900px) {
    min-height: 72px;
  }
  @media (max-width: 760px) {
    gap: 12px;
    .brand-name {
      font-size: 15px;
    }
    > a {
      gap: 8px;
    }
    .nav-actions {
      gap: 8px;
    }
    .nav-actions > a {
      display: none;
    }
  }
  @media (max-width: 360px) {
    .brand-name {
      font-size: 13px;
      white-space: nowrap;
    }
    .brand-name small {
      display: none;
    }
    > a {
      gap: 6px;
    }
    .nav-actions {
      gap: 6px;
    }
  }
`;
export const SiteLogo = styled.span``;
/*width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 1px solid currentColor;
  color: inherit;
  font-family: var(--display);
  font-size: 23px;
  font-style: italic;
  @media (max-width: 360px) {
    width: 34px;
    height: 34px;
  }*/

export const MainNav = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(18px, 2.6vw, 38px);
  margin-left: auto;
  margin-right: 12px;
  a {
    position: relative;
    padding: 8px 0;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.9;
  }
  a::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 3px;
    left: 0;
    height: 1px;
    background: var(--coral);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 220ms ease;
  }
  a:hover::after,
  a:focus-visible::after {
    transform: scaleX(1);
  }
  a:hover {
    color: var(--coral);
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const ThemeButton = styled.button`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 1px solid currentColor;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition:
    color 200ms ease,
    background 200ms ease,
    border-color 200ms ease;
  &:hover {
    color: var(--deep);
    background: #fff;
  }
  @media (max-width: 360px) {
    width: 34px;
    height: 34px;
  }
`;

export const Button = styled.a`
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: ${({ $small }) => ($small ? "0 17px" : "0 22px")};
  border: 1px solid var(--coral);
  background: var(--coral);
  color: var(--deep);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15px;
  white-space: nowrap;
  transition:
    background 200ms ease,
    border-color 200ms ease,
    transform 200ms ease;
  svg {
    transition: transform 200ms ease;
  }
  &:hover {
    border-color: var(--coral-dark);
    background: var(--coral-dark);
    transform: translateY(-2px);
  }
  &:hover svg {
    transform: translate(2px, -2px);
  }
  ${({ $small }) => $small && "min-height: 40px;"}
`;

export const MenuButton = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  place-items: center;
  padding: 0;
  border: 1px solid currentColor;
  background: transparent;
  color: inherit;
  cursor: pointer;
  @media (max-width: 900px) {
    display: grid;
  }
  @media (max-width: 360px) {
    width: 36px;
    height: 36px;
  }
`;

export const MobileMenu = styled(motion.div).attrs(({ $open }) => ({
  initial: false,
  animate: $open ? "open" : "closed",
  variants: {
    open: { opacity: 1, height: "auto", visibility: "visible" },
    closed: { opacity: 0, height: 0, visibility: "hidden" },
  },
  transition: { duration: 0.24, ease: "easeOut" },
}))`
  display: none;
  overflow: hidden;
  padding: 0 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  background: var(--deep);
  a:not(${Button}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    font-size: 14px;
  }
  ${Button} {
    width: 100%;
    margin: 18px 0 22px;
  }
  @media (max-width: 900px) {
    display: block;
  }
`;

export const Footer = styled.footer`
  padding: 70px 0 28px;
  background: var(--deep);
  color: #f3f1e8;
  a {
    transition: color 180ms ease;
  }
  a:hover {
    color: var(--coral);
  }
  .footer-brand > a {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: var(--display);
    font-size: 19px;
  }
  .footer-brand > a ${SiteLogo} {
    border-color: var(--coral);
    color: var(--coral);
  }
  .footer-brand > p {
    max-width: 330px;
    margin: 20px 0;
    color: rgba(255, 255, 255, 0.62);
    font-size: 12px;
    line-height: 1.8;
  }
  .social-links {
    display: flex;
    gap: 9px;
  }
  .social-links a {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 50%;
  }
  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 13px;
  }
  .footer-links h3 {
    margin: 4px 0 6px;
    color: var(--coral);
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  .footer-links a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 11px;
    line-height: 1.5;
  }
  .footer-links a svg {
    color: var(--coral);
    flex: 0 0 auto;
  }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    margin-top: 52px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.48);
    font-size: 9px;
  }
  @media (max-width: 760px) {
    padding-top: 54px;
    .footer-bottom {
      flex-direction: column;
      margin-top: 36px;
    }
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.1fr;
  gap: 38px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 38px 28px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;
export const LogoHeader = styled.img`
  width: 75px;
  height: 65px;
  object-fit: contain;
  display: block;
`;
