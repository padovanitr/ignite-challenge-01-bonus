import { CgClose } from "react-icons/cg"

import '../styles/modal.scss';

interface ModalProps {
    movieModal: {
        Title: string;
        Poster: string;
        Actors: string;
        Director: string;
        Plot: string;
        Year: string;
        Runtime: string;
        Production: string;
        imdbRating: string;
        Country: string;
    };
    setOpenModal: (value: boolean) => void;
}

// https://codesandbox.io/s/oz8wb?file=/src/index.js:198-296

export function Modal({ movieModal, setOpenModal }: ModalProps) {
    console.log(movieModal)
    return (
        <div className="movieModalWrapper">
            <button onClick={() => setOpenModal(false)} className="movieModalWrapper__closeModal">
                <CgClose style={{color: '#ccc', fontSize: '30px'}}/>
            </button>
            <div className="movieModalWrapper__modal">
                <div className="bookInfo">
                    <div className="bookInfo__image">
                        <img src={movieModal.Poster} alt="" />
                    </div>
                    <div className="bookInfo__details">
                        <h1>{movieModal.Title}</h1>

                        <div className="summaryContainer">
                            <div>Cast</div>
                            <div>{movieModal.Actors}</div>

                            <div>Director</div>
                            <div>{movieModal.Director}</div>

                            <div>Year</div>
                            <div>{movieModal.Year}</div>

                            <div>Duration</div>
                            <div>{movieModal.Runtime}</div>

                            <div>Production</div>
                            <div>{movieModal.Production}</div>

                            <div>IMDB</div>
                            <div>{movieModal.imdbRating}</div>

                            <div>Country</div>
                            <div>{movieModal.Country}</div>
                        </div>

                        <footer>
                            <h2>Description</h2>
                            <div className="bookInfo__description">
                                <p>{movieModal.Plot}</p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}