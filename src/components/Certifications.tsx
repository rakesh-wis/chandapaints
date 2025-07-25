import React from 'react';
import { Award, Shield, Leaf, Globe, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
  // const certifications = [
  //   {
  //     icon: Award,
  //     name: 'ISO 9001:2015',
  //     category: 'Quality Management',
  //     description: 'International standard for quality management systems',
  //     color: 'blue'
  //   },
  //   {
  //     icon: Leaf,
  //     name: 'ISO 14001:2015',
  //     category: 'Environmental Management',
  //     description: 'Environmental management system certification',
  //     color: 'green'
  //   },
  //   {
  //     icon: Shield,
  //     name: 'OHSAS 18001',
  //     category: 'Health & Safety',
  //     description: 'Occupational health and safety assessment series',
  //     color: 'red'
  //   },
  //   {
  //     icon: Globe,
  //     name: 'CE Marking',
  //     category: 'European Conformity',
  //     description: 'European conformity marking for product safety',
  //     color: 'purple'
  //   },
  //   {
  //     icon: Star,
  //     name: 'ASTM Compliant',
  //     category: 'Testing Standards',
  //     description: 'American Society for Testing and Materials compliance',
  //     color: 'orange'
  //   },
  //   {
  //     icon: CheckCircle,
  //     name: 'EPA Approved',
  //     category: 'Environmental Protection',
  //     description: 'Environmental Protection Agency approved formulations',
  //     color: 'teal'
  //   }
  // ];

  const achievements = [
    {
      year: '2023',
      title: 'Industry Excellence Award',
      organization: 'National Paint & Coatings Association',
      description: 'Recognition for innovation in sustainable coating technology'
    },
    {
      year: '2022',
      title: 'Environmental Leadership Award',
      organization: 'Green Chemistry Alliance',
      description: 'Outstanding commitment to environmental responsibility'
    },
    {
      year: '2021',
      title: 'Best Supplier Award',
      organization: 'Industrial Manufacturers Consortium',
      description: 'Excellence in product quality and customer service'
    },
    {
      year: '2020',
      title: 'Innovation in Coatings',
      organization: 'International Coatings Summit',
      description: 'Revolutionary breakthrough in anti-corrosive formulations'
    }
  ];

  const certificationsImages = [
    '../../dist/assets/img/certifications/certificate-1.jpg',
    '../../dist/assets/img/certifications/certificate-2.jpg',
    '../../dist/assets/img/certifications/certificate-3.jpg',
    '../../dist/assets/img/certifications/certificate-4.jpg',
    '../../dist/assets/img/certifications/certificate-5.jpg',
    '../../dist/assets/img/certifications/certificate-6.jpg',
    '../../dist/assets/img/certifications/certificate-7.jpg',
    '../../dist/assets/img/certifications/certificate-8.jpg',
  ];
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-brand border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      teal: 'bg-teal-100 text-teal-600 border-teal-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is validated by industry-leading certifications 
            and recognition from prestigious organizations worldwide.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {certificationsImages.map((certificationsImg, index) => (            
            
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 text-center hover:bg-white hover:shadow-lg transition-all duration-300 group border border-gray-100"
              >
                {/* <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 border-2 ${colorClasses} group-hover:scale-110 transition-transform`}>
                  <IconComponent size={32} />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <div className="text-sm font-medium text-brand mb-3">{cert.category}</div>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                </div> */}
                <img src={certificationsImg} className='h-32 object-cover mx-auto' alt={`certifications ${index + 1}`} />
              </div>
           
          ))}
        </div>

        {/* Awards & Recognition */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Awards & Recognition</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-brand text-white px-3 py-1 rounded-lg font-bold text-sm flex-shrink-0">
                    {achievement.year}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-brand font-medium text-sm mb-3">{achievement.organization}</p>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Promise */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand to-brand-dark rounded-2xl p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">Our Quality Promise</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-semibold">Guaranteed Quality</h4>
                  <p className="text-white">Every product meets or exceeds industry standards</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-semibold">Continuous Testing</h4>
                  <p className="text-white">Rigorous quality control at every stage</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Award className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-semibold">Industry Recognition</h4>
                  <p className="text-white">Trusted by leading organizations worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;