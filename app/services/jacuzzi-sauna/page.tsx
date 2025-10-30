import ServiceTemplate from '@/components/ServiceTemplate';

export default function JacuzziSaunaPage() {
  return (
    <ServiceTemplate
      title="Jacuzzi & Sauna"
      description="Ultimate hydrotherapy and detoxification experience"
      benefits={[
        'Deep muscle relaxation and stress relief',
        'Powerful detoxification through natural sweating',
        'Improves blood circulation and cardiovascular health',
        'Reduces stress, anxiety, and mental tension',
        'Relieves chronic joint pain and muscle soreness',
        'Promotes better sleep quality and patterns',
        'Boosts metabolism and aids weight management',
        'Cleanses skin pores and improves complexion',
        'Strengthens immune system',
      ]}
      duration="30-60 Minutes"
      price="₹1,499 - ₹2,499"
      image="/images/services/jacuzzi.jpg"
      includes={[
        'Private jacuzzi session with aromatherapy oils',
        'Steam room or dry sauna therapy',
        'Herbal infusions and essential oils',
        'Hot and cold shower facilities',
        'Relaxation lounge with ambient music',
        'Fresh herbal tea and healthy refreshments',
        'Plush towels and robes',
        'Optional add-on: Body scrub or massage',
      ]}
    />
  );
}
