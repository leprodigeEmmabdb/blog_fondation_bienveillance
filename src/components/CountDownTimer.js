import React, {useState, useEffect} from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    const targetDate = new Date();
    const currentDate = new Date();

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return() => {
            clearInterval(timer);
        };
    }, []);

    function getTimeLeft() {
        let timeDifference =new Date('December 24, 2023 15:00:00')-new Date();

        if (timeDifference < 0) {
            timeDifference = 0;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        return {days, hours, minutes, seconds};
    }

    if (currentDate > targetDate) {
        return null; // Le compte à rebours est terminé, rien à afficher
    }

    return (
        <div>
            <h1>Date du lancement du site</h1>
            <div className="container row col-lg-7 fs-1">
                <div className="col-lg-3 border">{timeLeft.days} jrs</div>
                <div className="row col-lg-8 border">
                    <div className="col">{timeLeft.hours}h</div>
                    <div className="col">{timeLeft.minutes}min</div>
                    <div className="col text-warning">{timeLeft.seconds}sec</div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
