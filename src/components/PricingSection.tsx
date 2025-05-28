import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for personal projects and small websites',
    price: { monthly: 0, annual: 0 },
    features: [
      'Monitor up to 5 websites',
      '5-minute check intervals',
      'Email notifications',
      'Basic dashboard',
      '30-day data retention',
      'SSL certificate monitoring',
    ],
    limitations: [
      'Limited to 5 websites',
      'Basic support',
    ],
    cta: 'Get started for free',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    price: { monthly: 19, annual: 190 },
    features: [
      'Monitor up to 50 websites',
      '1-minute check intervals',
      'Email, SMS & Slack notifications',
      'Advanced dashboard with analytics',
      '1-year data retention',
      'SSL certificate monitoring',
      'Custom status pages',
      'API access',
      'Priority support',
    ],
    cta: 'Start free trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with advanced needs',
    price: { monthly: 99, annual: 990 },
    features: [
      'Monitor unlimited websites',
      '30-second check intervals',
      'All notification channels',
      'Custom dashboard & white-label',
      'Unlimited data retention',
      'SSL & performance monitoring',
      'Custom status pages with branding',
      'Full API access',
      'Dedicated account manager',
      'SLA guarantees',
      'Custom integrations',
    ],
    cta: 'Contact sales',
    popular: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = React.useState(false);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
          
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isAnnual ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                  Save 17%
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden ${
                plan.popular
                  ? 'border-blue-200 shadow-lg ring-1 ring-blue-200'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg flex items-center">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-6">
                <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-lg font-medium text-gray-500">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  {isAnnual && plan.price.monthly > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      Billed annually (${Math.round(plan.price.annual / 12)}/month)
                    </p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600">
            All plans include a 14-day free trial. No credit card required.
            <br />
            Need a custom plan? <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
}