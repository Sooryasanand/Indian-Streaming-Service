import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {
const [show, handleshow] = useState(false);
const navigate = useNavigate();

const transitionNavBar = () => {
    if(window.scrollY > 100) {
        handleshow(true);
    } else {
        handleshow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
}, [])


    return (
        <div className={`nav ${show && 'nav_bg'}`}>
            <div className='nav_contents'>
                <h1 className='nav_logo'>Stream Flex</h1>
                <img onClick={() => navigate('./profile')} className='nav_avatar' src="https://streamflexmisc.s3.ap-south-1.amazonaws.com/profilePic/profilePicBlue.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aDmFwLXNvdXRoZWFzdC0yIkcwRQIhAOxbvlGuJJXLLey%2FZjp3P3HhbautMbA0IqtPwDZgjz1hAiBhIjyR2m8nYSZmLzfUKt9nn%2F%2Ftjz0y%2FpjaKY6w3EwzvCrtAgiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDA1NTM5MDI3MDY3NSIMGYVtjFsleU0shgFxKsEClZESZv4ENpSCA%2BqBd3xPziW1CIES9eV5yPjBx3pof9%2BPuVTn%2B0M%2BRtuh2DSQMILk3ToYBnN0rbo5cuHRIwojs%2F0TjDxlHZqJOBFiU1eldQcNd8f1msr%2BtIZ7CwT%2BW4SsX%2F3pFKjKwTodtXG%2BMbP1pcCGHEgEaHNx9OU57DF38MPzRlk91kgsD08HqjVOrWckTPm274TiGBA09a8ft06I7zFkf2yA6afAjQHajO58N2yzQJOy8aMg8OHdUobpLH7Eecfxy8m7qnnSwEhV%2B%2BzMS0UWsA8EkNFCFBH9HfCdyIXPOfeTPLSR73N4lyWiYYZ0cxVU56s5tzC8Zu7S%2FWMiWHLoq934OKaX1ygh2CutH9s4N3fg8lv4QMU1qI6O%2B5EC4ixe5lNe9bkdb7KUJFOUb1gDI83toFbyzZpuZJi3iLHjMLu99o8GOrMCl%2B2vZGc939FBnv1JaiMzuBi7QWATa5fWEHU%2BRMysmivBPyHnh655KSP8uQy5KhWDDpOmWnxjmoRsoUgvho0tkARTAJIGYcFCK8PkGoMYNGzQ4Px5NxtgSoNPFuogNgzOH1LaU9ud%2BHWcK5q9ovyCS1Pq4mRZ69ip5iUVRuiH7LsmOBHrXSpPIg%2FDgX3hzdEQAOE%2FKMmhfoVwi8z6ADD5hfLYuh3OVzMn1BAOhV3wxSh02KzBS2Lr%2B3qRUk5zzNvBojv2I2HCuctpSy4bsKnJtGDbqcM80WkV1rOEmWmy7fP5SDLnBZXuzKcdIHWnPMbqXREWbOkP8BeXULeCT4c7QGqLnmTus%2B7Ih%2FIhvz6KOFL72u273rzRXO1ndQx5jdMljCaVrR2ftzETe1t%2FpZKRtOF%2FWw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220205T085924Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQZZMEOTJXYK5AJGL%2F20220205%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=f14e4af5bc789947200d019cb8aee08911bf9feecd0f49a1704745ef440d6b9c" />
            </div>
        </div>
    )
}

export default Nav;
