import React from "react";

const Dashboard = () => {
    return(
        <div className="flex h-[100vh] flex-col text-white bg-black">
            <section className="flex">
                <nav className="flex flex-col justify-start top-0 left-0 w-96 h-[90vh] bg-white text-black m-10 rounded-3xl">
                    
                    <div className="flex flex-col items-center justify-center gap-10">
                        <p className="text-4xl font-bold mt-10">Wiki Media</p>
                        <div className="rounded-full h-52 w-52 bg-[#787878]"></div>
                    </div>

                    <div className="flex flex-col justify-center items-start ml-8 text-xl gap-8">
                        <p className="mt-4">Level: 0</p>
                        <p>Experience:</p>
                        <div className="w-80 ml-4 flex flex-col">
                            <div className="bg-[#271b3d] dark:bg-[#282828] h-5 rounded-full">
                                <div className="bg-[#763939] delay-50 ease-out transition-all h-5 rounded-full" ></div>
                            </div>
                            <p>100/100</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 m-8 text-xl">
                        <p>Health:</p>
                        <p>Streak: </p>
                    </div>

                    <div className="flex flex-col gap-5 m-8 text-xl">
                        <p className="bottom-20 absolute">Settings</p>
                    </div>
                </nav>

                <div className="flex flex-col justify-center items-center w-96 h-40 bg-[#271b3d]">
                    <div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;