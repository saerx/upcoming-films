import React from "react";
import Film from "./Film";

const ReleasesList = ({films}) => {

    // const filmNodes = films.map((film) => {
    //     return (
    //         <Film name={film.name} url={film.url} key={film.id}/>
    //     )
    // });

    return (
        <>
            <ul>
           <Film />
           </ul>
        </>
    )
};





export default ReleasesList