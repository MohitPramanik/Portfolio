import Hero from './Hero'
import Experience from './Experience'
import Skills from './Skills'
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);

            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            <Hero />
            <Experience />
            <Skills />
        </>
    )
}

export default Home
