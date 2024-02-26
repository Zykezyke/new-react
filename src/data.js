const motorcycles = [
  {
    name: "Ducati Panigale V4",
    price: 25000,
    pictures: [
      "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/2023-ducati-panigale-v4-6408162a2f0f1.jpeg",
      "https://images.ctfassets.net/x7j9qwvpvr5s/2zHdnCXkH9Y9ZVZp3D2Zjr/652ac46a2683f06b975cc719b4d5731b/Panigale-MY22-Dinamica-59-Gallery-1920x1080.jpg",
      "https://www.roadracingworld.com/wp-content/uploads/2022/07/DUCATI_PANIGALE_V4S_STATIC_001_UC355519_High_1657552868-e1657552884731.jpg",
    ],
    brand: "Ducati",
    quantity: 10,
  },
  {
    name: "Honda CBR1000RR-R Fireblade",
    price: 28500,
    pictures: [
      "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/5e14280082ae4.jpg",
      "https://i0.wp.com/www.asphaltandrubber.com/wp-content/uploads/2020/09/2021-Honda-CBR1000RR-R-Fireblade-SP-press-launch-45-scaled.jpg?resize=770%2C513&ssl=1",
    ],
    brand: "Honda",
    quantity: 15,
  },
  {
    name: "Kawasaki Ninja ZX-10R",
    price: 16000,
    pictures: [
      "https://www.sydneycitymotorcycles.com.au/assets/full/KAW-NZX10R-MY23.jpg?20230118183338",
      "https://i.pinimg.com/originals/34/4d/bc/344dbcbbc947ef8b3610c8782f3a3763.jpg",
    ],
    brand: "Kawasaki",
    quantity: 2,
  },
  {
    name: "Kawasaki Saki",
    price: 46000,
    pictures: [
      "https://i.pinimg.com/originals/41/61/c7/4161c73193f17d57ff774fd61600548a.png",
      "https://cdn.myanimelist.net/r/200x268/images/characters/4/205959.jpg?s=25e7e34b1f41627e866adfb018ea9910",
      "https://pbs.twimg.com/profile_images/909038888504639490/zYX3LmpB_400x400.jpg",
      "https://i.pinimg.com/736x/5b/13/0c/5b130c93fca147264a42d25edcb7c3f9.jpg",
    ],
    brand: "Kawasaki",
    quantity: 1,
  },
  {
    name: "Yamaha YZF-R1",
    price: 17500,
    pictures: [
      "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/5e215e2ab09be.jpg",
    ],
    brand: "Yamaha",
    quantity: 32,
  },
  {
    name: "BMW S1000RR",
    price: 20500,
    pictures: [
      "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/5e0de94f0dd75.jpeg",
    ],
    brand: "BMW",
    quantity: 21,
  },
  {
    name: "Suzuki GSX-R1000R",
    price: 16500,
    pictures: [
      "https://mc.suzuki.com.ph/app/uploads/2020/04/GSX-R1000R_0001_GSX-R1000RAM2_CB8_Right.webp",
    ],
    brand: "Suzuki",
    quantity: 4,
  },
  {
    name: "Aprilia RSV4 RR",
    price: 21000,
    pictures: [
      "https://cdn.motor1.com/images/mgl/k2ZGN/s1/2019-aprilia-rsv4-rr.jpg",
    ],
    brand: "Aprilia",
    quantity: 55,
  },
  {
    name: "Triumph Daytona Moto2 765",
    price: 17000,
    pictures: [
      "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/13240801-0-85816341.png",
    ],
    brand: "Triumph",
    quantity: 4,
  },
  {
    name: "MV Agusta F4 RR",
    price: 38000,
    pictures: [
      "https://i0.wp.com/www.asphaltandrubber.com/wp-content/uploads/2011/05/2012-MV-Agusta-F4-RR-5.jpg?fit=800%2C533&ssl=1",
    ],
    brand: "MV Agusta",
    quantity: 7,
  },
  {
    name: "Harley-Davidson Street Glide Special",
    price: 25000,
    pictures: [
      "https://d2bywgumb0o70j.cloudfront.net/2019/08/22/b1c4aa98acf95754dd27ca5ce16bd73e_4db2b664ef01b064.jpg",
    ],
    brand: "Harley-Davidson",
    quantity: 0,
  },
  {
    name: "Indian FTR 1200",
    price: 29999,
    pictures: [
      "https://www.indianmotorcycle.com.ph/fileadmin/templates/model_23/swap/intl/ftr-rally/ftr-rally-black-smoke.jpg",
      "https://ezfo86czbpk.exactdn.com/wp-content/uploads/2022/03/Indian-FTR-1200-Championship-Edition-19.jpg?strip=all&lossy=1&sharp=1&ssl=1",
    ],
    brand: "Indian",
    quantity: 0,
  },
  {
    name: "Indian Boy",
    price: 11999,
    pictures: [
      "https://www.superstock.com/cdn/1890/Comp/1890-23432.webp",
      "https://thumbs.dreamstime.com/z/simple-indian-boy-2411699.jpg",
    ],
    brand: "Indian",
    quantity: 1,
  },
  {
    name: "Subaru Impresza",
    price: 29000,
    pictures: [
      "https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/subaru/36414f6ae9a2c408f43e94cacd6d6288.jpg",
      "https://www.cnet.com/a/img/resize/ddcbc6ab198792b43796699876fc35a75c911f6a/hub/2010/08/11/703a9dfc-f0fa-11e2-8c7c-d4ae52e62bcc/34145278_SS01.jpg?auto=webp&fit=crop&height=675&width=1200",
    ],
    brand: "Subaru",
    quantity: 2,
  },
  {
    name: "Subaru Natsuki",
    price: 29000,
    pictures: [
      "https://i0.wp.com/www.animefeminist.com/wp-content/uploads/2021/12/C68B8684-1C61-438E-9F6E-52A2AB758BA7.png",
      "https://pbs.twimg.com/profile_images/846268092435091456/AUp_TPME_400x400.jpg",
      "https://m.media-amazon.com/images/M/MV5BYmJlZGM4MjEtMzlhMy00ZDFmLTgxZjAtMTQ1NDNlNTZlNjFhXkEyXkFqcGdeQXVyMTMxMTI3MjI4._V1_.jpg",
    ],
    brand: "Subaru",
    quantity: 2,
  },
];

export default motorcycles;
