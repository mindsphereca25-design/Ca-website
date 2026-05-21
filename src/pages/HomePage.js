import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const coursePaths = [
    {
      id: "school-students",
      tone: "school-path-home",
      badge: "Early Start",
      title: (
        <>
          <span className="courses-path-grade-home">
            9<sup>th</sup>
          </span>
          <span className="courses-path-connector-home">&</span>
          <span className="courses-path-grade-home">
            10<sup>th</sup>
          </span>
          <span className="courses-path-title-text-home">Students</span>
        </>
      ),
      subtitle: "Sunday Special CA Coaching",
      text: "Early foundation classes that introduce students to disciplined study, commerce thinking, and problem-solving.",
      points: ["School-friendly schedule", "Commerce basics", "Early CA mindset"],
      image: "/images/course-path-6.png"
    },
    {
      id: "tenth-completed",
      tone: "tenth-path-home",
      badge: "After 10th",
      title: (
        <>
          <span className="courses-path-grade-home">
            10<sup>th</sup>
          </span>
          <span className="courses-path-title-text-home">Completed?</span>
        </>
      ),
      subtitle: "Intermediate MEC + CA Foundation",
      text: "A planned route for students who want to begin commerce and CA preparation early with strong basics.",
      points: ["MEC with CA focus", "Strong fundamentals", "Guided preparation"],
      image: "/images/course-path-4.png"
    },
    {
      id: "twelfth-completed",
      tone: "twelfth-path-home",
      badge: "After 12th",
      title: (
        <>
          <span className="courses-path-grade-home">
            12<sup>th</sup>
          </span>
          <span className="courses-path-title-text-home">Completed?</span>
        </>
      ),
      subtitle: "CA Foundation + CA Intermediate",
      text: "A focused path for students ready to enter the CA stream and build confidence for higher-level preparation.",
      points: ["Exam-focused path", "Concept clarity", "Intermediate-ready"],
      image: "/images/course-path-2.jpg"
    }
  ];


  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="gaming-homepage">
      <Navbar />

      <main className="gaming-homepage-main">

        <section className="main-banner-section">
          <div className="main-banner-wrapper">
            <img
              src="/images/main-banner.png"
              alt="Mind Sphere CA CMA Academy main banner"
              className="main-banner-image"
            />
          </div>
        </section>

        {/*<section className="gaming-intro-section">
          <div className="gaming-intro-grid-bg">
            <span className="gaming-intro-line gaming-intro-line-one" />
            <span className="gaming-intro-line gaming-intro-line-two" />
            <span className="gaming-intro-line gaming-intro-line-three" />
          </div>

          <div className="gaming-orbit gaming-orbit-one" />
          <div className="gaming-orbit gaming-orbit-two" />

          <div className="gaming-intro-content">
            <span className="gaming-intro-kicker">Welcome to<span className="gaming-intro-kicker-main">Mind Sphere</span> </span>

            <h1>Begin Your CA Journey with Clear Guidance and Strong Foundations</h1>

            <div className="gaming-intro-bottom">
              <p>
                Mind Sphere CA CMA Academy offers CA Foundation with MEC, CA Intermediate,
                and Sunday special CA coaching for 9th and 10th students. Join our
                3 days free demo classes and experience concept-focused learning.
              </p>

              <button
                type="button"
                className="gaming-explore-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </section> */}

        <section className="courses-paths-section-home">
  <div className="courses-section-heading-home dark-home center-home">
    <span>Choose Your Path</span>
    <h2>Start from where you are today</h2>
    <p>
      Whether you completed 10th, completed 12th, or are still in school, we have a learning path that helps you begin with clarity.
    </p>
  </div>

  <div className="courses-paths-grid-home">
    {coursePaths.map((path) => (
      <article className="courses-path-card-home" key={path.id}>
        <div className="courses-path-image-wrap-home">
          <img src={path.image} alt={path.subtitle} />
          <div className="courses-path-image-overlay-home"></div>
        </div>

        <div className="courses-path-content-home">
          <div className="courses-path-title-home">
            {path.title}
          </div>

          <h3>{path.subtitle}</h3>
          <p>{path.text}</p>

          <ul className="courses-path-points-home">
            {path.points.map((point) => (
              <li key={point}>
                <span></span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </article>
    ))}
  </div>
</section>

        <section className="homepage-mentors-section">
          <div className="homepage-mentors-container">
            <div className="homepage-mentors-header">
              <span>Expert Mentorship</span>
              <h2>Learn under the guidance of experienced Chartered Accountants.</h2>
              <p>
                Mind Sphere CA CMA Academy is founded by Chartered Accountants Ranga Swamy and Nanda Divya, bringing professional experience, practical clarity, and student-focused teaching into every class.
              </p>
            </div>

            <div className="homepage-mentors-layout">
              <div className="homepage-mentor-profile">
                <div className="homepage-mentor-image">
                  <img src="/images/home-mentor-1.jpeg" alt="CA Ranga Swamy" />
                </div>

                <div className="homepage-mentor-content">
                  <span>Founder & Faculty</span>
                  <h3>CA Ranga Swamy</h3>
                  <p>
                    Guides students with clear explanations, structured preparation, and practical understanding of CA subjects.
                  </p>
                </div>
              </div>

              <div className="homepage-mentor-center-card">

                <h3>Professional Experience</h3>
                <p>
                  Students learn from mentors who understand both professional accounting practice and exam-focused preparation.
                </p>

                <button type="button" className="homepage-mentors-btn" onClick={goToContact}>
                  Talk to Our Team
                </button>
              </div>

              <div className="homepage-mentor-profile">
                <div className="homepage-mentor-image">
                  <img src="/images/home-mentor-2.jpeg" alt="CA Nanda Divya" />
                </div>

                <div className="homepage-mentor-content">
                  <span>Founder & Faculty</span>
                  <h3>CA Nanda Divya</h3>
                  <p>
                    Supports students with disciplined learning, personal attention, revision planning, and confidence-building guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/*<section className="gaming-grid-section">
          <div className="gaming-grid-layout">
            <div className="gaming-grid-content-card">
              <div className="gaming-grid-content-inner">
                <span className="gaming-grid-kicker">Mind Sphere CA CMA Academy</span>
                <h2>Guided by Chartered Accountants</h2>
                <p>
                  Learn with expert CA guidance, clear concepts, disciplined preparation, and focused support for CA Foundation, MEC, and CA Intermediate.
                </p>
                <button type="button" className="gaming-grid-btn" onClick={goToContact}>
                  Book Free Demo
                </button>
              </div>
            </div>

            <div className="gaming-grid-split-card">
              <div className="gaming-grid-image-card">
                <img src="/images/new1.png" alt="CA academy classroom learning" />
              </div>
            </div>

            <div className="gaming-grid-split-card">
              <div className="gaming-grid-image-card">
                <img src="/images/new2.png" alt="Students preparing for CA exams" />
              </div>
            </div>

            <div className="gaming-grid-full-image-card">
              <img src="/images/new3.png" alt="Mind Sphere CA CMA Academy students" />
            </div>
          </div>
        </section>  */}




        <section className="homepage-learning-section">
          <div className="homepage-learning-container">
            <div className="homepage-learning-header">
              <span>Learning Programs</span>
              <h2>One academy, multiple paths for serious CA preparation</h2>
              <p>
                Mind Sphere CA CMA Academy supports students from early school stages to CA Intermediate with Chartered Accountant-led guidance, concept-based teaching, regular practice, revision support, and personal attention.
              </p>
            </div>

            <div className="homepage-learning-grid">
              <div className="homepage-learning-card large">
                <div className="homepage-learning-image">
                  <img src="/images/home-learning-5.png" alt="CA Foundation with MEC" />
                </div>

                <div className="homepage-learning-content">
                  <span>After 10th</span>
                  <h3>Intermediate MEC + CA Foundation</h3>
                  <p>
                    A strong early route for students who want to begin commerce and CA preparation with the right academic direction. This path helps students build accounting basics, business understanding, mathematical confidence, and disciplined study habits from the beginning.
                  </p>
                </div>
              </div>

              <div className="homepage-learning-card">
                <div className="homepage-learning-icon">12</div>

                <div className="homepage-learning-content">
                  <span>After 12th</span>
                  <h3>CA Foundation + CA Intermediate</h3>
                  <p>
                    A focused path for students ready to begin professional CA preparation after completing 12th. Students receive guidance for CA Foundation and a clear academic direction to move toward CA Intermediate with confidence.
                  </p>
                </div>
              </div>

              <div className="homepage-learning-card accent">
                <div className="homepage-learning-icon">S</div>

                <div className="homepage-learning-content">
                  <span>School Students</span>
                  <h3>Sunday Special CA Coaching</h3>
                  <p>
                    Special Sunday classes for 9th and 10th students to build discipline, confidence, calculation skills, basic commerce thinking, and early interest in the CA profession before entering higher classes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<section className="gaming-showcase-section">
          <div className="gaming-showcase-header">
            <span>Our Learning Paths</span>
            <h2>Courses designed for students at every important stage</h2>
          </div>

          <div className="gaming-showcase-grid">
            <div className="gaming-showcase-card">
              <div className="gaming-showcase-image-wrap">
                <img
                  src="/images/course-exam.jpg"
                  alt="CA Foundation with MEC coaching"
                  className="gaming-showcase-image"
                />
              </div>
              <div className="gaming-showcase-card-content">
                <h3>10th Completed?</h3>
                <p>
                  Start with Intermediate MEC and CA Foundation coaching to build a strong
                  academic base early.
                </p>
              </div>
            </div>

            <div className="gaming-showcase-card">
              <div className="gaming-showcase-image-wrap">
                <img
                  src="/images/course-school1.jpg"
                  alt="CA Foundation and CA Intermediate coaching"
                  className="gaming-showcase-image"
                />
              </div>
              <div className="gaming-showcase-card-content">
                <h3>12th Completed?</h3>
                <p>
                  Prepare for CA Foundation and move confidently toward CA Intermediate
                  with expert guidance.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="homepage-hostel-section">
          <div className="homepage-hostel-container">
            <div className="homepage-hostel-content">
              <span className="homepage-hostel-kicker">Student Support</span>

              <h2>Hostel facility available for focused and comfortable learning.</h2>

              <p>
                Mind Sphere CA CMA Academy supports students with a learning environment that helps them stay regular, disciplined, and close to their coaching schedule.
              </p>

              <div className="homepage-hostel-features">
                <div className="homepage-hostel-feature">
                  <span>01</span>
                  <div>
                    <h3>Convenient Stay</h3>
                    <p>Helpful for students who want to stay near the academy and attend classes regularly.</p>
                  </div>
                </div>

                <div className="homepage-hostel-feature">
                  <span>02</span>
                  <div>
                    <h3>Focused Routine</h3>
                    <p>A supportive setup that helps students maintain study discipline and revision habits.</p>
                  </div>
                </div>

                <div className="homepage-hostel-feature">
                  <span>03</span>
                  <div>
                    <h3>Parent Friendly Support</h3>
                    <p>Parents can enquire directly about hostel availability, course timing, and student guidance.</p>
                  </div>
                </div>
              </div>

              <button type="button" className="homepage-hostel-btn" onClick={goToContact}>
                Enquire About Hostel
              </button>
            </div>

            <div className="homepage-hostel-gallery">
              <div className="homepage-hostel-image large">
                <img src="/images/home-hostel-3.jpeg" alt="Mind Sphere hostel facility" />
              </div>

              <div className="homepage-hostel-small-grid">
                <div className="homepage-hostel-image">
                  <img src="/images/home-hostel-2.jpg" alt="Student study space" />
                </div>

                <div className="homepage-hostel-info-card">
                  <span className="homepage-hostel-status">Available</span>

                  <h3>Hostel Facility</h3>

                  <p className="homepage-hostel-contact-title">For hostel enquiries, call us directly</p>

                  <div className="homepage-hostel-contact-list">
                    <a href="tel:+919848318538" className="homepage-hostel-phone-link">
                      <span className="homepage-hostel-phone-icon">☎</span>
                      <span>
                        <small>Hostel Enquiry</small>
                        +91 70923 37173
                      </span>
                    </a>

                    <a href="tel:+9191828233051" className="homepage-hostel-phone-link">
                      <span className="homepage-hostel-phone-icon">☎</span>
                      <span>
                        <small>Student Support</small>
                        +91 91828 23051
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/*<section className="homepage-demo-section">
          <div className="homepage-demo-container">
            <div className="homepage-demo-content">
              <div className="homepage-demo-left">
                <span className="homepage-demo-tag">Free Demo Classes</span>

                <h2>Experience the classroom before you join.</h2>

                <p>
                  Attend 3 days of free demo classes at Mind Sphere CA CMA Academy and understand our teaching style, course structure, faculty guidance, and learning environment.
                </p>

                <button type="button" className="homepage-demo-btn" onClick={goToContact}>
                  Book Your Free Demo
                </button>
              </div>

              <div className="homepage-demo-center">
                <img src="/images/home-demo-class.jpg" alt="Mind Sphere free demo class" />

                <div className="homepage-demo-badge">
                  <h3>3 Days</h3>
                  <p>Free Demo Available</p>
                </div>
              </div>

              <div className="homepage-demo-right">
                <div className="homepage-demo-step">
                  <div className="homepage-demo-number">01</div>
                  <div>
                    <h3>Attend a Live Class</h3>
                    <p>
                      Sit in the classroom, observe the teaching method, and understand how concepts are explained with clarity.
                    </p>
                  </div>
                </div>

                <div className="homepage-demo-step">
                  <div className="homepage-demo-number">02</div>
                  <div>
                    <h3>Meet the Faculty</h3>
                    <p>
                      Interact with Chartered Accountant mentors and discuss the right path for CA Foundation, MEC, or CA Intermediate.
                    </p>
                  </div>
                </div>

                <div className="homepage-demo-step">
                  <div className="homepage-demo-number">03</div>
                  <div>
                    <h3>Choose the Right Course</h3>
                    <p>
                      Get proper guidance based on your current academic stage, whether you are in 9th, 10th, completed 10th, or completed 12th.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}


        <section className="homepage-academy-section">
          <div className="homepage-academy-container">
            <div className="homepage-academy-image-wrap">
              <img src="/images/home-academy1.jpeg" alt="Mind Sphere CA CMA Academy classroom" />
              <div className="homepage-academy-badge">
                <span>3 Days</span>
                <p>Free Demo Classes</p>
              </div>
            </div>

            <div className="homepage-academy-content">
              <span className="homepage-academy-kicker">Why Mind Sphere?</span>

              <h2>Learn CA concepts with clarity, discipline, and expert guidance.</h2>

              <p>
                Mind Sphere CA CMA Academy helps students build a strong academic base through Chartered Accountant-led coaching, personal attention, regular practice, and exam-focused preparation.
              </p>

              <div className="homepage-academy-points">
                <div className="homepage-academy-point">
                  <span>01</span>
                  <div>
                    <h3>Guided by Chartered Accountants</h3>
                    <p>Learn from experienced professionals who understand the CA journey deeply.</p>
                  </div>
                </div>

                <div className="homepage-academy-point">
                  <span>02</span>
                  <div>
                    <h3>CA Foundation with MEC</h3>
                    <p>Start early after 10th with a strong commerce and CA foundation plan.</p>
                  </div>
                </div>

                <div className="homepage-academy-point">
                  <span>03</span>
                  <div>
                    <h3>Hostel Facility Available</h3>
                    <p>Convenient support for students who need a comfortable stay while studying.</p>
                  </div>
                </div>
              </div>

              <button type="button" className="homepage-academy-btn" onClick={goToContact}>
                Join Free Demo
              </button>
            </div>
          </div>
        </section>


        <section className="homepage-results-section">
          <div className="homepage-results-bg-glow homepage-results-bg-glow-one"></div>
          <div className="homepage-results-bg-glow homepage-results-bg-glow-two"></div>

          <div className="homepage-results-container">
            <div className="homepage-results-top">
              <span className="homepage-results-kicker">Focused Preparation</span>

              <h2>Study with clarity, consistency, and confidence.</h2>

              <p>
                At Mind Sphere CA CMA Academy, every student follows a structured learning approach. Concepts are explained clearly, practice is guided, doubts are solved regularly, and revision is planned with exam preparation in mind.
              </p>
            </div>

            <div className="homepage-results-layout">
              <div className="homepage-results-stats-panel">
                <div className="homepage-results-panel-header">
                  <span>Foundation Support</span>
                  <h3>Built for steady progress</h3>
                  <p>
                    A focused environment where students learn discipline, strengthen basics, and prepare with confidence.
                  </p>
                </div>

                <div className="homepage-results-stats-grid">
                  <div className="homepage-results-stat homepage-results-stat-highlight">
                    <strong>3 Days</strong>
                    <span>Free Demo Classes</span>
                  </div>

                  <div className="homepage-results-stat">
                    <strong>CA</strong>
                    <span>Guided Learning</span>
                  </div>

                  <div className="homepage-results-stat">
                    <strong>100%</strong>
                    <span>Concept Focused</span>
                  </div>
                </div>

                <div className="homepage-results-mini-card">
                  <div className="homepage-results-mini-icon">✓</div>
                  <div>
                    <h4>Exam-ready approach</h4>
                    <p>Regular revision, test practice, and doubt clearing help students stay prepared.</p>
                  </div>
                </div>
              </div>

              <div className="homepage-results-track">
                <div className="homepage-results-card">
                  <div className="homepage-results-number">01</div>

                  <div className="homepage-results-card-content">
                    <span>Learn deeply</span>
                    <h3>Concept Clarity</h3>
                    <p>
                      Students learn the logic behind every subject so they can solve questions with confidence.
                    </p>
                  </div>
                </div>

                <div className="homepage-results-card homepage-results-card-active">
                  <div className="homepage-results-number">02</div>

                  <div className="homepage-results-card-content">
                    <span>Practice smartly</span>
                    <h3>Regular Practice</h3>
                    <p>
                      Classroom practice, revision, and test preparation help students stay consistent.
                    </p>
                  </div>
                </div>

                <div className="homepage-results-card">
                  <div className="homepage-results-number">03</div>

                  <div className="homepage-results-card-content">
                    <span>Improve step by step</span>
                    <h3>Personal Attention</h3>
                    <p>
                      Faculty guidance helps students correct mistakes and improve their preparation step by step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="homepage-admission-section">
          <div className="homepage-admission-container">
            <div className="homepage-admission-header">
              <span>Admission Guidance</span>
              <h2>Not sure which course to choose? We help you decide clearly.</h2>
              <p>
                Every student has a different starting point. Our team guides students and parents through the right course path based on class, goals, preparation level, and future CA plans.
              </p>
            </div>

            <div className="homepage-admission-wrapper">
              <div className="homepage-admission-left">
                <div className="homepage-admission-card active">
                  <span>For 10th Completed Students</span>
                  <h3>Intermediate MEC + CA Foundation</h3>
                  <p>
                    Start early with commerce basics, accounting concepts, and CA Foundation preparation in a structured way.
                  </p>
                </div>

                <div className="homepage-admission-card">
                  <span>For 12th Completed Students</span>
                  <h3>CA Foundation + CA Intermediate</h3>
                  <p>
                    Begin your professional CA preparation with a focused plan and expert Chartered Accountant guidance.
                  </p>
                </div>
              </div>

              <div className="homepage-admission-image-card">
                <img src="/images/home-admission.jpg" alt="Mind Sphere CA CMA Academy admission guidance" />

                <div className="homepage-admission-floating">
                  <span>Guided By</span>
                  <h3>Chartered Accountants</h3>
                </div>
              </div>

              <div className="homepage-admission-right">
                <div className="homepage-admission-step">
                  <span>01</span>
                  <div>
                    <h3>Discuss Your Stage</h3>
                    <p>Tell us whether you are in school, completed 10th, or completed 12th.</p>
                  </div>
                </div>

                <div className="homepage-admission-step">
                  <span>02</span>
                  <div>
                    <h3>Understand the Course</h3>
                    <p>Get clarity on CA Foundation, MEC, CA Intermediate, and Sunday special coaching.</p>
                  </div>
                </div>

                <div className="homepage-admission-step">
                  <span>03</span>
                  <div>
                    <h3>Attend Free Demo</h3>
                    <p>Experience 3 days of demo classes before confirming your admission.</p>
                  </div>
                </div>

                <button type="button" className="homepage-admission-btn" onClick={goToContact}>
                  Get Admission Guidance
                </button>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>

  );
}

export default HomePage;