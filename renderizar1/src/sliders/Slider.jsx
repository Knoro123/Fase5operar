import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='box_img'>
          <img src={require('../img/css_grid.jpg')} alt="Captura de CSS GRID" />
        </div>
        <Carousel.Caption>
          <h3>...</h3>
          <p>...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='box_img'>
          <img src={require('../img/codigo_css_grid.jpg')} alt="Maqueta de CSS GRID" />
        </div>
        <Carousel.Caption>
          <h3>...</h3>
          <p>...</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;