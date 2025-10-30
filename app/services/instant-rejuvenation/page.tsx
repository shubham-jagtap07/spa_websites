import ServiceTemplate from '@/components/ServiceTemplate';

export default function InstantRejuvenationPage() {
  return (
    <ServiceTemplate
      title="Instant Rejuvenation"
      description="Quick revitalization for your mind, body, and soul"
      benefits={[
        'Immediate stress relief and deep relaxation',
        'Improves blood circulation throughout the body',
        'Reduces muscle tension and stiffness',
        'Enhances mental clarity and focus',
        'Boosts energy levels naturally',
        'Promotes overall physical and mental well-being',
        'Helps combat fatigue and exhaustion',
        'Improves skin texture and complexion',
      ]}
      duration="60-90 Minutes"
      price="₹2,499 - ₹3,999"
      image="/images/services/rejuvenation.jpg"
      includes={[
        'Personalized consultation and wellness assessment',
        'Full body Swedish or aromatherapy massage (60-90 mins)',
        'Essential oil aromatherapy session',
        'Herbal steam or sauna therapy',
        'Head and shoulder massage',
        'Welcome drink and healthy refreshments',
        'Relaxation lounge access',
      ]}
    />
  );
}
