import { GlobalStyle, Page } from "./styles/site";
import { ProgressBar } from "./styles/layout";
import { CustomCursor } from "./components/animation/CustomCursor";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useThemePreference } from "./hooks/useThemePreference";
import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { AcademicsCampusSections } from "./components/sections/AcademicsCampusSections";
import { SportsRecognitionSections } from "./components/sections/SportsRecognitionSections";
import { StoriesAdmissionsSections } from "./components/sections/StoriesAdmissionsSections";
import { WelcomeSections } from "./components/sections/WelcomeSections";

function App() {
  const { theme, toggleTheme } = useThemePreference();
  const scrollProgress = useScrollProgress();

  return (
    <Page>
      <GlobalStyle />
      <ProgressBar style={{ scaleX: scrollProgress }} aria-hidden="true" />
      <CustomCursor />
      <SiteHeader theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <WelcomeSections />
        <AcademicsCampusSections />
        <SportsRecognitionSections />
        <StoriesAdmissionsSections />
      </main>
      <SiteFooter />
    </Page>
  );
}

export default App;
