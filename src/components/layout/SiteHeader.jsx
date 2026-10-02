import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import {
  LogoHeader,
  Button,
  Container,
  Header,
  MainNav,
  MenuButton,
  MobileMenu,
  SiteLogo,
  ThemeButton,
  TopNav,
} from "../../styles/layout";
import { navItems } from "../../data/homepage";

export function SiteHeader({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Header $scrolled={isScrolled}>
      <Container>
        <TopNav>
          <a href="#top" aria-label="Tulas International School home">
            <SiteLogo aria-hidden="true">
              <LogoHeader
                src="/images/Tsi-school-Logo-main1.png"
                alt="Tulas International School Logo"
              />
            </SiteLogo>
            <span className="brand-name">
              Tulas International
              <small>School · Dehradun</small>
            </span>
          </a>
          <MainNav aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </MainNav>
          <div className="nav-actions">
            <ThemeButton
              type="button"
              onClick={onThemeToggle}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              aria-pressed={theme === "dark"}
              title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </ThemeButton>
            <Button
              href="https://admission.tis.edu.in/"
              target="_blank"
              rel="noreferrer"
              $small
            >
              Enquire now <ArrowUpRight size={15} />
            </Button>
            <MenuButton
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </MenuButton>
          </div>
        </TopNav>
      </Container>
      <MobileMenu id="mobile-menu" $open={menuOpen} aria-hidden={!menuOpen}>
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={closeMenu}>
            {label} <ArrowUpRight size={16} />
          </a>
        ))}
        <Button href="#admissions" onClick={closeMenu}>
          Admissions <ArrowRight size={16} />
        </Button>
      </MobileMenu>
    </Header>
  );
}
