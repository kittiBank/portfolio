export const EASE_OUT = [0.22, 1, 0.36, 1];

export function getFadeUp(reducedMotion = false) {
  return {
    hidden: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0.2 : 0.5, ease: EASE_OUT },
    },
  };
}

export function getCarouselVariants(reducedMotion = false) {
  return {
    enter: (direction) => ({
      opacity: 0,
      x: reducedMotion ? 0 : direction > 0 ? 24 : -24,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: reducedMotion ? 0.15 : 0.35, ease: EASE_OUT },
    },
    exit: (direction) => ({
      opacity: 0,
      x: reducedMotion ? 0 : direction > 0 ? -24 : 24,
      transition: { duration: reducedMotion ? 0.15 : 0.25, ease: EASE_OUT },
    }),
  };
}

export function getCardStagger(reducedMotion = false, index = 0) {
  return {
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: reducedMotion ? 0 : index * 0.06,
      duration: reducedMotion ? 0.2 : 0.35,
      ease: EASE_OUT,
    },
  };
}
