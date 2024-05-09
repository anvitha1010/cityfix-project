const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const imageLinkParagraph = document.getElementById("image-link-paragraph");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
    const file = inputFile.files[0];

    if (file) {
        const imgLink = URL.createObjectURL(file);
        imageView.style.backgroundImage = `url(${imgLink})`;
        imageView.textContent = "";
        imageView.style.border = "0";
        imageLinkParagraph.textContent = "Image Link: " + imgLink;
        // Also set the value of the input field
        document.getElementById("image-link").value = imgLink;
    }
}

const dropArea2 = document.getElementById("drop-area2");
const inputFile2 = document.getElementById("input-file2");
const videoView = document.getElementById("img-view2");
const videoLinkParagraph = document.getElementById("video-link-paragraph");

inputFile2.addEventListener("change", uploadVideo);

function uploadVideo() {
    const file = inputFile2.files[0];

    if (file) {
        const videoLink = URL.createObjectURL(file);
        const videoElement = document.createElement("video");
        videoElement.width = "100%";
        videoElement.height = "100%";
        videoElement.controls = true;

        const sourceElement = document.createElement("source");
        sourceElement.src = videoLink;
        sourceElement.type = "video/mp4";

        videoElement.appendChild(sourceElement);

        // Clear previous content
        videoView.innerHTML = "";
        // Append the new video element
        videoView.appendChild(videoElement);

        videoLinkParagraph.textContent = "Video Link: " + videoLink;
        // Also set the value of the input field
        document.getElementById("video-link").value = videoLink;
    }
}

























function toggleCheckbox(selectedCard) {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        if (card !== selectedCard) {
            card.classList.remove('selected');
            card.querySelector('.checkmark').style.display = 'none';
        }
    });

    selectedCard.classList.toggle('selected');
    var checkmark = selectedCard.querySelector('.checkmark');
    checkmark.style.display = selectedCard.classList.contains('selected') ? 'block' : 'none';

    // Update the form input value
    var selectedCardTitle = selectedCard.querySelector('.card-title').innerText;
    document.getElementById('selectedCardTitle').value = selectedCardTitle;
}