import { Carousel } from "react-bootstrap";
const Banner = () => {
    return (<>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="./assets/Banner00.jpg"
                    alt="First slide"
                />
              
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="./assets/Banner01.jpg"
                    alt="Second slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./assets/Banner02.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./assets/Banner02.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </>);
}

export default Banner;