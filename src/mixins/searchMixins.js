export const searchMixins = {
  methods: {
    endingOne(num, word) {
      switch (num % 10) {
        case 1:
          return num === 11 ? num + ' ' + word + 'ов' : num + ' ' + word + ''
        case 2:
        case 3:
        case 4:
          return num === 12 || num === 13 || num === 14 ? num + ' ' + word + 'ов' : num + ' ' + word + 'а'
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
          return num + ' ' + word + 'ов'
      }
    },
    endingTwo(num, word) {
      switch (num % 10) {
        case 1: return num === 11 ? num + ' ' + word : num + ' ' + word + 'a'
        case 2:
        case 3:
        case 4: return num === 12 || num === 13 || num === 14 ? num + ' ' + word : num + ' ' + word + 'ы'
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0: return num + ' ' + word
      }
    },
  }
};
