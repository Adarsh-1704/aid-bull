import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://uploads-ssl.webflow.com/64abb91e69c1429ab62638be/64ba7cfb4b0c2ac2a47329aa_Blog-18---How-to-maintain-Patient-Record_.svg);
  width: 100%;
  height: 70vh;
  background-position: left 0px bottom -100px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 50px;
  & > h5 {
    margin-top: 30px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h5">
          Tokenizing healthcare by leveraging the power of Defi and blockchain.
          Empowering patients by enabling them to access, have ownership of and
          monetize their clinical records, while also offering a Defi protocol
          for covering medical-based financial obligations.
        </Typography>
        <Text variant="h5">
          AidBull seeks to address the modern-day challenges faced by the health
          care industry. It leverages innovative technologies such as
          Blockchain, Defi, Artificial Intelligence and Smart Contracts. Medical
          Veda decentralizes the access to and ownership of medical records
          while presenting patients with a scalable, eminently compatible,
          secure and interoperable platform. In addition, it allows patients and
          medical practitioners to get seamless lending solution for their
          medical-related financial needs.
        </Text>
        <br />
        <Typography variant="h3">Our Vision</Typography>
        <Text variant="h5">
          We strive to create an ecosystem where patients are the true owners of
          their clinical record and can access this information at anytime,
          anywhere. We envision to contribute to the world’s health and medical
          industry by creating an ecosystem that would make the patient’s health
          data record process distributed through a decentralized blockchain so
          that anyone can get access to their medical record without having to
          go through the bureaucratic hassles.
        </Text>
        <br />
        <Typography variant="h3">Our Mission</Typography>
        <Text variant="h5">
          AidBull aims to be the world’s leading open-source health ecosystem
          for enabling decentralized ownership of patient data while enabling
          all industry players to get permissioned access to this data in a
          seamless, secure and instant manner.{" "}
        </Text>
        <Text variant="h5">
          Need something built or simply want to have chat? 
          <br />
          <br />
          Go to Contact
          <br />
          {/* Reach out to me on
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://www.instagram.com/codeforinterview/"
              color="inherit"
              target="_blank"
            >
              <Instagram />
            </Link>
          </Box>
          or send me an Email
          <Link
            href="mailto:codeforinterview@gmail.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email />
          </Link>
          . */}
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
