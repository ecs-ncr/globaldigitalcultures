
import paromita from "./assets/speakers/paromita.png";
import tonisha from "./assets/speakers/tonisha.png";
import pallavi from "./assets/speakers/pallavi.png";
import pateman from "./assets/speakers/pateman.jpg";

import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      {/* Navbar */}
<header className="bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* LEFT SIDE — LOGOS + TITLE */}
    <div className="flex items-center gap-4 ml-0">

  
      {/* University Logo (public folder) */}
      <img 
        src="/universitylogo.png"
        alt="University Logo"
        className="w-20 h-20 object-contain"
      />
{/* Conference Logo */}
  <img
    src="/gdc-logo.png"
    alt="GDCLogo"
    className="w-20 h-auto object-contain mix-blend-multiply"
  />
      {/* ECSA Logo (public folder) */}
      <img 
        src="/ecsa-logo.png"
        alt="ECSA Logo"
        className="w-20 h-auto object-contain"
      />

      {/* Title text */}
      <div>
        <div className="text-lg font-semibold">Global Digital Cultures</div>
        <div className="text-xs text-gray-500">
          23–24 February, 2026 · Hybrid · CHRIST Delhi NCR
        </div>
      </div>
    </div>

    {/* RIGHT SIDE — NAV LINKS */}
    <nav className="hidden md:flex gap-6 items-center text-sm">
      <a href="#about" className="hover:underline">About</a>
      <a href="#themes" className="hover:underline">Sub-themes</a>
      <a href="#speakers" className="hover:underline">Speakers</a>
      <a href="#fees" className="hover:underline">Registration</a>
      <a href="#important-dates" className="hover:underline">Important Dates</a>
      <a href="#conference-chairs" className="hover:underline">Conference Chairs</a>
      <a href="#conveners" className="hover:underline">Conveners</a>

      <a href="#contact" className="hover:underline">Contact</a>
    </nav>

  </div>
</header>


      {/* Hero Section */}
      <section id="home" className="relative text-white py-20 scroll-mt-20 overflow-hidden">
  {/* Background video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/bg-video.mp4" type="video/mp4" />
  </video>

  {/* Dark overlay for readability */}
<div className="absolute inset-0 bg-black/60 z-10"></div>

<div className="relative z-20 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

  {/* LEFT TEXT */}
  <div className="animate-fade-in">
    <div className="flex items-center gap-4">

  

  {/* Title */}
  <h1
    className="glitch text-4xl md:text-5xl font-extrabold leading-tight"
    data-text="Global Digital Cultures"
  >
    Global Digital Cultures
  </h1>

</div>


    <p className="mt-4 text-lg text-indigo-100 max-w-xl">
      Texts, Technologies, and Audiences — an international hybrid conference exploring platform capitalism,
      digital labour, algorithmic visibility, and creative futures with a focus on South Asia and the Global South.
    </p>

    <div className="mt-6 flex gap-3">
      <a
        href="#fees"
        className="inline-block bg-white text-indigo-700 px-5 py-3 rounded-md font-medium shadow hover:scale-105 transition"
      >
        Register
      </a>

      <a
        href="#important-dates"
        className="inline-block border border-white/30 px-5 py-3 rounded-md text-white hover:bg-white/10 transition"
      >
        Important Dates
      </a>
    </div>

    <div className="mt-6 text-sm text-indigo-100">
      <div>23–24 February, 2026 · Hybrid · CHRIST (Deemed to be University), Delhi NCR Campus</div>
      <div className="mt-2">Abstract submission deadline: <strong>30 January, 2026</strong></div>
    </div>
  </div>

  {/* RIGHT CARD – Chic Animated Version */}
<div className="relative group">

  {/* Glow background */}
  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-xl group-hover:opacity-60 transition"></div>

  {/* Card */}
  <div className="relative rounded-xl bg-white/80 backdrop-blur-lg p-6 shadow-2xl border border-white/30">

    <h3 className="text-xl font-bold tracking-wide text-gray-900 relative overflow-hidden">
      <span className="relative z-10">Call for Abstracts</span>
      <span className="absolute inset-0 bg-black/5 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700"></span>
    </h3>

    <p className="mt-3 text-sm leading-relaxed text-gray-700">
      Submit an abstract (max 300 words) with a short bio. Email as a Word file to
      <a
        href="mailto:engconference.ncr@christuniversity.in"
        className="text-indigo-600 underline ml-1 hover:text-indigo-800 transition"
      >
        engconference.ncr@christuniversity.in
      </a>
    </p>

    <ul className="mt-4 text-sm space-y-1 text-gray-700">
      <li><strong>Notification:</strong> 10 February, 2026</li>
      <li><strong>Last Date:</strong> 30 January, 2026</li>
      <li>Offline participation includes lunch & refreshments.</li>
    </ul>

    <div className="mt-6 flex gap-3">
      <a
        href="mailto:engconference.ncr@christuniversity.in"
        className="px-5 py-2 bg-black text-white rounded-md tracking-wide hover:scale-105 transition"
      >
        Submit Now
      </a>

      <a
  href="#fees"
  className="px-5 py-2 border border-gray-900 text-gray-900 font-medium rounded-md 
             hover:bg-gray-900 hover:text-white transition"
>
  View Fees
</a>

    </div>

    </div>
</div>
</div>
</section>


      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
        <h2 className="text-3xl font-bold">About the Conference</h2>
        <p className="mt-4 text-gray-700 leading-relaxed text-lg">
          In the era of rapid technological change, digitalization, globalization, and platformization are reshaping film,
          media, and creative industries. This conference critically explores the intersections of texts, technologies,
          and audiences in global digital cultures, with a focus on South Asia and the Global South.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed text-lg">
          It engages with questions of power, identity, labour, policy, and representation, centering issues of access,
          marginality, and creativity in an age of platform capitalism and algorithmic visibility.
        </p>
      </section>
      {/* About the Department */}
<section
  id="department"
  className="relative bg-white py-28 overflow-hidden"
>
  {/* Decorative background blocks */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-100 rotate-12 opacity-60"></div>
    <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-purple-100 rotate-6 opacity-60"></div>
    <div className="absolute bottom-16 right-20 w-40 h-40 bg-pink-100 -rotate-12 opacity-60"></div>
    <div className="absolute top-20 right-1/4 w-64 h-64 border-2 border-gray-200 rotate-3"></div>
  </div>

  {/* Actual content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    <div>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900">
        Department of English & Cultural Studies
      </h2>

      <div className="h-1 w-20 bg-black mt-4 mb-8"></div>

      <p className="text-gray-700 text-lg leading-relaxed">
        The Department of English and Cultural Studies at CHRIST (Deemed to be University), 
        Delhi NCR Campus, is an interdisciplinary space dedicated to literature, cultural 
        theory, media studies, and critical humanities. The department fosters critical 
        thinking, global perspectives, and innovative research practices that interrogate 
        culture, identity, power, and digital transformations.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-6">
        With a strong emphasis on research, creative practice, and community engagement, 
        the department nurtures scholars who engage meaningfully with contemporary cultural 
        and literary debates.
      </p>
    </div>

    {/* Right-side highlight card */}
    <div className="relative">
      <div className="absolute -top-6 -left-6 w-full h-full border-2 border-black rounded-sm"></div>

      <div className="bg-white p-10 shadow-2xl relative">
        <h3 className="text-2xl font-semibold mb-4">
          Interdisciplinary · Critical · Global
        </h3>
        <p className="text-gray-600 leading-relaxed">
          A space where literature meets digital cultures, performance, and media, 
          shaping critical thinkers for a rapidly transforming world.
        </p>
      </div>
    </div>

  </div>
</section>



{/* About CHRIST University */}
<section id="university" className="bg-black py-24 text-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    <div className="order-2 md:order-1">
      <h2 className="text-4xl font-bold tracking-tight">
        CHRIST (Deemed to be University)
      </h2>

      <div className="h-1 w-20 bg-white mt-4 mb-8"></div>

      <p className="text-gray-300 text-lg leading-relaxed">
        Established with a vision of excellence in education, CHRIST (Deemed to be University) 
        has evolved into a globally recognised institution known for academic rigor, 
        ethical grounding, and holistic student development.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed mt-6">
        The Delhi NCR Campus stands as a dynamic center of interdisciplinary learning, 
        innovation, and global academic engagement.
      </p>
    </div>

    <div className="order-1 md:order-2">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">
          Excellence · Vision · Global Impact
        </h3>
        <p className="text-gray-300 leading-relaxed">
          A legacy of academic distinction shaping future-ready global citizens.
        </p>
      </div>
    </div>

  </div>
</section>



      {/* Sub-themes */}
      <section id="themes" className="bg-white py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Sub-themes</h2>
          <p className="mt-2 text-gray-600">(but not limited to)</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Platform Capitalism, Algorithms, and Visibility',
              'Digital Labour and Creative Economies',
              'Identity, Representation, and Resistance',
              'Aesthetics, Narratives, and Storytelling',
              'Infrastructures and Policy',
              'Transnational Cultures and Media',
              'Futures of Digital Creativity',
              'Texts (Aesthetic & Narrative Forms)',
              'Technologies (Platforms & Algorithms)',
              'Audiences (Users & Communities)'
            ].map(item => (
              <div
  key={item}
  className="p-4 border rounded-md bg-gray-50 blink-hover cursor-pointer"
>

                <div className="font-medium text-sm">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
        <h2 className="text-3xl font-bold">Speakers & Resource Persons</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {name: 'Dr. Paromita Pain', title: 'Assistant Professor, University of Nevada, Reno', img: paromita},
            {name: 'Dr. Tonisha Guin', title: 'Assistant Professor, IIT Jodhpur', img: tonisha},
            {name: 'Dr. Pallavi Guha', title: 'Associate Professor, Towson University', img: pallavi},
            {name: 'Prof. Matthew Pateman', title: 'Head of Department, Edge Hill University', img: pateman},
          ].map(s => (
            <div key={s.name} className="p-4 bg-white rounded-lg shadow-sm">
              <img 
                src={s.img} 
                alt={s.name}
                className="h-36 w-full object-cover rounded-md"
              />
              <div className="mt-3">
                <div className="font-semibold">{s.name}</div>
                <div className="text-sm text-gray-600 mt-1">{s.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    {/* Registration & Fees */}
<section id="fees" className="bg-gradient-to-b from-indigo-50 to-purple-50 py-20 scroll-mt-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-4xl font-extrabold text-gray-900 text-center">
      Registration & Fees
    </h2>
    <p className="text-center text-gray-600 mt-3 text-lg">
      Online & Offline Fee Structure for the Global Digital Cultures Conference 2026
    </p>

    {/* GENERAL TABLE */}
    <div className="mt-12 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10">
      <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
        General Participants
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="bg-indigo-100 text-indigo-900 text-lg font-semibold">
              <th className="border p-3">Category</th>
              <th className="border p-3">Online</th>
              <th className="border p-3">Offline</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-md">
            {[
              ["Faculty", "1000", "1500"],
              ["Scholars", "800", "1000"],
              ["PG Students", "800", "1000"],
              ["Independent Scholar", "800", "1000"],
              ["UG Students", "800", "1000"],
              ["Participation", "500", "800"],
              ["International", "$40", "$80"],
            ].map((row) => (
              <tr key={row[0]} className="hover:bg-indigo-50 transition">
                <td className="border p-3 font-medium">{row[0]}</td>
                <td className="border p-3">{row[1]}</td>
                <td className="border p-3">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-center mt-2 text-gray-500">
        *Offline participation includes lunch, tea, and snacks.
      </p>
    </div>

    {/* CHRISTITES TABLE */}
    <div className="mt-16 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10">
      <h3 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        For CHRISTITES
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="bg-purple-100 text-purple-900 text-lg font-semibold">
              <th className="border p-3">Category</th>
              <th className="border p-3">Fees</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-md">
            {[
              ["UG / PG Students", "₹ 500"],
              ["PhD Scholars / Independent Researchers", "₹ 500"],
              ["Faculty Members / Postdoc / Professionals", "₹ 500"],
            ].map((row) => (
              <tr key={row[0]} className="hover:bg-purple-50 transition">
                <td className="border p-3 font-medium">{row[0]}</td>
                <td className="border p-3 font-semibold text-purple-700">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  </div>
</section>



      {/* Important Dates */}
      <section id="important-dates" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
        <h2 className="text-3xl font-bold">Important Dates</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <div className="font-semibold">Abstract Submission</div>
            <div className="text-sm text-gray-700 mt-1">30 January, 2026</div>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <div className="font-semibold">Notification of Acceptance</div>
            <div className="text-sm text-gray-700 mt-1">10 February, 2026</div>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <div className="font-semibold">Last Date to Register</div>
            <div className="text-sm text-gray-700 mt-1">15 February, 2026</div>
          </div>
        </div>
      </section>
      <a
  href="/brochure.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md font-medium shadow 
             hover:bg-indigo-700 hover:scale-105 transition"
>
  View Conference Brochure (PDF)
</a>


{/* Conference Chairs */}
<section id="conference-chairs" className="bg-black text-white py-24 relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold tracking-wide mb-16 text-center">
      Conference Chairs
    </h2>

    <div className="grid md:grid-cols-2 gap-12">

      {/* Chair 1 */}
      <div className="group relative bg-white/5 backdrop-blur-lg p-10 rounded-xl border border-white/10 hover:border-white/30 transition">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition rounded-xl"></div>

        <h3 className="text-2xl font-semibold relative z-10">Dr. Anuja Singh</h3>
        <p className="mt-3 text-sm tracking-widest uppercase text-gray-300 relative z-10">
          Head of Department
        </p>
        <p className="mt-2 text-sm text-gray-400 relative z-10">
          Department of English and Cultural Studies
        </p>
      </div>

      {/* Chair 2 */}
      <div className="group relative bg-white/5 backdrop-blur-lg p-10 rounded-xl border border-white/10 hover:border-white/30 transition">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition rounded-xl"></div>

        <h3 className="text-2xl font-semibold relative z-10">Dr. Prabha Zacharias</h3>
        <p className="mt-3 text-sm tracking-widest uppercase text-gray-300 relative z-10">
          Academic Coordinator
        </p>
        <p className="mt-2 text-sm text-gray-400 relative z-10">
          Department of English and Cultural Studies
        </p>
      </div>

    </div>
  </div>
</section>

{/* Conference Conveners */}
<section 
  id="conveners" 
  className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-24 scroll-mt-24"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-gray-900">
      Conference Conveners
    </h2>
    <p className="text-center text-gray-600 mt-3 text-lg">
      For queries, feel free to reach out directly
    </p>

    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Dr. Tanupriya */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold text-gray-900">
          Dr. Tanupriya
        </h3>
        <a 
          href="mailto:tanupriya@christuniversity.in"
          className="mt-4 inline-block text-indigo-600 hover:underline break-all"
        >
          tanupriya@christuniversity.in
        </a>
      </div>

      {/* Dr. Anu M Varghese */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold text-gray-900">
          Dr. Anu M Varghese
        </h3>
        <a 
          href="mailto:anu.varghese@christuniversity.in"
          className="mt-4 inline-block text-indigo-600 hover:underline break-all"
        >
          anu.varghese@christuniversity.in
        </a>
      </div>

      {/* Mr. Siddharth Dubey */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold text-gray-900">
          Mr. Siddharth Dubey
        </h3>
        <a 
          href="mailto:dubey.siddharth@christuniversity.in"
          className="mt-4 inline-block text-indigo-600 hover:underline break-all"
        >
          dubey.siddharth@christuniversity.in
        </a>
      </div>

    </div>
  </div>
</section>

{/* SOCIAL MEDIA – Futuristic Section */}
<section 
  id="socials" 
  className="relative overflow-hidden py-24 px-6"
>

  {/* Animated grid background */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>

  {/* Soft neon glow blobs */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

  <div className="relative max-w-5xl mx-auto text-center">

    <h2 className="text-4xl font-extrabold tracking-widest text-white uppercase glitch" data-text="Connect With Us">
      Connect With Us
    </h2>

    <p className="mt-4 text-indigo-200 text-lg">
      Follow the Department of English & Cultural Studies
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-6">

      {/* Instagram */}
      <a 
        href="https://instagram.com/christncr_english_department" 
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold tracking-wider shadow-lg hover:scale-110 transition"
      >
        Instagram
      </a>

      {/* Facebook */}
      <a 
        href="https://m.facebook.com/profile.php?id=61575764016648"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold tracking-wider shadow-lg hover:scale-110 transition"
      >
        Facebook
      </a>

      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/company/department-of-english-and-cultural-studies-christ-delhi-ncr-campus/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold tracking-wider shadow-lg hover:scale-110 transition"
      >
        LinkedIn
      </a>

      {/* YouTube */}
      <a 
        href="https://www.youtube.com/@EnglishandCulturalStudies"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-pink-500 text-white font-semibold tracking-wider shadow-lg hover:scale-110 transition"
      >
        YouTube
      </a>

    </div>
    
  </div>
</section>


            {/* Contact */}
      <footer
        id="contact"
        className="bg-gray-900 text-gray-200 py-16 mt-20 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-sm mt-2">engconference.ncr@christuniversity.in</p>

          {/* Divider line */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Created by */}
          <div className="text-center text-xs text-gray-200">
            Created with ❤️ by <span className="font-semibold">Siddharth Dubey</span>
          </div>

        </div>
      </footer>
    </div>
  );
}
