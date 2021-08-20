import React from 'react'
import img from '../img/html.png'
import css from '../img/css.png'
import java from '../img/java.jpg'


export default function Main() {
    return (
        <div>
            <div className="main bg-light">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-4">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-md-8 mt-4">
                        <p>
                            The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.
                            It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.
                            Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages.
                            HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                        </p>
                        <button className="btn-btn-primary">
                            Check More Details
                        </button>
                    </div>
                </div>
            </div>
            <div className="container second ">
                <div className="row mt-4">
                    <div className="col-md-4">
                    <p>CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] 
                            This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics,
                             enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file which reduces complexity and repetition in the structural content as well as enabling
                              the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.
                        </p>
                        <button className="btn-btn-primary">
                            Check More Details
                        </button>
                    </div>
                    <div className="col-md-8 mt-4">
                       <img src={css} alt="" />
                        
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-4">
                        <img src={java} alt="" />
                    </div>
                    <div className="col-md-8 mt-4">
                        <p>
                            1995: The Birth of JavaScript
                            Back in May 1995, the internet was becoming popular. The web back then was just static pages that were often text-heavy and ugly 😌.

                            the best ones had images floated to the left or right. Not exciting when you compare it to the web today 🤔

                            The Web needed to be more dynamic. Animations, interactions, and other forms of small automation needed to be the future of the web. To achieve that future the web needed a scripting programming language that ran in the browser.

                            Brendan Eich a programmer at Netscape was given the job to make this possible and in just ten days he created the JavaScript programming language (originally called Mocha during its development and then changed to LiveScript )

                            On December 4, 1995, the internet saw the first release of the JavaScript programming language
                        </p>
                        <button className="btn-btn-primary">
                            Check More Details
                        </button>
                    </div>
                </div>
            </div>
            </div>

            <footer class="page footer bg-dark mt-4 ">
            <div className="container text-white">
              <h2>Copyright Content</h2>
              <a href="https://reactjs.org/tutorial/tutorial.html">MDBootstrap.com</a>
             
          </div>
            </footer>
         
        </div>










    )
}
