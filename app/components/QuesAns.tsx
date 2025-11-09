"use client";
import React from "react";

const QuesAns = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-white space-y-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>

      <div className="collapse collapse-arrow bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-md">
        <input type="radio" name="faq" defaultChecked />
        <div className="collapse-title font-semibold text-white">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm text-gray-300">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-md">
        <input type="radio" name="faq" />
        <div className="collapse-title font-semibold text-white">
          I forgot my password. What should I do?
        </div>
        <div className="collapse-content text-sm text-gray-300">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-md">
        <input type="radio" name="faq" />
        <div className="collapse-title font-semibold text-white">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm text-gray-300">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-md">
        <input type="radio" name="faq" />
        <div className="collapse-title font-semibold text-white">
          What is the registration deadline?
        </div>
        <div className="collapse-content text-sm text-gray-300">
          The final date to register is October 18, 2025. Late entries will not
          be accepted.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-md">
        <input type="radio" name="faq" />
        <div className="collapse-title font-semibold text-white">
          Can I participate as a team?
        </div>
        <div className="collapse-content text-sm text-gray-300">
          Yes! Teams of up to 3 members are allowed. Each member must register
          individually and mention the team name.
        </div>
      </div>
    </div>
  );
};

export default QuesAns;
