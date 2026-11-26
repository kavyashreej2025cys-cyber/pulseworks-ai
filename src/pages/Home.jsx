
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import {
  FolderKanban,
  Users,
  BrainCircuit,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

function Home() {

  // Features of PulseWorks AI
  const features = [
    {
      icon: FolderKanban,
      title: "Project Management",
      description:
        "Organize projects, manage deadlines and track progress in one place.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together, share updates and keep your entire team connected.",
    },
    {
      icon: BrainCircuit,
      title: "AI Assistance",
      description:
        "Get intelligent task summaries and useful insights with AI.",
    },
    {
      icon: ClipboardCheck,
      title: "Task Tracking",
      description:
        "Assign tasks, monitor completion and stay on top of your work.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EBEBD8]">

      {/* NAVBAR */}
      <Navbar />


      {/* HERO SECTION */}
      <section
        id="home"
        className="px-8 md:px-16 py-16 flex flex-col md:flex-row items-center gap-12"
      >

        {/* Left Content */}
        <div className="md:w-1/2">

          <p className="text-[#637545] font-semibold mb-4 tracking-widest">
            YOUR SMART WORKSPACE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#455230] leading-tight mb-6">
            Work Smarter.
            <br />
            Stay Connected.
          </h1>

          <p className="text-[#455230] text-lg mb-8 leading-relaxed">
            One intelligent workspace to manage projects,
            collaborate with your team and get things done.
            Simplify your workflow with PulseWorks AI.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/login"
              className="bg-[#637545] text-white px-7 py-3 rounded-lg hover:bg-[#455230] transition duration-300 flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <a
              href="#features"
              className="border-2 border-[#637545] text-[#455230] px-7 py-3 rounded-lg hover:bg-[#9BA685] transition duration-300"
            >
              Explore Features
            </a>

          </div>

        </div>


        {/* Right Image */}
        <div className="md:w-1/2 relative">

          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
            alt="Team collaborating in a workspace"
            className="w-full h-[350px] object-cover rounded-2xl shadow-xl"
          />

          {/* Image Overlay Card */}
          <div className="absolute bottom-5 left-5 bg-white p-4 rounded-xl shadow-lg">

            <p className="text-[#455230] font-bold">
              Better Together
            </p>

            <p className="text-gray-600 text-sm">
              One workspace. One team.
            </p>

          </div>

        </div>

      </section>


      {/* FEATURES SECTION */}
      <section
        id="features"
        className="bg-white px-8 md:px-16 py-16"
      >

        {/* Section Heading */}
        <div className="text-center mb-12">

          <p className="text-[#637545] font-semibold mb-3 tracking-widest">
            WHAT WE OFFER
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#455230]">
            Everything Your Team Needs
          </h2>

          <p className="text-gray-600 mt-4">
            Simplify your work with powerful workspace features.
          </p>

        </div>


        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-[#EBEBD8] p-7 rounded-xl border border-[#9BA685] hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >

                {/* Feature Icon */}
                <div className="w-14 h-14 bg-[#637545] rounded-xl flex items-center justify-center mb-5">

                  <Icon
                    size={28}
                    color="#FFFFFF"
                    strokeWidth={1.8}
                  />

                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold text-[#455230] mb-3">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );

          })}

        </div>

      </section>


      {/* ABOUT SECTION */}
      <section
        id="about"
        className="px-8 md:px-16 py-16 flex flex-col md:flex-row items-center gap-12"
      >

        {/* About Image */}
        <div className="md:w-1/2">

          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
            alt="Modern collaborative office workspace"
            className="w-full h-[320px] object-cover rounded-2xl shadow-lg"
          />

        </div>


        {/* About Content */}
        <div className="md:w-1/2">

          <p className="text-[#637545] font-semibold mb-3 tracking-widest">
            ABOUT PULSEWORKS AI
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#455230] mb-5">
            A Better Way to Work Together
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            PulseWorks AI is a secure enterprise workspace designed
            to bring projects, tasks and team collaboration together.
            With intelligent AI assistance and centralized management,
            teams can work more efficiently.
          </p>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 bg-[#637545] text-white px-6 py-3 rounded-lg hover:bg-[#455230] transition duration-300"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-[#455230] text-white text-center py-8">

        <h2 className="text-2xl font-bold mb-2">
          PulseWorks AI
        </h2>

        <p className="text-sm text-[#EBEBD8]">
          Work Smarter. Stay Connected.
        </p>

        <div className="border-t border-[#9BA685] mt-6 pt-5">

          <p className="text-xs text-[#EBEBD8]">
            © 2026 PulseWorks AI. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;
