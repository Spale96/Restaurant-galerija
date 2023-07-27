import {useState,useRef} from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef<HTMLVideoElement>(null);

    return (
        <section className="app__video">
            <video
                ref={vidRef}
                src={meal}               
                loop
                controls={false}
                muted
            />
            <div className="app__video-overlay flex__center">
                <div
                    className="app__video-overlay_circle flex__center"
                    onClick={() => {
                        setPlayVideo(!playVideo);
                        if (vidRef.current) { 
                            if (playVideo) {
                                vidRef.current.pause();
                            } else {
                                vidRef.current.play();
                            }
                        }
                    }}
                >
                    {playVideo ? (
                        <BsPauseFill color="#fff" fontSize={30} />
                    ) : (
                        <BsFillPlayFill color="#fff" fontSize={30} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Intro;
