import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CalendarClock, MapPin, Phone } from "lucide-react";

// If using Next.js, uncomment the next line for image optimization
// import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/images/photo1.jpg", alt: "Community outreach event at House of Excellence Church" },
  { id: 2, src: "/images/photo2.jpg", alt: "Sunday worship session at House of Excellence Church" },
  { id: 3, src: "/images/photo3.jpg", alt: "Youth conference group photo at House of Excellence Church" },
  { id: 4, src: "/images/photo4.jpg", alt: "Family picnic activities at House of Excellence Church" },
];

const events = [
  { date: "June 10, 2025", name: "Community Outreach Day" },
  { date: "July 15, 2025", name: "Youth Conference" },
  { date: "August 3, 2025", name: "Family Fun Picnic" },
];

const sermons = [
  { title: "Faith in Action", src: "/sermons/sermon1.mp3" },
  { title: "Walking in Love", src: "/sermons/sermon2.mp3" },
  { title: "The Power of Prayer", src: "/sermons/sermon3.mp3" },
];

export default function HouseOfExcellenceChurch() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center mb-12">
        <motion.h1
          className="text-4xl font-bold text-blue-700 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          House of Excellence Church
        </motion.h1>
        <p className="text-lg">
          Empowering Lives. Building Faith. Transforming Communities.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-lg p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p>Transforming One Life at a Time.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p>A Person Exuding With Excellence.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Our Values</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Love</li>
              <li>Excellence</li>
              <li>Continuous Improvement</li>
              <li>Commitment</li>
              <li>Integrity</li>
              <li>Teamwork</li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <section className="my-12" aria-labelledby="photo-gallery-heading">
        <h2
          id="photo-gallery-heading"
          className="text-2xl font-bold text-center mb-6"
        >
          Photo Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map(({ id, src, alt }) => (
            // Uncomment and use Next.js Image for optimization if available
            // <Image key={id} src={src} alt={alt} width={400} height={300} className="rounded-xl shadow" />
            <img
              key={id}
              src={src}
              alt={alt}
              className="rounded-xl shadow"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="my-12" aria-labelledby="events-heading">
        <h2
          id="events-heading"
          className="text-2xl font-bold text-center mb-6"
        >
          Upcoming Events
        </h2>
        <ul className="space-y-4">
          {events.map(({ date, name }) => (
            <li key={date}>
              <strong>{date}:</strong> {name}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-12" aria-labelledby="sermons-heading">
        <h2
          id="sermons-heading"
          className="text-2xl font-bold text-center mb-6"
        >
          Recent Sermons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sermons.map(({ title, src }, index) => (
            <Card key={title} className="rounded-2xl shadow p-4">
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <audio controls className="w-full" aria-label={`Sermon: ${title}`}>
                  <source src={src} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="my-12 bg-blue-50 p-6 rounded-2xl shadow-md" aria-labelledby="weekly-activities-heading">
        <h2
          id="weekly-activities-heading"
          className="text-2xl font-bold text-center mb-6"
        >
          Weekly Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-blue-600 text-4xl mb-2">
              <CalendarClock className="mx-auto" />
            </div>
            <p>
              <strong>Sundays:</strong> 9:00 AM
            </p>
            <p>
              <strong>Wednesdays:</strong> 4:30 PM
            </p>
          </div>
          <div className="text-center">
            <div className="text-green-600 text-4xl mb-2">
              <MapPin className="mx-auto" />
            </div>
            <p className="font-semibold">HOUSE OF EXCELLENCE CHURCH</p>
            <p>#D1, Emerald Plaza, Zarmaganda - Rayfield Road, Jos.</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <div className="text-purple-600 text-4xl mb-2">
            <Phone className="mx-auto" />
          </div>
          <p className="font-semibold">Contact:</p>
          <a
            href="tel:09155954400"
            className="hover:underline block"
            aria-label="Call WhatsApp number 09155954400"
          >
            WhatsApp: 09155954400
          </a>
          <a
            href="tel:08164667756"
            className="hover:underline block"
            aria-label="Call mobile number 08164667756"
          >
            Mobile: 08164667756
          </a>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} House of Excellence Church. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://facebook.com"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}