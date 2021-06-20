const videoURL = '//www.youtube.com/embed/'
// youtube embed parameters
// https://developers.google.com/youtube/player_parameters#Parameters
const videoControls = [
    '?version=3',
    '&rel=1',
    '&loop=1',
    '&autoplay=1',
    // '&mute=1',
    '&controls=0',
    '&disablekb=1',
    // '&iv_load_policy=3',
    // '&modestbranding=1',
    '&playlist=' // this has to go last
]
const videoIDs = [
    'ZL38UKvHhuQ', // I may not know my flowers....
    'kUJw2eVYznw', // Red birb "GUMI" wuewuewuewuewue.....staring II
    'RWP4B23OjZI', // just to set the record straight i do wash my clothes
    'B_qnI1WrlnU', // Update Day - Nirvana The Band The Show
    'urZukvTwvfQ', // J Roc - It Could Happen To You. - Trailer Park Boys
    'Bx-bHmSbPJ4', // How to be a Slytherin - Sailor J
    'wAu_fYHZKLs', // [SFM] Time Traveler
    'q6EoRBvdVPQ', // Yee
    'WUj-EGTJc3E', // Egypt Military Parade - YMCA Version
]

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        video = document.querySelector('iframe')
        videoChosen = videoIDs[Math.round(Math.random() * (videoIDs.length - 1))]

        video.setAttribute('src', videoURL + videoChosen + videoControls.join('') + videoChosen)
    }
}

// force play of I may not know my flowers....
window.addEventListener('keydown', (event) => {
    if (event.key === 'b') {
        video = document.querySelector('iframe')
        video.setAttribute('src', videoURL + videoIDs[0] + videoControls.join('') + videoIDs[0])
        console.log('forced bitch video')
    }
})