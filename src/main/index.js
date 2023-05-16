import React from "react";
import { Parallax, Background } from "react-parallax";
import "./index.css"

const styles = {
    fontFamily: "sans-serif",
    color: "white"
    // textAlign: "center"
};
const insideStyles = {
    // background: "white",
    padding: "0px 10px",
    fontSize: "15px",
    width: "70%"
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%,-50%)"
};
const insideStyles2 = {
    // background: "white",
    padding: "0px 10px",
    fontSize: "15px",
    // width:"70%",
    textAlign: "right",
    margin: "0px"
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%,-50%)"
};
const image1 =
    "./img1.jpg";
const image2 =
    "./img2.jpg";
const image3 =
    "./img3.jpg";
const image4 =
    "./img4.jpeg";

const Home = () => {
    return (
        <div style={styles}>
            <Parallax bgImage={image1} strength={500}>
                <div style={{ height: 600 }}>
                    <div style={insideStyles}>

                        <h1><img src="./head-img.png" style={{ width: "90px", margin: '0px 10px 0px 0px' }} />Effective Buddhism</h1>
                        <h2>Thesis:</h2>
                        <p>Buddhism is an amazing philosophy full of wisdom with great truths, however I believe Buddhists have lost the way of the Buddha and lack a real basis of impact. Effective Buddhism is a solution to those who seek to follow the Buddhist Path as Buddha Wanted. If Buddha was alive today, imagine the amount of change and impact he would be having.</p>
                        <h2>Evidence:</h2>
                        <p>In current Buddhist society, the top Buddhist role models have iron wills, but lack real ACTION or PURPOSE behind this because of a misinterpretation of Dharma. Buddha’s four main vows tell a different story of how the Buddha should act.

                            The Bodhisattva Vows exist in many different forms; they are chanted as follows:
                            <ol>
                                <li>Creations are numberless, I vow to free them.</li>
                                <li>Delusions are inexhaustible, I vow to transform them.</li>
                                <li>Reality is boundless, I vow to perceive it.</li>
                                <li>The awakened way is unsurpassable, I vow to embody it.</li>
                            </ol>
                            It’s also said in this way.
                            <ol>
                                <li>Living beings are limitless, I vow to liberate them all.</li>
                                <li>Blind passions are limitless, I vow to sever them all.</li>
                                <li>Dharma gates are inexhaustible, I vow to know them all.</li>
                                <li>Unsurpassed is awakening, I vow to realize it.</li>
                            </ol>
                        </p>
                        <p style={{ color: "gray", fontWeight: 'bolder', marginTop: '-10px', fontSize: '17px' }}>Scroll down to read more...</p>
                    </div>
                </div>
            </Parallax>
            {/* <h2 className="scroll-btn">Scroll down to read more</h2> */}
            <Parallax bgImage={image2} strength={500}>
                <div style={{ height: 600, textAlign: 'end' }}>
                    <div style={insideStyles2}>
                        <div style={{ width: "70%", marginRight: "0px", marginLeft: 'auto', paddingTop: '20px' }}>
                            <p>As anyone may observe from the outside, the most influential people in the world today are not Buddhists. On top of that anyone from a Non-Buddhist city, will tell you that they have not heard from a Buddhist about why that path is best.

                                It is a sickness is the Buddha communities today to ignore the first vow, and try to move on to 2,3, and 4. By the very means of the vows, step 2 cannot be done without first completing step 1. Step 1 is in fact, an earthly desire. The Four Main Vows are a harmonious right of passage that must be balanced in action towards their completion.

                                Therefore, the way of the Buddha should be to renounce all worldly desires IN ORDER TO save all people, and to learn all teachings IN ORDER TO save all people, and that once these steps are completed perfect enlightenment will be attained. This means that these tasks are in harmony. As one renounces more wordy desires to spend more time saving people, one learns teachings to improve how they go about saving others, and rides the collective path towards enlightenment.

                                However, instead of following this path and order, Buddhists today are known as people continually meditating. Struggling to awaken and renounce all worldly desires, and instead all acting to each other like they are farther along the path. I believe Buddhism has become a sick game of ineffective spiritual ego stroking.

                                I am not saying that the Men and Women who have become great at meditating for hours and wholly living a minimalist life have not gone further down their path of enlightenment, instead that it is very sad that so much potential is moving towards the wrong place for the world to awaken and be saved. It is a fact these people who realize their potential to follow the first vow will be some of the strongest Buddhas there are.

                                The funny thing about tech entrepreneurs who are rapidly changing the future, and Buddhism is that these tech entrepreneurs are slowly learning the way of the Buddha in order to optimize themselves. They are reaching new paths of enlightenment. Instead of referring to their actions as the Buddha way, they are learning the teachings of Buddha in order to be more effective.</p>


                            <p style={{ color: "gray", fontWeight: 'bolder', marginTop: '-10px', fontSize: '17px' }}>Scroll down to read more...</p></div>
                    </div>
                </div>
            </Parallax>
            {/* <h2 className="scroll-btn ">Scroll down</h2> */}
            <Parallax bgImage={image3} strength={500}>
                <div style={{ height: 600 }}>
                    <div style={insideStyles}>
                        <h2 style={{marginTop:"70px"}}>Reiterating The Message:</h2>
                        <p style={{marginTop:"70px"}}>
                            Many buddhists today practice the seeking of enlightenment rather than practicing the way of Buddha himself. Buddha was an enlightened being who spread his philosophy far and wide, preaching and changing and influencing the world and his actions live on to this day.

                            Buddhists in most countries are seen as people who simply meditate. The idea is to relinquish attachment to earthly desires in order to DO MORE. Not to meditate all day to do nothing. In an effort of learning all teachings, we will re-evaluate the core values, and give a new perspective based on the teachings. The core re-evaluation leads us to the idea that Nirvana is something to achieve in this realm. And that leaving this realm is a negative desire in it of itself.
                        </p>
                        <p style={{ color: "gray", fontWeight: 'bolder', marginTop: '70px', fontSize: '17px' }}>Scroll down to read more...</p>
                    </div>
                </div>
            </Parallax>
            {/* <h2 className="scroll-btn">Scroll down</h2> */}
            <Parallax bgImage={image4} strength={500}>
                <div style={{ height: 600}}>
                    <div style={insideStyles2}>
                        <h2 style={{textAlign:"left"}}>Sources:</h2>
                        <div style={{textAlign:"center",backgroundColor:'white', textAlign:'left', color:'black', padding:'2px 5px', margin:'2px 5px', borderRadius:"10px"}}>
                            <p style={{fontStyle:'sans-serif', color:'gray',fontWeight:'bolder',fontSize:'17px'}} >Four Truths, Four Vows</p>
                            <p style={{fontStyle:'sans-serif', fontSize:'12px'}} >This is another in my series of discussions of ideas Stephen Batchelor has been presenting in dharma talks since late 2010. You can hear them at dharmaseed.org. One of the attractive ideas to come out of Stephen Batchelor's recent teaching is a mapping of the Four Noble Truths onto the Four Bodhisattva Vows of the Zen tradition, a concept Batchelor got from former Zen priest and current Vipassana teacher Gil Fronsdal.</p>
                        </div>
                        <div style={{textAlign:"center",backgroundColor:'white', textAlign:'left', color:'black', padding:'2px 5px', margin:'2px 5px', borderRadius:"10px"}}>
                            <p style={{fontStyle:'sans-serif', color:'gray',fontWeight:'bolder',fontSize:'17px'}} >List of Buddha claimants - Wikipedia</p>
                            <p style={{fontStyle:'sans-serif', fontSize:'12px'}} >Bahá'u'lláh - prophet of Persian origin, founder of the Baháʼí Faith stated publicly in 1863 CE that he is the promised Manifestation of God for this age predicted in all prophetic religions of the past.</p>
                        </div>
                        <div style={{textAlign:"center",backgroundColor:'white', textAlign:'left', color:'black', padding:'2px 5px', margin:'2px 5px', borderRadius:"10px"}}>
                            <p style={{fontStyle:'sans-serif', color:'gray',fontWeight:'bolder',fontSize:'17px'}} >Homepage</p>
                            <p style={{fontStyle:'sans-serif', fontSize:'12px'}} >Every year since 1983, Daisaku Ikeda, as the SGI president, has issued a peace proposal, exploring the interrelation between core Buddhist concepts and the diverse challenges global society faces.</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

export default Home  
