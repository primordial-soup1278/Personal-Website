import React from 'react';
import emailJs from '@emailjs/browser';
const Contact = () => {

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("sending email...");

        const form = e.currentTarget;
        emailJs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.currentTarget,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            () => {
                alert("Message sent successfully!");
                form.reset();
            },
            () => alert("Failed to send the message, please try again later.")
        );
    };

  return (
    <section className="bg-[#0A0A0C] py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Section Header - Matching the "About" style */}
        <h4 className="text-2xl font-bold text-white mb-10 pl-4 border-l-4 border-blue-500">
          Get In Touch
        </h4>

        <div className="bg-[#111114] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Side: Text and Direct Links */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's work together.</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm currently looking for new opportunities and my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</span>
                  <a href="mailto:Jaydenthung@hotmail.com" className="text-blue-400 hover:text-blue-300 transition-colors text-lg">
                    Jaydenthung@hotmail.com 
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Social</span>
                  <div className="flex gap-4 text-gray-300">
                    <a href="https://github.com/primordial-soup1278" className="hover:text-white transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Minimalist Form */}
            <form onSubmit={sendEmail} className="flex flex-col gap-4">
              <input 
                name = "name"
                type="text" 
                placeholder="Name" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/[0.05] transition-all"
                required
              />
              <input 
                name = "email"
                type="email" 
                placeholder="Email" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/[0.05] transition-all"
                required
              />
              <textarea 
                name = "message"
                placeholder="Message" 
                rows={4}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/[0.05] transition-all"
                required
              />
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-95"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;