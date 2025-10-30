import ServiceTemplate from '@/components/ServiceTemplate';

export default function FruitFacialsPage() {
  return (
    <ServiceTemplate
      title="Fruit Facials"
      description="Natural fruit-powered facials for glowing, youthful, radiant skin"
      benefits={[
        'Rich in natural vitamins, minerals, and powerful antioxidants',
        'Natural brightening and skin lightening properties',
        'Extremely gentle on sensitive and delicate skin',
        'Effective anti-aging and wrinkle-reducing properties',
        'Deeply hydrates and nourishes all skin types',
        'Reduces pigmentation, dark spots, and blemishes',
        '100% fresh, natural, chemical-free ingredients',
        'Suitable for all ages and skin conditions',
      ]}
      duration="60-75 Minutes"
      price="₹1,799 - ₹3,499"
      image="/images/services/fruit-facials.jpg"
      includes={[
        'Detailed skin analysis and personalized consultation',
        'Deep cleansing with natural fruit extracts',
        'Gentle fruit enzyme exfoliation treatment',
        'Steam therapy for pore opening',
        'Relaxing face, neck, and shoulder massage',
        'Fresh fruit pulp mask application',
        'Vitamin-rich serum and moisturizer',
        'Eye care with cucumber or potato',
        'Choice of fruit: Papaya, Orange, Strawberry, Banana, Apple, or Mix Fruit',
        'Post-facial skincare guidance',
      ]}
    />
  );
}
