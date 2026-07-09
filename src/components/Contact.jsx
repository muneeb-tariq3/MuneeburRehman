import { useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeader from './SectionHeader';

const initialState = { name: '', email: '', subject: 'consultation', message: '' };

function Contact() {
  const [form, setForm] = useState(initialState);
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete the required fields before sending.');
      return;
    }

    if (honeypot) {
      setError('Request blocked.');
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        'service_acmauh3',
        'template_xs2ffnq',
        {
          from_name: form.name,
          from_email: form.email,
          message: `Subject: ${form.subject}\n\n${form.message}`,
        },
        'xFTjC81Y27kS2xSPl'
      );

      setSuccess(true);
      setForm(initialState);
      setHoneypot('');
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative z-10 pt-32 pb-8 px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
      <SectionHeader title="Ready to start a project?">
        I&apos;m currently available for senior engineering roles or high-impact consulting projects. Let&apos;s discuss how
        we can build something robust together.
      </SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <aside className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
          <div className="glass-card p-8 rounded-xl flex flex-col gap-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary">System Connect</h2>
            {[
              ['mail', 'Direct Email', 'muneebtariq841@gmail.com', 'mailto:muneebtariq841@gmail.com'],
              ['terminal', 'Version Control', 'github.com/muneeb-tariq3', 'https://github.com/muneeb-tariq3'],
              ['lan', 'Network', 'linkedin.com/in/muneeb-tariq-6ba338361', 'https://www.linkedin.com/in/muneeb-tariq-6ba338361'],
            ].map(([icon, label, value, href]) => (
              <a key={label} className="group flex items-center gap-4 p-4 rounded-xl bg-surface-container/50 hover:bg-surface-container transition-all border border-outline-variant/10" href={href}>
                <span className="material-symbols-outlined text-primary">{icon}</span>
                <span>
                  <span className="font-mono text-xs uppercase text-on-surface-variant opacity-60 block">{label}</span>
                  <span className="text-on-surface group-hover:text-primary transition-colors">{value}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden glass-card border border-outline-variant/20">
            <div className="absolute inset-0 technical-grid opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                Active: Remote / Faisalabad
              </span>
            </div>
          </div>
        </aside>

        <section className="lg:col-span-8 order-1 lg:order-2">
          {success ? (
            <div className="glass-card p-12 rounded-xl border border-outline-variant/10 text-center flex flex-col items-center gap-4">
              <span className="text-6xl text-primary">✔</span>
              <h2 className="text-2xl font-bold text-on-surface">Message Sent</h2>
              <p className="text-on-surface-variant">Thanks! I&apos;ll reply very soon.</p>
            </div>
          ) : (
            <form className="glass-card p-8 md:p-12 rounded-xl flex flex-col gap-8 border border-outline-variant/10" onSubmit={handleSubmit}>
              {/* Honeypot */}
              <input
                type="text"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="flex flex-col gap-2 font-mono text-xs uppercase text-on-surface-variant">
                  Operator Name
                  <input name="name" value={form.name} onChange={updateField} className="form-field" placeholder="John Doe" required type="text" />
                </label>
                <label className="flex flex-col gap-2 font-mono text-xs uppercase text-on-surface-variant">
                  Return Address
                  <input name="email" value={form.email} onChange={updateField} className="form-field" placeholder="name@domain.com" required type="email" />
                </label>
              </div>
              <label className="flex flex-col gap-2 font-mono text-xs uppercase text-on-surface-variant">
                Request Type
                <select name="subject" value={form.subject} onChange={updateField} className="form-field cursor-pointer">
                  <option value="consultation">Full-Stack Development Consultation</option>
                  <option value="infrastructure">DevOps / Infrastructure Setup</option>
                  <option value="partnership">System Architecture Partnership</option>
                  <option value="other">General Inquiry</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 font-mono text-xs uppercase text-on-surface-variant">
                Payload (Message)
                <textarea name="message" value={form.message} onChange={updateField} className="form-field resize-none min-h-40" placeholder="Describe the scope and technical requirements of your project..." required />
              </label>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
                <p className="text-xs text-on-surface-variant font-mono max-w-xs opacity-70">
                  By submitting this request, you agree to secure end-to-end communication via standard protocol.
                </p>
                <button
                  className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-on-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Execute Send</span>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </>
                  )}
                </button>
              </div>
              {error && <p className="font-mono text-xs text-error">{error}</p>}
            </form>
          )}
        </section>
      </div>
    </main>
  );
}

export default Contact;