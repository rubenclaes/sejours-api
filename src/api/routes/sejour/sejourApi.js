exports.addSejourSchema = {
  description: 'Create a new country with sejour',
  tags: ['sejour'],
  summary: 'Creates a new country with given values',
  body: {
    type: 'object',
    properties: {
      language: { type: 'string' },
      countryid: { type: 'number' },
      countrycode: { type: 'string' },
      shortDesc: { type: 'string' },
      longDesc: { type: 'string' },
      translation: { type: 'array' },
      maxAccomAllowance: { type: 'number' },
      fixedDailyAllowance: { type: 'array' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        language: { type: 'string' },
        countryid: { type: 'number' },
        countrycode: { type: 'string' },
        shortDesc: { type: 'string' },
        longDesc: { type: 'string' },
        translation: { type: 'array' },
        maxAccomAllowance: { type: 'number' },
        fixedDailyAllowance: { type: 'array' }
      }
    }
  }
};

exports.getSejoursSchema = {
       
  description: 'Access to all sejours',
  tags: ['sejour'],
  summary: 'Return a map with all the sejours', 
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: {
          $id: '#/properties/_id',
          type: 'string',
          title: 'The _id Schema',
          default: '',
          examples: ['5c1cf302c80fceb21143c277'],
          pattern: '^(.*)$'
        },
        language: {
          $id: '#/properties/language',
          type: 'string',
          title: 'The Language Schema',
          default: '',
          examples: ['nl'],
          pattern: '^(.*)$'
        },
        countryid: {
          $id: '#/properties/countryid',
          type: 'integer',
          title: 'The Countryid Schema',
          default: 0,
          examples: [1712]
        },
        countrycode: {
          $id: '#/properties/countrycode',
          type: 'string',
          title: 'The Countrycode Schema',
          default: '',
          examples: ['DZ'],
          pattern: '^(.*)$'
        },
        shortDesc: {
          $id: '#/properties/shortDesc',
          type: 'string',
          title: 'The Shortdesc Schema',
          default: '',
          examples: ['Algerije'],
          pattern: '^(.*)$'
        },
        longDesc: {
          $id: '#/properties/longDesc',
          type: 'string',
          title: 'The Longdesc Schema',
          default: '',
          examples: ['Algerije'],
          pattern: '^(.*)$'
        },
        translation: {
          $id: '#/properties/translation',
          type: 'array',
          title: 'The Translation Schema',
          items: {
            $id: '#/properties/translation/items',
            type: 'object',
            title: 'The Items Schema',
            required: ['language', 'shortDesc', 'longDesc'],
            properties: {
              language: {
                $id: '#/properties/translation/items/properties/language',
                type: 'string',
                title: 'The Language Schema',
                default: '',
                examples: ['en'],
                pattern: '^(.*)$'
              },
              shortDesc: {
                $id: '#/properties/translation/items/properties/shortDesc',
                type: 'string',
                title: 'The Shortdesc Schema',
                default: '',
                examples: ['Algerije'],
                pattern: '^(.*)$'
              },
              longDesc: {
                $id: '#/properties/translation/items/properties/longDesc',
                type: 'string',
                title: 'The Longdesc Schema',
                default: '',
                examples: ['Algerije'],
                pattern: '^(.*)$'
              }
            }
          }
        },
        maxAccomAllowance: {
          $id: '#/properties/maxAccomAllowance',
          type: 'integer',
          title: 'The Maxaccomallowance Schema',
          default: 0,
          examples: [175]
        },
        fixedDailyAllowance: {
          $id: '#/properties/fixedDailyAllowance',
          type: 'array',
          title: 'The Fixeddailyallowance Schema',
          items: {
            $id: '#/properties/fixedDailyAllowance/items',
            type: 'object',
            title: 'The Items Schema',
            required: ['cat1', 'cat2'],
            properties: {
              cat1: {
                $id: '#/properties/fixedDailyAllowance/items/properties/cat1',
                type: 'integer',
                title: 'The Cat1 Schema',
                default: 0,
                examples: [50]
              },
              cat2: {
                $id: '#/properties/fixedDailyAllowance/items/properties/cat2',
                type: 'integer',
                title: 'The Cat2 Schema',
                default: 0,
                examples: [50]
              }
            }
          }
        }
      }
    }
  }
  
};

exports.defaults = {
  description: 'post some data',
  tags: ['sejour'],
  summary: 'qwerty',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'user id'
      }
    }
  },
  body: {
    type: 'object',
    properties: {
      hello: { type: 'string' },
      obj: {
        type: 'object',
        properties: {
          some: { type: 'string' }
        }
      }
    }
  },
  response: {
    201: {
      description: 'Successful response',
      type: 'object',
      properties: {
        hello: { type: 'string' }
      }
    }
  }
};
