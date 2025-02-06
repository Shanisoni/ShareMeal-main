import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components"; // Import keyframes for animations
import emailjs from "@emailjs/browser"; // EmailJS for form handling
import "@fontsource/montserrat"; // Import Montserrat font

// Keyframes for blinking effect
const blinkAnimation = keyframes`
  0% {
    opacity: 1;
    color: white;
  }
  50% {
    opacity: 0.5;
    color: grey;
  }
  100% {
    opacity: 1;
    color: white;
  }
`;

// Keyframes for the success animation (entry animation)
const successAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  max-width: 1100px;
  margin-top: 90px;
  gap: 8rem;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 3rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;

  img {
    width: 100%;
    max-width: 450px;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 960px) {
    img {
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 250px;
    }
  }
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(
    180deg,
    rgba(189, 193, 194, 1),
    rgba(255, 0, 150, 1),
    rgba(0, 204, 255, 1)
  );
  background-size: 400% 400%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: moveGradient 5s ease infinite;

  @media (max-width: 960px) {
    font-size: 45px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }

  @keyframes moveGradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  font-family: "Montserrat", sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ContactForm = styled.form`
  width: 45%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 49px;
  gap: 18px;
  align-items: center; /* Center all form elements */

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  &:hover {
    border-color: green; /* Change border color to green on hover */
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  height: 100px;
  width: 360px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 6px 10px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  &:hover {
    border-color: green; /* Change border color to green on hover */
  }

  @media (max-width: 1906px) {
    font-size: 16px;
    width: 360px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    width: 320px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    width: 285px;
  }
`;

const ContactButton = styled.button`
  width: 50%; /* Set width to 50% or any value that fits your design */
  background: hsla(271, 100%, 50%, 1);
  padding: 10px 16px;
  margin-top: 10px;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(0.95);
    background-color: lightgreen;
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
  }
`;

// Centered success message styled component
const SuccessMessage = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 15px;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: white;
  animation: ${blinkAnimation} 2s linear infinite,
    ${successAnimation} 0.5s ease-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submit behavior
    console.log("Form submitted!");

    emailjs
      .sendForm(
        "service_n40qigl", // Service ID
        "template_wtl1zmb", // Template ID
        form.current, // Form reference
        "pMoNR7z4RCbDQ8WbA" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text); // Check the result object in the console
          setIsSuccess(true); // Set success state to true

          // Hide success message after 5 seconds
          setTimeout(() => {
            setIsSuccess(false);
          }, 5000);

          form.current.reset(); // Reset the form after successful send
        },
        (error) => {
          console.error(error); // Log the error object to the console
          alert(`An error occurred: ${error.text || "Please try again."}`);
        }
      );
  };

  return (
    <Container id="Contact">
      <Wrapper>
        {/* Left Section for Text and Image */}
        <LeftSide>
          <img
            src="https://res.cloudinary.com/dl7e8qndf/image/upload/v1734800488/image16_cofuwi.png"
            alt="Contact"
          />
          <Title>Contact Me</Title>
          <Desc>
            I'm actively looking for full-time roles in SDE,
            <br /> if you find my profile fit, <br /> please feel free to reach
            out.
          </Desc>
          <Desc>
            <span
              style={{
                color: "yellow",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Email id :
            </span>{" "}
            shanisoni7084@gmail.com
          </Desc>
        </LeftSide>

        {/* Right Section for Form */}
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>
            <span style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Email Me
            </span>
            <img
              src="https://res.cloudinary.com/dl7e8qndf/image/upload/v1734800486/image17_yu3bpu.png"
              alt="Email Icon"
              style={{
                width: "34px",
                height: "34px",
                backgroundColor: "blue",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
          </ContactTitle>

          {/* Form fields */}
          <ContactInput
            placeholder="Your Email"
            name="from_email"
            type="email"
            required
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Email pattern
          />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={4}
            required
          />
          <ContactButton type="submit">Send</ContactButton>

          {/* Success Message */}
          {isSuccess && (
            <SuccessMessage show={isSuccess}>
              Message Sent Successfully!
            </SuccessMessage>
          )}
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
