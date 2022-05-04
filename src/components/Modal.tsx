import '../styles/modal.scss';

interface ModalProps {
    movieModal: {
        Title: string;
        Poster: string;
        Actors: string;
        Director: string;
        Plot: string;
    };
    setOpenModal: (value: boolean) => void;
}

export function Modal({ movieModal, setOpenModal }: ModalProps) {
    return (
        <div className="movieModalWrapper">
            <button onClick={() => setOpenModal(false)} className="movieModalWrapper__closeModal"></button>
            <div className="movieModalWrapper__modal">
                <div className="bookInfo">
                    <div className="bookInfo__image">
                        <img src={movieModal.Poster} alt="" />
                    </div>
                    <div className="bookInfo__details">
                        <h1>{movieModal.Title}</h1>

                        <h2>INFORMAÇÕES</h2>
                        <div className="summary">
                            <div className="summary__index">
                                <div>Cast</div>
                                <div>Director</div>
                            </div>
                            <div className="summary__info">
                                <div>{movieModal.Actors}</div>
                                <div>{movieModal.Director}</div>
                            </div>
                        </div>
                        <h2>RESENHA DA EDITORA</h2>
                        <div className="bookInfo__description">
                            <p>{movieModal.Plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}