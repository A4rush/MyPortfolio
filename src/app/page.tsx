"use client";

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

import { getAnalyticsInstance } from "@/firebase/config";
import { logEvent } from "firebase/analytics";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const log = async () => {
      const analytics = await getAnalyticsInstance();
      if (analytics) {
        logEvent(analytics, "home_page_visited");
      }
    };
    log();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
