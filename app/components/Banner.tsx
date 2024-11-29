import Link from "next/link";
import "./styles.css";
import { Button } from "@/components/ui/button";
import Folder from "./folderShapedElement";
import FolderCard from "./folderShapedElement";

const Banner: React.FC = () => {
  return (
    <section
      style={{ height: `calc(100vh - 250px)` }}
      className="py-20 bg-[#090909]  text-gray-50 flex flex-col-reverse md:flex-row items-center justify-center main-font"
    >
      <div className="w-full md:w-1/2 text-left md:text-right px-8 mb-8 md:mb-0 font-semibold">
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
          className="zoom-in-out-button px-6 py-3 mt-4 text-center bg-blue-600 text-white rounded-md hover:bg-blue-800 transition font-extrabold"
          asChild
        >
          <Link href="/sign-up">JOIN NOW</Link>
        </Button>
      </div>

     <FolderCard/>
    </section>
  );
};

export default Banner;
