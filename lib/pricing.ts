export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  highlight?: boolean;
  savings?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Flexible",
    price: "$4.99",
    period: "Month",
    description: "Perfect for lifters who want flexibility and access to all features",
    features: [
      { text: "No Ads, No Distractions - Focus on Your Gains", included: true },
      { text: "Access All Features, Including Future Updates and Integration", included: true },
    ],
  },
  {
    name: "Committed",
    price: "$39.99",
    period: "Year",
    description: "Best value for dedicated lifters - track your progress all year round!",
    features: [
      { text: "No Ads, No Distractions - Focus on Your Gains", included: true },
      { text: "Access All Features, Including Future Updates and Integration", included: true },
      { text: "Dedicated Support and Priority Access to Beta Features", included: true },
    ],
    highlight: true,
    savings: "Save 33%",
  },
];