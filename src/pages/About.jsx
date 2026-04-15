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
                Professional Biography
              </Heading>
              <Paragraph margin="none">
                Today, I work as Lead Developer at Hewlett Packard Enterprise
                with a strong focus on accessibility, component architecture,
                and maintainable design systems. Across 7 years of frontend and
                UI/UX development, I have partnered with teams to ship React
                experiences that are performant, inclusive, and grounded in user
                needs.
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
                Current role: Lead Developer at Hewlett Packard Enterprise.
              </Text>
              <Text size="small">
                Experience: 7 years in frontend and UI/UX-focused development.
              </Text>
              <Text size="small">
                Hobbies: Spending time with my dog, yoga, camping, and
                scrapbooking.
              </Text>
            </Card>
          </Grid>
        )}
      </ResponsiveContext.Consumer>

      <Card background="white" pad="medium" gap="small" elevation="xsmall">
        <Heading level={3} margin="none">
          Mission & Values
        </Heading>
        <Paragraph margin={{ top: "small", bottom: "none" }}>
          Accessibility matters to me because technology should expand
          opportunity, not create barriers. My mission is to build digital
          experiences where people can participate fully, regardless of ability,
          device, or context.
        </Paragraph>
        <Paragraph margin={{ top: "small", bottom: "none" }}>
          I take a user-centered and inclusive approach to development by
          combining semantic engineering practices, clear interaction patterns,
          and iterative testing. What drives my work is seeing people succeed
          because the interface supports them instead of getting in their way.
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
                <Text weight="bold">Accessibility Expertise</Text>
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
          Work Philosophy
        </Heading>
        <Paragraph margin={{ top: "small", bottom: "none" }}>
          I approach problem-solving by first understanding user intent,
          constraints, and edge cases, then designing small, testable
          improvements that can scale into robust systems.
        </Paragraph>
        <Paragraph margin={{ top: "small", bottom: "none" }}>
          Inclusive design is not an extra checklist item. It is a baseline
          quality requirement. I build for everyone, literally.
        </Paragraph>
      </Card>

      <Card background="white" pad="medium" gap="medium" elevation="xsmall">
        <Heading level={3} margin="none">
          Let&apos;s Build Something Accessible Together
        </Heading>
        <Paragraph margin={{ top: "none", bottom: "none" }}>
          Explore my project work to see this approach in practice, or reach out
          directly if you want to collaborate on inclusive, user-centered
          products.
        </Paragraph>
        <Box direction="row" wrap gap="small">
          <Button
            primary
            label="View Projects"
            onClick={() => navigate("/projects")}
          />
          <Button label="Contact Me" onClick={() => navigate("/contact")} />
        </Box>
      </Card>
    </Box>
  );
};

export default About;
