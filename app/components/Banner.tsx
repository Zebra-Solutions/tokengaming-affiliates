import Link from "next/link";
import "./styles.css";
import { Button } from "@/components/ui/button";

const Banner: React.FC = () => {
  return (
    <section
      style={{ height: `calc(100vh - 250px)` }}
      className="py-20 bg-[#090909]  text-gray-50 flex flex-col-reverse md:flex-row items-center justify-center main-font"
    >
      <div className="w-full md:w-1/2 text-left md:text-right px-8 mb-8 md:mb-0">
        <p className="text-gray-200 text-4xl md:text-5xl text-left md:text-right pb-6 resizetext">
          <span className="zoom-in-out mr-3" style={{ animationDelay: "0s" }}>
            Promote.
          </span>
          <span className="zoom-in-out mr-3" style={{ animationDelay: "1s" }}>
            Share.
          </span>
          <span className="zoom-in-out mr-3" style={{ animationDelay: "2s" }}>
            Earn.
          </span>
          <br></br>
          <span className="wave-text">
            {"Join our affiliate program and watch your profits grow!"
              .split(" ")
              .map((word, wordIndex) => (
                <span key={wordIndex} className="wave-word">
                  {Array.from(word).map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="wave-letter"
                      style={{
                        animationDelay: `${
                          2.5 + wordIndex * 0.5 + charIndex * 0.1
                        }s`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                  &nbsp; {/* Ensures proper spacing between words */}
                </span>
              ))}
          </span>
        </p>
        <Button
          style={{ animationDelay: "8s" }}
          className="zoom-in-out-button px-6 py-3 mt-4 text-center bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800 transition"
          asChild
        >
          <Link href="/sign-up">JOIN NOW</Link>
        </Button>
      </div>

      <div className="flex justify-center items-center w-full md:w-1/2 px-40 mb-8 md:mb-0">
        <div className="spade-symbol relative inset-0 flex justify-center items-center z-0">
          <p className="text-transparent text-[22rem] absolute -bottom-32">v</p>
          <svg
            width="180"
            height="225"
            viewBox="0 0 24 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10"
          >
            <defs>
              <radialGradient
                id="spade-gradient"
                cx="20%"
                cy="30%"
                r="100%"
                fx="20%"
                fy="30%"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#C9CAC9" />
                <stop offset="100%" stopColor="#A0A1A0" />
              </radialGradient>
            </defs>
            <path
              d="M12.0122 0C13.0857 2.69611 15.0621 4.52604 16.9164 6.45358C17.99 7.56374 19.1367 8.6007 20.1249 9.78406C21.1618 11.0284 22.089 12.3582 22.9674 13.7245C23.7482 14.9445 24.0897 16.3352 23.9799 17.7992C23.7848 20.4587 22.0402 22.4716 19.3075 23.2402C16.8554 23.9356 14.3789 23.0694 12.8417 20.9955C12.7197 20.8369 12.6221 20.6417 12.4879 20.4953C12.1952 20.1537 11.8658 20.1537 11.5608 20.4831C11.4266 20.6295 11.329 20.8125 11.207 20.9711C9.53564 23.1548 6.97373 23.96 4.37522 23.1426C1.86211 22.3618 0.141967 20.1903 0.00777148 17.5552C-0.065426 16.1766 0.385958 14.9201 1.04474 13.7245C2.1915 11.6384 3.72864 9.85726 5.38779 8.17372C6.41255 7.12455 7.44952 6.09979 8.46208 5.05063C9.86503 3.59888 11.207 2.07393 12.0122 0ZM8.18149 21.4713C7.51051 21.3249 7.07133 21.2639 6.64434 21.1297C3.61885 20.2025 2.1061 17.0184 3.27726 14.0173C3.60665 13.1755 4.02143 12.3582 4.48502 11.3456C2.94787 12.6022 1.82551 14.3955 1.54492 16.1888C1.42292 16.9696 1.43512 17.8236 1.63032 18.58C2.37449 21.3249 5.47318 22.7522 8.18149 21.4713Z"
              fill="url(#spade-gradient)"
            />
            <path
              d="M15.6353 29.9376C13.2198 29.9376 10.9262 29.9376 8.47412 29.9376C9.2061 28.7786 10.0113 27.7172 10.5724 26.5461C11.1458 25.3505 11.4874 24.0452 12.0364 22.508C12.5732 24.0086 12.9026 25.2895 13.4759 26.4607C14.0493 27.644 14.8545 28.7054 15.6353 29.9376Z"
              fill="url(#spade-gradient)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Banner;
