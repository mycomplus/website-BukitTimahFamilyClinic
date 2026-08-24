export const services = [
  { id: "general-consultation", title: "General Medical Consultation", description: "Everyday health concerns and medical consultations.", icon: "✚", enabled: true },
  { id: "chronic-care", title: "Chronic Disease Management", description: "Ongoing care and monitoring for long-term health conditions.", icon: "♡", enabled: true },
  { id: "health-screening", title: "Health Screening", description: "Preventive checks based on individual health needs.", icon: "✓", enabled: true },
  { id: "vaccinations", title: "Vaccinations", description: "Vaccination services subject to availability and clinical assessment.", icon: "＋", enabled: true },
  { id: "childrens-health", title: "Children’s Health", description: "Primary care for children and adolescents.", icon: "◌", enabled: true },
  { id: "family-health", title: "Men’s & Women’s Health", description: "General health consultations across different life stages.", icon: "◇", enabled: true },
];

export const serviceGroups = [
  { title: "Everyday care", description: "Consultations for everyday health concerns and minor illnesses.", ids: ["general-consultation"] },
  { title: "Preventive care", description: "Proactive checks and care based on individual needs.", ids: ["health-screening", "vaccinations"] },
  { title: "Ongoing care", description: "Thoughtful follow-up and monitoring for long-term health needs.", ids: ["chronic-care"] },
  { title: "Family health", description: "Primary care that supports different generations and life stages.", ids: ["childrens-health", "family-health"] },
];
