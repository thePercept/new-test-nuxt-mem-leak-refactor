export default {
  computed: {
    toggleColorMode() {
      return this.$toggleColorMode();
    },

    colorMode() {
      return this.$chakraColorMode();
    },
    mainStylesComplete() {
      return {
        foreGround: {
          dark: {
            bg: 'gray.700',
            color: 'white',
            viewAllLinkColor: 'white',
            downloadLinkColor: 'white',
            smallTextColor: '#52FF94',
          },
          light: {
            bg: 'white',
            color: 'gray.900',
            viewAllLinkColor: '#C5283D',
            downloadLinkColor: '#100072',
            smallTextColor: '#C5283D',
          },
        },

        backGround() {
          return {
            dark: {
              bg: 'gray.600',
              color: 'white',
            },
            light: {
              bg: '#f4f4f4',
              color: 'gray.900',
            },
          };
        },
      };
    },
  },
};
