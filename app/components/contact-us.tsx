import "./contact-us.css"; // Adjust the path if necessary

const Join: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden text-left text-white bg-center bg-cover my-12 py-28"
      style={{
        height: "100%", // Full viewport height minus 80px
        width: "100%",   
        backgroundSize:"cover",       
        backgroundRepeat:" no-repeat",      // Full width
        backgroundImage: `url("https://tokengaming.fra1.cdn.digitaloceanspaces.com/packages/media/theme/tokengaming/banners/landing-hero-desktop.webp")`  // Background color on top
      }}
    >
         <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#161617] to-transparent"></div>
        
        

      {/* Static gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#161617] to-transparent"></div>

      {/* Animated blue gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 animate-blue-gradient z-30"></div>

      {/* Content under the header */}
      <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-10 space-y-6 p-6 bg-transparent bg-opacity-50 rounded-md relative z-10 mt-20">
      <h1 className="text-center text-5xl pb-4">Contact us</h1>
        <p className="text-gray-200">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          perferendis unde aliquam facilis molestiae eligendi accusantium et
          corporis aliquid, sed beatae asperiores blanditiis voluptatum
          pariatur, consectetur tempore aspernatur quas enim?
        </p>
      
      </div>

      
    </section>
  );
};

export default Join;
