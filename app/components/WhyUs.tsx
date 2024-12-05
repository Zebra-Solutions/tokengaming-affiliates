import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"; // Make sure to import the necessary components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faDollarSign,
  faCreditCard,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome icons
import { Button } from "@/components/ui/button";
import Link from "next/link";

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: faChartBar,
      title: "Detailed Stats",
      description:
        "Our unique affiliate system provides you hourly updates as well as allowing you to track your campaigns, customers and traffic.",
    },
    {
      icon: faDollarSign,
      title: "Lifetime Revenue",
      description:
        "As always, your potential revenue is limitless. The more traffic you bring in, the more you will earn. Our generous payout structure allows you to earn on every player.",
    },
    {
      icon: faCreditCard,
      title: "Fast Affiliate Payments",
      description:
        "We pay our affiliates fast. At the start of each month, we pay commissions within 8 business days.",
    },
    {
      icon: faUserTie,
      title: "Local Guidance",
      description:
        "Benefit from the guidance and help of our location-based country managers, who have been over 10 years in the gaming industry.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-[#F5F5F5] text-[#161617] shadow-lg shadow-gray-500"
    >
      <h5 className="text-[#3258FB] text-center pb-8 ">WHY US</h5>
      <h3 className="text-center mb-14 font-normal text ">
        THE BEST SERVICE IN THE INDUSTRY
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="max-w-sm mx-auto p-6 border-t-4 border-t-[#3258FB] min-h-[300px] flex flex-col justify-between rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <CardHeader className="text-center">
              <FontAwesomeIcon
                icon={feature.icon}
                className="mb-4 h-[20px] w-[20px]"
                style={{ color: "#3258FB" }}
              />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardDescription className="text-gray-500 text-center flex-grow">
              {feature.description}
            </CardDescription>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button className="rounded-3xl py-4 px-10 transition duration-300 ease-in-out hover:bg-[#4563e9] bg-[#3258FB] text-[#f2f3f5] text-md font-bold">
          <Link href="/sign-up" target="_blank" rel="noopener noreferrer">
            Become a partner
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default WhyUs;
