// youtube embed parameters: https://developers.google.com/youtube/player_parameters#Parameters

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
    'VBBMfHGMs7I', // Making An Emotional Connection Through Freestyle - Omegle Bars 18
    '8FhGOV7fs64', // Медведь просит есть
    'vSF3u5eaT7s', // Tom Scott rips a fat cloud (Content Aware Scale)
    'Zo6QPWfhDbs', // When the DOOM music kicks in
    'EwTZ2xpQwpA', // "Chocolate Rain" Original Song by Tay Zonday
    'QZShA_a-5r8', // Costumed Person Destroys The Drums At Children's Music Concert - NyangoStar -
    '3HjIljJd-o0', // Shoes
    'NB-9XoUQw3o', // Duck dancing Hatsune Miku Oblivion
    '2_rY6gn7GNM', // Austin Powers in Mass Effect
    'qcdkbcjTBoE', // Seal Yells and Sighs Like Man
    't40AkX1wX_8', // 4 BIG GUYS - (Full Version)
    'GNndX9qua1o', // egg song
    'qcR_JYORXx8', // Cannon Crashing a Noob in RuneScape
    'ZWeC4l5661U', // Paradox Dev vs QA
    '_XVDvNpQmas', // What Google Stadia Would Have Looked Like in the '90s
    'xuCn8ux2gbs', // history of the entire world, i guess
    'XM4VyBxw378', // Yoshi's Island MEMES (2019)
    'yIL9wLxG01M', // WASO BEECONNEE
]

// start times in seconds for videos that should begin at a specific point
const videoStartTimes = {
    'VBBMfHGMs7I': 1063,
}

const failedIDs = new Set()
let player
let currentId

function pickRandom() {
    const pool = videoIDs.filter(id => !failedIDs.has(id))
    return pool[Math.floor(Math.random() * pool.length)] ?? videoIDs[0]
}

function loadVideo(id) {
    currentId = id
    player.loadVideoById({ videoId: id, startSeconds: videoStartTimes[id] ?? 0 })
}

function onYouTubeIframeAPIReady() {
    currentId = pickRandom()
    player = new YT.Player('player', {
        videoId: currentId,
        playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            rel: 1,
            start: videoStartTimes[currentId] ?? 0,
        },
        events: {
            onStateChange: (event) => {
                if (event.data === YT.PlayerState.ENDED) {
                    player.seekTo(videoStartTimes[currentId] ?? 0)
                    player.playVideo()
                }
            },
            onError: (event) => {
                // 100: not found/private  101/150: embedding disabled
                const reasons = { 100: 'not found/private', 101: 'embedding disabled', 150: 'embedding disabled' }
                const reason = reasons[event.data] ?? `error ${event.data}`
                const next = pickRandom()
                console.log(`skipping ${currentId} (${reason}) → ${next}`)
                failedIDs.add(currentId)
                loadVideo(next)
            },
        },
    })
}

// press b to force play "I may not know my flowers...."
window.addEventListener('keydown', (e) => {
    if (e.key === 'b') loadVideo('ZL38UKvHhuQ')
})

// inject YouTube IFrame API — calls onYouTubeIframeAPIReady when ready
const tag = document.createElement('script')
tag.src = 'https://www.youtube.com/iframe_api'
document.head.appendChild(tag)
