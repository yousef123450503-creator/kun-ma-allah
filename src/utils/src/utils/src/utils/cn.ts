import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Creates a className string for variants
 * Usage: variants({ base: 'btn', variants: { variant: { primary: 'btn-primary', secondary: 'btn-secondary' } } })
 */
export function variants<T extends Record<string, Record<string, string>>>(
  config: { base: string; variants: T }
) {
  return (props: Partial<{ [K in keyof T]: keyof T[K] }> & { className?: string }) => {
    const { className, ...variantProps } = props
    let classes = config.base

    for (const [key, value] of Object.entries(variantProps)) {
      if (value && config.variants[key]) {
        classes += ` ${config.variants[key][value as string]}`
      }
    }

    return cn(classes, className)
  }
}

/**
 * Creates compound variant classes
 */
export function compoundVariants(
  base: string,
  compounds: Array<{ class: string; when: Record<string, string> }>
) {
  return (props: Record<string, string>) => {
    let classes = base

    for (const compound of compounds) {
      const matches = Object.entries(compound.when).every(
        ([key, value]) => props[key] === value
      )
      if (matches) {
        classes += ` ${compound.class}`
      }
    }

    return classes
  }
}

/**
 * Tailwind-like class generator for common patterns
 */
export const tv = {
  button: variants({
    base: 'btn',
    variants: {
      variant: {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
        ghost: 'btn-ghost',
        danger: 'btn-danger',
        gold: 'btn-gold',
        success: 'btn-success',
      },
      size: {
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg',
        xl: 'btn-xl',
        icon: 'btn-icon',
        'icon-sm': 'btn-icon-sm',
        'icon-lg': 'btn-icon-lg',
      },
      full: {
        true: 'btn-full',
      },
    },
  }),

  card: variants({
    base: 'card',
    variants: {
      variant: {
        default: '',
        elevated: 'card-elevated',
        glass: 'card-glass',
        gradient: 'card-gradient',
        prayer: 'card-prayer',
      },
      hover: {
        true: 'card-hover',
      },
    },
  }),

  input: variants({
    base: 'input',
    variants: {
      size: {
        sm: 'input-sm',
        md: '',
        lg: 'input-lg',
      },
      state: {
        default: '',
        error: 'input-error',
        success: 'input-success',
      },
    },
  }),

  badge: variants({
    base: 'badge',
    variants: {
      variant: {
        primary: 'badge-primary',
        success: 'badge-success',
        warning: 'badge-warning',
        danger: 'badge-danger',
        gold: 'badge-gold',
        outline: 'badge-outline',
      },
      size: {
        sm: 'px-2 py-0.5 text-[10px]',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
    },
  }),

  tab: variants({
    base: 'tab',
    variants: {
      variant: {
        default: {
          active: 'tab-active',
          inactive: 'tab-inactive',
        },
        underline: {
          active: 'tab-underline-active',
          inactive: 'tab-underline-inactive',
        },
      },
    },
  }),

  spinner: variants({
    base: 'spinner',
    variants: {
      size: {
        sm: 'spinner-sm',
        md: 'spinner-md',
        lg: 'spinner-lg',
      },
    },
  }),

  toast: variants({
    base: 'toast',
    variants: {
      type: {
        success: 'toast-success',
        error: 'toast-error',
        warning: 'toast-warning',
        info: 'toast-info',
      },
    },
  }),

  qiblaAccuracy: variants({
    base: 'qibla-accuracy',
    variants: {
      level: {
        perfect: 'qibla-accuracy-perfect',
        good: 'qibla-accuracy-good',
        fair: 'qibla-accuracy-fair',
        poor: 'qibla-accuracy-poor',
      },
    },
  }),

  islamicEvent: variants({
    base: 'islamic-event',
    variants: {
      today: {
        true: 'islamic-event-today',
      },
    },
  }),

  prayerCard: variants({
    base: 'prayer-card',
    variants: {
      state: {
        default: '',
        current: 'prayer-card-current',
        next: 'prayer-card-next',
      },
    },
  }),

  tasbeehPreset: variants({
    base: 'tasbeeh-preset',
    variants: {
      active: {
        true: 'tasbeeh-preset-active',
      },
    },
  }),

  aiMessage: variants({
    base: 'ai-message',
    variants: {
      role: {
        user: 'ai-message-user',
        assistant: '',
      },
    },
  }),
}

export type TVButton = ReturnType<typeof tv.button>
export type TVCard = ReturnType<typeof tv.card>
export type TVInput = ReturnType<typeof tv.input>
export type TVBadge = ReturnType<typeof tv.badge>
export type TVTab = ReturnType<typeof tv.tab>
export type TVSpinner = ReturnType<typeof tv.spinner>
export type TVToast = ReturnType<typeof tv.toast>
export type TVQiblaAccuracy = ReturnType<typeof tv.qiblaAccuracy>
export type TVIslamicEvent = ReturnType<typeof tv.islamicEvent>
export type TVPrayerCard = ReturnType<typeof tv.prayerCard>
export type TVTasbeehPreset = ReturnType<typeof tv.tasbeehPreset>
export type TVAIMessage = ReturnType<typeof tv.aiMessage>
