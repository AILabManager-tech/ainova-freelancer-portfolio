import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSounds } from '../../utils/SoundManager';

const timeSlots = [
  { id: '9am', time: '09:00 - 10:00', available: true },
  { id: '10am', time: '10:00 - 11:00', available: true },
  { id: '11am', time: '11:00 - 12:00', available: false },
  { id: '1pm', time: '13:00 - 14:00', available: true },
  { id: '2pm', time: '14:00 - 15:00', available: true },
  { id: '3pm', time: '15:00 - 16:00', available: true },
  { id: '4pm', time: '16:00 - 17:00', available: false },
];

const consultationTypes = [
  {
    id: 'quick',
    name: 'Consultation Rapide',
    duration: '30 min',
    price: 'Gratuit',
    description: 'Discussion initiale pour comprendre vos besoins',
    icon: '⚡',
  },
  {
    id: 'standard',
    name: 'Consultation Standard',
    duration: '60 min',
    price: '$150',
    description: 'Analyse détaillée et proposition de solution',
    icon: '💼',
  },
  {
    id: 'deep',
    name: 'Consultation Approfondie',
    duration: '90 min',
    price: '$250',
    description: 'Workshop complet avec roadmap technique',
    icon: '🎯',
  },
];

const Booking = () => {
  const { playButtonClick, playMechanicalSwitch } = useSounds();
  const [selectedType, setSelectedType] = useState('quick');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  // Generate next 14 days
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('fr-FR', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          }),
        });
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleSubmit = (e) => {
    e.preventDefault();
    playButtonClick();
    setStatus('sending');

    const consultation = consultationTypes.find((t) => t.id === selectedType);
    const timeSlot = timeSlots.find((t) => t.id === selectedTime);

    const mailtoLink = `mailto:ai.devlab.agents@gmail.com?subject=Réservation Consultation - ${formData.name}&body=Type: ${consultation.name} (${consultation.duration})%0D%0ADate: ${selectedDate}%0D%0AHeure: ${timeSlot?.time}%0D%0A%0D%0ANom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATéléphone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSelectedDate('');
        setSelectedTime('');
      }, 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    selectedType &&
    selectedDate &&
    selectedTime &&
    formData.name &&
    formData.email;

  return (
    <section id="booking" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-stark-black/80 to-stark-black">
      {/* Background effects */}
      <div className="absolute inset-0 scanlines opacity-30" />
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold neon-text mb-4 font-rajdhani">
            // RÉSERVER CONSULTATION
          </h2>
          <p className="text-stark-cyan/60 text-xl font-fira">
            Discutons de votre projet // Disponibilité en temps réel
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Consultation Types */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-stark-cyan mb-6 font-rajdhani">
              // TYPE DE CONSULTATION
            </h3>
            {consultationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  playMechanicalSwitch();
                  setSelectedType(type.id);
                }}
                className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                  selectedType === type.id
                    ? 'border-stark-cyan bg-stark-cyan/10 shadow-cyan-glow'
                    : 'border-stark-cyan/30 hover:border-stark-cyan/60'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{type.icon}</div>
                  <div className="flex-1">
                    <div className="font-bold text-stark-cyan font-fira mb-1">
                      {type.name}
                    </div>
                    <div className="text-xs text-stark-cyan/60 font-fira mb-2">
                      {type.duration} • {type.price}
                    </div>
                    <div className="text-sm text-stark-cyan/70 font-fira">
                      {type.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}

            {/* Info Box */}
            <div className="glass p-6 rounded-lg mt-8">
              <h4 className="text-lg font-bold text-stark-cyan mb-3 font-rajdhani">
                // CE QUI EST INCLUS
              </h4>
              <div className="space-y-2">
                {[
                  'Analyse de vos besoins',
                  'Recommandations techniques',
                  'Estimation de budget',
                  'Roadmap personnalisée',
                  'Q&A en temps réel',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-stark-cyan" />
                    <span className="text-sm text-stark-cyan/80 font-fira">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center - Date & Time Selection */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass p-8 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-sm text-stark-cyan/60 font-fira uppercase mb-3">
                  Sélectionner une Date
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {availableDates.map((date) => (
                    <button
                      key={date.value}
                      type="button"
                      onClick={() => {
                        playMechanicalSwitch();
                        setSelectedDate(date.value);
                        setSelectedTime(''); // Reset time when date changes
                      }}
                      className={`p-3 rounded-lg border-2 transition-all text-center ${
                        selectedDate === date.value
                          ? 'border-stark-cyan bg-stark-cyan/10'
                          : 'border-stark-cyan/30 hover:border-stark-cyan/60'
                      }`}
                    >
                      <div className="text-xs text-stark-cyan font-fira">
                        {date.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  <label className="block text-sm text-stark-cyan/60 font-fira uppercase mb-3">
                    Sélectionner une Heure
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => {
                          if (slot.available) {
                            playMechanicalSwitch();
                            setSelectedTime(slot.id);
                          }
                        }}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          !slot.available
                            ? 'border-stark-cyan/20 bg-stark-black/50 opacity-40 cursor-not-allowed'
                            : selectedTime === slot.id
                            ? 'border-stark-cyan bg-stark-cyan/10'
                            : 'border-stark-cyan/30 hover:border-stark-cyan/60'
                        }`}
                      >
                        <div className="text-sm text-stark-cyan font-fira">
                          {slot.time}
                        </div>
                        {!slot.available && (
                          <div className="text-xs text-stark-cyan/40 font-fira mt-1">
                            Réservé
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Contact Info */}
              {selectedTime && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4 pt-6 border-t border-stark-cyan/20"
                >
                  <h4 className="text-lg font-bold text-stark-cyan font-rajdhani">
                    // VOS INFORMATIONS
                  </h4>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-stark-cyan/60 font-fira uppercase mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-stark-black/50 border border-stark-cyan/30 rounded px-4 py-3 text-stark-cyan font-fira focus:outline-none focus:border-stark-cyan/60 transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-stark-cyan/60 font-fira uppercase mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-stark-black/50 border border-stark-cyan/30 rounded px-4 py-3 text-stark-cyan font-fira focus:outline-none focus:border-stark-cyan/60 transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-stark-cyan/60 font-fira uppercase mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-stark-black/50 border border-stark-cyan/30 rounded px-4 py-3 text-stark-cyan font-fira focus:outline-none focus:border-stark-cyan/60 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-stark-cyan/60 font-fira uppercase mb-2">
                      Message / Sujet de Discussion
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full bg-stark-black/50 border border-stark-cyan/30 rounded px-4 py-3 text-stark-cyan font-fira focus:outline-none focus:border-stark-cyan/60 transition-colors resize-none"
                      placeholder="De quoi aimeriez-vous discuter?"
                    />
                  </div>

                  {/* Summary */}
                  <div className="glass-hover p-4 rounded-lg border border-stark-cyan/20">
                    <div className="text-xs text-stark-cyan/60 font-fira uppercase mb-2">
                      Résumé de la Réservation
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-stark-cyan font-fira">
                      <div>
                        <span className="text-stark-cyan/60">Type: </span>
                        {consultationTypes.find((t) => t.id === selectedType)?.name}
                      </div>
                      <div>
                        <span className="text-stark-cyan/60">Date: </span>
                        {availableDates.find((d) => d.value === selectedDate)?.label}
                      </div>
                      <div>
                        <span className="text-stark-cyan/60">Heure: </span>
                        {timeSlots.find((t) => t.id === selectedTime)?.time}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!isFormValid || status === 'sending'}
                    className="w-full cyber-button py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' && '⚡ ENVOI EN COURS...'}
                    {status === 'success' && '✓ RÉSERVATION ENVOYÉE!'}
                    {status === 'idle' && '→ CONFIRMER RÉSERVATION'}
                  </button>

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-green-500 font-fira text-sm"
                    >
                      ✓ Votre demande de réservation a été envoyée! Vous recevrez une confirmation par email.
                    </motion.div>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
