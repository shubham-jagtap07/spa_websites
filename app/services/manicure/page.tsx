import ServiceTemplate from '@/components/ServiceTemplate';

export default function ManicurePage() {
  return (
    <ServiceTemplate
      title="Manicure"
      description="Professional nail care and luxurious hand pampering"
      benefits={[
        'Strengthens nails and prevents breakage',
        'Softens hands, cuticles, and rough skin',
        'Improves overall nail health and appearance',
        'Prevents hangnails, infections, and nail damage',
        'Deeply relaxing hand and arm massage',
        'Long-lasting, chip-resistant polish application',
        'Anti-aging benefits for hands',
        'Promotes healthy nail growth',
      ]}
      duration="45-60 Minutes"
      price="₹899 - ₹1,499"
      image="/images/services/manicure.jpg"
      includes={[
        'Hand soak with aromatic oils',
        'Professional nail shaping and filing',
        'Cuticle care, softening, and treatment',
        'Hand and forearm exfoliation scrub',
        'Relaxing hand and arm massage with moisturizer',
        'Polish application: Regular, gel, or French manicure',
        'Paraffin wax treatment for deep hydration (premium)',
        'Nail strengthening treatment',
      ]}
    />
  );
}
