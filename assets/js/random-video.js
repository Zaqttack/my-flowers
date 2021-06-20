document.onreadystatechange = function () {
    let chosenVideo;
    let video;

    if (document.readyState === "interactive") {
        const videoPath = 'assets/video/'
        const videoStorage = [
            'i_may_not_know_my_flowers.mp4',
            'red_birb.mp4'
        ]

        video = document.querySelector('video')
        chosenVideo = videoStorage[Math.round(Math.random() * (videoStorage.length - 1))]

        video.setAttribute('src', videoPath + chosenVideo)
    }
}