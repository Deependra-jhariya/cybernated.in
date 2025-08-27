import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700">
              <strong>Last Updated:</strong> December 2024
            </p>
            <p className="text-gray-700 mt-2">
              This Privacy Policy describes how Cybernated Technology Pvt Ltd ("we," "our," or "us") collects, uses, and shares information about you when you use our services.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-600" />
                Information We Collect
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact us through our website or email</li>
                  <li>Request information about our services</li>
                  <li>Subscribe to our newsletters or updates</li>
                  <li>Engage with us on social media platforms</li>
                  <li>Participate in surveys or feedback sessions</li>
                </ul>
                
                <p className="mt-4">This information may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information</li>
                  <li>Company name and job title</li>
                  <li>Email address and phone number</li>
                  <li>Project requirements and specifications</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2 text-green-600" />
                How We Use Your Information
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices and security updates</li>
                  <li>Communicate with you about our services and updates</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-2 text-purple-600" />
                Information Sharing and Disclosure
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who help us operate our business</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> We may share information with your explicit consent for specific purposes</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <div className="prose prose-lg text-gray-600">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Employee training on data protection best practices</li>
                  <li>Secure backup and disaster recovery procedures</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              <div className="prose prose-lg text-gray-600">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information we hold</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information, subject to certain exceptions</li>
                  <li><strong>Portability:</strong> Request a copy of your information in a structured, machine-readable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                </ul>
                
                <p className="mt-4">To exercise these rights, please contact us using the information provided below.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <div className="prose prose-lg text-gray-600">
                <p>Our website may use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve website functionality and user experience</li>
                  <li>Provide personalized content and recommendations</li>
                </ul>
                
                <p className="mt-4">You can control cookie settings through your browser preferences, though some features may not work properly if cookies are disabled.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <div className="prose prose-lg text-gray-600">
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make changes, we will:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Post the updated policy on our website</li>
                  <li>Update the "Last Updated" date</li>
                  <li>Notify you of significant changes via email if applicable</li>
                  <li>Provide notice through our website or services</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <div className="prose prose-lg text-gray-600">
                <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                <div className="mt-4">
                  <p><strong>Email:</strong> <a href="mailto:deependrajhariya@gmail.com" className="text-blue-600 hover:text-blue-800">deependrajhariya@gmail.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+918719989752" className="text-blue-600 hover:text-blue-800">+91 8719989752</a></p>
                  <p><strong>Company:</strong> Cybernated Technology Pvt Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;