const questions = [
    {
        numb: 1,
        question: "Hewan ini dikenal sebagai sahabat manusia dan suka menggonggong. Siapakah dia?",
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
        question: "Hewan ini bisa terbang dan memiliki bulu berwarna-warni. Apa nama hewan ini?",
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
        question: "Hewan ini dikenal dengan kemampuan berlari cepat dan bintik-bintik di tubuhnya. Apakah hewan ini?",
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
        question: "Hewan ini memiliki belalai panjang dan dikenal sebagai hewan darat terbesar. Apa namanya?",
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
        question: "Hewan ini dikenal pandai meniru suara manusia. Hewan apakah ini?",
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
        question: "Hewan ini sangat cerdas dan suka melompat di laut. Apa namanya?",
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
        question: "Hewan ini suka memanjat pohon dan dikenal dengan ekor panjangnya. Apa namanya?",
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
        question: "Hewan ini dapat mengubah warna tubuhnya untuk berkamuflase. Siapakah dia?",
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
        question: "Hewan ini memiliki cangkang keras dan berjalan lambat. Apa namanya?",
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
        question: "Hewan ini dikenal dengan telinganya yang panjang dan suka makan wortel. Siapakah dia?",
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
        question: "Hewan ini berbulu tebal dan hidup di daerah dingin. Apa namanya?",
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
        question: "Hewan ini berbisa dan dikenal dengan taringnya yang tajam. Siapakah dia?",
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
        question: "Hewan ini disebut juga sebagai 'Raja Hutan'. Apa namanya?",
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
        question: "Hewan ini bisa berenang dan dikenal dengan siripnya yang lebar. Apa namanya?",
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
        question: "Hewan ini memiliki kantung di perutnya untuk membawa anak-anaknya. Siapakah dia?",
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
        question: "Hewan ini dikenal dengan suara melengkingnya dan sering dijadikan hewan peliharaan. Apa namanya?",
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
        question: "Hewan ini dikenal dengan lehernya yang panjang. Apa namanya?",
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
        question: "Hewan ini punya bulu dengan banyak bintik hitam. Apa nama hewan ini?",
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
        question: "Hewan ini dikenal dengan suara 'kukuk'. Apa namanya?",
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
        question: "Hewan ini suka hidup di air dan memiliki kulit licin. Apa namanya?",
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
        question: "Hewan ini dikenal dengan loreng hitam dan oranye di tubuhnya. Apakah ini?",
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
        question: "Hewan ini dikenal dengan suara melengkingnya dan sering dijadikan hewan peliharaan. Apa namanya?",
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
        question: "Siapakah aku? Aku suka tertawa seperti manusia.",
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
        question: "Suara apakah ini? Aku suka menggonggong di malam hari.",
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
        question: "Hewan apakah ini yang mengeluarkan suara mendalam saat berenang?",
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
