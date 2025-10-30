import ServiceTemplate from '@/components/ServiceTemplate';

export default function TropicalScrubsPage() {
  return (
    <ServiceTemplate
      title="Tropical Scrubs"
      description="Exotic fruit-infused exfoliation for naturally glowing skin"
      benefits={[
        'Natural fruit enzymes provide gentle yet effective exfoliation',
        'Rich in vitamins A, C, E, and powerful antioxidants',
        'Deeply hydrates and nourishes dry, dull skin',
        'Brightens complexion and evens out skin tone',
        'Reduces dark spots and hyperpigmentation',
        'Leaves skin feeling silky smooth and refreshed',
        'Delightful tropical aromatherapy experience',
        'Suitable for all skin types including sensitive skin',
      ]}
      duration="45-60 Minutes"
      price="₹2,199 - ₹3,299"
      image="/images/services/tropical.jpg"
      includes={[
        'Skin consultation and patch test',
        'Choice of tropical scrub: Papaya, Pineapple, Coconut, Mango, or Banana',
        'Full body gentle exfoliation',
        'Hydrating body wrap treatment',
        'Vitamin-rich serum and moisturizer application',
        'Steam session',
        'Fresh tropical fruit refreshments',
      ]}
    />
  );
}
