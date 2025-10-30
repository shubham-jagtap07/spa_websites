import ServiceTemplate from '@/components/ServiceTemplate';

export default function FacialsPage() {
  return (
    <ServiceTemplate
      title="Facials"
      description="Professional facial treatments for radiant, youthful, healthy skin"
      benefits={[
        'Deep cleansing and detoxification of skin',
        'Reduces fine lines, wrinkles, and signs of aging',
        'Significantly improves skin tone and texture',
        'Unclogs pores and prevents acne breakouts',
        'Boosts natural collagen and elastin production',
        'Powerful anti-aging and rejuvenating benefits',
        'Brightens and evens out skin complexion',
        'Deeply relaxing and stress-relieving',
      ]}
      duration="60-90 Minutes"
      price="₹1,999 - ₹4,999"
      image="/images/services/facials.jpg"
      includes={[
        'Comprehensive skin analysis and consultation',
        'Deep cleansing and gentle exfoliation',
        'Steam therapy for pore opening',
        'Professional extractions (if needed)',
        'Relaxing face, neck, and shoulder massage',
        'Customized mask treatment based on skin type',
        'Premium serum and moisturizer application',
        'Eye care treatment',
        'Choice of facial: Classic, Anti-aging, Hydrating, Brightening, or Acne Control',
        'SPF protection and post-care advice',
      ]}
    />
  );
}
