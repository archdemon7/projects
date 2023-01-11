import playList from './playList.js';
const time = document.querySelector('.time');
const newDate = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const inputName = document.querySelector('.name');
const body = document.querySelector('body');
const getNextSlider = document.querySelector('.slide-next');
const getPrevSlider = document.querySelector('.slide-prev');
let randomNum = getRandomNum(1, 20);
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const playBtn = document.querySelector('.play');
const playBtnPrev = document.querySelector('.play-prev');
const playBtnNext = document.querySelector('.play-next');
let isPlay = false;
let playNum = 0;
const playListContainer = document.querySelector('.play-list');

// Time //
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1);
};
showTime();
// Date //
function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'}
    const currentDate = date.toLocaleDateString('en-EN', options);
    newDate.textContent = currentDate;
};
// Greeting //
function getTimeOfDate() {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 0 && hour < 6){
        return 'night';
    } else if (hour >= 6 && hour < 12) {
        return 'morning';
    } else if (hour >= 12 && hour <18) {
        return 'afternoon';
    } else if (hour >= 18 && hour < 24){
        return 'evening';
    };
};
function showGreeting() {
    const timeOfDate = getTimeOfDate();
    const greetingText = `Good ${timeOfDate}`;
    greeting.textContent = greetingText;
};
function setLocalStorage() {
    localStorage.setItem('name', inputName.value);
};
window.addEventListener('beforeunload', setLocalStorage);
function getLocalStorage() {
    if (localStorage.getItem('name')) {
        inputName.value = localStorage.getItem('name');
    };
};
window.addEventListener('load', getLocalStorage);
// Background and Slider //
// Random num function //
function getRandomNum(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function setBg () {
    const img = new Image();
    let timeOfDay = getTimeOfDate();
    let bgNum = (randomNum + '').padStart(2, "0");
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.addEventListener('load', () => body.style.backgroundImage = `url(${img.src})`)
};
setBg();
function getSlideNext(){
    randomNum < 20 ? randomNum++ : randomNum = 1;
    setBg();
};
function getSlidePrev(){
    randomNum > 1 ? randomNum-- : randomNum = 20;
    setBg();
};
getNextSlider.addEventListener('click', getSlideNext);
getPrevSlider.addEventListener('click', getSlidePrev);
// Weather vidget //
function setLocalStorageWeather() {
    localStorage.setItem('city', city.value);
};
window.addEventListener('beforeunload', setLocalStorageWeather);
function getLocalStorageWeather() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    } else {
        city.value = 'Minsk';
    };
};
window.addEventListener('load', getLocalStorageWeather);
async function getWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=467952f65c2b3e5e9b6174d02e6c3e18&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.floor(data.main.temp)}°C`;
        wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity: ${Math.floor(data.main.humidity)}%`
        weatherDescription.textContent = `${data.weather[0].main}`;
    } catch {
        temperature.textContent = 'ERROR';
        wind.textContent = `Wind speed: ERROR`;
        humidity.textContent = `Humidity: ERROR`
        weatherDescription.textContent = ``;
    }   
};
city.addEventListener('change', getWeather);
window.addEventListener('load', getWeather);
// Quote of the Day //
async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    randomNum =  getRandomNum(1, 20) - 1;
    quote.textContent = data[randomNum].text;
    author.textContent = data[randomNum].author;
  }
  getQuotes();
  changeQuote.addEventListener('click', getQuotes);
// Audioplayer //
const audio = new Audio();
let currentTime = 0;
let currentVolume = 0.3;

audio.src = playList[playNum].src;
audio.currentTime = 0;
audio.volume = currentVolume;
function playAudio() {
    audio.src = playList[playNum].src;
    audio.currentTime = currentTime;
    audio.play();
    isPlay = true;
    playBtn.classList.add('pause');
    setInterval(updateSongDurationBar, 1000);
    playItemActive(); 
    title();
};
function pauseAudio() {
    audio.pause();
    currentTime = audio.currentTime;
    isPlay = false;
    playBtn.classList.remove('pause');

};
playBtn.addEventListener('click', () => {
    if (!isPlay){
        playAudio();
    } else {
        pauseAudio();
    };
})
audio.addEventListener('ended', playNext);
function playNext() {
    pauseAudio();
    currentTime = 0;
    playNum == playList.length - 1 ? playNum = 0 : playNum++;  
    playAudio();
    title()
};
playBtnNext.addEventListener('click', playNext);
function playPrev() {
    pauseAudio();
    currentTime = 0;
    playNum == 0 ? playNum = playList.length - 1 : playNum--;
    playAudio();
    title();
};
playBtnPrev.addEventListener('click', playPrev);
playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = el.title;
    playListContainer.append(li); 
});
function playItemActive() {
    if (isPlay == true){
        const playItems = document.querySelectorAll('.play-item');
        playItems.forEach((el, index) => {
            if (index == playNum) {
                el.classList.add('item-active');
            } else {
                el.classList.remove('item-active');
            };
        });
    };
};
// audioplayer2 //
// Song title //
const songTitle = document.querySelector('.song-title');
function title() {
    playList.forEach((el, index) => {
        if (index == playNum){
            songTitle.textContent = el.title;
        }
    });
};
// Song duration bar //
const songDurationBar = document.querySelector('.song-duration-bar');
const songTime = document.querySelector('.song-time');
const duration = document.querySelector('.song-duration');

function handleSongDurationBar() {
    audio.currentTime = songDurationBar.value;
}
songDurationBar.addEventListener('change', handleSongDurationBar);

const formatTime = (time) => {
    let minutes = Math.floor((time / 60));
    let seconds = Math.floor(time - (minutes * 60));
    if (seconds < 10) {
      seconds = `0${seconds}`;
    };
    return `${minutes}:${seconds}`;
};

function updateSongDurationBar() {
    songDurationBar.max = audio.duration;
    songDurationBar.value = audio.currentTime;
    const durationValue = audio.currentTime / audio.duration * 100 + 0.5;
    songTime.textContent = formatTime(Math.floor(audio.currentTime));
    duration.textContent = formatTime(Math.floor(audio.duration));
};

// volume bar //
const volumeBtn = document.querySelector('.volume-on');
const songVolume = document.querySelector('.song-volume');

function changeVolume() {
    let volume = songVolume.value / 100;
    audio.volume = volume;
    if (audio.volume == 0){
        audio.muted = true;
        volumeBtn.classList.add('volume-off');
    } else {
        audio.muted = false;
        volumeBtn.classList.remove('volume-off');
    };
};
function muteSong() {
    if (audio.muted == true){
        audio.muted = false;
        volumeBtn.classList.remove('volume-off');
    } else {
        audio.muted = true;
        volumeBtn.classList.add('volume-off');
    };
};
songVolume.addEventListener('change', changeVolume);
volumeBtn.addEventListener('click', muteSong);