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
    'EIxF_Esi8MU', // Animaniac
    'GbmP2c6TGKc', // Why am I anxious?
    'lT0AfMjN32A', // "Jeff Bezos" Bo Burnham INSIDE
    'gbQS1ExSeBQ', // T-pose Raccoon With Halo Theme
    'P7JRvwfHFwo', // America, Fuck Yeah!
    'bO-NaEj2dQ0', // MTC - S3RL
    'uTl8ZYImjBQ', // Artificial Intelligence (Official Video)
    'b8HO6hba9ZE', // [SFM] We like to party
    'VBBMfHGMs7I&t=1063s', // Making An Emotional Connection Through Freestyle - Omegle Bars 18
    '8FhGOV7fs64', // Медведь просит есть
    'vSF3u5eaT7s', // Tom Scott rips a fat cloud (Content Aware Scale)
    'Zo6QPWfhDbs', // When the DOOM music kicks in
    'EwTZ2xpQwpA', // "Chocolate Rain" Original Song by Tay Zonday
    'QZShA_a-5r8', // Costumed Person Destroys The Drums At Children’s Music Concert - NyangoStar -
    '3HjIljJd-o0', // Shoes
    'NB-9XoUQw3o', // Duck dancing Hatsune Miku Oblivion
    '2_rY6gn7GNM', // Austin Powers in Mass Effect
    'qcdkbcjTBoE', // Seal Yells and Sighs Like Man
    't40AkX1wX_8', // 4 BIG GUYS - (Full Version)
    'GNndX9qua1o', // egg song
    'qcR_JYORXx8', // Cannon Crashing a Noob in RuneScape
    'ZWeC4l5661U', // Paradox Dev vs QA
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