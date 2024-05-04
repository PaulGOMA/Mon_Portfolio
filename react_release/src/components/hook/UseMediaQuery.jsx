import { useEffect, useState } from "react";


export default function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const updateMatches = () => setMatches(media.matches);

        media.addEventListener("change", updateMatches);
        updateMatches();

        return () => {
            media.removeEventListener("change", updateMatches);
        };
    }, [query]);

    return matches;
}