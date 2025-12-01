import { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import {
  Hero,
  About,
  Services,
  Skills,
  Experience,
  OtherSkills,
  Projects,
  Contact,
  ScrollUp,
  services,
  skillRows,
  experiences,
  otherSkills,
  projects,
  typingTexts,
} from '../../ui/Home';

export default function HomePage() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [formStatus, setFormStatus] = useState({ text: '', color: '' });
  const messageTimer = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollUp(scrollY >= 350);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 1200,
      delay: 500,
    });

    sr.reveal('.home__perfil, .about__image, .contact__mail', { origin: 'right' });
    sr.reveal(
      '.home__name, .home__info, .about__container, .section__title-1, .skills__header, .about__info, .contact__social, .contact__data',
      { origin: 'left' },
    );
    sr.reveal('.services__card, .projects__card, .experience__card, .skills__rail, .other-skill', { interval: 180 });
  }, []);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const type = () => {
      const current = typingTexts[textIndex];
      const nextText = current.slice(0, charIndex);
      setTypedText(nextText);

      if (!deleting && charIndex === current.length) {
        deleting = true;
        timer = setTimeout(type, 1200);
        return;
      }

      if (deleting && charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
      }

      charIndex = deleting ? charIndex - 1 : charIndex + 1;
      timer = setTimeout(type, deleting ? 60 : 80);
    };

    timer = setTimeout(type, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!formStatus.text) return;
    clearTimeout(messageTimer.current);
    messageTimer.current = setTimeout(() => setFormStatus({ text: '', color: '' }), 3000);
    return () => clearTimeout(messageTimer.current);
  }, [formStatus]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    try {
      const response = await fetch('https://formspree.io/f/mvgpnwje', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setFormStatus({ text: 'Message sent successfully', color: 'green' });
        form.reset();
      } else {
        setFormStatus({ text: 'Failed to send message', color: 'red' });
      }
    } catch (error) {
      setFormStatus({ text: 'Failed to send message', color: 'red' });
    }
  };

  return (
    <>
   

      <main className="main">
        <Hero typedText={typedText} />
        <About />
        <Services services={services} />
        <Skills skillRows={skillRows} />
        <Experience experiences={experiences} />
        <OtherSkills otherSkills={otherSkills} />
        <Projects projects={projects} />
        <Contact formRef={formRef} formStatus={formStatus} onSubmit={handleSubmit} />
      </main>

      <ScrollUp show={showScrollUp} />
    </>
  );
}



