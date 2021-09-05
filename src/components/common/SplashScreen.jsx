import React from 'react';

const SplashScreen = () =>{
    return(
        <section className={"h-screen flex flex-col items-center"}>
            <h1 className={"text-gray-700 font-semibold text-xl mt-32"}>Wait till we get things up for you <span className={"animate-pulse ease-in-out duration-100"}>.</span><span className={"animate-pulse ease-in-out duration-100"}>.</span><span className={"animate-pulse ease-in-out transition duration-100"}>.</span><span className={"animate-pulse ease-in-out duration-100"}>.</span></h1>
            <div className={"-mt-40 h-full flex justify-center items-center space-x-20"}>
                <svg width="60" height="100" className={"mt-5"} viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="#6366F1">
                    <rect y="10" width="15" height="120" rx="6">
                        <animate attributeName="height"
                                 begin="0.5s" dur="1s"
                                 values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                 repeatCount="indefinite" />
                        <animate attributeName="y"
                                 begin="0.5s" dur="1s"
                                 values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                 repeatCount="indefinite" />
                    </rect>
                    <rect x="30" y="10" width="15" height="120" rx="6">
                        <animate attributeName="height"
                                 begin="0.25s" dur="1s"
                                 values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                 repeatCount="indefinite" />
                        <animate attributeName="y"
                                 begin="0.25s" dur="1s"
                                 values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                 repeatCount="indefinite" />
                    </rect>
                    <rect x="60" width="15" height="140" rx="6">
                        <animate attributeName="height"
                                 begin="0s" dur="1s"
                                 values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                 repeatCount="indefinite" />
                        <animate attributeName="y"
                                 begin="0s" dur="1s"
                                 values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                 repeatCount="indefinite" />
                    </rect>
                    <rect x="90" y="10" width="15" height="120" rx="6">
                        <animate attributeName="height"
                                 begin="0.25s" dur="1s"
                                 values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                 repeatCount="indefinite" />
                        <animate attributeName="y"
                                 begin="0.25s" dur="1s"
                                 values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                 repeatCount="indefinite" />
                    </rect>
                    <rect x="120" y="10" width="15" height="120" rx="6">
                        <animate attributeName="height"
                                 begin="0.5s" dur="1s"
                                 values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                 repeatCount="indefinite" />
                        <animate attributeName="y"
                                 begin="0.5s" dur="1s"
                                 values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                 repeatCount="indefinite" />
                    </rect>
                </svg>
            </div>
            <svg className={"absolute bottom-0"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#6366F1" fillOpacity="1" d="M0,32L30,58.7C60,85,120,139,180,154.7C240,171,300,149,360,122.7C420,96,480,64,540,74.7C600,85,660,139,720,154.7C780,171,840,149,900,149.3C960,149,1020,171,1080,181.3C1140,192,1200,192,1260,160C1320,128,1380,64,1410,32L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
        </section>
    );
};

export default SplashScreen