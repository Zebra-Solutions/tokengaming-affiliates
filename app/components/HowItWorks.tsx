export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Sign up",
      description: "Register in no time and wait for your account to be verified.",
    },
    {
      number: 2,
      title: "Post advertisements",
      description: "Post promotional materials with your affiliate link on your platform.",
    },
    {
      number: 3,
      title: "Refer new customers",
      description: "Every new customer who is referred via your link is permanently assigned to you.",
    },
    {
      number: 4,
      title: "Withdraw money",
      description: "Get up to 40% of our net revenue from every customer you refer.",
    },
  ];

  return (
    <div className="bg-[#f2f3f5] p-5">
      <h5 className="text-[#3258FB] text-center my-4">HOW IT WORKS</h5>
      <h2 className="text-2xl font-semibold text-center mt-6 mb-16">Four steps to start earning</h2>
      <div className="flex flex-wrap justify-between gap-4 mx-10">
        {steps.map((step) => (
          <div
            key={step.number}
            className="text-center mb-16 sm:w-full md:w-1/2 lg:w-1/5"
          >
            <div className="w-12 h-12 hover:bg-[#4b68ea] bg-[#3258FB] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-medium mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
