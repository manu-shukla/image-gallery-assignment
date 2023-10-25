import "./ImageContainer.css"
import {
    CircularProgress,
} from "@mui/material";

import ImageCard from "../card/ImageCard";
import {useEffect, useState} from "react";
import {LoadingButton} from "@mui/lab";
import CardModal from "../cardModal/CardModal";
import {useThemeContext} from "../../contexts/themeContext";

const ImageContainer = ({search}) => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [open, setOpen] = useState(false);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        console.log(selectedImage);
    }, [selectedImage]);

    const fetchImages = (signal = null) => {
        fetch(`https://api.unsplash.com/search/photos?query=${search}&page=${page}&client_id=${process.env.REACT_APP_API_KEY}`, {signal: signal})
            .then(res => res.json())
            .then(data => {
                setData(prevState => [...prevState, ...data.results]);
                setPage(prevState => prevState + 1);
                setSpinner(false);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        setPage(1)
        setData([]);
        setSpinner(true);
        const controller = new AbortController();
        const signal = controller.signal;
        const timeoutId = setTimeout(() => {
            fetchImages(signal);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
            controller.abort();
        }
    }, [search]);

    const fetchMoreData = () => {
        setLoading(true);
        setTimeout(() => {
            fetchImages()
            setLoading(false);
        }, 2000);
    }

    const {theme, setTheme} = useThemeContext();

    return (
        <div className={`container-${theme}`}>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {spinner && <CircularProgress/>}
                <div className="cards-container">
                    {
                        (search === "" || data.length === 0) ? (<h3 style={{
                            fontStyle: "italic",
                        }}>Search Something
                            Special</h3>) : (data.map((item, index) => {
                            return <ImageCard setOpen={setOpen} setSelectedImage={setSelectedImage} key={item.id}
                                              item={item}/>
                        }))
                    }

                </div>
                {data.length > 0 && <LoadingButton loading={loading} variant={"contained"} style={{
                    margin: "10px 10px"
                }} onClick={fetchMoreData}>Load More</LoadingButton>}

            </div>
            <CardModal selectedImage={selectedImage} open={open} setOpen={setOpen} data={data}/>


        </div>

    );


}

export default ImageContainer;
