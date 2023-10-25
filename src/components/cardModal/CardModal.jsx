import "./CardModal.css"
import {Avatar, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
const CardModal = ({open, setOpen, selectedImage}) => {
    const id = selectedImage?.id, username = selectedImage?.user.name, userid = selectedImage?.user.username,
        like = selectedImage?.likes, imgUrl = selectedImage?.urls.regular,
        profileImg = selectedImage?.user.profile_image.medium, profileUrl = selectedImage?.user.links.html,
        description = selectedImage?.description, downloadUrl = selectedImage?.links.download, twitterUrl = selectedImage?.user.twitter_username, instagramUrl = selectedImage?.user.instagram_username,
        portfolioUrl = selectedImage?.user.portfolio_url;
    return (
        <Modal open={open} onClose={() => setOpen(false)} className={"modal-container"}>
            <Card className="cardContainer" >
                <CardMedia component={"img"} height={"500"} image={imgUrl}/>
                <CardContent className={"cardContent-container"}>

                    <div className={"profile"}>
                        <Avatar
                            sx={{width: 48, height: 48}}
                            src={profileImg}/>
                        <div className={"profile-info"}>
                            <h4>{username}</h4>
                            <a href={profileUrl} target="_blank"
                               style={{textDecoration: "none", cursor: "pointer"}}><span>@{userid}</span></a>
                            <div className={"social-container"}>
                            <InstagramIcon className={"socialIcons"}  onClick={()=>{
                                window.open(`http://www.instagram.com/${instagramUrl}`, "_blank");
                            }}/>
                            <TwitterIcon className={"socialIcons"} onClick={()=>{
                                window.open(`http://www.twitter.com/${twitterUrl}`, "_blank");
                            }}/>
                                <LanguageOutlinedIcon className={"socialIcons"} onClick={()=>{
                                    window.open(portfolioUrl, "_blank");
                                }}/>
                            </div>
                        </div>
                    </div>
                    <div className={"icons-container"}>
                        <FileDownloadOutlinedIcon style={{
                            fontSize: "2.2rem",
                            paddingRight: "1rem",
                            cursor: "pointer"
                        }} onClick={()=>{
                            window.open(downloadUrl, "_blank");
                        }}/>
                        <div className={"like"}>
                            <FavoriteBorderIcon/>
                            <span>{like}</span>
                        </div>
                    </div>


                </CardContent>
                <CardContent className={"description-container"}>

                    <Typography variant="body2" color="text.primary">
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </Modal>
    )
}

export default CardModal;
