import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"; 

export default function LandingPage() {
  return (
    <>
      <Image className="mb-3"
        src="/logo.png" // Path to your image
        alt="Description of the image" // Alt text for accessibility
        width={200} // Desired width in pixels
        height={90} // Desired height in pixels
        priority
      />
      <p className="text-center">BonusTracker.io is a game-changer in the iGaming world.</p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  );
}
