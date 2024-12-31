'use client'; // Necessary for client-side interactivity in Next.js

import { FaFlask, FaPaintBrush, FaBox, FaTruck } from 'react-icons/fa';

/**
 * 1. Define a Union Type for colorClass
 */
type ColorClass = 'purple' | 'pink' | 'yellow' | 'green';

/**
 * 2. Define a mapping for color classes to maintain consistency
 */
const colorClasses: Record<ColorClass, { bg: string; text: string }> = {
  purple: { bg: 'bg-purple-500', text: 'text-purple-500' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-500' },
  yellow: { bg: 'bg-yellow-500', text: 'text-yellow-500' },
  green: { bg: 'bg-green-500', text: 'text-green-500' },
};

/**
 * 3. Define the Step Interface
 */
interface Step {
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  description: string;
  colorClass: ColorClass;
}

/**
 * 4. Define the Steps Array with Extended Descriptions
 */
const steps: Step[] = [
  {
    title: 'Select Perfume',
    icon: FaFlask,
    description: `Begin your journey by selecting a fragrance that resonates with your brand's identity. Our extensive collection offers a variety of scents, from floral and fresh to oriental and woody, ensuring you find the perfect match for your target audience. Whether you're aiming for a timeless classic or a modern twist, we provide the tools and expertise to help you make an informed decision.`,
    colorClass: 'purple',
  },
  {
    title: 'Design Label',
    icon: FaPaintBrush,
    description: `Your product's label is the first impression customers will have. Collaborate with our talented designers to craft a label that not only captures the essence of your fragrance but also stands out on the shelves. From typography and color schemes to imagery and layout, we ensure every element aligns with your brand's vision and appeals to your market.`,
    colorClass: 'pink',
  },
  {
    title: 'Choose Packaging',
    icon: FaBox,
    description: `Packaging plays a crucial role in protecting your product and enhancing its appeal. Select from a range of high-quality packaging options that complement your fragrance and label design. Whether you prefer sleek and minimalistic or ornate and luxurious, our packaging solutions ensure your perfume is presented in the best possible light, attracting customers and conveying quality.`,
    colorClass: 'yellow',
  },
  {
    title: 'Deliver',
    icon: FaTruck,
    description: `Once your product is ready, we take care of the logistics to bring it to market. Our efficient delivery system ensures your perfume reaches retailers and customers promptly and safely. From warehousing and inventory management to shipping and distribution, we handle every aspect, allowing you to focus on growing your brand and connecting with your audience.`,
    colorClass: 'green',
  },
];

/**
 * 5. Define the StepCard Component for Reusability
 */
interface StepCardProps {
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  description: string;
  color: { bg: string; text: string };
}

const StepCard: React.FC<StepCardProps> = ({ title, icon: Icon, description, color }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center bg-white max-w-2xl shadow-md p-8">
      {/* Icon Section */}
      <div className={`flex-shrink-0 p-4 rounded-full ${color.bg} ${color.text}`}>
        <Icon size={30} />
      </div>

      {/* Content Section */}
      <div className="mt-4 md:mt-0 md:ml-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

/**
 * 6. Define the StartYourOwnBrandBlog Component
 */
export default function StartYourOwnBrandBlog() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Steps List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {steps.map((step, index) => {
            const colors = colorClasses[step.colorClass];
            return (
              <StepCard
                key={index}
                title={step.title}
                icon={step.icon}
                description={step.description}
                color={colors}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
