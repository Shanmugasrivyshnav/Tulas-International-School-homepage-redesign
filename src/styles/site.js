import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'DM Sans', sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: var(--ink);
    background: var(--paper);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    --paper: #f4f2eb;
    --surface: #fbfcf9;
    --surface-soft: #e4ece8;
    --ink: #1c2933;
    --muted: #66746f;
    --line: #F54F13;
    --green: #476e67;
    --deep: #182833;
    --coral: #AACC00;
    --coral-dark: #F54F1B;
    --gold: #d8b56d;
    --display: 'Fraunces', Georgia, serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --body: 'DM Sans', sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  :root[data-theme='dark'] {
    color-scheme: dark;
    --paper: #111a20;
    --surface: #1a272d;
    --surface-soft: #243740;
    --ink: #eeebe9;
    --muted: #b1bdb9;
    --line: rgba(28, 41, 51, 0.16);
    --green: #9cb9ad;
    --deep: #0f171d;
    --coral: #AACC00;
    --coral-dark: #F54F1B;
    --gold: #e1c584;
  }

  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { min-width: 0; min-height: 100%; margin: 0; }
  body { background: var(--paper); color: var(--ink); font-family: var(--body); font-size: 16px; transition: background 300ms ease, color 300ms ease; }
  body, button, a { -webkit-tap-highlight-color: transparent; }
  button, input { font: inherit; }
  a { color: inherit; text-decoration: none; }
  button { color: inherit; }
  img { display: block; max-width: 100%; }
  section[id] { scroll-margin-top: 96px; }
  @media (pointer: fine) {
    body[data-custom-cursor="true"],
    body[data-custom-cursor="true"] a,
    body[data-custom-cursor="true"] button { cursor: none !important; }
  }
  ::selection { color: #fff; background: var(--coral-dark); }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { scroll-behavior: auto !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
  }
`;

export const Page = styled.div`
  min-height: 100vh;
  overflow: clip;
  background: var(--paper);
  color: var(--ink);
  transition:
    background 300ms ease,
    color 300ms ease;

  .underlined-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--line);
    color: var(--ink);
    font-size: 15px;
    font-weight: 700;
  }
  .underlined-link svg {
    color: var(--coral-dark);
    transition: transform 180ms ease;
  }
  .underlined-link:hover svg {
    transform: translate(2px, -2px);
  }
  .campus-section {
    background: var(--surface-soft);
  }
  .campus-story {
    position: relative;
    height: clamp(420px, 58vw, 650px);
    overflow: hidden;
    background: var(--deep);
    color: #fff;
  }
  .campus-story::after {
    content: "";
    position: absolute;
    inset: 25% 0 0;
    background: linear-gradient(
      0deg,
      rgba(13, 35, 28, 0.86),
      rgba(13, 35, 28, 0)
    );
  }
  .campus-overlay {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0;
    left: 0;
    padding: clamp(28px, 6vw, 70px);
  }
  .campus-overlay h2 {
    max-width: 720px;
    margin: 18px 0 17px;
    font-family: var(--display);
    font-size: 58px;
    font-weight: 500;
    line-height: 1.04;
  }
  .campus-overlay > a {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
  }
  .campus-overlay > a svg {
    color: var(--coral);
  }
  .campus-caption {
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    gap: 50px;
    padding-top: 24px;
  }
  .campus-caption > p {
    max-width: 660px;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.8;
  }
  .campus-caption > div {
    display: flex;
    align-items: flex-start;
    gap: 11px;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.7;
  }
  .campus-caption svg {
    color: var(--coral-dark);
    flex: 0 0 auto;
  }
  .sports-heading {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 14px;
    font-size: 15px;
    font-weight: 700;
  }
  .sports-heading > span:last-child {
    color: var(--muted);
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .sports-caption {
    margin: 13px 0 0;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.6;
  }
  .recognition-section {
    background: var(--surface-soft);
  }
  .people-heading {
    margin: 88px 0 28px;
    text-align: center;
  }
  .people-heading h3 {
    max-width: 700px;
    margin: 14px auto 0;
    font-family: var(--display);
    font-size: 42px;
    font-weight: 500;
    line-height: 1.12;
  }
  .people-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
  }
  .people-grid > * {
    min-height: 142px;
    padding: 23px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .people-grid h4 {
    margin: 0 0 9px;
    font-family: var(--display);
    font-size: 20px;
    font-weight: 500;
  }
  .people-grid p {
    color: var(--muted);
    font-size: 15px;
    line-height: 1.65;
  }
  .stories-section {
    background: var(--paper);
  }
  .story-tabs {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  :focus-visible {
    outline: 2px solid var(--coral);
    outline-offset: 3px;
  }

  main > section {
    padding: 112px 0;
  }
  main > #top {
    padding: 0;
  }
  main > #admissions {
    padding: 28px 0 112px;
  }

  @media (max-width: 760px) {
    .hero-image-note {
      display: none;
    }
    .campus-overlay h2 {
      font-size: 34px;
    }
    .people-heading h3 {
      font-size: 34px;
    }
    .campus-caption {
      grid-template-columns: 1fr;
      gap: 14px;
    }
    .people-heading {
      margin-top: 62px;
    }
    .people-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .people-grid > * {
      padding: 18px 14px;
    }
    main > section {
      padding: 76px 0;
    }
    main > #top {
      padding: 0;
    }
    main > #admissions {
      padding: 10px 0 76px;
    }
  }
  @media (max-width: 460px) {
    .people-grid {
      grid-template-columns: 1fr;
    }
  }
`;
