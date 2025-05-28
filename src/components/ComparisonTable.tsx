import React from 'react';
import { Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const comparisonData = [
  {
    category: 'Monitoring Features',
    features: [
      {
        name: 'Website uptime monitoring',
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: 'SSL certificate monitoring',
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Performance monitoring',
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Domain expiration monitoring',
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Content change monitoring',
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        name: 'API endpoint monitoring',
        starter: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'Limits & Intervals',
    features: [
      {
        name: 'Monitored websites',
        starter: '5',
        professional: '50',
        enterprise: 'Unlimited',
      },
      {
        name: 'Check interval',
        starter: '5 minutes',
        professional: '1 minute',
        enterprise: '30 seconds',
      },
      {
        name: 'Data retention',
        starter: '30 days',
        professional: '1 year',
        enterprise: 'Unlimited',
      },
      {
        name: 'Locations',
        starter: '3',
        professional: '10',
        enterprise: '20+',
      },
    ],
  },
  {
    category: 'Notifications',
    features: [
      {
        name: 'Email notifications',
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: 'SMS notifications',
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Slack integration',
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Discord integration',
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Webhook notifications',
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Phone call alerts',
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        name: 'Custom notification rules',
        starter: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'Dashboard & Reporting',
    features: [
      {
        name: 'Basic dashboard',
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Advanced analytics',
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Custom reports',
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: 'White-label dashboard',
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        name: 'Public status pages',
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Branded status pages',
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
  {
    category: 'API & Integrations',
    features: [
      {
        name: 'REST API access',
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Webhook integrations',
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Third-party integrations',
        starter: false,
        professional: '10+',
        enterprise: '25+',
      },
      {
        name: 'Custom integrations',
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
  {
    category: 'Support',
    features: [
      {
        name: 'Email support',
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Priority support',
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Phone support',
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        name: 'Dedicated account manager',
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        name: 'SLA guarantees',
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
];

const FeatureIcon = ({ value }: { value: boolean | string }) => {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="h-4 w-4 text-green-600" />
    ) : (
      <X className="h-4 w-4 text-gray-400" />
    );
  }
  return <span className="text-sm font-medium text-gray-900">{value}</span>;
};

export function ComparisonTable() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compare all features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See exactly what's included in each plan
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-white border-b">
            <CardTitle className="sr-only">Feature Comparison</CardTitle>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1">
                <span className="text-lg font-semibold text-gray-900">Features</span>
              </div>
              <div className="text-center">
                <span className="text-lg font-semibold text-gray-900">Starter</span>
                <p className="text-sm text-gray-600 mt-1">Free</p>
              </div>
              <div className="text-center">
                <span className="text-lg font-semibold text-gray-900">Professional</span>
                <p className="text-sm text-gray-600 mt-1">$19/month</p>
              </div>
              <div className="text-center">
                <span className="text-lg font-semibold text-gray-900">Enterprise</span>
                <p className="text-sm text-gray-600 mt-1">$99/month</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            {comparisonData.map((category) => (
              <div key={category.category}>
                <div className="bg-gray-100 px-6 py-3 border-b">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    {category.category}
                  </h3>
                </div>
                
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={feature.name}
                    className={`grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-200 ${
                      featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <div className="col-span-1 flex items-center">
                      <span className="text-sm text-gray-900">{feature.name}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <FeatureIcon value={feature.starter} />
                    </div>
                    <div className="flex items-center justify-center">
                      <FeatureIcon value={feature.professional} />
                    </div>
                    <div className="flex items-center justify-center">
                      <FeatureIcon value={feature.enterprise} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Have questions about our features? 
            <a href="#contact" className="ml-1 text-blue-600 hover:text-blue-700 font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}