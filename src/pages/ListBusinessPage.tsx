import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Shield, Star, Users } from "lucide-react";

export function ListBusinessPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/30 hover:text-amber-400 transition-colors mb-10"
          >
            <ArrowLeft className="w-3 h-3" /> Home
          </Link>
          <p className="text-amber-400/60 text-[10px] tracking-[0.5em] uppercase mb-4 font-sans font-light">
            For Luxury Providers
          </p>
          <h1 className="font-serif text-[36px] md:text-[52px] font-light tracking-[-0.02em] leading-[0.95] mb-6">
            Become a Verified Provider
          </h1>
          <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
            The HHI Luxury Guide serves Hilton Head Island's most discerning residents and visitors.
            We invite established luxury businesses to join our curated directory of verified providers.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="border border-white/[0.06] p-8">
              <Shield className="w-6 h-6 text-amber-400/60 mb-5" strokeWidth={1} />
              <h3 className="font-serif text-lg font-light mb-3">Verified Status</h3>
              <p className="text-white/30 text-sm font-light leading-relaxed">
                Your listing carries our verification badge, signaling quality and trust to distinguished visitors exploring the island.
              </p>
            </div>
            <div className="border border-white/[0.06] p-8">
              <Users className="w-6 h-6 text-amber-400/60 mb-5" strokeWidth={1} />
              <h3 className="font-serif text-lg font-light mb-3">Qualified Audience</h3>
              <p className="text-white/30 text-sm font-light leading-relaxed">
                Our readers are accomplished families, relocators, and seasoned travelers actively seeking the best on Hilton Head Island.
              </p>
            </div>
            <div className="border border-white/[0.06] p-8">
              <Star className="w-6 h-6 text-amber-400/60 mb-5" strokeWidth={1} />
              <h3 className="font-serif text-lg font-light mb-3">Editorial Features</h3>
              <p className="text-white/30 text-sm font-light leading-relaxed">
                Featured providers receive dedicated editorial coverage, photography, and placement within our Ten Pillars of Luxury.
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="max-w-xl mx-auto">
            <h2 className="font-serif text-2xl font-light text-center mb-2">Request a Consultation</h2>
            <p className="text-white/30 text-sm font-light text-center mb-10">
              Tell us about your business. All inquiries are handled with complete discretion.
            </p>

            {submitted ? (
              <div className="border border-amber-400/20 bg-amber-400/[0.03] p-10 text-center">
                <CheckCircle2 className="w-8 h-8 text-amber-400/60 mx-auto mb-4" strokeWidth={1} />
                <p className="font-serif text-xl font-light mb-2">Thank you</p>
                <p className="text-white/30 text-sm font-light">
                  We'll review your submission and respond within 48 hours.
                </p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-5 py-4 text-sm font-light focus:outline-none focus:border-amber-400/30 placeholder:text-white/20"
                  required
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-5 py-4 text-sm font-light focus:outline-none focus:border-amber-400/30 placeholder:text-white/20"
                  required
                />
                <input
                  type="text"
                  placeholder="Business name"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-5 py-4 text-sm font-light focus:outline-none focus:border-amber-400/30 placeholder:text-white/20"
                  required
                />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-5 py-4 text-sm font-light focus:outline-none focus:border-amber-400/30 text-white/60 appearance-none"
                  required
                >
                  <option value="" className="bg-[#0a0a0a]">Select a category</option>
                  <option value="fashion-style" className="bg-[#0a0a0a]">Fashion & Style</option>
                  <option value="luxury-dining" className="bg-[#0a0a0a]">Luxury Dining</option>
                  <option value="luxury-real-estate" className="bg-[#0a0a0a]">Luxury Real Estate</option>
                  <option value="home-lifestyle" className="bg-[#0a0a0a]">Home & Lifestyle</option>
                  <option value="private-aviation" className="bg-[#0a0a0a]">Private Aviation</option>
                  <option value="private-captains" className="bg-[#0a0a0a]">Private Captains</option>
                  <option value="luxury-events" className="bg-[#0a0a0a]">Luxury Events</option>
                  <option value="family-activities" className="bg-[#0a0a0a]">Family & Activities</option>
                  <option value="day-trips-guides" className="bg-[#0a0a0a]">Day Trips & Guides</option>
                  <option value="art-culture" className="bg-[#0a0a0a]">Art & Culture</option>
                </select>
                <textarea
                  placeholder="Tell us about your business and what makes it special..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-5 py-4 text-sm font-light focus:outline-none focus:border-amber-400/30 placeholder:text-white/20"
                  rows={4}
                />
                <button
                  type="submit"
                  className="w-full text-[10px] tracking-[0.4em] uppercase text-amber-400 border border-amber-400/25 px-10 py-4 hover:bg-amber-400/[0.08] hover:border-amber-400/40 transition-all duration-500 font-sans font-light"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
