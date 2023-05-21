
import './teampage.css';
import ProfileCard from "./ProfileCard";


const data = [
    {
        github: "https://github.com/simranquirky",
        twitter: "https://twitter.com/SimranK47598529" ,
        linkedin: "https://www.linkedin.com/in/simran-kumari-810212190/",
        img: "https://avatars.githubusercontent.com/u/60690997",
        name: "Simran",
        role: "Frontend"

    },
{
        github: "https://github.com/Ayumilan",
        twitter: "https://twitter.com/milan_ayush",
        linkedin: "https://www.linkedin.com/in/ayush-milan/",
        img: "https://avatars.githubusercontent.com/u/60690689",
        name: "Ayush",
        role: "Backend"
} ,
{
    github: "https://github.com/anuragkr555",
        twitter: "",
        linkedin: "https://www.linkedin.com/in/anuragkumar555/",
        img: "https://avatars.githubusercontent.com/u/101247845",
        name: "Anurag Kumar",
        role: "Frontend"
}
];



const TeamComponent = () => (
    <div className="card-container">
    <ProfileCard profile={data[0]}/>
    <ProfileCard  profile={data[1]}/>
    <ProfileCard  profile={data[2]}/>
    <ProfileCard  profile={data[2]}/>
    </div>
    );

export default TeamComponent;
    