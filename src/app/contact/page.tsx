"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Lightbulb, MessageSquare , Phone } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import { AlpineV0Menu } from "@/components/AlpineV0Menu";


/**
 * Contact Page Component
 *
 * A contact page featuring:
 * - Two-column responsive layout
 * - Contact information section with 24/7 availability
 * - Contact form with proper validation
 * - Theme-aware styling
 * - Professional design matching the overall site aesthetic
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Trigger success effects
      triggerConfetti();
      toast.success('Message sent successfully!', {
        description: 'Thank you for contacting us. We\'ll get back to you soon!',
        duration: 5000,
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } catch {
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen md:py-32 py-12 px-4 sm:px-6 ">
      {/* V0 Menu Button */}
      <AlpineV0Menu page="contact" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-[0.5px] border-[#25252518] dark:border-[#fafafa1b] rounded-full px-4 py-3 w-fit">
              <Lightbulb className="w-5 h-5 text-[#252525] dark:text-[#FAFAFA] opacity-80" />
              <h1 className="text-xl  text-[#252525] dark:text-[#FAFAFA] leading-tight">
                Contact us
              </h1>
              </div>
              <h2 className="text-2xl md:text-[44px] font-semibold text-[#252525] dark:text-[#FAFAFA]">
                24/7 Available
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl text-[#252525] dark:text-[#FAFAFA] leading-relaxed max-w-xl">
            You can contact us via email, phone, or by filling out the form on this page. We strive to respond promptly and look forward to connecting with you soon!
            </p>

            {/* Contact Details */}
            <div className="space-y-3 pt-1">
              {/* Email */}
              <div className="space-y-2 flex items-center gap-2">
                <div className="w-[32px] h-[32px] border-[0.5px] p-2 mt-3 flex items-center justify-center border-[#262626b9] dark:border-[#FAFAFA] rounded-full">
               <MessageSquare className="w-[16px] h-[16px]   text-[#252525] dark:text-[#FAFAFA]" />
               </div>
                <a
                  href="mailto:example@gmail.com"
                  className="text-xl text-[#252525] dark:text-[#FAFAFA] hover:opacity-70 transition-opacity duration-200"
                >
                  example@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="space-y-2 flex items-center gap-2">
              <div className="w-[32px] h-[32px] border-[0.5px] p-2 mt-3 flex items-center justify-center  border-[#26262685] dark:border-[#FAFAFA] rounded-full">
                <Phone className="w-[16px] h-[16px]  text-[#252525] dark:text-[#FAFAFA]" />
                </div>
               
                <a
                  href="tel:+1-555-44-456"
                  className="text-xl text-[#252525] dark:text-[#FAFAFA] hover:opacity-70 transition-opacity duration-200"
                >
                  +1-555-44-456
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-8 bg-[#FAFAFA] dark:bg-[#2A2A2A] rounded-4xl py-8 px-8 border-[0.5px] border-[#25252518] dark:border-[#fafafa13]">
            {/* Form Header */}
            <div className="space-y-2">
              <h2 className="md:text-[28px] font-bold text-[#252525] dark:text-[#FAFAFA]">
                Write us
              </h2>
              <p className="text-xl text-[#252525] dark:text-[#FAFAFA]">
                We&apos;d love to hear from you!
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-[16px] font-medium text-[#252525] dark:text-[#FAFAFA]"
                  >
                    First name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-6 border-[0.5px] border-gray-300 dark:border-[#fafafa24] rounded-md bg-white dark:bg-[#333333] text-[#252525] dark:text-[#FAFAFA] placeholder:opacity-60 placeholder-gray-500 dark:placeholder-[#fafafa37] focus:outline-none focus:ring-2 focus:ring-[#252525] dark:focus:ring-[#FAFAFA] focus:border-transparent"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-[16px] font-medium text-[#252525] dark:text-[#FAFAFA]"
                  >
                    Last name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-6 border-[0.5px] border-gray-300 dark:border-[#fafafa24] rounded-md bg-white dark:bg-[#333333] text-[#252525] dark:text-[#FAFAFA] placeholder-gray-500 placeholder:opacity-60 dark:placeholder-[#fafafa37] focus:outline-none focus:ring-2 focus:ring-[#252525] dark:focus:ring-[#FAFAFA] focus:border-transparent"
                    placeholder="Smith"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[16px] font-medium text-[#252525] dark:text-[#FAFAFA]"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-5 border-[0.5px] border-gray-300 dark:border-[#fafafa24] rounded-md bg-white dark:bg-[#333333] text-[#252525] dark:text-[#FAFAFA] placeholder-gray-500 placeholder:opacity-60 dark:placeholder-[#fafafa37] focus:outline-none focus:ring-2 focus:ring-[#252525] dark:focus:ring-[#FAFAFA] focus:border-transparent"
                  placeholder="example@gmail.com"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-[16px] font-medium text-[#252525] dark:text-[#FAFAFA]"
                >
                  Your message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-[0.5px] border-gray-300 dark:border-[#fafafa24] rounded-md bg-white dark:bg-[#333333] text-[#252525] dark:text-[#FAFAFA] placeholder-gray-500 placeholder:opacity-60 dark:placeholder-[#fafafa37] focus:outline-none focus:ring-2 focus:ring-[#252525] dark:focus:ring-[#FAFAFA] focus:border-transparent resize-vertical min-h-32"
                  placeholder="Type something..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-[#252525] dark:bg-[#FAFAFA] text-white dark:text-[#252525] hover:bg-[#252525]/90 dark:hover:bg-[#FAFAFA]/90 px-8 py-7 rounded-full text-[16px] font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}