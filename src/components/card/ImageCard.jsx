import {Avatar, Card, CardContent, CardMedia} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./ImageCard.css"


const ImageCard = ({setSelectedImage, setOpen, item}) => {
    const id = item.id, username = item.user.name, userid = item.user.username,
        like = item.likes, imgUrl = item.urls.thumb,
        profileImg = item.user.profile_image.medium, profileUrl = item.user.links.html;
    return (
        <Card className={"cardContainer"} onClick={() => {
            setSelectedImage(item);
            setOpen(true);
        }}>

            <CardMedia
                component={"img"}
                height={"375"}
                image={imgUrl}
            />
            <CardContent className={"cardContent-container"}>

                <div className={"profile"}>
                    <Avatar
                        sx={{width: 48, height: 48}}
                        src={profileImg}/>
                    <div className={"profile-info"}>
                        <h4>{username}</h4>
                        <a href={profileUrl} target="_blank"
                           style={{textDecoration: "none", cursor: "pointer"}}><span>@{userid}</span></a>
                    </div>
                </div>
                <div className={"like"}>
                    <FavoriteBorderIcon/>
                    <span>{like}</span>
                </div>
            </CardContent>
        </Card>);
}

export default ImageCard;
