import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Container, Footer, FooterGrid, SiteLogo } from "../../styles/layout";

export function SiteFooter() {
  return (
    <Footer>
      <Container>
        <FooterGrid>
          <div className="footer-brand">
            <a href="#top">
              <SiteLogo aria-hidden="true">T</SiteLogo>
              <span>Tulas International School</span>
            </a>
            <p>
              A co-educational CBSE boarding and day school in Dehradun,
              established 2012 under the aegis of the Rishabh Educational Trust.
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/tulasinternationalschool/"
                aria-label="Tulas on Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/tulasinternationalschool/"
                aria-label="Tulas on Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Explore</h3>
            <a href="#about">About TIS</a>
            <a href="#academics">Academic programmes</a>
            <a href="#campus">Campus & facilities</a>
            <a href="#sports">Sports & activities</a>
          </div>
          <div className="footer-links">
            <h3>Admissions</h3>
            <a href="#admissions">Enquire now</a>
            <a
              href="https://admission.tis.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              Apply online
            </a>
            <a href="tel:0135-2699444">Admissions helpline</a>
            <a href="#campus">Book a campus visit</a>
          </div>
          <div className="footer-links">
            <h3>Get in touch</h3>
            <a href="mailto:info@tis.edu.in">
              <Mail size={15} /> info@tis.edu.in
            </a>
            <a href="tel:0135-2699444">
              <Phone size={15} /> 0135-2699444
            </a>
            <a
              href="https://maps.app.goo.gl/maBF8syXueQkw31E6"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={15} /> Dehradun, Uttarakhand
            </a>
          </div>
        </FooterGrid>
        <div className="footer-bottom">
          <span>© 2026 Tulas International School. All rights reserved.</span>
          <span>CBSE · Boarding & day school · Grade IV-XII</span>
        </div>
      </Container>
    </Footer>
  );
}
