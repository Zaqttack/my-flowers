const videoPath = 'assets/video/'
const videoType = '.mp4'
const videoStorage = [
    'i_may_not_know_my_flowers',
    'red_birb',
    'set_the_record_straight',
    'update_day',
    'j_roc_it_could_happen_to_you',
    'how_to_be_a_slytherin'
]

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        video = document.querySelector('video')
        chosenVideo = videoStorage[Math.round(Math.random() * (videoStorage.length - 1))]

        video.setAttribute('src', videoPath + chosenVideo + videoType)
    }
}

window.addEventListener('keydown', (event) => {
    if (event.ctrlKey === true && event.key === 'b') {
        video = document.querySelector('video')
        video.setAttribute('src', videoPath + 'i_may_not_know_my_flowers' + videoType)
        console.log('forced bitch video')
    }
})