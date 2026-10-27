/**
 * Calculates years of professional SEO experience dynamically.
 * Career start date: January 2023 (Internship at Joy Technologies)
 */

const CAREER_START = new Date(2023, 0, 1); // January 1, 2023

/**
 * Returns a formatted string like "3+" or "4+" based on the current date.
 * Updates automatically — no manual edits needed.
 */
export function getExperienceYears() {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();

  // Subtract 1 if we haven't yet passed the start month/day this year
  const hasPassedAnniversary =
    now.getMonth() > CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() &&
      now.getDate() >= CAREER_START.getDate());

  if (!hasPassedAnniversary) {
    years -= 1;
  }

  return `${years}+`;
}

/**
 * Returns a decimal-precision number like 3.8 for "3 years 9 months".
 * Useful for aria-labels or screen-reader text.
 */
export function getExperienceDecimal() {
  const now = new Date();
  const diffMs = now - CAREER_START;
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diffYears * 10) / 10; // one decimal place
}
