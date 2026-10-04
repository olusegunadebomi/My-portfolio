import {
  // LuDownload,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuSend,
} from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
// import { SiHashnode } from "react-icons/si";

function Contact() {
  return (
    <section
      id="contact"
      className="
        border-b
        border-border
        bg-background
        text-foreground
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          py-10
          sm:px-8
          md:py-14
          lg:px-10
          lg:py-16
        "
      >
        <div
          className="
            overflow-hidden
            rounded-lg
            border
            border-border
          
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.1fr_1fr_0.9fr]
            "
          >
            {/* =========================================
                LEFT — CONTACT INTRO
            ========================================= */}
            <div
              className="
                border-b
                border-border
                p-6
                sm:p-8
                lg:border-b-0
                lg:border-r
              "
            >
              {/* Section label */}
              <p className="font-mono text-sm text-primary">/contact</p>

              {/* Heading */}
              <h2
                className="
                  mt-2
                  max-w-sm
                  font-mono
                  text-2xl
                  font-bold
                  leading-tight
                  text-foreground
                  sm:text-3xl
                "
              >
                Let&apos;s build something
                <br />
                great together.
              </h2>

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-md
                  font-mono
                  text-xs
                  leading-5
                  text-muted
                  sm:text-sm
                  sm:leading-6
                "
              >
                Have a project in mind, a collaboration or just want to say
                hello? I&apos;m always open to new opportunities.
              </p>
            </div>

            {/* =========================================
                MIDDLE — CONTACT DETAILS
            ========================================= */}
            <div
              className="
             
                p-6
                sm:p-8
              
              "
            >
              <div className="space-y-5">
                {/* Email */}
                <a
                  href="mailto:adebomiolusegun@gmail.com"
                  className="
                    group
                    flex
                    items-start
                    gap-4
                  "
                >
                  <div
                    className="
                      mt-0.5
                      flex
                      size-8
                      shrink-0
                      items-center
                      justify-center
                      text-foreground
                    "
                  >
                    <LuMail className="size-5" />
                  </div>

                  <div>
                    <p
                      className="
                        font-mono
                        text-xs
                        font-semibold
                        text-foreground
                      "
                    >
                      Email
                    </p>

                    <p
                      className="
                        mt-0.5
                        font-mono
                        text-[11px]
                        text-muted
                        transition-colors
                        group-hover:text-primary
                        sm:text-xs
                      "
                    >
                      olusegunadebomi1@gmail.com
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      mt-0.5
                      flex
                      size-8
                      shrink-0
                      items-center
                      justify-center
                      text-foreground
                    "
                  >
                    <LuMapPin className="size-5" />
                  </div>

                  <div>
                    <p
                      className="
                        font-mono
                        text-xs
                        font-semibold
                        text-foreground
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        mt-0.5
                        font-mono
                        text-[11px]
                        text-muted
                        sm:text-xs
                      "
                    >
                      Awka, Nigeria
                    </p>
                  </div>
                </div>

                {/* Send Message */}
                <a
                  href="mailto:olusegunadebomi1.com"
                  className="
                    mt-2
                    inline-flex
                    items-center
                    gap-2
                    rounded-md
                    border
                    border-primary
                    px-4
                    py-2.5
                    font-mono
                    text-xs
                    font-semibold
                    text-primary
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-primary/10
                  "
                >
                  <LuSend className="size-3.5" />
                  Send Message
                  <span className="text-base leading-none">→</span>
                </a>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p
                className="
                  font-mono
                  text-sm
                  font-semibold
                  text-foreground
                "
              >
                Find me on
              </p>

              <div className="mt-5 flex items-center gap-5">
                <a
                  href="https://github.com/adebomiolusegun"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    text-foreground
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:text-primary
                  "
                >
                  <LuGithub className="size-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/olusegun-adebomi-7aabb3224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    text-foreground
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:text-primary
                  "
                >
                  <LuLinkedin className="size-5" />
                </a>

                {/* X */}
                <a
                  href="https://x.com/Oluwa_legacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="
                    text-foreground
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:text-primary
                  "
                >
                  <FaXTwitter className="size-5" />
                </a>

                {/* Hashnode */}
                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hashnode"
                  className="
                    text-foreground
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:text-primary
                  "
                >
                  <SiHashnode className="size-5" />
                </a> */}
              </div>

              {/* CV */}
              {/* <a
                href="/cv.pdf"
                download
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  font-mono
                  text-xs
                  text-muted
                  transition-colors
                  hover:text-primary
                "
              >
                <LuDownload className="size-4" />

                <span>Download CV</span>

                <span className="text-primary">↓</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
