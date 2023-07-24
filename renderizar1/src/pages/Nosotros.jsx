import '../styles/styles.css';
import Mdn from '../icons/Mdn.js';

function Nosotros(){
    return (
      <div className="Inicio">
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
                <section class="section-1">
                    <h1 class="titulo-1">Nosotros</h1>
                    <br/>
                    <div class="parrafos-1">
                        <p>Mi nombre es Kevin Daniel Peña Paez, vivo en la ciudad de Bogotá, tengo 18 años y en estos momento curso la tecnologia en produccion de audio en la UNAD</p>
                    
                    </div>        
                </section>
                <section class="section-2">
                    <br/>
                    <h2 class="titulo-2">Correo electronico:</h2>
                    <br/>
                    <div  class="parrafo-2">
                        <p>danielkevin.paez@gmail.com</p>
                    </div>   
                </section>  
                <section class="section-3">
                    <h3>Foto</h3>
                    <div class="imagenredondeada"> 
                        <br/>
                        <img src={require('../img/foto.png')}  alt="Foto"/>
                        <br/>
                    </div>
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
  
  export default Nosotros;