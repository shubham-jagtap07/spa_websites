import ServiceTemplate from '@/components/ServiceTemplate';

export default function BanSabaiRitualsPage() {
  return (
    <ServiceTemplate
      title="Ban Sabai Rituals"
      description="Signature holistic wellness experiences combining ancient Thai traditions"
      benefits={[
        'Complete mind-body-spirit rejuvenation and harmony',
        'Deep stress relief and profound relaxation',
        'Dramatically improved sleep quality and duration',
        'Enhanced energy levels, vitality, and mental clarity',
        'Balances chakras and optimizes energy flow',
        'Comprehensive holistic healing approach',
        'Premium signature Ban Sabai experience',
        'Perfect for chronic stress, sleep disorders, and burnout',
      ]}
      duration="150-180 Minutes"
      price="₹5,499 - ₹7,999"
      image="/images/services/rituals.jpg"
      includes={[
        'Traditional Thai welcome ritual and wellness consultation',
        'Choice of signature ritual: Go Deep Sleep, Fusion Signature Treatment, or Ban Sabai Recharge',
        'Traditional Thai massage with pressure point therapy',
        'Customized aromatherapy with premium essential oils',
        'Full body exfoliation and herbal treatments',
        'Detoxifying body wrap with natural ingredients',
        'Rejuvenating facial treatment (60 mins)',
        'Private steam room or jacuzzi session',
        'Guided meditation and pranayama breathing exercises',
        'Traditional herbal tea ceremony',
        'Healthy organic refreshments',
        'Relaxation in serene meditation lounge',
      ]}
    />
  );
}
