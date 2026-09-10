import { Row, Col } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import MovieItem from "./movieItem/MovieItem";

const Movies = ({ mov }) => {

    return (

        <div className="movie-app-bg py-5">
            <Container>
                <Row xs={1} sm={2} lg={3} xl={4} className="g-4">

                    {mov.map((movie) =>
                        <Col key={movie.id}>
                            <MovieItem
                                title={movie.title}
                                imageUrl={movie.imageUrl}
                                rating={movie.rating}
                                duration={movie.duration}
                                summary={movie.summary}
                                available={movie.available}
                            />
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default Movies