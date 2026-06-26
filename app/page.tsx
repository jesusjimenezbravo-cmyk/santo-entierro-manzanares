"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Accessibility,
  CalendarDays,
  ChevronRight,
  Church,
  Clock3,
  HeartHandshake,
  Image as ImageIcon,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ScrollText,
  Shield,
  Sparkle,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtOria0MHBSZKDUI0qbLhs7hcI0sqRvKMBV-UtOWGBVZncyw/viewform?usp=header";

const FACEBOOK_URL = "https://www.facebook.com/santoentierromanzanares";

const GOOD_FRIDAY_DATE = new Date("2027-03-26T00:00:00");

function getDaysUntilGoodFriday() {
  const today = new Date();
  const diff = GOOD_FRIDAY_DATE.getTime() - today.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

const heroImages = [
  { src: "/galeria/virgen-soledad.jpg", alt: "Nuestra Señora de la Soledad" },
  { src: "/galeria/cristo-yacente.jpg", alt: "Santo Entierro" },
];

const galleryImages = [
  {
    src: "/galeria/virgen-soledad.jpg",
    title: "Nuestra Señora de la Soledad",
    description:
      "Imagen titular mariana de la hermandad, signo de recogimiento, dolor sereno y esperanza cristiana.",
  },
  {
    src: "/galeria/cristo-yacente.jpg",
    title: "Santo Entierro",
    description:
      "Cristo yacente, centro devocional de la hermandad y misterio que acompaña la estación de penitencia del Viernes Santo.",
  },
  {
    src: "/escudo.png",
    title: "Escudo de la Hermandad",
    description:
      "Símbolo de identidad, pertenencia y memoria cofrade de la Hermandad del Santo Entierro y Nuestra Señora de la Soledad.",
  },
];

const events = [
  {
    date: "Cuaresma",
    title: "Cultos preparatorios",
    description:
      "Convocatorias, celebraciones y actos de preparación espiritual previos a la Semana Santa, vividos desde el recogimiento, la oración y la vida de hermandad.",
  },
  {
    date: "Viernes Santo",
    title: "Estación de penitencia",
    description:
      "Información oficial sobre horarios, recorrido, organización y avisos para acompañar con respeto y solemnidad la salida procesional de la hermandad.",
  },
  {
    date: "Durante todo el año",
    title: "Vida de hermandad",
    description:
      "Cabildos, encuentros, actividades, avisos y comunicaciones dirigidas a hermanos, devotos y fieles de Manzanares.",
  },
];

const announcements = [
  {
    date: "Próximamente",
    title: "Cultos y convocatorias",
    text: "La hermandad comunicará en este espacio sus cultos, convocatorias, horarios y avisos oficiales.",
  },
  {
    date: "Información oficial",
    title: "Vida de hermandad",
    text: "Los hermanos y devotos podrán consultar aquí la información relevante de la vida de hermandad.",
  },
  {
    date: "Tablón digital",
    title: "Avisos importantes",
    text: "Este tablón digital nace para conservar una comunicación clara, solemne y ordenada durante todo el año.",
  },
];

type YoungCalendarEvent = {
  date: string;
  title: string;
  description: string;
  location: string;
};

const youngCalendarYear = 2026;

const youngCalendarEvents: YoungCalendarEvent[] = [
  {
    date: "2026-02-14",
    title: "Convivencia del Grupo Joven",
    description:
      "Tarde de convivencia para conocerse, compartir ideas y preparar actividades de Cuaresma.",
    location: "Casa de Hermandad",
  },
  {
    date: "2026-03-07",
    title: "Preparación de Cuaresma",
    description:
      "Reunión para organizar la participación del Grupo Joven en los cultos cuaresmales.",
    location: "Sede de la Hermandad",
  },
  {
    date: "2026-04-03",
    title: "Viernes Santo",
    description:
      "Participación del Grupo Joven en la jornada principal de la Hermandad.",
    location: "Manzanares",
  },
  {
    date: "2026-06-21",
    title: "Encuentro de verano",
    description:
      "Actividad de convivencia antes del descanso estival.",
    location: "Por confirmar",
  },
];

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const weekDays = ["L", "M", "X", "J", "V", "S", "D"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOffset(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function getEventsForDay(date: string) {
  return youngCalendarEvents.filter((event) => event.date === date);
}

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Historia", href: "#historia" },
  { label: "Titulares", href: "#titulares" },
  { label: "Galería", href: "#galeria" },
  { label: "Grupo Joven", href: "#grupo-joven" },
  { label: "Actos", href: "#eventos" },
  { label: "Facebook", href: "#facebook" },
  { label: "Ingreso", href: "#ingreso" },
  { label: "Contacto", href: "#contacto" },
];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Church,
    title: "Tradición cofrade",
    text: "Una estética sobria y reconocible, inspirada en el negro y el blanco hueso propios de la cofradía.",
  },
  {
    icon: Users,
    title: "Solicitud de ingreso",
    text: "Un acceso claro para quienes deseen incorporarse a la hermandad y participar de su vida, su fe y su misión.",
  },
  {
    icon: ScrollText,
    title: "Comunicación oficial",
    text: "Cultos, convocatorias, horarios y avisos presentados con orden, respeto y solemnidad.",
  },
];

const heroHighlights: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Accessibility,
    title: "Información clara",
    text: "Una navegación sencilla para todos los hermanos.",
  },
  {
    icon: Shield,
    title: "Identidad propia",
    text: "Negro y blanco hueso como signos de solemnidad y recogimiento.",
  },
  {
    icon: Sparkles,
    title: "Solemnidad",
    text: "Textura barroca, brillo suave y presencia cofrade.",
  },
];

const decorativeDots = Array.from({ length: 18 }, (_, i) => i);

const cardClass =
  "rounded-[2rem] border border-[#f3ead7]/10 bg-black/25 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl";

const buttonPrimary =
  "rounded-2xl border border-[#f3ead7]/40 bg-[#f3ead7] px-7 py-6 text-center text-base font-semibold text-[#070504] shadow-[0_12px_40px_rgba(243,234,215,0.18)] transition hover:bg-white hover:shadow-[0_16px_50px_rgba(243,234,215,0.28)]";

const buttonSecondary =
  "rounded-2xl border border-[#f3ead7]/22 bg-black/25 px-7 py-6 text-center text-base text-[#f3ead7] backdrop-blur transition hover:bg-[#f3ead7]/10";

export default function Home() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [daysUntilGoodFriday, setDaysUntilGoodFriday] = useState(0);
  const [selectedYoungEvent, setSelectedYoungEvent] =
  useState<YoungCalendarEvent | null>(null);

  useEffect(() => {
    setDaysUntilGoodFriday(getDaysUntilGoodFriday());

    const interval = window.setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main
      className="min-h-screen overflow-x-hidden text-[#f3ead7]"
      style={{
        fontFamily: "Georgia, 'Times New Roman', 'Cormorant Garamond', serif",
      }}
    >
      <div
        className="fixed inset-0 -z-40"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(243,234,215,0.08), transparent 28%), radial-gradient(circle at 20% 35%, rgba(255,255,255,0.035), transparent 30%), radial-gradient(circle at 80% 55%, rgba(255,255,255,0.025), transparent 32%), linear-gradient(145deg, #010101 0%, #050505 35%, #111111 62%, #030303 100%)",
        }}
      />

      <div
        className="fixed inset-0 -z-30 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(255,255,255,0.045) 0%, transparent 22%, rgba(255,255,255,0.025) 42%, transparent 68%, rgba(255,255,255,0.035) 100%)",
          backgroundSize: "100% 100%",
        }}
      />

      <div
        className="fixed inset-0 -z-20 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(92deg, rgba(243,234,215,0.035) 0px, rgba(243,234,215,0.012) 1px, transparent 3px, transparent 9px)",
          mixBlendMode: "soft-light",
        }}
      />

      <div
        className="fixed inset-0 -z-10 opacity-[0.075]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 0%, rgba(243,234,215,0.10) 48%, transparent 52%), linear-gradient(45deg, transparent 0%, rgba(243,234,215,0.06) 48%, transparent 52%)",
          backgroundSize: "180px 180px",
          mixBlendMode: "soft-light",
        }}
      />

      <div
        className="fixed inset-0 -z-10 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, transparent 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <header className="sticky top-0 z-50 border-b border-[#f3ead7]/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[#f3ead7]/20 bg-[#f3ead7]/5 shadow-[0_0_30px_rgba(243,234,215,0.12)]">
              <img
                src="/escudo.png"
                alt="Escudo de la Hermandad"
                className="h-9 w-9 object-contain"
              />
              <motion.div
                className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(243,234,215,0.22),transparent)]"
                initial={{ opacity: 0.16, x: "-20%" }}
                animate={{
                  opacity: [0.08, 0.24, 0.08],
                  x: ["-20%", "20%", "-20%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#d8cbb3]">
                Hermandad
              </p>
              <p className="text-sm font-semibold text-[#f3ead7] md:text-base">
                Santo Entierro y Nuestra Señora de la Soledad
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {quickLinks.slice(0, 8).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#d8cbb3] transition duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden border-b border-[#f3ead7]/10">
        <div className="absolute inset-0">
          <motion.div
            className="absolute left-1/2 top-16 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#f3ead7]/8 blur-3xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.22, 0.38, 0.22] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {decorativeDots.map((dot) => (
            <motion.div
              key={dot}
              className="absolute h-1.5 w-1.5 rounded-full bg-[#f3ead7]/35"
              style={{
                left: `${6 + ((dot * 5.2) % 88)}%`,
                top: `${8 + ((dot * 7.4) % 76)}%`,
              }}
              animate={{ opacity: [0.1, 0.5, 0.1], y: [0, -10, 0] }}
              transition={{
                duration: 2.8 + (dot % 4),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f3ead7]/20 bg-black/25 px-4 py-2 text-sm text-[#f3ead7] backdrop-blur">
              <Landmark className="h-4 w-4" />
              Manzanares · Ciudad Real
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-[#f3ead7] md:text-6xl md:leading-[1.05]">
              Hermandad del Santo Entierro
              <span className="block bg-gradient-to-r from-[#f3ead7] via-white to-[#d8cbb3] bg-clip-text text-transparent">
                y Nuestra Señora de la Soledad
              </span>
              <span className="mt-2 block text-2xl text-[#d8cbb3] md:text-3xl">
                Manzanares
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8cbb3]">
              Bajo el signo de la fe, el silencio y la esperanza, esta web nace como casa digital de la
              Hermandad del Santo Entierro y Nuestra Señora de la Soledad de Manzanares. Un espacio para
              custodiar su memoria, anunciar sus cultos y mantener viva la comunicación con hermanos,
              fieles y devotos.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonPrimary}
              >
                <span className="inline-flex items-center">
                  Hacerse hermano
                  <ChevronRight className="ml-2 h-4 w-4" />
                </span>
              </a>

              <a href="#eventos" className={buttonSecondary}>
                Ver actos y anuncios
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-[#f3ead7]/10 bg-black/25 p-4 shadow-[0_0_40px_rgba(243,234,215,0.06)] backdrop-blur"
                  >
                    <IconComponent className="mb-3 h-5 w-5 text-[#f3ead7]" />
                    <p className="text-sm font-semibold text-[#f3ead7]">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#d8cbb3]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.015, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto max-w-[34rem]"
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-[#f3ead7]/8 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-[#f3ead7]/12 bg-black/30 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                <div className="rounded-[2rem] border border-[#f3ead7]/10 bg-black/45 p-6 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#f3ead7]/20 bg-[#f3ead7]/5 shadow-[0_0_35px_rgba(243,234,215,0.14)]">
                    <Sparkles className="h-7 w-7 text-[#f3ead7]" />
                  </div>

                  <div className="relative mx-auto w-full max-w-[26rem] overflow-hidden rounded-[1.8rem] border border-[#f3ead7]/12 bg-black/30">
                    {heroImages.map((image, index) => (
                      <motion.img
                        key={`${image.alt}-${index}`}
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 h-full w-full object-contain p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentHeroImage === index ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                      />
                    ))}
                    <div className="relative aspect-square w-full" />
                  </div>

                  <p className="mt-5 text-sm uppercase tracking-[0.24em] text-[#f3ead7]">
                    Titulares de la hermandad
                  </p>

                  <p className="mx-auto mt-3 max-w-md leading-7 text-[#d8cbb3]">
                    Nuestros titulares, el Santo Entierro y Nuestra Señora de la Soledad, son el corazón
                    de nuestra devoción y tradición cofrade.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => {
            const IconComponent = item.icon;

            return (
              <div key={item.title} className={`${cardClass} p-7`}>
                <IconComponent className="mb-4 h-10 w-10 text-[#f3ead7]" />
                <h2 className="text-xl font-semibold text-[#f3ead7]">{item.title}</h2>
                <p className="mt-3 leading-7 text-[#d8cbb3]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className={`${cardClass} p-8 text-center md:p-12`}>
          <p className="text-sm uppercase tracking-[0.28em] text-[#d8cbb3]">
            Camino hacia el Viernes Santo
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-[#f3ead7] md:text-6xl">
            {daysUntilGoodFriday}
          </h2>

          <p className="mt-3 text-xl text-[#d8cbb3]">días para la Estación de Penitencia</p>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#d8cbb3]">
            La hermandad camina durante todo el año hacia la Semana Santa, manteniendo viva la oración,
            la preparación y el compromiso de sus hermanos.
          </p>
        </div>
      </section>

      <section id="historia" className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-4 flex items-center gap-3 text-[#f3ead7]">
            <HeartHandshake className="h-5 w-5" />
            <span className="text-sm tracking-[0.25em]">HISTORIA Y DEVOCIÓN</span>
          </div>

          <h3 className="text-3xl font-semibold text-[#f3ead7] md:text-4xl">
            Una hermandad enraizada en la fe y en la memoria de Manzanares
          </h3>

          <p className="mt-6 max-w-2xl leading-8 text-[#d8cbb3]">
            La Hermandad del Santo Entierro y Nuestra Señora de la Soledad custodia una devoción marcada
            por el silencio, la contemplación y el acompañamiento a Cristo yacente y a su Madre en la Soledad.
          </p>

          <p className="mt-4 max-w-2xl leading-8 text-[#d8cbb3]">
            Esta web quiere recoger ese espíritu con respeto y belleza: anunciar los cultos, conservar la historia,
            reunir a los hermanos y abrir una puerta cercana a todos los fieles que se acercan a la hermandad.
          </p>
        </div>

        <div className={`${cardClass} p-7`}>
          <div className="mb-4 flex items-center gap-3 text-[#f3ead7]">
            <ImageIcon className="h-5 w-5" />
            <span className="text-sm tracking-[0.22em]">CONTENIDO DE LA WEB</span>
          </div>

          <h4 className="text-2xl font-semibold text-[#f3ead7]">
            Apartados para una web oficial y viva
          </h4>

          <div className="mt-5 space-y-4 text-[#d8cbb3]">
            {[
              "Historia, origen y signos propios de la hermandad",
              "Galería de titulares, cultos, patrimonio y estación de penitencia",
              "Información de junta de gobierno, sede canónica y vida interna",
              "Formularios, contacto y comunicaciones oficiales",
            ].map((text) => (
              <div key={text} className="rounded-2xl border border-[#f3ead7]/10 bg-black/25 p-4">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="titulares" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8cbb3]">
            TITULARES
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-[#f3ead7]">
            Nuestros Sagrados Titulares
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {[
            {
              src: "/galeria/cristo-yacente.jpg",
              alt: "Santo Entierro",
              title: "Santo Entierro",
              text: "Cristo yacente, centro espiritual de la Hermandad y representación solemne del misterio de la muerte y sepultura del Señor.",
            },
            {
              src: "/galeria/virgen-soledad.jpg",
              alt: "Nuestra Señora de la Soledad",
              title: "Nuestra Señora de la Soledad",
              text: "Imagen mariana titular de la Hermandad, símbolo de recogimiento, esperanza y amor maternal en los momentos más difíciles.",
            },
          ].map((item) => (
            <div key={item.title} className={`overflow-hidden ${cardClass}`}>
              <img
                src={item.src}
                alt={item.alt}
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="p-8">
                <h3 className="text-3xl font-semibold text-[#f3ead7]">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#d8cbb3]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3 text-[#f3ead7]">
            <ImageIcon className="h-5 w-5" />
            <span className="text-sm tracking-[0.25em]">GALERÍA</span>
          </div>

          <h3 className="text-3xl font-semibold text-[#f3ead7] md:text-4xl">
            Imágenes de la hermandad
          </h3>

          <p className="mt-4 max-w-2xl leading-8 text-[#d8cbb3]">
            Un espacio destinado a recoger fotografías de cultos, titulares, patrimonio, vida de hermandad
            y estación de penitencia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {galleryImages.map((image) => (
            <div key={image.title} className={`overflow-hidden ${cardClass}`}>
              <div className="flex aspect-[4/3] items-center justify-center bg-black/35 p-8">
                <img src={image.src} alt={image.title} className="h-full w-full object-contain" />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#f3ead7]">{image.title}</h4>
                <p className="mt-3 leading-7 text-[#d8cbb3]">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section id="ingreso" className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className={`${cardClass} overflow-hidden`}>
          <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#f3ead7]">
                Solicitud de ingreso
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-[#f3ead7] md:text-4xl">
                Formar parte de la hermandad
              </h3>

              <p className="mt-5 max-w-2xl leading-8 text-[#d8cbb3]">
                Quienes deseen incorporarse a la Hermandad del Santo Entierro y Nuestra Señora de la
                Soledad podrán iniciar su solicitud desde este apartado. Ser hermano es participar de una
                tradición de fe, servicio, oración y compromiso con la vida de la corporación.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-[#f3ead7]/12 bg-black/30 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-[#f3ead7]">Formulario oficial</p>

              <div className="mt-4 rounded-2xl border border-dashed border-[#f3ead7]/22 bg-[#f3ead7]/5 p-4 text-sm leading-7 text-[#d8cbb3]">
                Pulse el botón inferior para abrir la solicitud oficial de ingreso en una nueva pestaña.
              </div>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 block w-full ${buttonPrimary}`}
              >
                Solicitar hacerse hermano
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="eventos" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3 text-[#f3ead7]">
            <CalendarDays className="h-5 w-5" />
            <span className="text-sm tracking-[0.25em]">ACTOS Y CULTOS</span>
          </div>

          <h3 className="text-3xl font-semibold text-[#f3ead7] md:text-4xl">
            Tablón de cultos y eventos
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <div key={event.title} className={`${cardClass} p-6`}>
              <p className="text-sm uppercase tracking-[0.18em] text-[#f3ead7]">
                {event.date}
              </p>
              <h4 className="mt-3 text-xl font-semibold text-[#f3ead7]">
                {event.title}
              </h4>
              <p className="mt-3 leading-7 text-[#d8cbb3]">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="anuncios" className="border-y border-[#f3ead7]/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3 text-[#f3ead7]">
              <ScrollText className="h-5 w-5" />
              <span className="text-sm tracking-[0.25em]">ANUNCIOS OFICIALES</span>
            </div>

            <h3 className="text-3xl font-semibold text-[#f3ead7] md:text-4xl">
              Comunicaciones de la hermandad
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {announcements.map((notice) => (
              <div key={notice.title} className={`${cardClass} p-6 leading-7 text-[#d8cbb3]`}>
                <p className="text-sm uppercase tracking-[0.18em] text-[#f3ead7]">
                  {notice.date}
                </p>
                <h4 className="mt-3 text-xl font-semibold text-[#f3ead7]">
                  {notice.title}
                </h4>
                <p className="mt-3">{notice.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="facebook" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className={`${cardClass} overflow-hidden p-6 md:p-10`}>
          <div className="mb-10 text-center">
            <p className="text-2xl text-[#d8cbb3]">✠</p>

            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-[#d8cbb3]">
              Facebook
            </p>

            <h2 className="mt-3 text-4xl font-semibold text-[#f3ead7] md:text-5xl">
              Últimas publicaciones
            </h2>

            <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-[#d8cbb3]/50 to-transparent" />

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#d8cbb3]">
              Sigue toda la actualidad de la Hermandad del Santo Entierro y Nuestra Señora de la Soledad a través de Facebook.
            </p>
          </div>

          <div className="mx-auto max-w-[520px] overflow-hidden rounded-[2rem] border border-[#f3ead7]/15 bg-black/40 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <iframe
              title="Facebook Hermandad Santo Entierro"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsantoentierromanzanares&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="500"
              height="700"
              style={{
                border: "none",
                overflow: "hidden",
                width: "100%",
              }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>

          <div className="mt-8 text-center">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-[#d8cbb3]/35 bg-black/30 px-7 py-4 font-semibold text-[#f3ead7] transition hover:border-[#f3ead7]/60 hover:bg-[#f3ead7]/10"
            >
              Abrir Facebook oficial
            </a>
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className={`${cardClass} overflow-hidden`}>
          <div className="grid gap-10 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div>
              <div className="mb-4 flex items-center gap-3 text-[#f3ead7]">
                <Church className="h-5 w-5" />
                <span className="text-sm tracking-[0.25em]">PRESENCIA OFICIAL</span>
              </div>

              <h3 className="text-3xl font-semibold text-[#f3ead7]">
                Una web sobria para una hermandad con historia
              </h3>

              <p className="mt-5 max-w-2xl leading-8 text-[#d8cbb3]">
                Esta propuesta busca ofrecer una presencia digital digna, clara y solemne: una página donde
                la hermandad pueda anunciar, convocar, conservar su memoria y acompañar a quienes desean
                acercarse a su vida espiritual y cofrade.
              </p>
            </div>

            <div className="space-y-4 rounded-[1.8rem] border border-[#f3ead7]/10 bg-black/30 p-6 text-[#d8cbb3]">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 h-5 w-5 text-[#f3ead7]" />
                <span>Actualización de cultos, actos y avisos</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[#f3ead7]" />
                <span>Manzanares, Ciudad Real</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-[#f3ead7]" />
                <span>Correo oficial de la hermandad</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-[#f3ead7]" />
                <span>Teléfono de contacto</span>
              </div>
              <div className="flex items-start gap-3">
                <ScrollText className="mt-1 h-5 w-5 text-[#f3ead7]" />
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Facebook oficial de la hermandad
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-[#f3ead7]/10 bg-black/85 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f3ead7]/12 bg-[#f3ead7]/5">
                <img
                  src="/escudo.png"
                  alt="Escudo de la Hermandad"
                  className="h-8 w-8 object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#f3ead7]">
                  Hermandad del Santo Entierro
                </p>
                <p className="text-sm text-[#d8cbb3]">
                  y Nuestra Señora de la Soledad
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-sm leading-7 text-[#d8cbb3]">
              Web oficial de la Hermandad del Santo Entierro y Nuestra Señora de la Soledad de Manzanares,
              al servicio de sus hermanos, devotos y fieles.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3ead7]">
              Accesos rápidos
            </h4>
            <ul className="mt-4 space-y-3 text-[#d8cbb3]">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3ead7]">
              Información de contacto
            </h4>
            <div className="mt-4 space-y-3 text-[#d8cbb3]">
              <p>Manzanares, Ciudad Real</p>
              <p>Correo oficial de la hermandad</p>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-white"
              >
                Facebook oficial
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#f3ead7]/10 px-6 py-4 text-center text-sm text-[#d8cbb3]/70 md:px-10">
          © 2026 Hermandad del Santo Entierro y Nuestra Señora de la Soledad · Manzanares
        </div>
      </footer>
    </main>
  );
}