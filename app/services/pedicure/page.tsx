import ServiceTemplate from '@/components/ServiceTemplate';

export default function PedicurePage() {
  return (
    <ServiceTemplate
      title="Pedicure"
      description="Complete foot care, rejuvenation, and pampering"
      benefits={[
        'Effectively removes dead skin, calluses, and rough patches',
        'Deeply softens and moisturizes tired feet',
        'Promotes healthy nail growth and prevents ingrown toenails',
        'Relieves foot tension, fatigue, and muscle soreness',
        'Improves blood circulation in feet and legs',
        'Beautiful, salon-perfect polished nails',
        'Prevents foot infections and odor',
        'Therapeutic relaxation for entire lower body',
      ]}
      duration="60-75 Minutes"
      price="₹999 - ₹1,799"
      image="/images/services/pedicure.jpg"
      includes={[
        'Aromatic foot soak with essential oils and salts',
        'Professional nail trimming, shaping, and buffing',
        'Cuticle care and softening treatment',
        'Callus removal and dead skin exfoliation',
        'Foot and leg scrub treatment',
        'Relaxing foot, ankle, and calf massage',
        'Polish application: Regular, gel, or French pedicure',
        'Paraffin wax treatment for deep moisturization (premium)',
      ]}
    />
  );
}
