import { useState, useRef } from "react";

export const useLike = () => {
    const [status, setStatus] = useState("");
    const clickTimeout = useRef<number | null>(null); 

    const handleLike = () => {
        if (clickTimeout.current) {
            clearTimeout(clickTimeout.current);
            clickTimeout.current = null;
            setStatus("Unlike");
        } else {
            clickTimeout.current = window.setTimeout(() => { 
                setStatus("Like");
                clickTimeout.current = null;
            }, 300);
        }
    };

    return { status, handleLike };
};
