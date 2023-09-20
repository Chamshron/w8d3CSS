import styled from "styled-components"


const Wrapper = styled.section`
  background-color: #26577c;
`
const SubHeader = styled.h3`
font-size: 1.5em;
color: white;
background-color:#26577c;
margin:0;
padding: 1em;
`

const Paragraph = styled.p`
font-size: 1em;
color: white;
background-color:#26577c;
margin:0;
padding: 1em;
`

const LaunchDetails = ({launch}) => {

  if (!launch){
    return <p>Loading...</p>
  }

  return (
    <Wrapper>
      <SubHeader>{launch.mission_name}</SubHeader>
      <Paragraph>Flight Number: {launch.flight_number}</Paragraph>
      <Paragraph>Year: {launch.launch_year}</Paragraph>
      <Paragraph>Rocket: {launch.rocket.rocket_name}</Paragraph>
      <Paragraph>Details of launch: {launch.details}</Paragraph>
    </Wrapper>
  )

}

export default LaunchDetails;