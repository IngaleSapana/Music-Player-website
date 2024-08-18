const music = new Audio('audio/1.mp3');
   // music.play();

const songs =[
    {
        id:1,
        songName:`Guli Mata<br>
        <div class="sub_title">Saad Lamjarred</div>`,
        poster:"img/img_1.jpg"
    },
    {
        id:2,
        songName:`Kabhi Sham Dhale<br>
        <div class="sub_title">Mohammad Faiz</div>`,
        poster:"img/img_2.jpg"
    },
    {
        id:3,
        songName:`Leke Prabhu ka<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/img_3.jpg"
    },
    {
        id:4,
        songName:`Mere Ghar<br>
        <div class="sub_title">Jubin Nautiyal</div>`,
        poster:"img/img_4.jpg"
    },
    {
        id:5,
        songName:`O Mahi<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/img_5.jpg"
    },
    {
        id:6,
        songName:`Ram Aayenge<br>
        <div class="sub_title">Swati Mishra</div>`,
        poster:"img/img_6.jpg"
    },
    {
        id:7,
        songName:`Tere Hawale<br>
        <div class="sub_title">SArjit Singh Shilpa Rao</div>`,
        poster:"img/img_7.jpg"
    },
    {
        id:8,
        songName:`Piku<br>
        <div class="sub_title">Snajeet Hegade</div>`,
        poster:"img/img_8.jpg"
    },
    {
        id:9,
        songName:`Guli Mata<br>
        <div class="sub_title">Saad Lamjarred</div>`,
        poster:"img/img_9.jpg"
    },
    {
        id:10,
        songName:`Kabhi Sham Dhale<br>
        <div class="sub_title">Mohammad faiz</div>`,
        poster:"img/img_10.jpg"
    },
    {
        id:11,
        songName:`Leke Prabhu<br>
        <div class="sub_title">Arjit singh Nikhita Gandi</div>`,
        poster:"img/img_11.jpg"
    },
    {
        id:12,
        songName:`Mere Ghar<br>
        <div class="sub_title">Jubin Nautiyal</div>`,
        poster:"img/img_12.jpg"
    },
    {
        id:13,
        songName:`O Mahi<br>
        <div class="sub_title">Arjit Singh</div>`,
        poster:"img/img_6.jpg"
    },
    {
        id:14,
        songName:`Ram Aayeng<br>
        <div class="sub_title">Swati Mishra</div>`,
        poster:"img/img_7.jpg"
    },
    {
        id:15,
        songName:`Tere Hawale<br>
        <div class="sub_title">Arjit Singh Shilpa Rao</div>`,
        poster:"img/img_2.jpg"
    },
    {
        id:16,
        songName:`Piku<br>
        <div class="sub_title">Snajeet Hegade</div>`,
        poster:"img/img_5.jpg"
    },
    {
        id:17,
        songName:`Piku<br>
        <div class="sub_title">Snajeet Hegade</div>`,
        poster:"img/img_12.jpg"
    },
    {
        id:18,
        songName:`Tu Hai To Muje<br>
        <div class="sub_title">Arjit singh</div>`,
        poster:"img/img_9.jpg"
    },
    {
        id:19,
        songName:`Gunjega Ek<br>
        <div class="sub_title">Jeetu Sharma</div>`,
        poster:"img/img_1.jpg"
    },
    {
        id:20,
        songName:`Jiye to Jiye<br>
        <div class="sub_title">Stebin Ben</div>`,
        poster:"img/img_11.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


//search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const{id, songName, poster} = element;

    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#"+id;
    card.innerHTML=
    `<img src="${poster}" alt="">
     <div class="content"> 
         ${songName}
    </div>`;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup',()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value)>-1) {

            items[index].style.display = "flex";
            
        } else {

            items[index].style.display = "none";
            
        }
        if (input.value==0) {
            search_results.style.display="none";
            
        } else {
            search_results.style.display="";
        }
    }
})



//search data end


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
        music.src = `audio/${index}.mp3`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        download_music.href =`audio/${index}.mp3`;

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

    music.src = `audio/${index}.mp3`;
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

    music.src = `audio/${index}.mp3`;
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
        music.src = `audio/${index}.mp3`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        download_music.href =`audio/${index}.mp3`;

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
    music.src = `audio/${index}.mp3`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');

    download_music.href =`audio/${index}.mp3`;

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
    
    music.src = `audio/${index}.mp3`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');

    download_music.href =`audio/${index}.mp3`;

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
