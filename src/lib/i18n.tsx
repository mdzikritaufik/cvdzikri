"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { COPY, type Copy, type Lang } from "@/data/content";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
};

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: COPY.en,
});

const STORAGE_KEY = "mdt-lang";

// Tiny external store: localStorage when available, memory otherwise.
let memoryLang: Lang = "en";
const listeners = new Set<() => void>();

function readLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "id") return stored;
  } catch {
    /* storage unavailable */
  }
  return memoryLang;
}

function writeLang(next: Lang) {
  memoryLang = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage unavailable */
  }
  listeners.forEach((cb) => cb());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

const getServerSnapshot = (): Lang => "en";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => writeLang(next), []);

  const value = useMemo(
    () => ({ lang, setLang, t: COPY[lang] as Copy }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
