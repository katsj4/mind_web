import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import emailjs from '@emailjs/browser';

// Mock data for careers
const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    type: "Full-time",
    location: "Remote",
    description: "Help us build beautiful, accessible interfaces that make mental wellness tools easy to use.",
    responsibilities: [
      "Develop and maintain responsive user interfaces using React",
      "Collaborate with designers to implement pixel-perfect UIs",
      "Optimize application for maximum performance",
      "Write clean, maintainable, and well-documented code"
    ],
    requirements: [
      "5+ years of frontend development experience",
      "Proficient in React, TypeScript, and modern CSS",
      "Experience with state management (Redux, Context API)",
      "Familiarity with RESTful APIs and GraphQL"
    ]
  },
  {
    id: 2,
    title: "Mental Health Content Specialist",
    type: "Full-time",
    location: "Hybrid",
    description: "Create evidence-based content that helps our users develop healthier mindsets and coping strategies.",
    responsibilities: [
      "Research and develop mental wellness content",
      "Collaborate with psychologists to ensure accuracy",
      "Create engaging multimedia content",
      "Update existing content based on latest research"
    ],
    requirements: [
      "Degree in Psychology, Counseling, or related field",
      "3+ years experience in mental health content creation",
      "Excellent writing and communication skills",
      "Understanding of CBT and other therapeutic approaches"
    ]
  },

  {
  id: 3,
  title: "Mindset Speaker",
  type: "Full-time",
  location: "Hybrid",
  description: "Inspire, educate, and empower audiences to develop a growth mindset, resilience, and positive life perspectives through impactful talks and workshops.",
  responsibilities: [
    "Deliver engaging keynote speeches and workshops on mindset and personal growth",
    "Share practical strategies for building resilience and self-confidence",
    "Motivate audiences to adopt positive habits and overcome challenges",
    "Collaborate with event organizers and institutions to tailor talks to specific audiences"
  ],
  requirements: [
    "Degree in Psychology, Education, Communication, or related field",
    "Proven experience as a motivational or keynote speaker",
    "Strong storytelling and public speaking skills",
    "Ability to engage diverse audiences with clarity and inspiration"
  ]
}

];

// Mock data for press
const pressArticles = [
    {
      id: 1,
      title: "Mindset App Featured in TechCrunch",
      date: "May 15, 2023",
      excerpt:
        "Mindset is revolutionizing how we approach mental wellness, making professional-grade tools available to everyone.",
      content: `
        <h2 class="text-2xl font-bold mb-2">Mindset App Featured in TechCrunch</h2>
        <p>The Mindset app was recently highlighted in TechCrunch for its innovative approach 
        to mental wellness. The app brings together evidence-based techniques, 
        guided exercises, and real-time support to help users build resilience 
        and develop a healthier mindset.</p>
      `,
    },
    {
      id: 2,
      title: "Interview with Our Founder",
      date: "March 2, 2023",
      excerpt:
        "How a personal journey led to creating an app that's helping thousands with their mental health.",
      content: `
        <h2 class="text-2xl font-bold mb-2">Interview with Our Founder</h2>
        <p>In an exclusive interview, our founder shared the personal journey 
        that inspired the creation of the Mindset app. Today, the app supports 
        thousands of users, helping them manage stress, anxiety, and improve 
        overall well-being.</p>
      `,
    },
  ];

// Mock data for partners
const partners = [
  { id: 1, name: "Mental Health Foundation" },
  { id: 2, name: "Tech for Good" },
  { id: 3, name: "Wellness Alliance" },
  { id: 4, name: "Digital Health Partners" },
  { id: 5, name: "Mindful Tech Collective" },
  { id: 6, name: "Therapy Without Borders" }
];

type Job = typeof jobOpenings[0];

const CompanyPage = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactPurpose, setContactPurpose] = useState('general');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<typeof pressArticles[0] | null>(null);

  useEffect(() => {
    // Handle hash-based scrolling on initial load
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Update URL without page reload
      window.history.pushState({}, '', `#${sectionId}`);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openJobDetails = (job: Job) => {
    setSelectedJob(job);
    setIsJobModalOpen(true);
    scrollToSection('careers');
  };

  const openContactForm = (purpose = 'general') => {
    setContactPurpose(purpose);
    setShowContactForm(true);
    // Reset form state
    setContactForm({ name: '', email: '', message: '' });
    setSubmitSuccess(false);
  };

  const closeModals = () => {
    setIsJobModalOpen(false);
    setShowContactForm(false);
    setSelectedJob(null);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', { ...contactForm, purpose: contactPurpose });
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Clear form after successful submission
      setTimeout(() => {
        setContactForm({ name: '', email: '', message: '' });
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Company</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Dedicated to improving mental wellness through innovative technology and compassionate care.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Mindset</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Mindset was founded with a simple yet powerful mission: to make mental wellness accessible to everyone.
              We believe that taking care of your mind should be as routine as taking care of your body.
            </p>
            <p>
              Our team of psychologists, technologists, and designers work together to create tools that genuinely help
              people build resilience, manage stress, and develop healthier thought patterns.
            </p>
            <p>
              Since our launch, we've helped over 1 million users take the first step toward better mental health.
            </p>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Careers at Mindset</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Join our mission to make mental wellness accessible to all.
            </p>
            
            <div className="space-y-8">
              {jobOpenings.map(job => (
                <div 
                  key={job.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => openJobDetails(job)}
                >
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.type} • {job.location}</p>
                  <p className="text-gray-700 mb-4">
                    {job.description}
                  </p>
                  <button 
                    className="text-teal-600 font-medium hover:text-teal-800 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      openJobDetails(job);
                    }}
                  >
                    View Details
                  </button>
                </div>
              ))}
              
              <div className="text-center mt-8">
                {/* <button 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  onClick={() => openContactForm('careers')}
                >
                  View All Open Positions
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section id="press" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Press & Media</h2>
            
            <div className="space-y-8">
              {!selectedArticle &&
        pressArticles.map((article) => (
          <div key={article.id} className="border-b border-gray-200 pb-8">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-4">{article.date}</p>
            <p className="text-gray-700 mb-4">{article.excerpt}</p>
            <button
              className="text-teal-600 font-medium hover:text-teal-800 transition-colors"
              onClick={() => setSelectedArticle(article)}
            >
              Read Article
            </button>
          </div>
        ))}

      {/* Detail view */}
      {selectedArticle && (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
          <button
            className="mb-4 text-sm text-gray-500 hover:text-gray-700"
            onClick={() => setSelectedArticle(null)}
          >
            ← Back to Articles
          </button>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
          />
        </div>
      )}
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Press Inquiries</h3>
                <p className="text-gray-700 mb-4">
                  For media inquiries, please contact our press team:
                </p>
                <button 
                  className="text-teal-600 font-medium hover:text-teal-800 transition-colors"
                  onClick={() => openContactForm('press')}
                >
                  Contact Press Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              We collaborate with leading organizations to expand access to mental wellness resources.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
              {partners.map(partner => (
                <div 
                  key={partner.id} 
                  className="bg-white p-6 rounded-lg shadow-sm w-full h-32 flex items-center justify-center transition-all hover:shadow-md"
                >
                  <span className="text-gray-400 font-bold text-xl text-center">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Become a Partner</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                We're always looking for organizations that share our mission to collaborate with.
              </p>
              <button 
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                onClick={() => openContactForm('partnership')}
              >
                Contact Partnerships Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether as a user, employee, or partner, you can be part of improving mental wellness worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              onClick={() => window.open('https://play.google.com/apps/internaltest/4701471527189415687', '_blank')}
            >
              Download the App
            </button>
            <button 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-teal-600 transition-colors"
              onClick={() => openContactForm()}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      <Dialog
        open={isJobModalOpen}
        onClose={closeModals}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true" />
          
          <div className="relative bg-white rounded-lg max-w-2xl w-full mx-4 p-6 shadow-xl">
            {selectedJob && (
              <>
                <Dialog.Title className="text-2xl font-bold mb-2">
                  {selectedJob.title}
                </Dialog.Title>
                <p className="text-gray-600 mb-6">
                  {selectedJob.type} • {selectedJob.location}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Job Description</h4>
                    <p className="text-gray-700">
                      {selectedJob.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Responsibilities</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {selectedJob.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Requirements</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {selectedJob.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-end space-x-4 pt-4">
                    <button
                      onClick={closeModals}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        closeModals();
                        openContactForm('careers');
                      }}
                      className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Dialog>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <button 
              onClick={closeModals}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              {contactPurpose === 'careers' && "Apply for this position"}
              {contactPurpose === 'partnership' && "Partnership inquiry"}
              {contactPurpose === 'press' && "Press inquiry"}
              {!['careers', 'partnership', 'press'].includes(contactPurpose) && "How can we help you?"}
            </p>
            
            {submitSuccess ? (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : (
              <form 
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const cancelButton = form.querySelector('button[type="button"]') as HTMLButtonElement;
    const originalSubmitText = submitButton.textContent;

    try {
      // Set loading state
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      cancelButton.disabled = true;

      // Send via EmailJS
      await emailjs.sendForm(
        'service_mindset',
        'template_u95wu9p',
        form,
        'l46F_Pu9IVBuxCE6s'
      );

      // Success feedback
      const successDiv = document.createElement('div');
      successDiv.className = 'mt-2 text-sm text-green-500 text-center';
      successDiv.textContent = 'Message sent successfully!';
      form.appendChild(successDiv);
      
      // Clear form and remove message after delay
      setTimeout(() => {
        successDiv.remove();
        if (closeModals) closeModals();
      }, 3000);
      
    } catch (err) {
      // Error feedback
      const errorDiv = document.createElement('div');
      errorDiv.className = 'mt-2 text-sm text-red-500 text-center';
      errorDiv.textContent = 'Failed to send message. Please try again.';
      form.appendChild(errorDiv);
      setTimeout(() => errorDiv.remove(), 5000);
      
      console.error('Contact form error:', err);
    } finally {
      // Reset button state
      submitButton.textContent = originalSubmitText;
      submitButton.disabled = false;
      cancelButton.disabled = false;
    }
  }}
>
  <div className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
        required
      />
    </div>
    
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
        required
      />
    </div>
    
    {selectedJob && (
      <input 
        type="hidden" 
        name="position" 
        value={selectedJob.title} 
      />
    )}
    
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
        required
      ></textarea>
    </div>
    
    <div className="flex justify-end space-x-4 pt-2">
      <button
        type="button"
        onClick={closeModals}
        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50"
      >
        Send Message
      </button>
    </div>
  </div>
</form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyPage;