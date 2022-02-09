import React, {useContext, useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {Context} from "../index";
import {useActions} from "../hooks/useActions";
import {brushAction} from "../store/action-creators/toolAction";

const Gallery: React.FC = () => {
    const {db} = useContext(Context);
    const [pictures, setPictures] = useState<any>([]);

    const {setStrokeColor, setFillColor, setLineWidth} = useActions();

    const fetchPicture = async () => {
        const usersCollection = await getDocs(collection(db, "users"));
        usersCollection.forEach((doc) => {
            setPictures((prevState: []) => [...prevState, doc.data()]);
        });
    };

    useEffect(() => {
        fetchPicture();
        setStrokeColor("black");
        setFillColor("transparent");
        setLineWidth(1);
        brushAction();
        return () => {
            setPictures([]);
        };
    }, []);

    return (
        <>
            <div>
                {pictures.map((p: any) => (
                    <div key={p.image}>
                        <img
                            style={{background: "white"}}
                            src={p.image}
                            width={300}
                            height={200}
                            alt=""
                        />
                        <p>{p.username}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;