import ServiceTemplate from '@/components/ServiceTemplate';

export default function WellnessRecoveryPage() {
  return (
    <ServiceTemplate
      title="Ban Sabai Wellness Recovery"
      description="Complete healing and recovery for body, mind, and soul"
      benefits={[
        'Accelerates muscle recovery and relieves chronic pain',
        'Reduces stress, anxiety, and mental fatigue',
        'Significantly improves sleep quality and patterns',
        'Balances body energy and promotes natural healing',
        'Strengthens immune system and overall vitality',
        'Perfect for athletes, gym-goers, and corporate professionals',
        'Alleviates sports injuries and muscle soreness',
        'Restores physical and emotional balance',
      ]}
      duration="120-150 Minutes"
      price="₹4,999 - ₹6,999"
      image="/images/services/wellness.jpg"
      includes={[
        'Comprehensive wellness and health consultation',
        'Therapeutic deep tissue massage (60-90 mins)',
        'Hot stone therapy or herbal compress treatment',
        'Customized aromatherapy with essential oils',
        'Private jacuzzi session or steam bath',
        'Scalp and head massage',
        'Herbal tea ceremony and healthy organic refreshments',
        'Meditation and breathing exercise guidance',
      ]}
    />
  );
}
