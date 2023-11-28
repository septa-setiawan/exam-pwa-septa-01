import {
    BREAKPOINTS, COLORS, FONT_FAMILY, FONT_SIZE, LETTER_SPACING, LINE_HEIGHT, SPACING,
} from './core/theme/vars';

// full list https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './core/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                /**
                 * START store config value
                 */
                pwa: {
                    primary: 'var(--color-pwa-primary_color)',
                    secondary: 'var(--color-pwa-secondary_color)',
                    font: 'var(--color-pwa-font_color)',
                    background: 'var(--color-pwa-background_color)',
                    error: 'var(--color-pwa-error_color)',
                    warning: 'var(--color-pwa-warning_msg_color)',
                    success: 'var(--color-pwa-success_msg_color)',
                    link: 'var(--color-pwa-link_color)',
                    link_hover: 'var(--color-pwa-link_hover_color)',
                    button_text: 'var(--color-pwa-button_text_color)',
                    button_text_hover: 'var(--color-pwa-button_text_hover_color)',
                    button_background: 'var(--color-pwa-button_background_color)',
                    button_background_hover: 'var(--color-pwa-button_background_hover_color)',
                    button_border: 'var(--color-pwa-button_border_color)',
                    button_border_hover: 'var(--color-pwa-button_border_hover_color)',
                    button_disabled_text: 'var(--color-pwa-button_disabled_text_color)',
                    button_disabled_background: 'var(--color-pwa-button_disabled_background_color)',
                    badge: COLORS.badge,
                },
                // END store config value
                primary: COLORS.primary,
                secondary: COLORS.secondary,
                neutral: COLORS.neutral,
            },
            letterSpacing: LETTER_SPACING,
            lineHeight: LINE_HEIGHT,
            fontSize: FONT_SIZE,
            fontFamily: FONT_FAMILY,
            spacing: SPACING,
            boxShadow: {
                'sm-300': `0px 0px 1px 0px ${COLORS.neutral[200]}40 inset, 0px 3px 5px 0px ${COLORS.neutral[200]}26`,
                'md-500': `0px 0px 1px 0px ${COLORS.neutral[200]}40 inset, 0px 8px 12px 0px ${COLORS.neutral[200]}26`,
                'lg-700': `0px 0px 1px 0px ${COLORS.neutral[200]}47 inset, 0px 10px 18px 0px ${COLORS.neutral[200]}26`,
            },
        },
        screens: {
            xs: `${BREAKPOINTS.xs}px`,
            sm: `${BREAKPOINTS.sm}px`,
            md: `${BREAKPOINTS.md}px`,
            lg: `${BREAKPOINTS.lg}px`,
            xl: `${BREAKPOINTS.xl}px`,
        },
        colors: {
            red: COLORS.red,
            yellow: COLORS.yellow,
            green: COLORS.green,
        },
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
};
