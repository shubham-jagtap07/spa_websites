import ServiceTemplate from '@/components/ServiceTemplate';

export default function PremiumScrubPage() {
  return (
    <ServiceTemplate
      title="Premium Scrub"
      description="Luxurious exfoliation for radiant, glowing skin"
      benefits={[
        'Deep exfoliation removes dead skin cells effectively',
        'Promotes natural skin renewal and regeneration',
        'Smooths and softens skin texture instantly',
        'Improves skin tone, radiance, and luminosity',
        'Stimulates collagen and elastin production',
        'Unclogs pores and prevents acne breakouts',
        'Enhances absorption of moisturizers and serums',
        'Leaves skin feeling silky smooth and rejuvenated',
      ]}
      duration="45-60 Minutes"
      price="₹1,999 - ₹2,999"
      image="/images/services/scrub.jpg"
      includes={[
        'Detailed skin analysis and consultation',
        'Choice of premium scrub: Coffee, Chocolate, Green Tea, or Walnut',
        'Full body exfoliation treatment',
        'Deep moisturizing and nourishing treatment',
        'Steam or sauna session',
        'Warm shower facilities',
        'Post-treatment hydrating lotion application',
      ]}
    />
  );
}
