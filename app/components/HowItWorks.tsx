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
    <div className="bg-[#f2f3f5] p-8 -mt-4 shadow-lg shadow-gray-500" id="howitworks">
      <h5 className="text-[#3258FB] text-center my-14">HOW IT WORKS</h5>
      <h2 className="text-2xl font-semibold text-center mb-20">Four steps to start earning</h2>
      <div className="flex flex-wrap justify-between gap-4 mx-20 my-10">
        {steps.map((step) => (
          <div
            key={step.number}
            className="text-center mb-16 sm:w-full md:w-1/2 lg:w-1/5"
          >
            <div className="w-12 h-12 hover:bg-[#4b68ea] bg-[#3258FB] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              {step.number}
            </div>
            <h4 className="text-lg  mb-2">{step.title}</h4>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
