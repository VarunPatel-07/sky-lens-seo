import { Instrument_Sans, Playfair_Display } from "next/font/google";

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
  variable: "--font-playfair-display",
});
