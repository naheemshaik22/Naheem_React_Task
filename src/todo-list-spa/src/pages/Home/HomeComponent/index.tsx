import React from 'react';
import './styles.css';
import logo from '../../../assets/logo.svg';
import dash from '../../../assets/dash.svg';
import miota from '../../../assets/miota.svg';
import eth from '../../../assets/eth.svg';
import monitor from '../../../assets/monitor.svg';
import swiologo from '../../../assets/swiologo.png';

interface IHomeComponentProps {}

export const HomeComponent: React.FC<IHomeComponentProps> = () => {
    return (
        <>
            <a
                href="https://github.com/Kvaibhav01/Landing-Page-Animation"
                className="github-corner"
                aria-label="View source on GitHub"
            >
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 250 250"
                    style={{
                        fill: '#70B7FD',
                        color: '#fff',
                        position: 'absolute',
                        top: 0,
                        border: 0,
                        right: 0,
                    }}
                    aria-hidden="true"
                >
                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                    <path
                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                        fill="currentColor"
                        style={{ transformOrigin: '130px 106px' }}
                        className="octo-arm"
                    ></path>
                    <path
                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                        fill="currentColor"
                        className="octo-body"
                    ></path>
                </svg>
            </a>
            {/* home container id starts */}
            <div id="home-container">
                {/* inner sub id starts */}
                <div id="inner">
                    <img src={swiologo} alt="Crypts logo" id="logo" />
                    <h1>Your One Stop Solution!</h1>
                    <p className="subtitle">
                        An idea is just a daydream when there’s no one to turn
                        it into reality!
                    </p>
                    <a href="/todo" className="cta cta--white ">
                        Login
                    </a>
                </div>
                {/* inner sub id ends */}

                {/* illustration sub id starts */}
                <div id="illustration">
                    <img
                        src={dash}
                        alt="dash img"
                        id="dash"
                        className="crypto-icons"
                    />
                    <img
                        src={miota}
                        alt="iota img"
                        id="iota"
                        className="crypto-icons"
                    />
                    <img
                        src={eth}
                        alt="eth img"
                        id="eth"
                        className="crypto-icons"
                    />
                    <img src={monitor} alt="monitor img" id="monitor" />
                </div>
                {/* illustration sub id ends */}
            </div>

            {/* animated cards */}
            <main className="animationcards">
                <section className="card-area">
                    {/* Card: City */}
                    <section className="card-section">
                        <div className="card">
                            <div className="flip-card">
                                <div className="flip-card__container">
                                    <div className="card-front">
                                        <div className="card-front__tp card-front__tp--city">
                                            <svg
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 60 60"
                                                // style={{ enableBackground: 'new 0 0 60 60' }}
                                                xmlSpace="preserve"
                                                className="card-front__icon"
                                            >
                                                {/* City SVG paths */}
                                            </svg>
                                            <h2 className="card-front__heading">
                                                City break
                                            </h2>
                                            <p className="card-front__text-price">
                                                From £29
                                            </p>
                                        </div>
                                        <div className="card-front__bt">
                                            <p className="card-front__text-view card-front__text-view--city">
                                                View me
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <video
                                            className="video__container"
                                            autoPlay
                                            muted
                                            loop
                                        >
                                            <source
                                                className="video__media"
                                                src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                                                type="video/mp4"
                                            />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="inside-page">
                                <div className="inside-page__container">
                                    <h3 className="inside-page__heading inside-page__heading--city">
                                        For urban lovers
                                    </h3>
                                    <p className="inside-page__text">
                                        As cities never sleep, there are always
                                        something going on, no matter what time!
                                    </p>
                                    <a
                                        href="#"
                                        className="inside-page__btn inside-page__btn--city"
                                    >
                                        View deals
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="card-section">
                        <div className="card">
                            <div className="flip-card">
                                <div className="flip-card__container">
                                    <div className="card-front">
                                        <div className="card-front__tp card-front__tp--city">
                                            <svg
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 60 60"
                                                // style={{ enableBackground: 'new 0 0 60 60' }}
                                                xmlSpace="preserve"
                                                className="card-front__icon"
                                            >
                                                {/* City SVG paths */}
                                            </svg>
                                            <h2 className="card-front__heading">
                                                City break
                                            </h2>
                                            <p className="card-front__text-price">
                                                From £29
                                            </p>
                                        </div>
                                        <div className="card-front__bt">
                                            <p className="card-front__text-view card-front__text-view--city">
                                                View me
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <video
                                            className="video__container"
                                            autoPlay
                                            muted
                                            loop
                                        >
                                            <source
                                                className="video__media"
                                                src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                                                type="video/mp4"
                                            />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="inside-page">
                                <div className="inside-page__container">
                                    <h3 className="inside-page__heading inside-page__heading--city">
                                        For urban lovers
                                    </h3>
                                    <p className="inside-page__text">
                                        As cities never sleep, there are always
                                        something going on, no matter what time!
                                    </p>
                                    <a
                                        href="#"
                                        className="inside-page__btn inside-page__btn--city"
                                    >
                                        View deals
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Add similar sections for other cards */}
                </section>
                <footer className="footer">
                    <p className="footer-text">&copy; 2024 Created by Naheem</p>
                </footer>
            </main>
        </>
    );
};
