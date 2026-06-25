// Barrel file — re-exports all Beverly's section components from one place.
// Helps avoid module resolution issues on Windows / OneDrive sync.

export { default as Foundation } from "./Foundation";
export { default as Offer } from "./Offer";
export { default as Marketing } from "./Marketing";
export { default as PatientExperience } from "./PatientExperience";
export { default as Plan } from "./Plan";
