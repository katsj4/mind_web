import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const initialFaqs: FAQItem[] = [
  
  {
    question: "How does Mindset improve my daily mental wellness?",
    answer:
      "Mindset uses scientifically-backed techniques to improve focus, reduce stress, and build emotional resilience. Daily check-ins and guided sessions help users develop consistent wellness habits. All features are tailored to your unique mental health goals.",
  },
  {
    question: "What types of meditation sessions are available on Mindset?",
    answer:
      "Our meditation sessions include guided, unguided, and themed tracks covering sleep, anxiety, focus, and relaxation. They're crafted by licensed mindfulness practitioners. New sessions are added regularly to keep your routine fresh.",
  },
  {
    question: "Can I share my progress with a therapist or coach?",
    answer:
      "You can share your progress with a therapist or coach via encrypted reports. This helps them understand your mood patterns and suggest better coping strategies. You control what data is shared and when.",
  },
  {
    question: "What’s included in the Ultimate subscription plan?",
    answer:
      "The Ultimate plan offers unlimited access to all sessions, expert consultations, mood tracking, and offline features. It includes personalized recommendations and priority support. You’ll also receive early access to new content and challenges.",
  },
  {
    question: "Does Mindset support reminders or notifications?",
    answer:
      "Yes, Mindset allows you to schedule reminders for meditation, journaling, and breathing exercises. You can customize the time and frequency in your profile settings. Notifications are non-intrusive and designed to support your goals.",
  },
];

// Full detailed categorized extra FAQs based on your content
const categorizedExtraFaqs: { category: string; faqs: FAQItem[] }[] = [
  {
    category: "ABOUT THE APP",
    faqs: [
      {
        question: "What is the Mindset App?",
        answer:
          "Mindset is a mobile and web-based platform designed to support your mental health, emotional well-being, and daily productivity. It offers tools like guided meditation, journaling, mood tracking, focus timers, and personalized wellness plans.",
      },
      {
        question: "Who can use Mindset?",
        answer:
          "Mindset is suitable for anyone 18 years and older who is looking to improve their mental wellness and productivity. Whether you're a student, working professional, or someone managing stress or anxiety, Mindset offers tools for you.",
      },
      {
        question: "Is the Mindset App a substitute for therapy?",
        answer:
          "No. Mindset is not a replacement for professional mental health treatment. It is a self-care support tool meant to complement, not replace, therapy or medical advice.",
      },
      {
        question: "Is the Mindset App medically approved?",
        answer:
          "Mindset is developed with input from mental health professionals, but it is not a medical or therapeutic service. It offers self-care tools that complement but do not replace professional counselling or therapy.",
      },
    ],
  },
  {
    category: "FEATURES",
    faqs: [
      {
        question: "What features does Mindset offer?",
        answer: (
          <>
            Mindset includes:<br />
            • Daily mood check-ins and mood tracking<br />
            • Guided meditation and breathing exercises<br />
            • Focus timers with background soundscapes<br />
            • Personalized goals and habit reminders<br />
            • Digital journaling<br />
            • Mental health education content
          </>
        ),
      },
      {
        question: "How is the app tailored to mental health in Africa or Uganda?",
        answer:
          "Mindset includes culturally sensitive content relevant to Ugandan and African users, including regional languages, locally relevant stressors, and mindfulness practices rooted in African community values.",
      },
      {
        question: "Can I use Mindset offline?",
        answer:
          "Some features, like journaling and mood tracking, work offline. However, content like meditation audio, updates, and progress syncing require an internet connection.",
      },
    ],
  },
  {
    category: "MENTAL HEALTH",
    faqs: [
      {
        question: "How can Mindset help my mental health?",
        answer: (
          <>
            Mindset provides:<br />
            • Guided meditations and breathing exercises to reduce stress<br />
            • Mood tracking to help you understand emotional patterns<br />
            • Journaling to process thoughts and feelings<br />
            • Educational content to help you learn about anxiety, burnout, and self-care<br />
            These tools promote emotional self-awareness and help build healthy coping habits.
          </>
        ),
      },
      {
        question: "I’m feeling overwhelmed or anxious. Can Mindset help?",
        answer:
          "Yes. The app has text, audio and video information with quick access to grounding tools, meditations, and deep breathing sessions. These are designed to calm your nervous system and refocus your mind.",
      },
      {
        question: "Does Mindset provide therapy or connect me to a counsellor?",
        answer:
          "Yes. Mindset through its videos and audios provide therapy and connects you to counsellors and psychologists. Mindset offers referrals to local mental health services in Uganda and includes emergency support contact links. We also share information about when it’s time to seek help from a mental health professional.",
      },
      {
        question: "Can journaling in the app really improve my mood?",
        answer:
          "Yes. Studies show that daily journaling reduces anxiety, increases emotional clarity, and improves mood. Mindset includes guided journal prompts for stress, gratitude, and self-reflection.",
      },
      {
        question: "How do I track my mental well-being with the app?",
        answer: (
          <>
            You can check in daily with:<br />
            • Mood logs (e.g. happy, stressed, tired, anxious)<br />
            • Activity reflections (e.g. What made you feel this way)<br />
            • Progress insights that help you identify emotional patterns over time
          </>
        ),
      },
    ],
  },
  {
    category: "MOTIVATION & PRODUCTIVITY",
    faqs: [
      {
        question: "Can Mindset help me stay focused and productive?",
        answer: (
          <>
            Yes. Mindset offers:<br />
            • Focus timers with customizable sessions<br />
            • Daily productivity reminders<br />
            • Mood-based tips to balance rest and work<br />
            • Reflections to help you stay motivated during tough times
          </>
        ),
      },
      {
        question: "Does Mindset help with goal-setting?",
        answer:
          "Yes. You can set personal goals related to health, study, work, or mental wellness. The app tracks your progress and gives gentle reminders and rewards.",
      },
      {
        question: "About Stress and Anxiety",
        answer:
          "Can Mindset help if I’m feeling stressed or anxious? Yes. Mindset is designed to support users during stressful or anxious periods through tools like guided breathing exercises, meditation and mindfulness sessions, daily mood tracking, calming audio (e.g., nature sounds, white noise), and journaling for emotional release. These techniques help regulate your nervous system, calm your mind, and bring clarity.",
      },
      {
        question: "What kind of stress does the app help with?",
        answer: (
          <>
            Mindset addresses various types of stress, including:<br />
            • Academic stress (e.g., exams, deadlines)<br />
            • Work-related burnout<br />
            • Family or relationship pressure<br />
            • Financial anxiety<br />
            • Loneliness or social stress<br />
            You can choose stress categories during check-ins so that your experience is personalized.
          </>
        ),
      },
      {
        question: "Is the content clinically approved for anxiety support?",
        answer:
          "The app is designed with input from mental health professionals and uses evidence-based techniques like Cognitive Behavioural Therapy (CBT) principles, breathing regulation, and mindfulness. However, it is not a substitute for clinical therapy.",
      },
      {
        question: "What if I have panic attacks—can Mindset help?",
        answer: (
          <>
            Yes. The app includes special features with:<br />
            • Quick grounding techniques<br />
            • Emergency breathing sessions<br />
            • Audio tools that help reduce panic symptoms<br />
            This section is designed for in-the-moment support during high anxiety.
          </>
        ),
      },
      {
        question: "I feel stressed every day. Is that normal?",
        answer:
          "Occasional stress is a normal response to life’s challenges. But if you feel overwhelmed daily or your stress interferes with sleep, appetite, relationships, or concentration—it may be a sign of chronic stress or anxiety, and using Mindset regularly or seeking professional help can support you.",
      },
      {
        question: "How do I know if I’m anxious or just tired or overwhelmed?",
        answer: (
          <>
            The app helps you track signs of anxiety such as:<br />
            • Rapid heartbeat<br />
            • Restlessness<br />
            • Racing thoughts<br />
            • Difficulty sleeping<br />
            • Constant worry<br />
            If you’re unsure, the mental health check-in tool can help you better understand your emotional state.
          </>
        ),
      },
      {
        question: "How long should I use the app before I start feeling better?",
        answer:
          "Everyone is different. Some users report improvements in sleep and calmness after a few days, while others see change after 2–4 weeks of consistent use. Mental wellness is a journey, not a race—and Mindset is your daily companion.",
      },
      {
        question: "Can I talk to someone in the app if I’m overwhelmed?",
        answer: (
          <>
            Yes. Mindset connects you with licensed and trained therapists for confidential mental health support. If you're feeling overwhelmed, anxious, or emotionally stuck, you can:<br />
            • Chat or book a session with a verified therapist directly through the app<br />
            • Choose a preferred language or therapist specialty (e.g., stress, grief, trauma, anxiety)<br />
            • Schedule appointments for virtual therapy sessions (voice or video)<br />
            • Use in-app messaging for follow-up or continued check-ins (if enabled)<br />
            Additionally, Mindset also provides:<br />
            • Crisis helpline contacts in Uganda for immediate emergencies<br />
            • Mental health self-assessments to help you identify when to seek help<br />
            • Therapist recommendations based on your mood logs and usage patterns
          </>
        ),
      },
    ],
  },
  {
    category: "FOR YOUTH AND STUDENTS",
    faqs: [
      {
        question: "I’m a university student and often feel burnt out. Can Mindset help?",
        answer: (
          <>
            Absolutely. Mindset includes:<br />
            • Focus sessions with ambient sounds<br />
            • Stress-reduction techniques before or after exams<br />
            • Goal planners to organize your week<br />
            • A “Check-In” tool to reflect on your mental state
          </>
        ),
      },
      {
        question: "I live in a rural area. Can I still benefit from Mindset?",
        answer:
          "Yes. Many features like journaling, mood tracking, and offline meditations work without internet access. Only updates and new content require data.",
      },
    ],
  },
  {
    category: "PRIVACY & SECURITY",
    faqs: [
      {
        question: "Is my data safe with Mindset?",
        answer:
          "Yes. We adhere to Uganda’s Data Protection and Privacy Act, 2019. Your journal entries, mood data, and personal preferences are securely encrypted and stored.",
      },
      {
        question: "Does Mindset share my personal information?",
        answer:
          "No. We do not sell or share your data with advertisers. Data is only used to improve your experience, and analytics are anonymized. Except under certain circumstances as explained in the privacy policy.",
      },
      {
        question: "Do I need to register to use Mindset?",
        answer:
          "You can explore some features without an account, but to save your progress or sync across devices, you’ll need to sign up using email, phone, or a social login.",
      },
      {
        question: "Is it safe to share my emotions in the app?",
        answer:
          "Yes. Mindset is a judgment-free, stigma-free zone built with compassion and confidentiality in mind. Your emotional safety is our top priority.",
      },
      {
        question: "I’m worried about stigma. Will using Mindset expose me to others?",
        answer:
          "No. Mindset is designed with discreet usage. We do not post or share your activity. Your mental health journey is private and personal.",
      },
    ],
  },
  {
    category: "USAGE & SUPPORT",
    faqs: [
      {
        question: "How often should I use Mindset?",
        answer:
          "That’s up to you! We recommend checking in at least once daily to track your mood, write in your journal, or complete a wellness activity.",
      },
      {
        question: "How do I reset my password or recover my account?",
        answer:
          'Go to the login screen and click “Forgot Password?”. You’ll receive a reset link via your registered email or phone.',
      },
      {
        question: "What should I do if the app crashes or freezes?",
        answer: (
          <>
            Make sure you're using the latest version. If issues persist:<br />
            • Restart the app or your device<br />
            • Clear app cache (on Android)<br />
            • Contact us at (support email or contact)
          </>
        ),
      },
    ],
  },
  {
    category: "PRICING & SUBSCRIPTIONS",
    faqs: [
      {
        question: "Is Mindset free to use?",
        answer:
          "Mindset offers a free version with basic features. Premium features (like guided sessions and personalized plans) may require a subscription or one-time payment.",
      },
      {
        question: "How do I cancel or manage my subscription?",
        answer:
          "Subscriptions are managed via the App Store (iOS) or Google Play Store (Android). You can cancel or update your plan under your device's subscriptions settings.",
      },
    ],
  },
  {
    category: "OTHER",
    faqs: [
      {
        question: "Can I recommend content or features to be added?",
        answer:
          "Absolutely! We welcome your ideas. Email us at (contact email) or use the feedback option in the app settings.",
      },
      {
        question: "Where is Mindset based?",
        answer:
          "Mindset Technologies Ltd. is proudly based in Uganda, serving users across Africa and beyond with locally relevant wellness tools.",
      },
      {
        question: "Can I request topics or mental health content?",
        answer:
          "Yes! We welcome user feedback. Share ideas for new meditations, stress topics, or local language content via the feedback form in the app.",
      },
      {
        question: "How do I contact support?",
        answer: (
          <>
            Email: (support email)<br />
            Website: (website URL)<br />
            Use the "Help & Support" section in Settings
          </>
        ),
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const extraRef = useRef<HTMLDivElement | null>(null);

  // Toggle global open FAQ index
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (showAll && extraRef.current) {
      extraRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (!showAll && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showAll]);

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="py-28 bg-white/90 dark:bg-gray-900"
    >
      <div className="mx-auto w-[90%] max-w-6xl px-4 sm:px-6 lg:px-8">
        <header ref={faqRef} className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Mindset and how our wellness
            platform can support your mental health journey.
          </p>
        </header>

        {/* Initial FAQs */}
        <div>
          <h3 className="text-2xl font-bold mb-6" style={{ color: "#008080" }}>
      GENERAL
        </h3>
          {initialFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b border-gray-200 dark:border-gray-700 py-6"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-teal-600 transform transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Extra FAQs by category */}
        {showAll && (
          <div ref={extraRef} className="mt-12">
            {categorizedExtraFaqs.map(({ category, faqs }) => (
              <div key={category} className="mb-10">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#008080" }} // category heading color
                >
                  {category}
                </h3>
                {faqs.map((faq, idx) => {
                  // calculate global index for toggle
                  const faqIndex = initialFaqs.length + categorizedExtraFaqs
                    .slice(0, categorizedExtraFaqs.findIndex(c => c.category === category))
                    .reduce((acc, c) => acc + c.faqs.length, 0) + idx;

                  return (
                    <div
                      key={idx}
                      className="border-b border-gray-200 dark:border-gray-700 py-6"
                    >
                      <button
                        onClick={() => toggleFAQ(faqIndex)}
                        className="w-full flex justify-between items-center text-left focus:outline-none"
                      >
                        <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-teal-600 transform transition-transform duration-300 ${
                            openIndex === faqIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openIndex === faqIndex && (
                        <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {/* Toggle button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block border border-teal-600 text-teal-600 px-10 py-3 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition"
          >
            {showAll ? "Show Less Questions" : "View More Questions"}
          </button>
        </div>
      </div>
    </section>
  );
}
