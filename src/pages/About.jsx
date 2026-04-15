import React, { useEffect, useRef } from "react";
import {
  Anchor,
  Box,
  Button,
  Card,
  Grid,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext,
  Tag,
  Text,
} from "grommet";
import { useNavigate, useOutletContext } from "react-router-dom";
import { FormPrevious, FormNext } from "grommet-icons";

const frontendSkills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Component Architecture",
  "Design Systems",
];

const accessibilitySkills = [
  "WCAG 2.2",
  "ARIA",
  "Keyboard Navigation",
  "Screen Reader Testing (JAWS, NVDA, VoiceOver)",
  "Semantic HTML",
  "Accessible Interaction Patterns",
];

const designSkills = [
  "User-Centered Design",
  "Information Architecture",
  "Interaction Design",
  "Design QA",
  "Usability Testing",
  "Content-First UX",
];

const strengths = [
  {
    name: "Input",
    description:
      "I'm naturally curious and love gathering information. I ask the right questions to understand problems deeply before solving them.",
    link: "https://www.gallup.com/cliftonstrengths/en/252278/input-theme.aspx",
  },
  {
    name: "Empathy",
    description:
      "I genuinely understand what others are experiencing. This helps me build products where people feel understood and supported.",
    link: "https://www.gallup.com/cliftonstrengths/en/252236/empathy-theme.aspx",
  },
  {
    name: "Achiever",
    description:
      "I'm driven to accomplish meaningful work and see it through. Shipping quality code that actually helps people is what motivates me.",
    link: "https://www.gallup.com/cliftonstrengths/en/252235/achiever-theme.aspx",
  },
  {
    name: "Relator",
    description:
      "I build strong relationships and show up for people. Whether mentoring engineers or coaching founders, connection matters to me.",
    link: "https://www.gallup.com/cliftonstrengths/en/252242/relator-theme.aspx",
  },
  {
    name: "Intellection",
    description:
      "I think deeply about problems and how systems work together. I enjoy the intellectual challenge of design systems and patterns.",
    link: "https://www.gallup.com/cliftonstrengths/en/252239/intellection-theme.aspx",
  },
];

const volunteerItems = [
  {
    title: "HPE CodeWars Volunteer",
    image: "/HPE_CodeWars.png",
    imageAlt: "HPE CodeWars event graphic",
    description:
      "Mentor and event volunteer supporting students through hands-on programming challenges and collaborative problem-solving.",
    link: "https://codewars.hpe.com/",
  },
  {
    title: "Robotics Mentor (Git Coaching)",
    image: "/Compass_Community.png",
    imageAlt: "Compass Community school logo",
    description:
      "Coach high school robotics students on practical Git workflows so they can collaborate confidently and manage code changes.",
  },
  {
    title: "HPE Pro Bono Volunteer, LabStart",
    image: "/LabStart.png",
    imageAlt: "LabStart logo",
    description:
      "Provide pitch and presentation coaching for climate tech founders to strengthen storytelling and investor-readiness.",
    link: "https://www.labstart.co/",
  },
  {
    title: "CSU Outreach Volunteer",
    image: "/CSU.png",
    imageAlt: "Colorado State University logo",
    description:
      "Support outreach activities that introduce students to computer science pathways and inclusive technology careers.",
  },
  {
    title: "Harmony Tech Camp",
    image: "/HarmonyTechCamp.png",
    imageAlt: "Harmony Tech Camp logo",
    description:
      "Volunteer with youth-focused tech programming that is designed to introduce 6th-grade girls to STEM careers through hands-on activities, labs, and mentorship.",
    link: "https://www.harmonytechcamp.org/",
  },
];

const educationItems = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Colorado State University",
    image: "/CSU.png",
    imageAlt: "Colorado State University logo",
    description:
      "Earned a B.S. in Computer Science from Colorado State University, building a strong foundation in software engineering, algorithms, data structures, and systems design.",
  },
  {
    title: "Utility Patent",
    institution: "U.S. Patent No. 12,353,694 | Issued Jul 8, 2025",
    image: "/HPE_Patent.png",
    imageAlt: "HPE Patent badge",
    description:
      "Named inventor on a granted U.S. utility patent for a technical invention developed at Hewlett Packard Enterprise.",
    link: "https://ppubs.uspto.gov/api/pdf/downloadPdf/12353694?requestToken=eyJzdWIiOiJiMDFkMzBlMS1lNDc3LTRhZjAtOWY3Zi03ODIxMDE5YmJhOGMiLCJ2ZXIiOiI3ZDBlYmQxOC1lNWE5LTQzYWEtOTIxMy1jMWE3ZGFhY2MwYTgiLCJleHAiOjB9",
    linkLabel: "View Patent",
    credly: "https://www.credly.com/users/jessicarosenquist",
  },
  {
    title: "HPE Leadership Development Program",
    institution: "Hewlett Packard Enterprise | May 2024",
    image: "/LDP.jpg",
    imageAlt: "HPE Leadership Development Program logo",
    description:
      "Completed HPE's selective leadership development program, building skills in strategic communication, cross-functional collaboration, and organizational influence.",
  },
  {
    title: "Practitioner of Human Centered Design",
    institution: "Luma Institute | 2022",
    image: "/Luma.png",
    imageAlt: "Luma Institute logo",
    description:
      "Earned practitioner-level certification in human-centered design, with training in empathy-based research, ideation, and collaborative problem-solving methods.",
    link: "https://www.luma-institute.com/our-offerings/training/practitioner-certification-program/",
    linkLabel: "Learn more",
  },
  {
    title: "Crucial Conversations for Mastering Dialog",
    institution: "Crucial Learning | Jan 2024",
    image: "/CrucialConversations.jpg",
    imageAlt: "Crucial Conversations certification logo",
    description:
      "Certified in high-stakes communication frameworks for navigating difficult conversations with clarity, mutual respect, and constructive outcomes.",
    link: "https://cruciallearning.com/courses/crucial-conversations-for-dialogue/",
    linkLabel: "Learn more",
  },
  {
    title: "Design Patent (Pending)",
    institution: "U.S. Application 29/870,542 | Filed Jan 30, 2023",
    image: "/HPE_Patent.png",
    imageAlt: "HPE Patent badge",
    description:
      "Named inventor on a U.S. design patent application for an interface design developed at Hewlett Packard Enterprise.",
    link: "https://ppubs.uspto.gov/api/pdf/downloadPdf/20250036269?requestToken=eyJzdWIiOiJiMDFkMzBlMS1lNDc3LTRhZjAtOWY3Zi03ODIxMDE5YmJhOGMiLCJ2ZXIiOiI3ZDBlYmQxOC1lNWE5LTQzYWEtOTIxMy1jMWE3ZGFhY2MwYTgiLCJleHAiOjB9",
    linkLabel: "View Patent",
    credly: "https://www.credly.com/users/jessicarosenquist",
  },
  {
    title: "Generative AI Leader",
    institution: "Google | April 2026",
    image: "/GenAICert.png",
    imageAlt: "Google Generative AI Leader Certification badge",
    description:
      "Recognized as a Generative AI Leader following Google's certification program covering AI strategy, responsible AI, and practical implementation of generative AI technologies.",
    link: "https://www.credly.com/users/jessicarosenquist",
    linkLabel: "View Credential",
  },
];

const About = () => {
  const navigate = useNavigate();
  const outlet = useOutletContext?.() || {};
  const eduScrollRef = useRef(null);
  const { setTitle, setSubtitle, setCTA } = outlet;

  useEffect(() => {
    if (setTitle) setTitle("About");
    if (setSubtitle)
      setSubtitle("Accessibility-first UI/UX development with purpose");
    if (setCTA) setCTA(undefined);

    return () => {
      if (setTitle) setTitle("Jessica Rosenquist");
      if (setSubtitle)
        setSubtitle("Frontend UI/UX Developer & Accessibility Advocate");
      if (setCTA) setCTA("Explore Projects");
    };
  }, [setTitle, setSubtitle, setCTA]);

  return (
    <Box gap="large" pad={{ vertical: "large", bottom: "xlarge" }}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            columns={size === "small" ? ["auto"] : ["2fr", "1fr"]}
            gap="large"
          >
            <Box gap="medium">
              <Heading level={2} margin="none">
                A software engineer passionate about accessibility.
              </Heading>
              <Paragraph margin="none">
                I'm a Lead Developer at Hewlett Packard Enterprise and core
                maintainer of Grommet, a React component library with 30,000+
                weekly npm downloads. My focus: building software that actually
                works for everyone.
              </Paragraph>
              <Paragraph margin={{ top: "small", bottom: "none" }}>
                Across 7+ years of frontend development, I've shipped
                experiences that work smoothly whether you're using a keyboard,
                a mouse, a screen reader, or just about any device. I've earned
                two patents for designing interfaces that work reliably for
                people with different abilities—and I lead teams and communities
                around the principle that accessible design is just good design.
              </Paragraph>
            </Box>

            <Card
              background="white"
              pad="medium"
              gap="small"
              elevation="xsmall"
            >
              <Box align="center" gap="small" margin={{ bottom: "small" }}>
                <Box
                  round="full"
                  overflow="hidden"
                  width="small"
                  height="small"
                  background="light-2"
                >
                  <Image
                    src="/LinkedinPic.jpg"
                    alt="Jessica Rosenquist headshot"
                    fit="cover"
                  />
                </Box>
              </Box>
              <Text weight="bold">Quick Facts</Text>
              <Text size="small">
                <strong>Role:</strong> Lead Developer at HPE; Core Maintainer of
                Grommet (30K+ weekly npm downloads).
              </Text>
              <Text size="small">
                <strong>Values:</strong> learning and continued growth; empathy
                and connection; software that works for everyone.
              </Text>
              <Text size="small">
                <strong>Proof:</strong> 2 patents in accessible UI design;
                mentoring and community work across HPE, schools, and
                nonprofits.
              </Text>
              <Text size="small">
                <strong>When not coding:</strong> spending time with my dog,
                yoga, camping, or scrapbooking.
              </Text>
              <Box gap="xsmall" margin={{ top: "small" }}>
                <Text size="small" weight="bold">
                  Clifton StrengthFinder assessment results:
                </Text>
                <Box direction="row" wrap gap="xsmall">
                  {strengths.map((strength) => (
                    <Anchor
                      key={strength.name}
                      href={strength.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Tag size="small" name={strength.name} />
                    </Anchor>
                  ))}
                </Box>
              </Box>
            </Card>
          </Grid>
        )}
      </ResponsiveContext.Consumer>

      <Card background="white" pad="medium" gap="small" elevation="xsmall">
        <Heading level={3} margin="none">
          Why Accessibility Matters to Me
        </Heading>
        <Paragraph margin={{ top: "small", bottom: "none" }}>
          <strong>What is accessibility?</strong> It's making sure software
          works for as many people as possible. This includes people who are
          blind and use screen readers, people with motor challenges who
          navigate with keyboards only, people with color blindness, people on
          slow internet connections, and many others. When accessibility is
          built in from the start, it makes software better for{" "}
          <em>everyone</em>—clearer navigation, faster load times, easier to use
          even when you're distracted or in a loud environment.
        </Paragraph>
        <Paragraph margin={{ top: "small", bottom: "none" }}>
          <strong>Why it matters to me:</strong> I believe technology should
          expand what people can do, not put up walls. When a website doesn't
          work with a keyboard, or when text is too small, or when videos have
          no captions, real people are locked out. I've earned two patents by
          designing interfaces that solve these problems. Personally, I'm driven
          by empathy—I see the person behind every feature request. When I ship
          something, I'm solving it for a real person, not checking a box.
        </Paragraph>
      </Card>

      <Box gap="small">
        <Heading level={3} margin="none">
          Education & Certifications
        </Heading>
        <Text margin={{ top: "small", bottom: "none" }}>
          A foundation in computer science, strengthened by leadership training,
          design certification, patents, and recognized innovation.
        </Text>
        <Text margin={{ top: "none", bottom: "none" }}>
          <Text size="small">
            Some credentials were issued under my maiden name, Filben, and can
            be verified upon request.
          </Text>
        </Text>

        <Box
          direction="row"
          align="center"
          pad={{ bottom: "medium" }}
          gap="small"
        >
          <Button
            icon={<FormPrevious />}
            onClick={() => {
              const el = eduScrollRef.current;
              if (el) el.scrollBy({ left: -300, behavior: "smooth" });
            }}
            a11yTitle="Scroll left"
            plain
          />
          <Box
            ref={eduScrollRef}
            direction="row"
            gap="medium"
            flex
            style={{ overflowX: "auto", scrollBehavior: "smooth" }}
            pad={{ vertical: "small" }}
          >
            {educationItems.map((item) => (
              <Card
                key={item.title}
                background="white"
                pad="small"
                gap="small"
                round="xsmall"
                flex={false}
                width={{ min: "240px", max: "240px" }}
              >
                <Box
                  height="xsmall"
                  round="xsmall"
                  overflow="hidden"
                  background="#ffffff"
                  pad="xsmall"
                >
                  <Image src={item.image} alt={item.imageAlt} fit="contain" />
                </Box>
                <Text weight="bold" size="small">
                  {item.title}
                </Text>
                <Text size="small" color="dark-2">
                  {item.institution}
                </Text>
                <Text size="small">{item.description}</Text>
                <Box direction="row" gap="small" wrap>
                  {item.link && (
                    <Anchor
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      label={item.linkLabel || "Learn more"}
                    />
                  )}
                  {item.credly && (
                    <Anchor
                      href={item.credly}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      label="View on Credly"
                    />
                  )}
                </Box>
              </Card>
            ))}
          </Box>
          <Button
            icon={<FormNext />}
            onClick={() => {
              const el = eduScrollRef.current;
              if (el) el.scrollBy({ left: 300, behavior: "smooth" });
            }}
            a11yTitle="Scroll right"
            plain
          />
        </Box>
      </Box>

      <Box gap="medium">
        <Heading level={3} margin="none">
          Key Specializations
        </Heading>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Grid
              columns={size === "small" ? ["auto"] : ["auto", "auto", "auto"]}
              gap="medium"
            >
              <Card
                background="white"
                pad="medium"
                gap="small"
                elevation="xsmall"
              >
                <Text weight="bold">Frontend Technologies</Text>
                <Box direction="row" wrap gap="xsmall">
                  {frontendSkills.map((skill) => (
                    <Tag key={skill} name={skill} />
                  ))}
                </Box>
              </Card>

              <Card
                background="white"
                pad="medium"
                gap="small"
                elevation="xsmall"
              >
                <Text weight="bold">Accessibility Skills</Text>
                <Box direction="row" wrap gap="xsmall">
                  {accessibilitySkills.map((skill) => (
                    <Tag key={skill} name={skill} />
                  ))}
                </Box>
              </Card>

              <Card
                background="white"
                pad="medium"
                gap="small"
                elevation="xsmall"
              >
                <Text weight="bold">UI/UX Philosophy</Text>
                <Box direction="row" wrap gap="xsmall">
                  {designSkills.map((skill) => (
                    <Tag key={skill} name={skill} />
                  ))}
                </Box>
              </Card>
            </Grid>
          )}
        </ResponsiveContext.Consumer>
      </Box>

      <Card background="opaqueRust" pad="medium" gap="small" elevation="xsmall">
        <Heading level={3} margin="none">
          Volunteer Work
        </Heading>
        <Paragraph margin={{ top: "small", bottom: "none" }}>
          I actively contribute to community and education initiatives through
          mentoring, coaching, and outreach.
        </Paragraph>
        <Grid
          // columns={size === "small" ? ["auto"] : ["auto", "auto"]}
          columns={{ count: "fit", size: "small" }}
          gap="medium"
        >
          {volunteerItems.map((item) => (
            <Card
              key={item.title}
              background="white"
              // border={{ color: "brown" }}
              pad="small"
              gap="small"
              round="xsmall"
            >
              <Box
                height="xsmall"
                round="xsmall"
                overflow="hidden"
                background="white"
              >
                <Image src={item.image} alt={item.imageAlt} fit="cover" />
              </Box>
              <Text weight="bold" size="small">
                {item.title}
              </Text>
              <Text size="small">{item.description}</Text>
              {item.link ? (
                <Anchor
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  label="Learn more"
                />
              ) : // <Button
              //   href={item.link}
              //   target="_blank"
              //   rel="noopener noreferrer"
              //   size="small"
              //   label="Learn more"
              //   primary
              //   style={{ textDecoration: "none" }}
              // />
              null}
            </Card>
          ))}
        </Grid>
        <Text size="small">
          Impact: stronger technical confidence, clearer communication, and
          better real-world readiness for students and founders.
        </Text>
      </Card>

      <Card background="white" pad="medium" gap="small" elevation="xsmall">
        <Heading level={3} margin="none">
          What I Bring to Teams
        </Heading>
        <Paragraph margin={{ top: "small", bottom: "none" }}>
          <strong>Leadership:</strong> I lead by example—bringing accessibility,
          clean, and thoughtful approaches into architecture, code reviews, and
          mentoring from day one.
        </Paragraph>
        <Paragraph margin={{ top: "small", bottom: "none" }}>
          <strong>UI/UX architecture:</strong> I design scalable, maintainable
          component systems that balance developer experience with user
          outcomes.
        </Paragraph>
        <Paragraph margin={{ top: "small", bottom: "none" }}>
          <strong>Mentoring and growth:</strong> I invest in people—whether
          coaching students on Git, helping open source contributors with their
          code, mentoring engineers on accessibility, or helping founders refine
          their pitch.
        </Paragraph>
        <Paragraph margin={{ top: "small", bottom: "none" }}>
          <strong>Performance and reliability:</strong> I care about how systems
          actually behave. Stability, usability, and quality are never
          trade-offs.
        </Paragraph>
      </Card>

      <Card background="white" pad="medium" gap="medium" elevation="xsmall">
        <Heading level={3} margin="none">
          Let&apos;s Connect
        </Heading>
        <Paragraph margin={{ top: "none", bottom: "none" }}>
          I'd love to hear about opportunities to lead accessible product work,
          mentor teams, or collaborate on challenging UI/UX problems. Whether
          you're exploring roles, building open source communities, or working
          on inclusive tech initiatives—let's talk.
        </Paragraph>
        <Box direction="row" wrap gap="small">
          <Button
            primary
            label="Get In Touch"
            onClick={() => navigate("/contact")}
          />
          <Button
            label="View My Projects"
            onClick={() => navigate("/projects")}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default About;
