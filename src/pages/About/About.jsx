import Head from '../../head'
import Foot from '../../foot'
import Big from '../../big'
import ImageContain from '../../image'
import Team1 from '../../assets/team.png'
import Small from '../../small'


function About(){
    return(<div>
        <Head Home='/' About='/about' Service='/service' />
        

        
        <div  className="biggest">
            <Big head='About Us' cont='
Welcome to B Cube Software Solutions! As a forward-thinking software development company founded by Biruk Beshaneh,
 we’re passionate about creating transformative solutions for businesses across industries. Our mission is to empower
  our clients by leveraging cutting-edge technology.
  What sets us apart? 
  Our team of seasoned developers, led by Biruk, combines technical prowess with a customer-centric mindset. We don’t
   just write code; we craft solutions that drive real-world impact.”
'/>
            <ImageContain sorce={Team1}/>
        </div>

        
        <div className='our-story'>
        <h1>Our Story</h1>
        <p >B Cube Software Solutions was born in 2023 when Biruk decided to 
            merge his expertise with the vision of creating a customer-focused
            software company.In 2023, we launched our flagship enterprise application,
            revolutionizing how businesses manage customer relationships. Since then,
             under Biruk’s leadership, we’ve consistently delivered excellence
        </p>
        </div>


        <div className='culture small-contain'>
            <h1>Our Culture</h1>
            <div className='culture-cont'>
            <Small h='Collaboration:' constain='At B Cube, collaboration isn’t just a buzzword; it’s our DNA. 
        Our open-door policy encourages idea-sharing, and monthly hackathons fuel creativity' />
        <Small h='Innovation: ' constain='We’re not content with the status quo. Our team,
         inspired by Biruk’s vision, stays ahead of trends—whether it’s AI, blockchain, or IoT—to deliver
          future-proof solutions.”' />
        <Small h='Community Involvement:' constain='Beyond code, we’re active in our tech community. 
        We sponsor local meetups, mentor aspiring developers, and believe in giving back.' />
            </div>
        
        </div>

        








        <Foot Home='/' About='/about' Service='/service'  />
    </div>)
    
}



export default About