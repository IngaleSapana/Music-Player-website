const music = new Audio('audio/arjit_song/1.mp3');
   // music.play();

const songs =[
    {
        id:1,
        songName:`Animal Mashup<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/argit_poster/1.jpg"
    },
    {
        id:2,
        songName:`Dil ke Pass<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/argit_poster/2.jpg"
    },
    {
        id:3,
        songName:`Hawayain<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/argit_poster/3.jpg"
    },
    {
        id:4,
        songName:`Kesriya<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/argit_poster/4.jpg"
    },
    {
        id:5,
        songName:`arjit singh mashup<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/argit_poster/5.jpg"
    },
    {
        id:6,
        songName:`Satranga<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/argit_poster/6.jpg"
    },
    {
        id:7,
        songName:`Tere Pyarr Main<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/argit_poster/7.jpg"
    },
    {
        id:8,
        songName:`Tum hi ho<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/argit_poster/8.jpg"
    },
    {
        id:9,
        songName:`Ve kamleya<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/argit_poster/9.jpg"
    },
    {
        id:10,
        songName:`Hawayein<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/argit_poster/3.jpg"
    },
    {
        id:11,
        songName:`Kesariya<br>
        <div class="sub_title">Arjit singh</div>`,
        poster:"img/argit_poster/4.jpg"
    },
    {
        id:12,
        songName:`Arjit singh mashaup<br>
        <div class="sub_title">Arjit singh</div>`,
        poster:"img/argit_poster/5.jpg"
    },
    {
        id:13,
        songName:`Satranga<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/argit_poster/6.jpg"
    },
    {
        id:14,
        songName:`Ram Aayeng<br>
        <div class="sub_title">Swati Mishra</div>`,
        poster:"img/argit_poster/7.jpg"
    },
    {
        id:15,
        songName:`Tere Hawale<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/argit_poster/7.jpg"
    },
    {
        id:16,
        songName:`Ve Kamleya<br>
        <div class="sub_title">Snajeet Hegade</div>`,
        poster:"img/argit_poster/9.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});

let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');

masterplay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');

    }
    
});

const makeAllplay = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e1)=>{
        e1.classList.add('bi-play-circle-fill');
        e1.classList.remove('bi-pause-fill');
       
    })
}

const makeAllBackground = () =>{
     Array.from(document.getElementsByClassName('songItem')).forEach((e1)=>{
        e1.style.background = 'rgb(105, 105, 105, .0)';
     })
}

let index =0;
let Poster_master_play = document.getElementById('Poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(e1)=>{
        index = e1.target.id;
        music.src = `audio/arjit_song/${index}.mp3`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        download_music.href =`audio/arjit_song/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss=>{
            let{songName ,poster}= elss;
            title.innerHTML = songName;
            Poster_master_play.src = poster;
            download_music.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index -1].style.background='rgb(105, 105, 105, .2)';
        makeAllplay();
        e1.target.classList.remove('bi-play-circle-fill');
        e1.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');

let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_duu=music.duration;

    let min1 = Math.floor(music_duu/60);
    let sec1 = Math.floor(music_duu%60);

    if(sec1<10){
        sec1 =`0${sec1}`;
    }
    currentend.innerText=`${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);

    if(sec2<10){
        sec2 =`0${sec2}`;
    }

    currentstart.innerText=`${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_duu)*100);
    seek.value =progressBar;
    let seekbar=seek.value;
    bar2.style.width =`${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value * music.duration /100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value >0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value >50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a= vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left =`${vol_a}%`;
    music.volume = vol_a/100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -=1;

    if(index<1){
        index= Array.from(document.getElementsByClassName('songItem')).length;

    }

    music.src = `audio/arjit_song/${index}.mp3`;
    music.play();
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let{songName ,poster}= elss;
        title.innerHTML = songName;
        Poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index -1].style.background='rgb(105, 105, 105, .2)';
    makeAllplay();
    e1.target.classList.remove('bi-play-circle-fill');
    e1.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click',()=>{
    index++;

    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;

    }

    music.src = `audio/arjit_song/${index}.mp3`;
    music.play();
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let{songName ,poster}= elss;
        title.innerHTML = songName;
        Poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index -1].style.background='rgb(105, 105, 105, .2)';
    makeAllplay();
    e1.target.classList.remove('bi-play-circle-fill');
    e1.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});
    

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let items = document.getElementsByClassName('items')[0];

pop_art_right.addEventListener('click',()=>{
    items.scrollLeft += 330;
});
pop_art_left.addEventListener('click',()=>{
    items.scrollLeft -= 330;
});


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
     let a = shuffle.innerHTML;

     switch (a) {
        case"next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'next';
                break;
     }
})


const next_music =()=>{
        
        if(index == songs.length){
            index = 1;
        }
        else{
            index++;
        }
        music.src = `audio/arjit_song/${index}.mp3`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        download_music.href =`audio/arjit_song/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss=>{
            let{songName ,poster}= elss;
            title.innerHTML = songName;
            Poster_master_play.src = poster;
            download_music.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index -1].style.background='rgb(105, 105, 105, .2)';
        makeAllplay();
        e1.target.classList.remove('bi-play-circle-fill');
        e1.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

}

const repeat_music =()=>{
    index;
    music.src = `audio/arjit_song/${index}.mp3`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');

    download_music.href =`audio/arjit_song/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let{songName ,poster}= elss;
        title.innerHTML = songName;
        Poster_master_play.src = poster;
        download_music.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index -1].style.background='rgb(105, 105, 105, .2)';
    makeAllplay();
    e1.target.classList.remove('bi-play-circle-fill');
    e1.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

}

const random_music =()=>{

    if(index == songs.length){
        index = 1;
    }
    else{
        index = Math.floor((Math.random()* songs.length)+1);
    }
    
    music.src = `audio/arjit_song/${index}.mp3`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');

    download_music.href =`audio/arjit_song/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let{songName ,poster}= elss;
        title.innerHTML = songName;
        Poster_master_play.src = poster;
        download_music.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index -1].style.background='rgb(105, 105, 105, .2)';
    makeAllplay();
    e1.target.classList.remove('bi-play-circle-fill');
    e1.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

}

music.addEventListener('ended',() =>{

    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;        
    }
   
})
