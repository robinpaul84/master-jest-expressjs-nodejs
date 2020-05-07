console.log("Start");

const loginUser = (email, password) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Processing email and password to get token ', email, password)
            resolve({authtoken: "sadfasdfafd"});
        }, 500); // just to show the token is got after .5 seconds
    });
};

const getYourVideos = (token) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Processing token ' + token + ' to get videos');
            resolve(["video1", "video2", "video3"]);
        }, 1000); // just to show the list of videos is got after 1 seconds
    });
};

const getVideoDetails = (video) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Processing video to get details ',video)
            resolve({duration: "2min", likes: "2090", dislikes: "56"});
        }, 1000); // just to show the list of videos is got after 1 seconds
    });
};

// loginUser("alex","alex@gmail.com")
// .then(ab=>getYourVideos(ab))
// .then(videos=>getVideoDetails(videos[1]))
// .then(result => console.log(result))

const alltogether = async () =>{
    const token = await loginUser("alex","alex@gmail.com")
    const videos = await getYourVideos(token)
    const videoDetails = await getVideoDetails(videos[2])
    console.log(videoDetails)
}

alltogether()



console.log("End");