import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa";
import {useStaticQuery,graphql} from 'gatsby';

function Testimonials() {
  const data = useStaticQuery(graphql`
    query  {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["1", "2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <TestimonialContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What are people saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline 
            css={`
            color: #3fffa8;
            font-size: 2rem;
            margin-bottom: 1rem;
            `} />
            <h3>Sean Micheals</h3>
            <p>
              "The greatest exprience of my life! It was so much fun exploring
              the mountains and they made it super easy to book my trip and
              accomodation"
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb css={`
            color: #f9b19b;
            font-size: 2rem;
            margin-bottom: 1rem;
            `} />
            <h3>Sarsh WIlliams</h3>
            <p>
              "I was so easy to setup my trip! They answered all my questions
              right away and gave me the best price out of all the companies I
              researched"
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
            {data.allFile.edges.map((image,index) => (
                <Images key={index} fluid={image.node.childImageSharp.fluid} />
            ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialContainer>
  )
}

export default Testimonials

const TestimonialContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw-1300px) / 2);
  height: 100%;
`

const TopLine = styled.div`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const Description = styled.div`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  p {
    color: #3b3b3b;
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`
