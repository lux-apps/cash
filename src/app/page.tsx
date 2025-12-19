import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Cash
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Digital Cash for the Modern World
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Fast, secure, and borderless digital payments powered by the Lux Network.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Instant Transfers</h2>
          <p className="text-lg text-gray-400">Send and receive payments in seconds, not days. LUX Cash enables near-instant settlement for any transaction.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Global Access</h2>
          <p className="text-lg text-gray-400">Access your funds from anywhere in the world. No borders, no limits, no restrictions.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bank-Grade Security</h2>
          <p className="text-lg text-gray-400">Your funds are protected by the same cryptographic security that powers the Lux blockchain.</p>
        </div>
      </section>

    </main>
  )
}
