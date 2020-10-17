module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            fontWeight: {
                myMed: 450
            }
        },
        truncate: {
            lines: {
                2: '2',
                3: '3',
                4: '4',
            }
        },
    },
    variants: {},
    plugins: [
        require('tailwindcss-truncate-multiline')(),
    ],
}

