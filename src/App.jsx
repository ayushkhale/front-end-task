import React from 'react'
import Header from './Sections/Header'
import { IoPersonOutline, IoBriefcaseOutline, IoPrismOutline, IoCheckmarkCircle, IoCheckmarkCircleOutline, IoCheckboxOutline } from 'react-icons/io5';

import logo from './assets/img/logo.jpg';
import logo3 from './assets/img/logo3.jpg'
import featuredImg from './assets/img/Customer List.png';

const App = () => {
  return (
    <div>
      <header>
        <div className="container">
          <img src={logo} width="150" alt="Logo" />

          <div className="row">
            <div className="col hero-content">
              <h2 className="main-heading">
                Your Easy to Use Billing Software with GST !
              </h2>
              <h3 className="sub-heading">
                Streamline your operations and make accounting a doddle with our online invoicing software.
              </h3>
              <div className="inner-row">
                <div className="col">
                  <button className="btn btn-filled">
                    <a href="checkout.html">Log In</a>
                  </button>
                  <button className="btn btn-empty">
                    <a href="checkout.html">Get Started</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col hero-img">
              <img src={featuredImg} alt="Customer List" className="featured-img" />
            </div>
          </div>
        </div>
      </header>

      <section className="projects saas-info">
        <div className="container">
          <div className="row">
            <div className="col saas-img-wrap">
              <img src={featuredImg} alt="" className="saas-screen" />
            </div>
            <div className="col">
              <div className="project-featured-list">
                <h5 className="list-name">
                  Innovative. Fast. Retail Billing.
                </h5>
              </div>
              <h2 className="heading">
                Generate Invoices in Seconds{' '}
                <img src="img/flash.png" width="40" alt="flash icon" />
              </h2>
              <p className="para-line">
                Bill365 is your hassle-free invoicing solution, designed to simplify retail management and drive success in India.
              </p>
              <div className="inner-row">
                <div className="project-featured-list">
                  <IoCheckmarkCircle />
                  <h5 className="list-name">
                    Streamline task management
                  </h5>
                </div>
                <div className="project-featured-list">
                  <IoCheckmarkCircle />
                  <h5 className="list-name">
                    Build a solid plan your team will trust
                  </h5>
                </div>
                <div className="project-featured-list">
                  <IoCheckmarkCircle />
                  <h5 className="list-name">
                    Simplify focus and execution
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process saas-info">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="heading">
                Choose Your Billing Workflow or Customize Your Own
              </h2>
              <p className="para-line">
                Streamline your business with Bill365 by selecting a predefined workflow or creating a custom one that fits your specific needs.
              </p>
              <div className="inner-row">
                <div className="project-featured-list">
                  <IoCheckmarkCircleOutline />
                  <h5 className="list-name">
                    Invoice Creation
                  </h5>
                </div>
                <div className="project-featured-list">
                  <IoCheckmarkCircleOutline />
                  <h5 className="list-name">
                    Payment Tracking & Reminders
                  </h5>
                </div>
                <div className="project-featured-list">
                  <IoCheckmarkCircleOutline />
                  <h5 className="list-name">
                    Automated Billing Reports
                  </h5>
                </div>
              </div>
            </div>
            <div className="col saas-img-wrap">
              <img src={featuredImg} alt="" className="saas-screen" />
            </div>
          </div>
        </div>
      </section>

      <section className="automation saas-info">
        <div className="container">
          <div className="row">
            <div className="col saas-img-wrap">
              <img src={featuredImg} alt="" className="saas-screen" />
            </div>
            <div className="col">
              <h2 className="heading">
                Automating routine work. Save time.
              </h2>
              <p className="para-line">
                Bill365 takes the hassle out of your daily billing routine by automating key tasks, giving you more time to focus on growing your business.
              </p>
              <div className="inner-row hero-btn-row">
                <div className="project-featured-list">
                  <IoCheckmarkCircleOutline />
                  <h5 className="list-name">Auto assigne</h5>
                </div>
                <div className="project-featured-list">
                  <IoCheckmarkCircleOutline />
                  <h5 className="list-name">Notify team member</h5>
                </div>
                <div className="project-featured-list">
                  <IoCheckmarkCircleOutline />
                  <h5 className="list-name">Integrating app</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="plan">
        <div className="container">
          <h2 className="heading">
            Simple Pricing. <br />
            Boost Your Business Efficiency.
          </h2>
          <p className="para-line">
            Choose a plan that suits your business needs, and supercharge your billing and invoicing with the most efficient platform.
          </p>
          <div className="row plans">
            <div className="single-plan free">
              <h3 className="plan-name">Free</h3>
              <p className="plan-detail">
                Ideal for freelancers or small teams starting with invoicing and bill management.
              </p>
              <h1 className="plan-value">$ 0</h1>
              <button className="btn btn-bordered">
                <a href="checkout.html">Get Started</a>
              </button>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Unlimited invoices</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Basic invoice templates</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Email invoice notifications</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; 1 user</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Basic reporting</p>
            </div>

            <div className="single-plan basic">
              <p className="highlighter">Best Value!</p>
              <h3 className="plan-name">Basic</h3>
              <p className="plan-detail">
                Perfect for small businesses needing streamlined invoicing and reporting features.
              </p>
              <h1 className="plan-value">
                $ 10.8 <em>user/month</em>
              </h1>
              <button className="btn btn-filled btn-shadow">
                <a href="checkout.html">Get Started</a>
              </button>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Everything in Free, plus:</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Custom invoice templates</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Multi-currency support</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Client management tools</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Advanced reporting</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; 3 users</p>
            </div>

            <div className="single-plan unlimited">
              <h3 className="plan-name">Unlimited</h3>
              <p className="plan-detail">
                Best for large teams and businesses needing comprehensive billing and payment management.
              </p>
              <h1 className="plan-value">
                $ 24.8 <em>user/month</em>
              </h1>
              <button className="btn btn-bordered btn-hover">
                <a href="checkout.html">Get Started</a>
              </button>
              <h6 className="feature-heading">Everything in Basic, plus:</h6>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Recurring invoices</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Advanced integrations (e.g., Stripe, PayPal)</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Automated tax calculations</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Invoice approvals</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Priority customer support</p>
              <p className="plan-feature"><IoCheckboxOutline />&nbsp; Unlimited users and teams</p>
            </div>
          </div>
        </div>
      </section>

      <div className="saas-category">
        <div className="container">
          <h2 className="heading white">
            One workspace. <br />
            Best for a busy worker like you.
          </h2>

          <div className="row saas-categories">
            <div className="col">
              <IoPersonOutline />
              <h4 className="category-name">Freelancer</h4>
              <p className="detail">
                Egestas hendrerit tincidunt massa nunc mattis non iaculis sed egestas
              </p>
            </div>

            <div className="col">
              <IoBriefcaseOutline />
              <h4 className="category-name">Agencies</h4>
              <p className="detail">
                Egestas hendrerit tincidunt massa nunc mattis non iaculis sed egestas
              </p>
            </div>

            <div className="col">
              <IoPrismOutline />
              <h4 className="category-name">Enterprise</h4>
              <p className="detail">
                Egestas hendrerit tincidunt massa nunc mattis non iaculis sed egestas
              </p>
            </div>
          </div>

          <span>
            <button className="btn btn-filled-white">
              <a href="checkout.html">
                Let's get started
              </a>
            </button>
          </span>
        </div>
      </div>

      <section className="faq">
        <div className="container">
          <h2 className="heading">Frequently Asked Questions</h2>

          <div className="row faqs">
            <div className="col">
              <h3 className="question">What is Bill365?</h3>
              <p className="para-line answer">
                Bill365 is a simple GST billing and invoicing software designed to help businesses create professional invoices, manage payments, and track expenses easily.
              </p>
              <hr />
            </div>
            <div className="col">
              <h3 className="question">Is Bill365 free to use?</h3>
              <p className="para-line answer">
                Yes, Bill365 offers a free plan with essential features. You can also upgrade to premium plans for additional tools like advanced reports, inventory management, and team access.
              </p>
              <hr />
            </div>
          </div>

          <div className="row faqs">
            <div className="col">
              <h3 className="question">Who can use Bill365?</h3>
              <p className="para-line answer">
                Bill365 is perfect for small businesses, freelancers, retailers, service providers, and anyone who needs easy invoicing, expense tracking, and GST filing support.
              </p>
              <hr />
            </div>
            <div className="col">
              <h3 className="question">Do I need to install any software?</h3>
              <p className="para-line answer">
                No installation needed. Bill365 is a cloud-based platform — you can access it through your web browser anytime, anywhere.
              </p>
              <hr />
            </div>
          </div>

          <div className="row faqs">
            <div className="col">
              <h3 className="question">Can I customize my invoices?</h3>
              <p className="para-line answer">
                Absolutely. Bill365 allows you to customize invoice templates with your company logo, terms, conditions, and personalized notes.
              </p>
              <hr />
            </div>
            <div className="col">
              <h3 className="question">Is my data secure with Bill365?</h3>
              <p className="para-line answer">
                100%. We use industry-standard encryption and security practices to keep your business data safe and private at all times.
              </p>
              <hr />
            </div>
          </div>

          <div className="row faqs">
            <div className="col">
              <h3 className="question">What payment methods do you accept?</h3>
              <p className="para-line answer">
                We accept major credit cards, debit cards, UPI, and net banking for payments in India.
              </p>
              <hr />
            </div>
            <div className="col">
              <h3 className="question">How do I get support if needed?</h3>
              <p className="para-line answer">
                You can easily reach out through our in-app chat support, email us, or explore detailed help articles and video tutorials from our support center.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
      <hr className="divider" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo3} alt="Bill365 Logo" width="100" />
          </div>

          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/signup">Get Started</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/videos">Video Tutorials</a></li>
              <li><a href="mailto:support@bill365.app">Email Support</a></li>
            </ul>
          </div>
        </div>
      </div>
      <h4 style={{ textAlign: 'center', color: '#424242' }}>Copyright © 2025 Bill365. All Rights Reserved</h4>
    </footer>

    </div>
  )
}

export default App