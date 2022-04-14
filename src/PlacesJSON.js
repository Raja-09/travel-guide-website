const PlacesJSON = [
    {
        name: "Taj Mahal",
        description:
            "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.",
        image:
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
        name: "Varnasi",
        description:
            "Varnasi is a hill station in the Indian state of Kerala. It is located in the Varnasi district of the state of Kerala. It is the administrative headquarters of the Varnasi district. Varnasi is a hill station in the Indian state of Kerala. It is located in the Varnasi district of the state of Kerala. It is the administrative headquarters of the Varnasi district.",
        image:
            "https://www.planetware.com/wpimages/2020/02/india-varanasi-best-places-to-visit-ganges-river.jpg",
    },
    {
        name: "Ellora Caves",
        description:
            "Ellora Caves is a cave system located in the Ellora region of Kerala, India. It is a part of the Ellora National Park, a UNESCO World Heritage Site. The caves are located in the Ellora National Park, a UNESCO World Heritage Site. The caves are located in the Ellora National Park, a UNESCO World Heritage Site.",
        image:
            "https://assets.suitcasemag.com/images/hero_mobile/246729-india-ellora-caves.jpg",
    },
    {
        name: "Coorg",
        description:
            "Coorg is a hill station in the Indian state of Kerala. It is located in the Varnasi district of the state of Kerala. It is the administrative headquarters of the Varnasi district. Coorg is a hill station in the Indian state of Kerala. It is located in the Varnasi district of the state of Kerala. It is the administrative headquarters of the Varnasi district.",
        image:
            "https://images.unsplash.com/flagged/photo-1592544858330-7ac10a0468e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vcmd8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
        name: "Shimla",
        description:
            "Among the top hill stations in Himachal, Shimla derives its name from 'Goddess Shyamala', an incarnation of Goddess Kali. Kali Bari Temple, Annandale, Vice Regal Lodge, Jakhu Temple / Jakhu Hill, The Mall, Tara Devi Temple, Christ Church, and Kalka - Shimla Railway are some of the best tourist places in Shimla.",
        image:
            "https://static.theprint.in/wp-content/uploads/2018/10/Shimla.jpg?compress=true&quality=80&w=376&dpr=2.6",
    },
    {
        name: "Munnar",
        description:
            "The rolling hills around Munnar, South India's largest tea-growing region, are carpeted in emerald-green tea plantations, contoured, clipped and sculpted like ornamental hedges.",
        image:
            "https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Munnar-In-December-cover_22nd-Nov.jpg",
    },
    {
        name: "Manali",
        description:
            "With mountain adventures beckoning from all directions, Manali is a year-round magnet",
        image:
            "https://www.adotrip.com/public/images/city/master_images/60fea3d330d04-Manali_in_Himachal_Pradesh.jpg",
    },
    {
        name: "Amber Fort",
        description:
            "Amer Fort or Amber Fort is a fort located in Amer, Rajasthan, India.This palace, along with Jaigarh Fort, is located immediately above on the Cheel ka Teela (Hill of Eagles) of the same Aravalli range of hills",
        image:
            "https://camo.githubusercontent.com/1cd2de51e0807765e59967fdc0e0ba7cfbbe0d246830f7bca55112f7b6ee8c68/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f312f31622f416d6265725f466f72745f2532382545302541342538362545302541342541452545302541352538372545302541342542305f2545302541342539352545302541342542455f2545302541342539352545302541342542462545302541342542322545302541342542455f2532392e6a70672f3235363070782d416d6265725f466f72745f2532382545302541342538362545302541342541452545302541352538372545302541342542305f2545302541342539352545302541342542455f2545302541342539352545302541342542462545302541342542322545302541342542455f2532392e6a7067",
    },
    {
        name: "Hawa Palace",
        description:
            "The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.",
        image:
            "https://camo.githubusercontent.com/00778eb20156deb728e1ce45ae6acc2a18a0d55f047e1e9d05c64fed7da9ded3/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f622f62342f32303139313231385f506125433525383261635f5769617472254333254233775f775f4a61697075727a655f313132395f393132342e6a70672f3235363070782d32303139313231385f506125433525383261635f5769617472254333254233775f775f4a61697075727a655f313132395f393132342e6a7067",
    },
    {
        name: "Red Fort",
        description:
            "The Red Fort or Lal Qila is a historic fort in Old Delhi, Delhi in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi.",
        image:
            "https://camo.githubusercontent.com/ed99b6df3a6958acc7545327ede264c572ba03630f374c198b06b64c0aa2da95/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f322f32612f44656c68695f666f72742e6a70672f3238383070782d44656c68695f666f72742e6a7067",
    },
    {
        name: "City Palace",
        description:
            "City Palace, Udaipur is a palace complex situated in the city of Udaipur in the Indian state of Rajasthan. It was built over a period of nearly 400 years, with contributions from several rulers of the Mewar dynasty.",
        image:
            "https://camo.githubusercontent.com/59ccf8bc6ab1db45b2047d172b24c57699acb195896df9b5a23a1c41bcb88387/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f362f36392f556461697075725f436974795f50616c6163652e6a7067",
    },
    {
        name: "Qutub Minar",
        description:
            "The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai, India. It was erected to commemorate the landing of King-Emperor George V",
        image:
            "https://camo.githubusercontent.com/7a6af6a289f765e5937bfc4aa107cde8e402d4541baaf0447b85cc44dc9f565f/68747470733a2f2f656e637279707465642d74626e302e677374617469632e636f6d2f696d616765733f713d74626e3a414e64394763525030686756684a6f516b50483846616566333252646553464f37456568366843637a7739797a325a63355f4e76523373615a5176415f46424b597939784d595050416f54586d7a6f7135434c7835325f7a4e4b72683541",
    },
    {
        name: "Humayun's Tomb",
        description:
            "Humayun's tomb (Hindustani or Urdu: Maqbara-i Humayun) is the tomb of the Mughal Emperor Humayun in Delhi, India. The tomb was commissioned by Humayun's chief consort, Empress Bega Begum ",
        image:
            "https://camo.githubusercontent.com/130b7223601884ed3cb88398575386bb4b08950081ce6bf0420cd02f9ff03aad/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f642f64322f546f6d625f6f665f48756d6179756e2532435f44656c68692e6a70672f3238383070782d546f6d625f6f665f48756d6179756e2532435f44656c68692e6a7067",
    },
    { name: "Lotus Temple", description: "The magnificent Bahá'í House of Worship, also known as the Lotus Temple due to its nine sides and stunning central dome, is an architectural masterpiece. Constructed of white concrete and marble, the entire structure looks as delicate as the flower it resembles.", image: "https://camo.githubusercontent.com/2b50983ebe5aef6b603b6d461f15dea2c9ee82c3c8c095b31394e0c18f5e0e39/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f662f66632f4c6f74757344656c68692e6a7067" },
];

export default PlacesJSON;