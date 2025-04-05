import { useEffect, useState } from "react";
import VolunteerNeedsSection from "../../components/VolunteerNeedsSection/VolunteerNeedsSection";
import img1 from "../../assets/review1.jpg";
import img2 from "../../assets/review2.jpg";
import img4 from "../../assets/review4.jpg";
import { Fade } from "react-awesome-reveal";
import "animate.css";
import Blogs from "../../components/Blogs/Blogs";
import ContactSection from "../../components/ContactSection/ContactSection";
import BannerSection from "../../components/BannerSection/BannerSection";

const HomePage = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    document.title = "Home page | Volunteer management";
  }, []);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div>
      <BannerSection></BannerSection>
      <div className="max-w-7xl mx-auto">
        <VolunteerNeedsSection></VolunteerNeedsSection>
        {/* extra section one  */}
        <section id="faq">
          <div className="w-full md:w-6/12 lg:w-5/12 mx-auto p-3 mb-6 rounded-xl">
            <h3 className="text-3xl text-white text-center font-bold mb-1">
              Volunteering FAQs{" "}
            </h3>
            <p className="text-center text-white -mb-3">
              Got a question about volunteering? We’ve answered some of the
              frequently asked questions from volunteers here:
            </p>
          </div>

          <div className="join join-vertical w-full bg-white">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Can I claim benefits while volunteering?
              </div>
              <div className="collapse-content">
                <p>
                  Yes. Claimants of welfare benefits such as Jobseekers
                  Allowance, Income Support, Employment and Support Allowance,
                  Incapacity Benefit and Disability Living Allowance are allowed
                  to volunteer without losing their benefits. However, you must
                  make sure that you are available to meet the conditions of
                  receiving those benefits. We recommend that you tell your
                  volunteer coordinator that you are claiming benefits,
                  especially if there is a chance your situation could change at
                  short notice, for example if you are seeking paid work.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                How much time do I need to volunteer?
              </div>
              <div className="collapse-content">
                <p>
                  This is really up to you. You can find volunteering
                  opportunities that only take one hour per month, to five days
                  a week - or more. Some roles are for one-off events, some are
                  short term and others might need a six month commitment. You
                  can volunteer at any time of the week, day or night. While
                  much volunteering takes place in office hours, you can
                  volunteer at evenings and weekends too, again depending on
                  what you want to do. Some organisations ask for a particular
                  commitment from their volunteers while others are able to take
                  a more flexible approach. Certain roles like befriending
                  require building up trust with someone, which is why a certain
                  amount of commitment is required. Think carefully about the
                  amount of commitment you are able to give before choosing your
                  role. Our opportunity search helps narrow down the
                  opportunities that suit your life.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Can I leave if I don't like it?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, of course. You are under no obligation to keep
                  volunteering for an organisation if you don’t like it. But it
                  is always worth talking to somebody before stopping. That
                  could be your volunteer co-ordinator (if there is one),
                  supervisor or someone in the organisation who is responsible
                  for you. You can discuss with them why you feel unhappy and
                  what you feel would improve your time as a volunteer. It is
                  also something you may want to talk about with other
                  volunteers in the organisation. You could either do that
                  informally or, if your organisation has a regular meeting for
                  volunteers, you could bring up any issues there. If you feel
                  that something is seriously wrong, or someone is treating you
                  badly, it is also worth checking whether your organisation has
                  a complaints procedure. Some organisations have ‘volunteer
                  agreements’ that explain expectations on both sides.{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Do I need qualifications?
              </div>
              <div className="collapse-content">
                <p>
                  Not usually, no. Some volunteering opportunities require
                  certain skills such as counselling which may require
                  qualifications, but organisations often provide training. If
                  particular qualifications are needed in order to take up the
                  volunteering role, the information should be available on the
                  organisations' website. Often organisations are looking for
                  personal skills, such as being able to get on with a wide
                  variety of people, being reliable and being enthusiastic about
                  a particular interest or cause - rather than academic
                  qualifications.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                What about online volunteering?
              </div>
              <div className="collapse-content">
                <p>
                  If you would like to give time but are unable to turn up in
                  person or have little free time then online volunteering could
                  be the answer. Giving time over the web is convenient and
                  flexible and allows people to get involved who might otherwise
                  be unable to. Online volunteering allows you to complete tasks
                  from home, at work or anywhere! The tasks could be for
                  organisations around the corner, overseas or they may exist
                  only on the internet.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Can I volunteer from home?
              </div>
              <div className="collapse-content">
                <p>
                  Yes. It's an increasingly popular way of volunteering and you
                  can search for home based opportunities on our website.
                  Example opportunities are telephone befriending or some people
                  combine their hobby with volunteering such as knitters making
                  blankets and baby clothes to be sold for charity. For specific
                  information on online volunteering, see Q8 - What about online
                  volunteering?
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* extra section two  */}
        <section className="my-12 w-11/12 mx-auto" id="reviews">
          <h3 className="text-3xl text-white text-center font-bold">Reviews</h3>
          <div className="w-full md:w-6/12 lg:w-5/12 mx-auto">
            <p className="text-center text-white mb-6">
              A reviews volunteer is someone who dedicates their time and effort
              to help gather, write, evaluate, or manage reviews for various
              purposes
            </p>
          </div>
          <Fade direction="up">
            <div className="lg:flex justify-center gap-12">
              <div className="w-full mb-6 lg:mb-0 lg:w-4/12 bg-white p-4 rounded-xl">
                <p className="mb-4">
                  Volunteer Management: An Overview Volunteer management refers
                  to the systematic process of recruiting, training, organizing,
                  and supporting individuals
                </p>
                <div className="flex items-center gap-5">
                  <div>
                    <img
                      className="w-20 h-20 rounded-full object-cover"
                      src={img2}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Md Anisul Haque</h2>
                    <p>Communication Office RFL Bangladesh</p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-6 lg:mb-0 lg:w-4/12 bg-white p-4 rounded-xl">
                <p className="mb-4">
                  Volunteer Management: An Overview Volunteer management refers
                  to the systematic process of recruiting, training, organizing,
                  and supporting individuals
                </p>
                <div className="flex items-center gap-5">
                  <div>
                    <img
                      className="w-20 h-20 rounded-full object-cover"
                      src={img4}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Md Mamunur Rasid</h2>
                    <p>Communication Office PRAN Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade direction="down">
            <div className="w-full mb-6 lg:mb-0 lg:w-4/12 mx-auto bg-white p-4 rounded-xl mt-6">
              <p className="mb-4">
                Volunteer Management: An Overview Volunteer management refers to
                the systematic process of recruiting, training, organizing, and
                supporting individuals
              </p>
              <div className="flex items-center gap-5">
                <div>
                  <img
                    className="w-20 h-20 rounded-full object-cover"
                    src={img1}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Abdur Mamunul Haque</h2>
                  <p>Communication Office UNICEF Bangladesh</p>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        {/* blogs section  */}
        <div className="my-16">
          <h3 className="text-3xl text-center text-white font-bold">Blogs</h3>
          <p className="mb-5 mt-1 text-white md:w-8/12 lg:w-5/12 mx-auto text-center px-4">
            Volunteer management builds a sustainable workforce through
            structured processes and engagement. Leveraging technology enhances
            impact while creating meaningful volunteer experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blog?.map((item) => (
              <Blogs key={item.id} item={item}></Blogs>
            ))}
          </div>
        </div>
        <div className="my12">
          <ContactSection></ContactSection>
        </div>
      </div>
    </div>
  );
};

export default  HomePage
