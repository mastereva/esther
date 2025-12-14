import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceType: 'einzelsupervision',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        serviceType: 'einzelsupervision',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1710685375110-3b1f3bf8bb1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMHJlZmxlY3Rpb24lMjB3YXRlcnxlbnwxfHx8fDE3NjU2NTQxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#FFB800]/10 text-[#FFB800] rounded-full mb-4">
            Kontakt
          </div>
          <h2 className="text-gray-900 mb-4">
            Starten Sie Ihre Reise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vereinbaren Sie ein unverbindliches Erstgespräch. Gemeinsam finden wir heraus, 
            wie ich Sie optimal unterstützen kann.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:border-transparent transition-all"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:border-transparent transition-all"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:border-transparent transition-all"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm text-gray-700 mb-2">
                    Organisation / Träger
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:border-transparent transition-all"
                    placeholder="Ihre Organisation (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm text-gray-700 mb-2">
                    Interesse an *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:border-transparent transition-all bg-white"
                  >
                    <option value="beratung">Beratung / Coaching (Einzel)</option>
                    <option value="supervision">Supervision (Team/Fall)</option>
                    <option value="workshop">Workshop</option>
                    <option value="erstgespraech">Unverbindliches Erstgespräch</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:border-transparent transition-all resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFB800] text-gray-900 py-4 rounded-lg hover:bg-[#FFB800]/90 transition-all flex items-center justify-center space-x-2 group shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Nachricht senden</span>
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="text-[#FFB800] mb-4" size={64} />
                <h3 className="text-gray-900 mb-2">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-gray-600 text-center">
                  Ich melde mich innerhalb von 24 Stunden bei Ihnen zurück.
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 md:p-10 text-white">
              <h3 className="mb-6">
                Direkter Kontakt
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFB800]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#FFB800]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">E-Mail</p>
                    <a
                      href="mailto:kontakt@systemisches-coaching.de"
                      className="text-white hover:text-[#FFB800] transition-colors"
                    >
                      kontakt@systemisches-coaching.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFB800]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#FFB800]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Telefon</p>
                    <a
                      href="tel:+4915112345678"
                      className="text-white hover:text-[#FFB800] transition-colors"
                    >
                      +49 151 1234 5678
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Mo-Fr, 9-18 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFB800]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#FFB800]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Standort</p>
                    <p className="text-white">
                      Supervision vor Ort oder online<br />
                      Raum für Ihre individuelle Begleitung
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-gray-300">
                  Erstgespräche sind kostenfrei und unverbindlich. 
                  Nutzen Sie die Gelegenheit, mich und meine Arbeitsweise kennenzulernen.
                </p>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h4 className="text-gray-900 mb-4">
                Vertrauenswürdige Zusammenarbeit
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <p className="text-sm text-gray-700">
                    Absolute Vertraulichkeit und professionelle Schweigepflicht
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <p className="text-sm text-gray-700">
                    DGSF-zertifiziert und regelmäßige Weiterbildungen
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <p className="text-sm text-gray-700">
                    Flexible Termine und individuelle Vereinbarungen
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <p className="text-sm text-gray-700">
                    Erfahrung in SPFH, Diversion und ambulanten Hilfen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}