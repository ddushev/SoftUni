import { Speaker } from "./Speaker";

export default function Speakers() {
    const speakers = [
        {
            name: "Simon Collins",
            bio: "Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things..."
        },
        {
            name: "Stephanie Troeth",
            bio: "Stephie is a user experience researcher and designer. In over 15 years of working on the web, she has worn many hats, including a product lead for a tech startup in publishing..."
        },
        {
            name: "Harry Roberts",
            bio: "Harry is a freelance designer, developer, writer, speaker and front-end architect from the UK, previously working as Senior UI Developer for Sky. He Tweets at..."
        },
        {
            name: "Geri Coady",
            bio: "Geri Coady is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things..."
        },
        {
            name: "Simon Collins",
            bio: "Simon Collins is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things..."
        },
        {
            name: "Simon Collins",
            bio: "Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things..."
        }
    ]
    return (
        <div className="row me-row content-ct speaker" id="speakers">
            <h2 className="row-title">Meet the Speakers</h2>
            <Speaker name="Simon Collins" bio={speakers[0].bio} ></Speaker>
            <Speaker {...speakers[1]} />
            <Speaker {...speakers[2]} />
            <Speaker {...speakers[3]} />
            <Speaker {...speakers[4]} />
            <Speaker {...speakers[5]} />
        </div>
    );
}