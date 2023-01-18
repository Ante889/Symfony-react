import React, {Component} from 'react';
import Image from "./Image";
import Slideshow from "./Slideshow";

function Album() {
    return (
        <div>
            <main>
                <Slideshow
                    title="Naslov"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <Image
                                image="Slika"
                                description = "Description"
                                views = "9"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Album;