import React from 'react';
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Scale className="h-16 w-16 mx-auto mb-6 text-gray-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-amber-600 mt-1 mr-3" />
              <div>
                <p className="text-gray-700">
                  <strong>Last Updated:</strong> December 2024
                </p>
                <p className="text-gray-700 mt-2">
                  These Terms and Conditions ("Terms") govern your use of services provided by Cybernated Pvt Ltd. By using our services, you agree to these Terms.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-600" />
                Agreement to Terms
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                
                <p className="mt-4">These Terms apply to all visitors, users, and others who access or use our services, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Website visitors and users</li>
                  <li>Clients who engage our services</li>
                  <li>Partners and collaborators</li>
                  <li>Anyone who communicates with us</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Description</h2>
              <div className="prose prose-lg text-gray-600">
                <p>Cybernated Pvt Ltd provides technology consulting and development services, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Web application development</li>
                  <li>Mobile application development</li>
                  <li>Cloud solutions and infrastructure</li>
                  <li>Cybersecurity consulting</li>
                  <li>Data analytics and business intelligence</li>
                  <li>Digital transformation services</li>
                  <li>Technical consulting and support</li>
                </ul>
                
                <p className="mt-4">Specific terms for individual projects will be outlined in separate service agreements or contracts.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
              <div className="prose prose-lg text-gray-600">
                <p>As a client of our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Provide Accurate Information:</strong> Supply complete and accurate project requirements and information</li>
                  <li><strong>Timely Communication:</strong> Respond to our communications and requests within reasonable timeframes</li>
                  <li><strong>Payment Terms:</strong> Make payments according to agreed schedules and terms</li>
                  <li><strong>Content Responsibility:</strong> Ensure that all content provided is legal, accurate, and you have rights to use it</li>
                  <li><strong>Cooperation:</strong> Provide necessary access, credentials, and cooperation for project completion</li>
                  <li><strong>Feedback:</strong> Provide timely and constructive feedback during project milestones</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <div className="prose prose-lg text-gray-600">
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Intellectual Property</h3>
                <p>All proprietary methods, processes, and know-how developed by Cybernated Pvt Ltd remain our intellectual property. This includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proprietary development methodologies</li>
                  <li>Reusable code libraries and frameworks</li>
                  <li>Documentation templates and processes</li>
                  <li>Trade secrets and confidential information</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Client Intellectual Property</h3>
                <p>Upon full payment, clients receive:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full rights to custom-developed code and applications</li>
                  <li>Ownership of project-specific documentation</li>
                  <li>Usage rights to deliverables as specified in project agreements</li>
                  <li>Source code and deployment rights where applicable</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <div className="prose prose-lg text-gray-600">
                <p>Our standard payment terms include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Project-based:</strong> Milestone-based payments as outlined in project contracts</li>
                  <li><strong>Retainer:</strong> Monthly or quarterly payments for ongoing services</li>
                  <li><strong>Hourly:</strong> Regular invoicing for time-based consulting services</li>
                  <li><strong>Late Payments:</strong> Late fees may apply to overdue payments</li>
                  <li><strong>Payment Methods:</strong> Bank transfer, check, or approved electronic payment methods</li>
                </ul>
                
                <p className="mt-4">Specific payment terms will be detailed in individual service agreements.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
              <div className="prose prose-lg text-gray-600">
                <p>We maintain strict confidentiality regarding:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Client business information and strategies</li>
                  <li>Technical specifications and requirements</li>
                  <li>Financial information and contracts</li>
                  <li>Proprietary data and trade secrets</li>
                  <li>User data and personal information</li>
                </ul>
                
                <p className="mt-4">We may require separate Non-Disclosure Agreements (NDAs) for sensitive projects.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <div className="prose prose-lg text-gray-600">
                <p>To the fullest extent permitted by law, Cybernated Pvt Ltd shall not be liable for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, revenue, or business opportunities</li>
                  <li>Data loss or corruption beyond our control</li>
                  <li>Third-party service interruptions or failures</li>
                  <li>Force majeure events or circumstances beyond our control</li>
                </ul>
                
                <p className="mt-4">Our total liability for any claims shall not exceed the amount paid for the specific service in question.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty and Support</h2>
              <div className="prose prose-lg text-gray-600">
                <p>We provide:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Quality Assurance:</strong> Thorough testing of all deliverables</li>
                  <li><strong>Bug Fixes:</strong> Correction of defects reported within warranty periods</li>
                  <li><strong>Documentation:</strong> Comprehensive documentation for all deliverables</li>
                  <li><strong>Support:</strong> Technical support as specified in service agreements</li>
                  <li><strong>Updates:</strong> Security updates and critical patches where applicable</li>
                </ul>
                
                <p className="mt-4">Warranty periods and support terms are specified in individual project contracts.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <div className="prose prose-lg text-gray-600">
                <p>These Terms may be terminated:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>By Either Party:</strong> With written notice as specified in contracts</li>
                  <li><strong>For Breach:</strong> Immediate termination for material breach of terms</li>
                  <li><strong>For Non-Payment:</strong> Services may be suspended for overdue payments</li>
                  <li><strong>Project Completion:</strong> Natural termination upon project delivery and acceptance</li>
                </ul>
                
                <p className="mt-4">Upon termination, all outstanding payments become immediately due, and confidentiality obligations continue.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <div className="prose prose-lg text-gray-600">
                <p>These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in the appropriate jurisdiction.</p>
                
                <p className="mt-4">We will attempt to resolve disputes through good faith negotiation before pursuing legal remedies.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <div className="prose prose-lg text-gray-600">
                <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. We will notify clients of significant changes via email where possible.</p>
                
                <p className="mt-4">Continued use of our services after changes constitutes acceptance of the modified Terms.</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <div className="prose prose-lg text-gray-600">
                    <p>For questions about these Terms or our services, please contact us:</p>
                    <div className="mt-4">
                      <p><strong>Company:</strong> Cybernated Pvt Ltd</p>
                      <p><strong>Email:</strong> <a href="mailto:deependrajhariya@gmail.com" className="text-blue-600 hover:text-blue-800">deependrajhariya@gmail.com</a></p>
                      <p><strong>Phone:</strong> <a href="tel:+918719989752" className="text-blue-600 hover:text-blue-800">+91 8719989752</a></p>
                      <p><strong>Contact Person:</strong> Deependra Jhariya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;