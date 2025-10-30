import ServiceTemplate from '@/components/ServiceTemplate';

export default function WrapsPage() {
  return (
    <ServiceTemplate
      title="Body Wraps"
      description="Detoxifying and nourishing body wraps for radiant skin"
      benefits={[
        'Powerful detoxification and purification of skin',
        'Tightens, firms, and tones skin texture',
        'Improves overall skin texture and tone',
        'Reduces appearance of cellulite and stretch marks',
        'Deep moisturization and intense hydration',
        'Promotes temporary inch loss and body contouring',
        'Leaves skin incredibly silky smooth and soft',
        'Mineral-rich treatment nourishes skin deeply',
      ]}
      duration="60-90 Minutes"
      price="₹2,499 - ₹3,999"
      image="/images/services/wraps.jpg"
      includes={[
        'Personalized skin consultation',
        'Choice of wrap: Seaweed, Dead Sea Mud, Herbal, Chocolate, or Aloe Vera',
        'Full body exfoliation and cleansing',
        'Body wrap application with minerals and nutrients',
        'Relaxation time in thermal blanket (20-30 mins)',
        'Hydrating body massage with moisturizing lotion',
        'Steam or warm shower',
        'Post-treatment skincare advice',
      ]}
    />
  );
}
