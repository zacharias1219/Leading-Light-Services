import { Lamp } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Lamp className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold">Leading Light Services</span>
          </div>
          <nav>
            <Link href="#" className="text-blue-600 hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center">
            I Build Fans, Not Followers—So Your LinkedIn Drives Sales, Not Just Likes.
          </h1>
          <p className="text-2xl text-center font-semibold">
            SaaS Founders: Your LinkedIn Should Attract Leads, Not Just Likes.
          </p>
          <p className="text-xl text-center">If you're not building your authority, your competitors are.</p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">You know LinkedIn is powerful… but:</h2>
            <ul className="list-none space-y-2">
              <li>❌ You don't have time to post consistently.</li>
              <li>❌ You've tried ghostwriters, but they don't sound like you.</li>
              <li>❌ You're not sure if LinkedIn will actually bring in leads.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Meanwhile, other SaaS founders are using LinkedIn to:</h2>
            <ul className="list-none space-y-2">
              <li>✅ Build trust at scale—so selling feels effortless.</li>
              <li>✅ Get inbound leads from high-value clients.</li>
              <li>✅ Land speaking gigs, podcast invites, and funding opportunities.</li>
            </ul>
          </div>

          <p className="text-xl font-semibold">The only difference? They have a system. I build that system for you.</p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">✅ What Makes This Different?</h2>
            <ul className="list-none space-y-4">
              <li>
                <strong>🎯 Not just content—authority.</strong>
                <p>
                  Most ghostwriters chase engagement. I focus on making you the SaaS founder people trust, follow, and
                  buy from.
                </p>
              </li>
              <li>
                <strong>🗣 Your voice, amplified.</strong>
                <p>
                  I don't just "write posts." I capture your unique voice, insights, and expertise—so your content
                  sounds like you, not a generic LinkedIn influencer.
                </p>
              </li>
              <li>
                <strong>🏆 Fans, not followers.</strong>
                <p>
                  Followers scroll. Fans engage, trust, and buy. I help you attract the right audience who actually
                  cares about what you say.
                </p>
              </li>
              <li>
                <strong>📈 More inbound, less outbound.</strong>
                <p>
                  Your LinkedIn will work while you sleep—bringing in customers, investors, and talent without cold DMs.
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">🎯 Is This for You?</h2>
            <ul className="list-none space-y-2">
              <li>✅ You're a scaling or VC-backed SaaS founder who knows visibility matters.</li>
              <li>✅ You believe in playing the long game to build trust, not just going viral.</li>
              <li>✅ You're too busy running your company to post daily, but you know you should.</li>
            </ul>
            <p>If that's you, let's talk. 👇</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">⏳ What Happens If You Wait?</h2>
            <ul className="list-none space-y-2">
              <li>
                ❌ Missed deals. Your competitors are building relationships and authority while you stay invisible.
              </li>
              <li>❌ Lack of trust. If buyers can't see your expertise, they'll go with someone else.</li>
              <li>
                ❌ More outbound grind. Without organic trust, you'll always be chasing—not attracting—opportunities.
              </li>
            </ul>
            <p>Every week you wait is a week you fall behind.</p>
            <p className="font-semibold">🚀 Let's fix that. DM me or book a quick chat.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">🤔 FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How much of my time will this take?</AccordionTrigger>
                <AccordionContent>
                  About 15 minutes a week. I handle everything—strategy, writing, and engagement optimization. You just
                  approve posts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What if my industry is super niche?</AccordionTrigger>
                <AccordionContent>
                  That's a good thing. Niche = authority. I'll help position you as the go-to expert in your space.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How soon will I see results?</AccordionTrigger>
                <AccordionContent>
                  Many clients see increased engagement in weeks. But the real win is long-term authority that generates
                  inbound leads and trust.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What if I'm not sure what to post?</AccordionTrigger>
                <AccordionContent>
                  That's my job. I craft strategic, high-impact content so you never run out of great posts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How do I get started?</AccordionTrigger>
                <AccordionContent>Simple. DM me or book a quick call to see if this is the right fit.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center space-y-4">
            <p className="text-2xl font-semibold">💡</p>
            <p className="text-xl font-semibold">Let's make LinkedIn your best growth channel.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Book a Call
            </button>
          </div>
        </section>
      </main>

      <footer className="container mx-auto py-6 px-4 text-center">
        <p>&copy; 2025 Leading Light Services. All rights reserved.</p>
      </footer>
    </div>
  )
}

