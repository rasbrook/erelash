import Head from '../../head'
import ServContain from './servcontain'
import Foot from '../../foot'
import Custom from '../../assets/Custom.png'
import inter from '../../assets/Integration.png'
import cloud from '../../assets/cloud-services.png'
import secure from '../../assets/Security.png'
import auto from '../../assets/auto.png'
import mobile from '../../assets/mobile.png'
import legacy from '../../assets/legacy.png'
import analytics from '../../assets/analytics.png'
import ui1 from '../../assets/ui1.png'
import mantain from '../../assets/mantain.png'




function Service(){
    return(<div>
        <Head Home='/' About='/about' Service='/service' />
        <h1 className='provide'>Service We Provide</h1>
        <div className='service'>
        <ServContain head="Custom Development" sorce={Custom} imgdis="Custom Development" containt='
         create custom enterprise software solutions tailored to a client’s specific requirements. These solutions
          may include applications for managing inventory, supply chain, financials, or other business processes.' />


        <ServContain head="Integration Services" sorce={inter} imgdis="Integration Services" containt='
        integrate existing enterprise software with other systems, ensuring seamless data flow and communication across 
        different departments. Integration helps improve efficiency and reduces manual data entry.' />


        <ServContain head="Cloud Solutions" sorce={cloud} imgdis="Cloud Solutions" containt='Developing cloud-based
         enterprise softwareallows organizations to access applications from anywhere, collaborate remotely, and 
         scale resources as needed.We build, deploy, and maintain cloud-based solutions.' />


        <ServContain head="Security Enhancements" sorce={secure} imgdis="Security Enhancements" containt='enhance security by
         developing software that protects sensitive data, implements access controls, and complies with industry standards
          (such as GDPR or HIPAA).' />


          <ServContain head="Automation and AI" sorce={auto} imgdis="Automation and AI" containt=' Leveraging automation and
           artificial intelligence (AI), We create solutions that automate repetitive tasks, analyze data,and provide insights 
           for better decision-making.' />


          <ServContain head="Mobile Apps" sorce={mobile} imgdis="Mobile Apps" containt='Developing mobile apps for enterprise use
           allows employees to access critical information on their smartphones or tablets. These apps can streamline processes, 
           improve communication, and enhance productivity.' />


          <ServContain head="Legacy System Modernization" sorce={legacy} imgdis="Legacy System Modernization" containt='we help organizations
           update outdated legacy systems, ensuring compatibility with modern technologies and improving overall performance.' />


          <ServContain head="Analytics and Reporting" sorce={analytics} imgdis="Analytics and Reporting" containt='Building robust analytics and
           reporting tools enables organizations to track performance metrics, identify trends, and make data-driven decisions.' />


          <ServContain head="User Experience (UX) Design" sorce={ui1} imgdis="User Experience (UX) Design" containt='Focusing on user-friendly
           interfaces ensures that enterprise software is intuitive and efficient for end-users. UX design plays a crucial role in adoption and 
           productivity.' />


          <ServContain head="Maintenance and Support" sorce={mantain} imgdis="Maintenance and Support" containt='Ongoing maintenance, bug fixes, and 
          technical support are essential for keeping enterprise software running smoothly. We can provide these services.' />

        </div>
        


<Foot Home='/' About='/about' Service='/service' />


    </div>)
}




export default Service