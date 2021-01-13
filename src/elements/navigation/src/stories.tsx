/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
// import { text } from '@storybook/addon-knobs'

// import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import Navigation, { NavProps } from '.'

export default {
  title: 'Elements/Navigation'
}

const exampleData: NavProps = {
  logo: {
    img: 'https://bankrate.svg',
    alt: 'Bankrate',
    href: '/'
  },
  items: [
    {
      title: 'Mortgages',
      items: [
        {
          title: 'Mortgage TYPE',
          items: [
            {
              title: 'Mortgages',
              description: 'Everything you need to know about mortgages',
              href: '/mortage/guides',
              linkLabel: 'Mortgages guides',
              items: [
                {
                  title: 'Mortgage Rates',
                  items: [
                    {
                      title: 'Compare mortgage rates'
                    },
                    {
                      title: 'Mortgages for bad credit'
                    },
                    {
                      title: 'Guarantor mortgages'
                    },
                    {
                      title: 'Variable rate mortgages'
                    },
                    {
                      title: 'Joint mortgages'
                    },
                    {
                      title: 'Interest only mortgages'
                    }
                  ]
                },
                {
                  title: 'Guides',
                  items: [
                    {
                      title: 'How to improve your credit score'
                    },
                    {
                      title: 'How to sell your house'
                    },
                    {
                      title: 'How to pay off your mortgage early'
                    },
                    {
                      title: 'What is a second charge mortgage?'
                    },
                    {
                      title: 'Moving home guide'
                    },
                    {
                      title: 'Leasehold vs. Freehold properties'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Remortgages',
              description: 'Save money by remortgaging your home',
              items: [
                {
                  title: 'Mortgage Rates',
                  items: [
                    {
                      title: 'Compare remortgage rates'
                    }
                  ]
                },
                {
                  title: 'Guides',
                  items: [
                    {
                      title: 'What is equity release?'
                    },
                    {
                      title: 'Should I remortgage?'
                    },
                    {
                      title: 'Remortgaging to buy to let'
                    },
                    {
                      title: 'When should you remortgage?'
                    },
                    {
                      title: 'Second home mortgages'
                    },
                    {
                      title: 'Home reversion plans'
                    },
                    {
                      title: 'Using a mortgage broker vs. going direct'
                    }
                  ]
                }
              ]
            },
            {
              title: 'First time buyer',
              description: 'Get your foot on the property ladder',
              linkLabel: 'Buyer guides',
              items: [
                {
                  title: 'Mortgage Rates',
                  items: [
                    {
                      title: 'First time buyer mortgage rates'
                    }
                  ]
                },
                {
                  title: 'Guides',
                  items: [
                    {
                      title: '🏠 How to buy a house?'
                    },
                    {
                      title: 'How much deposit do I need for a mortgage??'
                    },
                    {
                      title: 'How long does it take to get a mortgage?'
                    },
                    {
                      title: 'The total cost to buying a home?'
                    },
                    {
                      title: 'How to make an offer on a house'
                    },
                    {
                      title: 'Should I rent or buy my next house?'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'RATES & TOOLS',
          items: [
            {
              title: 'Mortgage Rates',
              description: 'Find the best fixed rate and LTV mortgages',
              items: [
                {
                  title: 'Best Fixed Rates',
                  items: [
                    {
                      title: 'Fixed rate mortgage rates'
                    },
                    {
                      title: '10 year fixed rate mortgage rates'
                    },
                    {
                      title: '5 year fixed rate mortgage rates'
                    },
                    {
                      title: '3 year fixed rate mortgage rates'
                    },
                    {
                      title: '2 year fixed rate mortgage rates'
                    }
                  ]
                },
                {
                  title: 'Best LTV Rates',
                  items: [
                    {
                      title: '100% LTV mortgage rates'
                    },
                    {
                      title: '95% LTV mortgage rates'
                    },
                    {
                      title: '90% LTV mortgage rates'
                    },
                    {
                      title: '85% LTV mortgage rates'
                    },
                    {
                      title: '60% LTV mortgage rates'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Tools',
              description: 'Helpful mortgage calculators and tools',
              linkLabel: 'Mortgages calculator',
              items: [
                {
                  title: 'Help to buy calculator'
                },
                {
                  title: 'How much can I borrow calculator'
                },
                {
                  title: 'Stamp duty calculator'
                },
                {
                  title: 'Mortgage repayment calculator'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Personal Finance',
      items: [
        {
          title: 'PERSONAL FINANCE PRODUCTS',
          items: [
            {
              title: 'Current accounts',
              description: 'Manage your everyday finances',
              linkLabel: 'Current Accounts guides',
              items: [
                {
                  title: 'Guides',
                  items: [
                    {
                      title: 'How to find the best current account'
                    },
                    {
                      title: 'How Brexit will affect your finances'
                    },
                    {
                      title: 'How to switch current accounts'
                    },
                    {
                      title: 'How to jointly manage money'
                    },
                    {
                      title: 'Open Banking: What is it, and is it safe?'
                    },
                    {
                      title: 'How overdrafts work'
                    },
                    {
                      title: 'The biggest personal finance mistakes'
                    },
                    {
                      title: 'How to spot financial scams'
                    },
                    {
                      title: 'What happens to bank accounts after death'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Savings',
              description: 'Grow your savings and build up your deposit',
              linkLabel: 'Savings accounts guides',
              items: [
                {
                  title: 'Guides',
                  items: [
                    {
                      title: 'Savings account FAQs'
                    },
                    {
                      title: 'How to choose a savings account'
                    },
                    {
                      title: 'How to create a savings strategy'
                    },
                    {
                      title: 'What is a lifetime ISA?'
                    },
                    {
                      title: 'Why should you save money in an ISA'
                    },
                    {
                      title: 'Saving money for retirement'
                    },
                    {
                      title: 'What is pension auto-enrolment?'
                    },
                    {
                      title: 'How to create a passive income stream'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Credit cards',
              description: 'Build and improve your credit score',
              linkLabel: 'Credit card guides',
              items: [
                {
                  title: 'Guides',
                  items: [
                    {
                      title: 'How to choose your next credit card'
                    },
                    {
                      title: 'Applying for a credit card'
                    },
                    {
                      title: 'What APR is, and how it works'
                    },
                    {
                      title: 'Paying for things on holiday'
                    },
                    {
                      title: 'Getting out of debt'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Insurance',
      items: [
        {
          title: 'INSURANCE PRODUCTS',
          items: [
            {
              title: 'Life insurance',
              description: 'Keep your loved ones financially secure',
              linkLabel: 'Life insurance guides',
              items: [
                {
                  title: 'Guides',
                  items: [
                    {
                      title: 'Life insurance explained'
                    },
                    {
                      title: 'Mortgage life insurance'
                    },
                    {
                      title: 'Critical illness cover'
                    },
                    {
                      title: 'Over 50s life insurance'
                    },
                    {
                      title: 'Funeral plans'
                    },
                    {
                      title: 'Best life insurance for me'
                    },
                    {
                      title: 'AIG life insurance'
                    },
                    {
                      title: 'LV= life insurance'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Home insurance',
              description: 'Protect your home from damage or loss',
              linkLabel: 'Home insurance guides',
              items: [
                {
                  title: 'Guides',
                  items: [
                    {
                      title: 'Contents insurance'
                    },
                    {
                      title: 'Building insurance'
                    },
                    {
                      title: 'Home insurance explained'
                    },
                    {
                      title: 'Home emergency cover'
                    },
                    {
                      title: 'Renovation and extentions insurance'
                    },
                    {
                      title: 'Insurance for listed buildings'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export const ExampleWithKnobs = () => <Navigation {...exampleData} />

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

// export const AutomatedTests = () => {
//   const permutations = permutationsGenerator({
//     variant: ['primary', 'secondary']
//   })

//   return (
//     <AllThemes>
//       {permutations.map((p, i) => (
//         <Navigation someText="Some text" variant={p.variant} key={i} />
//       ))}
//     </AllThemes>
//   )
// }
