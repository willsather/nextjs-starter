import { flag } from "flags/next";

export const showHeroCTA = flag<boolean>({
  key: "show-hero-cta-flag",
  defaultValue: false,
  description: "enable displaying hero call to action button",
  decide() {
    return true;
  },
});
