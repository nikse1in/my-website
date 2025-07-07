import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full shadow-2xl">
        <div className="flex gap-8">
          {/* Left side - Profile section */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3 mb-6">
              {/* X Icon - Replace with uploaded image */}
              <div className="w-6 h-6">
                <Image src="/x-icon.png" alt="X icon" width={24} height={24} className="w-full h-full object-contain" />
              </div>
              {/* W Icon - Replace with uploaded image */}
              <div className="w-10 h-10">
                <Image
                  src="/w-icon.png"
                  alt="W icon"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg mb-4 inline-block">
              <Image src="/profile-avatar.png" alt="Profile avatar" width={200} height={200} className="rounded-lg" />
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">oxb.base.eth</h2>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="w-px bg-gray-300 mx-4"></div>

          {/* Right side - About section */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About me</h1>

            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              I'm a Product Manager at{" "}
              <Link
                href="https://x.com/base"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Base
              </Link>
              , dedicated to building the best trading experience for all types of users at{" "}
              <Link
                href="https://x.com/CoinbaseWallet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Coinbase Wallet
              </Link>
              . As an OG degen, I spend hours in the trenches and strongly believe in the new onchain economy, unlocking
              financial freedom for billions.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed italic">
              Ex-co-founder of{" "}
              <Link
                href="https://x.com/bolide_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 font-medium"
              >
                Bolide
              </Link>
              , a memecoin trading app. Previously built a peer-to-peer trading platform, trading bots, a fun bot for
              friend.tech, and a dApp with yield automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
