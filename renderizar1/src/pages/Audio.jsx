import '../styles/audio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mdn from '../icons/Mdn.js';
import Slider from '../sliders/Slider';

function Audio(){
  return (
    <div className="App">
      <body>
        <div className="container-main">
          <header className="header">
            <div className="logo">
              <Mdn/>
            </div>

            <div className="menu-nav">
              <nav>
                <ul className="nav-links">
                  <li><a href='prueba.html'>References</a>
                    <ul className="submenus">
                      <li><a href='prueba.html'>HTML</a></li>
                      <li><a href='prueba.html'>CSS</a></li>
                      <li><a href='prueba.html'>JavaScript</a></li>
                      <li><a href='prueba.html'>HTTP</a></li>
                      <li><a href='prueba.html'>WebApls</a></li>
                      <li><a href='prueba.html'>Web Extensions</a></li>
                      <li><a href='prueba.html'>Web Tecnology</a></li>
                    </ul>
                  </li>
                  <li><a href='prueba.html'>Guides</a>
                    <ul className="submenus">
                      <li><a href='prueba.html'>MDN learning Area</a></li>
                      <li><a href='prueba.html'>HTML</a></li>
                      <li><a href='prueba.html'>CSS</a></li>
                      <li><a href='prueba.html'>HTTP</a></li>
                      <li><a href='prueba.html'>JavaScript</a></li>
                      <li><a href='prueba.html'>Accessibility</a></li>
                    </ul>
                  </li>
                  <li><a href='prueba.html'>Plus</a>
                    <ul className="submenus">
                      <li><a href='prueba.html'>Overview</a></li>
                      <li><a href='prueba.html'>Updates</a></li>
                      <li><a href='prueba.html'>Documentation</a></li>
                      <li><a href='prueba.html'>FAQ</a></li>
                    </ul>                    
                  </li>
                  <li><a href='prueba.html'>Blog</a></li>
                  <li><a href='prueba.html'>Log in</a></li>
                  <a href='prueba.html' className="btn"><button>Get MDN Plus</button></a>   
                </ul>   
              </nav>
            </div>
          </header>
         
          <div className="container">
            <nav className="container-nav">
              <ol>
                <li><a href='prueba.html'>Tecnologia para desarroladores web/</a></li>
                <li><a href='prueba.html'>CSS/</a></li>
                <li><a href='prueba.html'>CSS Grid Layout </a></li>
              </ol>       
            </nav>
          </div>
        </div>

        <div class="note">
          <p>
            <a href="index.html">This page was translated from English by the community. Learn more and join the MDN Web Docs community.</a>   
          </p> 
        </div>
        
        <aside>
          <div className='box_contenido_izq'>
            <p className="inicio"><a href="/">Inicio</a></p>      
            <p className="audio"><a href="Audio">Audio</a></p>
            <p className="Nosotros"><a href="Nosotros">Nosotros</a></p>
          </div>
        </aside>
  
        <div className="main">
          <div className="contenido">
            <section className="section-1">
              <h1 className="titulo-1">Audio</h1>
              <div className="parrafos-1">
                <p>A continuacion en el siguiente audio se esuchara la tematica hablada, la cual escoji en el fase 2. </p>   
              </div> 
              <center>
                <div>
                  <audio controls className="audio">
                    <source src={require('../grabaciones/grabacion_css.m4a')} type="audio/mpeg"></source>
                  </audio> 
                </div> 
              </center>    
              <Slider/>
            </section>
          </div>
        </div>
    
        <footer>
          <div className="container__footer">
            <div className="box__footer">
              <h2>MDN</h2>
              <a href="about.html">About</a>
              <a href="blog.html">Blog</a>
              <a href="careers.html">Careers</a>
              <a href="contact.hmtl">Advertise with us</a>
            </div>

            <div className="box__footer">
              <h2>Support</h2>
              <a href="support.html">Support</a>
              <a href="report.html">Report an issue</a>              
            </div>

            <div className="box__footer">
              <h2>Our communities</h2>
              <a href="mdn_comunity.html">MDN Community</a>
              <a href="mdn_forum.html">MDN Forum</a>   
              <a href="mdn_chat.html">MDN Chat</a>         
            </div>

            <div className="box__footer">
              <h2>Developers</h2>
              <a href="web_tecno.html">Web Technologies</a>
              <a href="learn.html">Learn Web Development</a>   
              <a href="mdn_plus.html">MDN Plus</a> 
              <a href="hack_blog,html">Hacks Blog</a>        
            </div>

          </div>

          <div className="box__copyright">
            <hr />
            <p>Portions of this content are ©1998–2023 by individual mozilla.org contributors. Content available under a Creative Commons license.</p>
          </div>
        </footer>
      </body>

    </div>
  );
}

export default Audio;