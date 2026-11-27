/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional form backend endpoint (e.g. a Formspree URL). Never put secrets here. */
  readonly VITE_FORM_ENDPOINT?: string;
}
