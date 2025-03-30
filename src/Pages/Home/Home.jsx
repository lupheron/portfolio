import React, { useEffect, useRef } from 'react';
import css from '../../asset/css/index.module.css'
import Header from '../../Components/Macro/Header/Header';
import flora from '../../asset/media/images/flora.png'
import waytech from '../../asset/media/images/waytech.png'
import problemsolve from '../../asset/media/images/prosolv.jpg'
import newtech from '../../asset/media/images/explore.jpg'
import gogym from '../../asset/media/images/gym.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Typed from "typed.js";
import { message } from 'antd';



function Home() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "<span>I'm a full-stack developer specialising in</span> React, PHP <span>and</span> MYSql",
                "Let me tell you a little bit about myself.",
                "<span>I really enjoy</span> coding <span>and going to the</span> gym.",
                "<span>I value</span> peace <span>and aim to live in</span> harmony.",
                "I complete tasks efficiently and effectively.",
                "<span>While working with clients, I believe in</span> honesty <span>and</span> appreciation.",
            ],
            startDelay: 100,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 100,
            showCursor: false
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const doneJobs = [
        { id: 1, img: flora, title: "A website for flower market", description: "I made an admin and landing page for a flower market where people can order bouquets online", link: "https://florasamarkand.uz/", reverse: false },
        { id: 2, img: waytech, title: "A website for Agricultural Transports & Equipment", description: "I did the Frontend part of the webpage and my teammate handled the DB and Backend. Customers can find any agricultural transport they need.", link: "https://waytech.uz/", reverse: true }
    ];

    const Card = ({ img, title, description, link, reverse }) => {
        return (
            <div className={reverse ? css.project_card_reverse : css.project_card}>
                {!reverse && <img src={img} alt="" />}

                <div>
                    <h4>{title}</h4>
                    <h1>{description}</h1>
                    <button onClick={() => window.open(link)}>
                        View the project
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </button>
                </div>

                {reverse && <img src={img} alt="" />}
            </div>
        );
    };


    return (
        <div className={css.home}>
            <div className={css.postion_relative}>

                <Header />

                <main className={css.main}>
                    <h1 className={css.title} ref={el}></h1>

                    <h1 id='clients' className={css.client_title}>
                        <span>Some of</span> the clients I have code for
                    </h1>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={70}
                        modules={[Pagination]}
                        className={css.project}
                    >
                        <SwiperSlide className={css.project_slide}><img src={flora} alt="" /></SwiperSlide>
                        <SwiperSlide className={css.project_slide}><img src={waytech} alt="" /></SwiperSlide>
                    </Swiper>

                    {/* WORKS */}

                    <div id='work' className={css.works}>
                        <h1><span>Selected</span> Works</h1>
                        <div>
                            {doneJobs.map((job) => (
                                <Card key={job.id} {...job} />
                            ))}
                        </div>
                    </div>
                    <div id='about' className={css.about_me}>
                        <div className={css.about_title}>
                            <h3>A BIT ABOUT ME</h3>
                            <h1>
                                I'm a passionate Full-Stack Developer with expertise in PHP, Python, JavaScript, React, MySQL, HTML & CSS. With 1 year of experience, I specialize in building dynamic web applications and efficient backend systems. As a high school student already admitted to DePauw University (one of the top U.S. universities), I bring strong problem-solving skills and a dedication to continuous learning. Beyond coding, I’m an avid reader of self-improvement and historical books, and I’ve been involved in sports since the age of 4, earning multiple academic and athletic achievements.
                            </h1>
                        </div>

                        <div className={css.images_container}>
                            <img src={problemsolve} alt="Problem Solving" className={css.image} />

                            <div>
                                <img src={newtech} alt="New Technologies" className={css.image} />
                                <img src={gogym} alt="Going to Gym" className={css.image} />
                            </div>
                        </div>
                    </div>

                    <div className={css.in_touch}>
                        <h1><span>Get</span> in Touch.</h1>
                        <p style={{ fontSize: "22px" }}>So that we can talk more about...</p>
                        <p>
                            <svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>
                            Uzbekistan, Samarkand
                        </p>

                        <div id='contact'>
                            <svg onClick={() => window.open("https://www.instagram.com/s.nuriddinovvv/?next=%2F")} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                            <svg onClick={() => window.open("https://github.com/lupheron")} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                            <svg onClick={() => window.open("https://www.linkedin.com/in/sukhrob-nuriddinov-4b2194328/")} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                            </svg>
                            <svg onClick={() => { navigator.clipboard.writeText("suxrobnuriddinov@outlook.com"); message.success("Email copied to clipboard!") }} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                            <svg onClick={() => { navigator.clipboard.writeText("+998 (50) 883-99-11"); message.success("Phone number copied to clipboard!") }} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;