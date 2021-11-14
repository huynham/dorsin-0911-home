
import './home.css'
import wave from '../../image/bg-pattern.png'
import pikachu from '../../image/pikachu.jpg'
import videocat from '../../image/videocat.mp4'

function Home(){
    const Play =()=>{
        const x = document.getElementsByClassName("video");
            x[0].style.display = "block";
            x[0].style.opacity = 1;
    }
    const Dong =()=>{
        const x = document.getElementsByClassName("video");
            x[0].style.display = "none";
            document.body.style.opacity = 1;
    }

    return (
        <section id="home">
            <div className="home-sub">
                <div className="home-sub-one">
                    <div className="home-content">
                        <h1>We help startups launch their products</h1>
                        <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
                        <span onClick={Play}><i class="fal fa-play-circle"></i></span>
                        
                        
                    </div>
                </div>
                
            </div>
            <div className="wave">
                    <img src= {wave} alt="song" />

            </div>
            <div className="video">
                <div className="video-sub">
                <iframe src="https://player.vimeo.com/video/99025203?h=0788a7a47b&title=0&byline=0&portrait=0&badge=0"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

                    <span className="dong" onClick={Dong} >X-Close</span>
                </div>
            </div>
        </section>
    )
}
export default Home