const ProfileCard = ({profile}) => {
    const {github,twitter,linkedin,img,name,role} = profile;
    return (
        <figure class="Profile_Card">
        <img src={img} class="profile_image" />
        <figcaption>
            <h3>{name}</h3>
            <h5>{role}</h5>
            <div class="icons">
                <a href={github} target="_blank"><i class="ion-social-github-outline"></i></a>
                <a href={twitter} target="_blank"> <i class="ion-social-twitter-outline"></i></a>
                <a href={linkedin} target="_blank"> <i class="ion-social-linkedin-outline"></i></a>
            </div>
        </figcaption>
        </figure>
) };

export default ProfileCard;
