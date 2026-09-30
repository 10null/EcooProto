import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
			},
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
					bright: 'hsl(var(--primary-bright) / <alpha-value>)',
					deep: 'hsl(var(--primary-deep) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
					'on-ink': 'hsl(var(--destructive-on-ink) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
					strong: 'hsl(var(--accent-strong) / <alpha-value>)',
					soft: 'hsl(var(--accent-soft) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				},
				ink: {
					900: 'hsl(var(--ink-900) / <alpha-value>)',
					800: 'hsl(var(--ink-800) / <alpha-value>)',
					700: 'hsl(var(--ink-700) / <alpha-value>)',
					border: 'hsl(var(--ink-border) / <alpha-value>)',
					strong: 'hsl(var(--ink-border-strong) / <alpha-value>)',
					foreground: 'hsl(var(--on-ink) / <alpha-value>)',
					muted: 'hsl(var(--on-ink-muted) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'calc(var(--radius) + 12px)'
			},
			boxShadow: {
				xs: 'var(--shadow-xs)',
				sm: 'var(--shadow-sm)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
				glow: 'var(--shadow-glow)',
				gold: 'var(--shadow-gold)',
				'ink-card': 'var(--shadow-ink-card)'
			},
			backgroundImage: {
				'gradient-brand': 'var(--gradient-brand)',
				'gradient-leaf': 'var(--gradient-leaf)',
				'gradient-ink': 'var(--gradient-ink)',
				'gradient-ink-fade': 'var(--gradient-ink-fade)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-gold-rule': 'var(--gradient-gold-rule)',
				'gradient-hero-overlay': 'var(--gradient-hero-overlay)',
				'gradient-hero-bottom': 'var(--gradient-hero-bottom)',
				'gradient-halo': 'var(--gradient-halo)'
			},
			transitionTimingFunction: {
				engineered: 'cubic-bezier(0.16, 1, 0.3, 1)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-up': {
					from: {
						opacity: '0',
						transform: 'translateY(16px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slow-pan': {
					from: {
						transform: 'scale(1.06) translate3d(0, 0, 0)'
					},
					to: {
						transform: 'scale(1.14) translate3d(-1.5%, -1%, 0)'
					}
				},
				'marquee': {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(-50%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
				'slow-pan': 'slow-pan 24s ease-in-out infinite alternate',
				marquee: 'marquee 38s linear infinite'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
