import React , {useState }from "react"
function Autobiography () {
return (
    <>
<section className="my-services" id="services">
        <h2 className="section__title section__title--services">Autobiography</h2>
        <div className="services">
            <div className="service">
                <h3>Profile</h3>
                <p>A Determined leader with more than five years of experience in addressing a wide range of difficult to complex situations.</p>
            </div>
            <div className="service">
                <h3>USMC</h3>
                <h4>Forward Observer @ 3D ANGLICO 2ND BDE</h4>
                <p>An observer operating with front line troops and trained to adjust ground or naval gunfire and pass back battlefield information. In the absence of a forward air controller, the observer may control close air support strikes. Also called FO</p>
            </div>

            <div className="service">
                <h3>UCLA Extension</h3>
                <h4>Student @
                    Full-Stack Developer Course
                </h4>
                <p>Currently enrolled at UCLA Extension Full Stack Flex Web Coding Bootcamp to further my knowledge and achieve capabilities with Javascript, HTML, CSS jQuery Bootstrap, Node.js MySQL MongoDB Express.js React.js.</p>
            </div>
        </div>

        <a href="#work" className="btn">View Projects</a>
    </section>
</>

)}

export default Autobiography;