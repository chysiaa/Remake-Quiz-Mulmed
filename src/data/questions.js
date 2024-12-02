const questions = [
    {
        numb: 1,
        question: "Hewan ini dapat menggonggong dan dikenal juga sebagai sahabat manusia. Hewan apakah dia?",
        answer: "Anjing",
        options: [
            "Kucing", 
            "Anjing", 
            "Rubah", 
            "Serigala"
        ],
        mediaType: "image",
        mediaSrc: "asset/anjing.jpg"
    },
    {
        numb: 2,
        question: "Jenis burung ini dapat melebarkan bulu ekornya untuk memikat betina dan menunjukkan dominansi. Burung apakah dia?",
        answer: "Burung Merak",
        options: [
            "Ayam", 
            "Burung Merak", 
            "Burung Beo", 
            "Burung Cendrawasih"
        ],
        mediaType: "video",
        mediaSrc: "asset/peacock.mp4"
    },
    {
        numb: 3,
        question: "Hewan berikut dikenal sebagai mamalia tercepat didunia dan tinggal dibenua Afrika. Hewan apakah dia?",
        answer: "Cheetah",
        options: [
            "Macan", 
            "Cheetah", 
            "Singa", 
            "Leopard"
        ],
        mediaType: "video",
        mediaSrc: "asset/cheetah.mp4"
    },
    {
        numb: 4,
        question: "Hewan ini memiliki karakteristik berupa belalai yang panjang dan mempunyai gading. Apa nama hewan tersebut?",
        answer: "Gajah",
        options: [
            "Badak", 
            "Gajah", 
            "Kuda Nil", 
            "Bison"
        ],
        mediaType: "audio",
        mediaSrc: "asset/elephant.mp3"
    },
    {
        numb: 5,
        question: "Jenis burung ini dapat meniru suara manusia dan memiliki paruh bengkok. Hewan apakah ini?",
        answer: "Burung Beo",
        options: [
            "Burung Hantu", 
            "Burung Beo", 
            "Burung Elang", 
            "Burung Kenari"
            
        ],
        mediaType: "video",
        mediaSrc: "asset/beo.mp4"
    },
    {
        numb: 6,
        question: "Hewan air ini memiliki kecerdasan lebih tinggi daripada hewan serupa lainnya dan suka melompat diatas permukaan laut. Apa namanya?",
        answer: "Lumba-lumba",
        options: [
            "Lumba-lumba", 
            "Paus", 
            "Ikan Hiu", 
            "Anjing Laut"
        ],
        mediaType: "image",
        mediaSrc: "asset/lumba.jpg"
    },
    {
        numb: 7,
        question: "Mamalia ini suka memanjat pohon dan memiliki ekor panjangnya. Apa namanya?",
        answer: "Monyet",
        options: [
            "Monyet", 
            "Kucing", 
            "Tupai", 
            "Koala"
        ],
        mediaType: "video",
        mediaSrc: "asset/monkey.mp4"
    },
    {
        numb: 8,
        question: "Reptil ini dapat mengubah warna tubuhnya untuk berkamuflase. Apa nama hewan tersebut?",
        answer: "Bunglon",
        options: [
            "Kadal", 
            "Bunglon", 
            "Iguana", 
            "Komodo"
        ],
        mediaType: "image",
        mediaSrc: "asset/bunglon.jpeg"
    },
    {
        numb: 9,
        question: "Hewan ini memiliki cangkang keras dan cenderung berjalan lambat. Apa namanya?",
        answer: "Kura-kura",
        options: [
            "Kura-kura", 
            "Siput", 
            "Kepiting", 
            "Udang"
        ],
        mediaType: "image",
        mediaSrc: "asset/kura-kura.jpg"
    },
    {
        numb: 10,
        question: "Hewan ini memiliki telinga yang panjang, dapat melompat tinggi dan identik dengan wortel. Siapakah dia?",
        answer: "Kelinci",
        options: [
            "Rusa", 
            "Kelinci", 
            "Tikus", 
            "Hamster"
        ],
        mediaType: "video",
        mediaSrc: "asset/rabbit.mp4"
    },
    {
        numb: 11,
        question: "Hewan predator berbulu putih tebal dan hidup di daerah kutub. Hewan apakah dia?",
        answer: "Beruang Kutub",
        options: [
            "Beruang Coklat", 
            "Beruang Kutub", 
            "Serigala", 
            "Pinguin"
        ],
        mediaType: "image",
        mediaSrc: "asset/beruang-kutub.jpg"
    },
    {
        numb: 12,
        question: "Binatang ini tidak memiliki kaki namun memiliki taring dan beberapa diantaranya memiliki bisa. Hewan apakah dia?",
        answer: "Ular",
        options: [
            "Komodo", 
            "Ular", 
            "Iguana", 
            "Biawak"
        ],
        mediaType: "image",
        mediaSrc: "asset/ular.jpg"
    },
    {
        numb: 13,
        question: "Binatang ini dikenal sebagai 'Raja Hutan'. Apakah namanya?",
        answer: "Singa",
        options: [
            "Harimau", 
            "Singa", 
            "Cheetah", 
            "Leopard"
        ],
        mediaType: "audio",
        mediaSrc: "asset/singa.mp3"
    },
    {
        numb: 14,
        question: "Hewan air memiliki sirip yang lebar dan memiliki duri diekornya sebagai bentuk perlindungan. Apa nama binatang tersebut?",
        answer: "Ikan Pari",
        options: [
            "Ikan Hiu", 
            "Ikan Pari", 
            "Ikan Paus", 
            "Lumba-lumba"
        ],
        mediaType: "image",
        mediaSrc: "asset/ikan-pari.jpg"
    },
    {
        numb: 15,
        question: "Binatang marsupial dari Australia ini memiliki kantung diperutnya untuk menyimpan anak-anaknya. Apakah dia?",
        answer: "Kanguru",
        options: [
            "Koala", 
            "Kanguru", 
            "Panda", 
            "Beruang"
        ],
        mediaType: "image",
        mediaSrc: "asset/kangoroo.jpg"
    },
    {
        numb: 16,
        question: "Jenis burung ini digemari oleh peminat burung kicau dan berwarna kuning. Apakah namanya?",
        answer: "Burung Kenari",
        options: [
            "Burung Kenari", 
            "Burung Beo", 
            "Burung Hantu", 
            "Burung Merpati"
        ],
        mediaType: "video",
        mediaSrc: "asset/kenari.mp4"
    },
    {
        numb: 17,
        question: "Binatang ini dikenal dengan lehernya yang panjang. Apa namanya?",
        answer: "Jerapah",
        options: [
            "Jerapah", 
            "Zebra", 
            "Kuda", 
            "Gajah"
        ],
        mediaType: "image",
        mediaSrc: "asset/jerapah.jpg"
    },
    {
        numb: 18,
        question: "Hewan ini memiliki bulu dengan corak bintik hitam yang mirip dengan cheetah. Apa nama hewan ini?",
        answer: "Leopard",
        options: [
            "Singa", 
            "Cheetah", 
            "Harimau", 
            "Leopard"
        ],
        mediaType: "video",
        mediaSrc: "asset/leopard.mp4"
    },
    {
        numb: 19,
        question: "Burung ini merupakan predator nokturnal, suara kepakan yang hampir tidak terdengar, serta dapat memutarkan kepalanya 270 derajat. Apa namanya?",
        answer: "Burung Hantu",
        options: [
            "Burung Hantu", 
            "Burung Merak", 
            "Burung Kenari", 
            "Burung Elang"
        ],
        mediaType: "audio",
        mediaSrc: "asset/hantu.mp3"
    },
    {
        numb: 20,
        question: "Hewan ini merupakan hewan amfibi dan bergerak dengan cara melompat. Apa hewan tersebut?",
        answer: "Katak",
        options: [
            "Kura-kura", 
            "Katak", 
            "Buaya", 
            "Salamander"
        ],
        mediaType: "audio",
        mediaSrc: "asset/frog.mp3"
    },
    {
        numb: 21,
        question: "Hewan ini memiliki corak loreng hitam dan oranye ditubuhnya. Hewan apakah ini?",
        answer: "Harimau",
        options: [
            "Harimau", 
            "Leopard", 
            "Singa", 
            "Cheetah"
        ],
        mediaType: "image",
        mediaSrc: "asset/harimau.jpg"
    },
    {
        numb: 22,
        question: "Hewan ini memiliki populasi yang tinggi dibeberapa negara dan dapat dijadikan hewan balap diperlombaan. Apa namanya?",
        answer: "Burung Merpati",
        options: [
            "Burung Kenari", 
            "Burung Hantu", 
            "Burung Merpati", 
            "Burung Elang"
        ],
        mediaType: "image",
        mediaSrc: "asset/burung-merpati.jpeg"
    },
    {
        numb: 23,
        question: "Aku tinggal dibenua Afrika dan dapat mengeluarkan suara tertawa seperti manusia. Hewan apakah aku?",
        answer: "Hyena",
        options: [
            "Hyena", 
            "Serigala", 
            "Beruang", 
            "Kucing"
        ],
        mediaType: "audio",
        mediaSrc: "asset/hyena.mp3"
    },

    {
        numb: 24,
        question: "Hewan ini dikenal sebagai representasi dari kecerdasan dan kelicikan. Apa nama hewan tersebut?",
        answer: "Rubah",
        options: [
            "Rubah", 
            "Anjing", 
            "Serigala", 
            "Harimau"
        ],
        mediaType: "audio",
        mediaSrc: "asset/Fox.mp3"
    },
    {
        numb: 25,
        question: "Hewan ini merupakan hewan terbesar didunia dan dapat mengeluarkan frekuensi suara didalam air?",
        answer: "Paus",
        options: [
            "Lumba-lumba", 
            "Ikan Buntal", 
            "Paus", 
            "Hiu"
        ],
        mediaType: "audio",
        mediaSrc: "asset/whale.mp3"
    }
];

export default questions;
