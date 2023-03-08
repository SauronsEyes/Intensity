function Map(imgname, x = 0, y = 0, width = 0, height = 0) {
    //put the name of the map image as the parameter, an create the object  background = Map("bg.png");
    this.x = -2300;
    this.y = -2053;
    this.width = 0;
    this.height = 0;

    this.name = imgname;
    this.collision = false;

    this.img;
    this.depth_img;
    this.other_maps = [];
    this.other_maps_depth = [];
    last_position ={x:0,y:0};
    

    this.get_depth_img_name =  function(name=this.name){
        let depth_image_name = ((name.split(".")));
        depth_image_name.splice(1,0,"_depth.");
        depth_image_name = depth_image_name.join("");
        return depth_image_name;
    }
    

    this.saved_settings = {
        //here we will specify the colliders and other stuffs for each map
        //top left (x,y will be x and y) bottom right (x,y) will be w and h
        "map_main.jpg": {
            colliders: [{ x: 745, y: -440, w: -525, h: -925, color:color("green") },
                 {h: -925, w: -2045, x: -830, y: -445, color:color("blue")}, { x: -1530, y: 450, w: -2045, h: -465, color:color("red") },
                 {x: -495, y: -695, w: -650, h: -745, color:color("blue")}
                ,
                 {x: -515, y: -700, w: -670, h: -750, color: color("blue")}
                 ,
                 {x: -690, y: -700, w: -855, h: -750, color: color("blue")}
                 ,
                 {x: -550, y: -720, w: -615, h: -785, color: color("blue")}
                ,
                 {x: -745, y: -735, w: -810, h: -785, color: color("blue")}
                ,
                 {x: -505, y: -880, w: -565, h: -925, color: color("blue")}
                 ,
                 {x: -500, y: -860, w: -570, h: -925, color: color("blue")}
                 ,
                 {x: -790, y: -865, w: -865, h: -925, color: color("blue")},

{x: -315, y: -925, w: -460, h: -990, color:  color("blue")}
,
{x: -275, y: -985, w: -370, h: -1020, color:  color("blue")}
,
{x: -265, y: -965, w: -365, h: -1035, color:  color("blue")}
,
{x: -855, y: -935, w: -935, h: -990, color: color("blue")}
,
{x: 815, y: -420, w: 715, h: -930, color: color("blue")}
,
{x: 790, y: -930, w: 710, h: -1005, color:  color("blue")}
,
{x: 450, y: -1145, w: 295, h: -1280, color: color("blue")}
,
{x: 465, y: -1150, w: 295, h: -1275, color: color("blue")}
,

{x: 640, y: -1140, w: 555, h: -1220, color: color("blue")}
,

{x: 500, y: -1280, w: 440, h: -1315, color: color("blue")}
,

{x: 510, y: -1280, w: 450, h: -1345, color:  color("blue")}
,

{x: 515, y: -1265, w: 435, h: -1355, color:  color("blue")}
,

{x: 660, y: -1155, w: 625, h: -1210, color:  color("blue")}
,

{x: 660, y: -1140, w: 630, h: -1225, color: color("blue")}
,

{x: 150, y: -1170, w: 85, h: -1250, color: color("blue")}
,

{x: 55, y: -1225, w: -40, h: -1300, color:  color("blue")}
,

{x: 615, y: -1475, w: 100, h: -1765, color: color("blue")}
,

{x: 140, y: -1490, w: -45, h: -1720, color:  color("blue")}
,

{x: 655, y: -1520, w: 575, h: -1710, color:  color("blue")}
,

{x: -1025, y: -1305, w: -1145, h: -1385, color: color("blue")}
,

{x: -1220, y: -1300, w: -1335, h: -1380, color: color("blue")}
,

{x: -1550, y: -975, w: -1915, h: -1240, color:  color("blue")}
,

{x: -1895, y: -1165, w: -2010, h: -1240, color: color("blue")}
,

{x: -1890, y: -940, w: -2095, h: -1080, color: color("blue")}
,

{x: -2130, y: -1320, w: -2245, h: -1400, color:  color("blue")}
,

{x: -1990, y: -1405, w: -2045, h: -1480, color: color("blue")}
,

{x: -1420, y: -1705, w: -1475, h: -1765, color: color("blue")},

{x: -195, y: -1405, w: -295, h: -1485, color: color("blue")}
,
 
{x: -140, y: -1290, w: -240, h: -1370, color: color("blue")}

 ,
{x: 160, y: -1170, w: 115, h: -1250, color: color("blue")}

 ,
{x: 805, y: -1215, w: 650, h: -1320, color: color("blue")}
,
 
{x: 810, y: -1235, w: 655, h: -1355, color: color("blue")}
,
 
{x: 805, y: -1225, w: 655, h: -1275, color: color("blue")}
,
 
{x: 650, y: -1265, w: 550, h: -1350, color: color("blue")}
,
 
{x: 545, y: -1340, w: 460, h: -1405, color: color("blue")}
,
 
{x: -145, y: -1275, w: -255, h: -1340, color: color("blue")}
,
 
{x: -140, y: -1275, w: -250, h: -1310, color: color("blue")}
, 
{x: -150, y: -1275, w: -250, h: -1305, color: color("blue")}
, 
{x: 535, y: -1320, w: 485, h: -1365, color: color("blue")}
, 
{x: -295, y: -1945, w: -410, h: -1975, color: color("blue")}
, 
{x: -310, y: -1940, w: -410, h: -2040, color: color("blue")}
, 
{x: -300, y: -1950, w: -350, h: -1975, color: color("blue")}
, 
{x: -535, y: -1760, w: -695, h: -1855, color: color("blue")}
, 
{x: 735, y: -1365, w: 650, h: -1435, color: color("blue")}
, 
{x: -265, y: -2320, w: -325, h: -2395, color: color("blue")}
, 
{x: -500, y: -1800, w: -575, h: -1865, color: color("blue")}
, 
{x: -520, y: -1755, w: -705, h: -1840, color: color("blue")}
, 
{x: -525, y: -1760, w: -690, h: -1835, color: color("blue")}
, 
{x: -1275, y: -1910, w: -1460, h: -1985, color: color("blue")}
, 
{x: -1330, y: -1965, w: -1410, h: -2025, color: color("blue")}
, 
{x: -1305, y: -1950, w: -1345, h: -2000, color: color("blue")}
, 
{x: -1290, y: -1900, w: -1465, h: -1935, color: color("blue")}
, 
{x: -1380, y: -1950, w: -1445, h: -2010, color: color("blue")}
, 
{x: -670, y: -2045, w: -1550, h: -2090, color: color("blue")}
, 
{x: -655, y: -2040, w: -1560, h: -2110, color: color("blue")}
, 
{x: -2330, y: -1345, w: -2385, h: -1410, color: color("blue")}
, 
{x: -2740, y: -1060, w: -3020, h: -1130, color: color("blue")}
, 
{x: -2330, y: -1345, w: -2390, h: -1410, color: color("blue")}
, 
{x: -2735, y: -1060, w: -3020, h: -1140, color: color("blue")}
, 
{x: -2465, y: -670, w: -2585, h: -750, color: color("blue")}
, 
{x: -2650, y: -410, w: -3070, h: -660, color: color("blue")}
, 
{x: -2515, y: -420, w: -2685, h: -520, color: color("blue")}
, 
{x: -2595, y: -485, w: -2690, h: -580, color: color("blue")}
, 
{x: -3050, y: -570, w: -3115, h: -660, color: color("blue")}
, 
{x: -3050, y: -415, w: -3155, h: -505, color: color("blue")}
, 
{x: -1505, y: -2050, w: -1560, h: -2430, color: color("blue")}
, 
{x: -1415, y: -2375, w: -1565, h: -2425, color: color("blue")}
, 
{x: -1420, y: -2370, w: -1565, h: -2445, color: color("blue")}
, 
{x: -805, y: -2085, w: -1380, h: -2345, color: color("blue")}
, 
{x: -780, y: -2060, w: -830, h: -2335, color: color("blue")}
, 
{x: -650, y: -2055, w: -700, h: -2375, color: color("blue")}
, 
{x: -660, y: -2325, w: -775, h: -2395, color: color("blue")}
, 
{x: -1315, y: -2310, w: -1385, h: -2360, color: color("blue")}
, 
{x: 80, y: 460, w: -1200, h: 315, color: color("blue")}
, 
{x: -545, y: 345, w: -810, h: 265, color: color("blue")}
, 
{x: -490, y: 335, w: -560, h: 280, color: color("blue")}
, 
{x: -520, y: 305, w: -565, h: 285, color: color("blue")}
, 
{x: -515, y: 295, w: -560, h: 285, color: color("blue")}
, 
{x: -525, y: 320, w: -570, h: 275, color: color("blue")}
, 
{x: 200, y: 460, w: 45, h: 415, color: color("blue")}
, 
{x: 175, y: 460, w: 55, h: 400, color: color("blue")}
, 
{x: 165, y: 430, w: 45, h: 360, color: color("blue")}
, 
{x: 140, y: 400, w: 60, h: 345, color: color("blue")}
, 
{x: 125, y: 380, w: 65, h: 340, color: color("blue")}
, 
{x: 115, y: 375, w: 45, h: 305, color: color("blue")}
, 
{x: -795, y: 340, w: -855, h: 280, color: color("blue")}
, 
{x: -1190, y: 470, w: -1315, h: 405, color: color("blue")}
, 
{x: -1190, y: 435, w: -1230, h: 350, color: color("blue")}
, 
{x: -1230, y: 440, w: -1270, h: 395, color: color("blue")}
, 
{x: -1215, y: 445, w: -1265, h: 375, color: color("blue")}
, 
{x: -1180, y: 395, w: -1225, h: 345, color: color("blue")}
, 
{x: -1225, y: 395, w: -1260, h: 380, color: color("blue")}
, 
{x: -1715, y: -1940, w: -2640, h: -2030, color: color("blue")}
, 
{x: -2040, y: -1920, w: -2400, h: -1980, color: color("blue")}
, 
{x: -2580, y: -1965, w: -2650, h: -2400, color: color("blue")}
, 
{x: -410, y: -2025, w: -605, h: -2095, color: color("blue")}
, 
{x: -435, y: -2070, w: -585, h: -2150, color: color("blue")}
, 
{x: -525, y: -2085, w: -680, h: -2195, color: color("blue")}
, 
{x: -2025, y: -85, w: -2230, h: -190, color: color("blue")}
, 
{x: -2065, y: -50, w: -2230, h: -100, color: color("blue")}
, 
{x: -2415, y: 450, w: -2680, h: 340, color: color("blue")}
, 
{x: -2555, y: 410, w: -2650, h: 325, color: color("blue")}
, 
{x: -2610, y: 355, w: -2680, h: 245, color:color("blue")},

{x: -1697, y: -1962.5, w: -1757, h: -2432.5, color:  color("blue")}
,

{x: -1702, y: -1967.5, w: -1767, h: -2432.5, color:  color("blue")}
,

{x: -1707, y: -1952.5, w: -1762, h: -2447.5, color:  color("blue")}
,

{x: -1762, y: -2102.5, w: -1897, h: -2217.5, color:  color("blue")}
,

{x: -1762, y: -2087.5, w: -1897, h: -2222.5, color:  color("blue")}
,

{x: -1917, y: -1992.5, w: -2092, h: -2107.5, color:  color("blue")}
,

{x: -2062, y: -1942.5, w: -2197, h: -2167.5, color:  color("blue")}
,

{x: -2082, y: -1982.5, w: -2392, h: -2072.5, color:  color("blue")}
,

{x: -2042, y: -1997.5, w: -2077, h: -2172.5, color:  color("blue")}
,

{x: -2227, y: -2017.5, w: -2387, h: -2162.5, color:  color("blue")}
,

{x: -2437, y: -1992.5, w: -2612, h: -2102.5, color:  color("blue")}
,
 
{x: -1747, y: -2367.5, w: -2252, h: -2442.5, color:  color("blue")}
,
 
{x: -1762, y: -2302.5, w: -1862, h: -2367.5, color:  color("blue")}
,
 
{x: -1747, y: -2292.5, w: -1852, h: -2377.5, color:  color("blue")}
,
 
{x: -2467, y: -2372.5, w: -2782, h: -2432.5, color:  color("blue")}
,
 
{x: -2632, y: -2337.5, w: -2797, h: -2397.5, color:  color("blue")}
,
 
{x: -2657, y: -2467.5, w: -2732, h: -2542.5, color:  color("blue")}
,
 
{x: -2187, y: -2452.5, w: -2237, h: -2527.5, color:  color("blue")}
,
 
{x: -2457, y: -2477.5, w: -2542, h: -2572.5, color:  color("blue")}
,
 
{x: -1082, y: -2457.5, w: -1142, h: -2532.5, color:  color("blue")}
,
 
{x: -567, y: -2272.5, w: -627, h: -2337.5, color:  color("blue")}
,
 
{x: -557, y: -2277.5, w: -657, h: -2352.5, color:  color("blue")}
,
 
{x: -2672, y: -1267.5, w: -2852, h: -1352.5, color:  color("blue")}
,
 
{x: -2957, y: -1252.5, w: -3142, h: -1332.5, color:  color("blue")}
,
 
{x: -2992, y: -1332.5, w: -3112, h: -1367.5, color:  color("blue")}
,
 
{x: -2992, y: -1302.5, w: -3102, h: -1372.5, color:  color("blue")}
,
 
{x: -2857, y: -1307.5, w: -2957, h: -1362.5, color:  color("blue")}
,
 
{x: -2857, y: -1307.5, w: -2962, h: -1377.5, color:  color("blue")}
,
 
{x: -3322, y: -1847.5, w: -3842, h: -2152.5, color:  color("blue")}
,
 
{x: -3322, y: -1847.5, w: -3697, h: -2157.5, color:  color("blue")}
,
 
{x: -3262, y: -2017.5, w: -3362, h: -2097.5, color:  color("blue")}
,
 
{x: -3227, y: -2057.5, w: -3302, h: -2122.5, color:  color("blue")}
,
 
{x: -3262, y: -2002.5, w: -3342, h: -2042.5, color:  color("blue")}
,
 
{x: -3662, y: -1892.5, w: -3842, h: -2147.5, color:  color("blue")}
,
 
{x: 778, y: -2212.5, w: 628, h: -2337.5, color:  color("blue")}
,
 
{x: 783, y: -2217.5, w: 598, h: -2327.5, color:  color("blue")}
,
 
{x: 798, y: -2342.5, w: 533, h: -2522.5, color:  color("blue")}
,
 
{x: 708, y: -2282.5, w: 603, h: -2427.5, color:  color("blue")}
,
 
{x: 808, y: -2397.5, w: 518, h: -2522.5, color:  color("blue")}
,
 
{x: 803, y: -2402.5, w: 538, h: -2512.5, color:  color("blue")}
,
 
{x: 803, y: -2562.5, w: 358, h: -2632.5, color:  color("blue")}
,
 
{x: 408, y: -2577.5, w: 353, h: -3027.5, color:  color("blue")}
,
 
{x: 468, y: -2947.5, w: 358, h: -3027.5, color:  color("blue")}
,
 
{x: 403, y: -2997.5, w: 358, h: -3052.5, color:  color("blue")}
,
 
{x: 783, y: -2582.5, w: 623, h: -2872.5, color:  color("blue")}
,
 
{x: 793, y: -2607.5, w: 443, h: -2767.5, color:  color("blue")}
,
 
{x: 613, y: -2637.5, w: 448, h: -2877.5, color:  color("blue")}
,
 
{x: 683, y: -2732.5, w: 563, h: -2797.5, color:  color("blue")}
,
 
{x: 673, y: -2722.5, w: 563, h: -2822.5, color:  color("blue")}
,
 
{x: 658, y: -2782.5, w: 573, h: -2847.5, color:  color("blue")}
,
 
{x: -3657, y: -2347.5, w: -4052, h: -2657.5, color:  color("blue")}
,
 
{x: -3762, y: -2612.5, w: -4047, h: -2722.5, color:  color("blue")}
,
 
{x: -3752, y: -2632.5, w: -3787, h: -2717.5, color:  color("blue")}
,
 
{x: -3617, y: -2522.5, w: -3682, h: -2612.5, color:  color("blue")}
,
 
{x: -3147, y: -2707.5, w: -3207, h: -2782.5, color:  color("blue")}
,
 
{x: -3122, y: -2882.5, w: -4047, h: -2972.5, color:  color("blue")}
,
 
{x: -3137, y: -2937.5, w: -3317, h: -3082.5, color:  color("blue")}
,
 
{x: -3127, y: -2907.5, w: -3327, h: -3087.5, color:  color("blue")}
,
 
{x: -492, y: -3262.5, w: -677, h: -3342.5, color:  color("blue")}
,
 
{x: -3332, y: -2992.5, w: -3502, h: -3242.5, color:  color("blue")}
,
 
{x: -3342, y: -3197.5, w: -3502, h: -3267.5, color:  color("blue")}
,
 
{x: -3512, y: -2977.5, w: -3682, h: -3257.5, color:  color("blue")}
,
 
{x: -3422, y: -2987.5, w: -3532, h: -3222.5, color:  color("blue")}
,
 
{x: -3432, y: -3162.5, w: -3587, h: -3207.5, color:  color("blue")}
,
 
{x: -3442, y: -3162.5, w: -3542, h: -3222.5, color:  color("blue")}
,
 
{x: -3447, y: -3177.5, w: -3552, h: -3222.5, color:  color("blue")}
,
 
{x: -3437, y: -3182.5, w: -3557, h: -3242.5, color:  color("blue")}
,
 
{x: -3687, y: -3082.5, w: -3932, h: -3317.5, color:  color("blue")}
,
 
{x: -3087, y: -1697.5, w: -3167, h: -1797.5, color:  color("blue")}
,
 
{x: -3217, y: -1707.5, w: -3327, h: -1797.5, color:  color("blue")}
,
 
{x: 123, y: -2467.5, w: 53, h: -2542.5, color:  color("blue")}
,
 
{x: 528, y: -2127.5, w: 438, h: -2187.5, color:  color("blue")}
,
 
{x: 528, y: -2112.5, w: 433, h: -2192.5, color:  color("blue")}
,
 
{x: -3092, y: -3267.5, w: -3162, h: -3352.5, color:  color("blue")}
,
 
{x: -2172, y: -2952.5, w: -2642, h: -3352.5, color:  color("blue")}
,
 
{x: -2022, y: -3012.5, w: -2202, h: -3187.5, color:  color("blue")}
,
 
{x: -2132, y: -3197.5, w: -2197, h: -3337.5, color:  color("blue")}
,
 
{x: -2222, y: -3317.5, w: -2352, h: -3392.5, color:  color("blue")}
,
 
{x: -2327, y: -3317.5, w: -2427, h: -3502.5, color:  color("blue")}
,
 
{x: -2317, y: -3332.5, w: -2637, h: -3497.5, color:  color("blue")}
,
 
{x: -2607, y: -3042.5, w: -2717, h: -3312.5, color:  color("blue")}
,
 
{x: -2592, y: -3052.5, w: -2692, h: -3282.5, color:  color("blue")}
,
 
{x: -2607, y: -3237.5, w: -2667, h: -3292.5, color:  color("blue")}
,
 
{x: -2662, y: -3157.5, w: -2742, h: -3217.5, color:  color("blue")}
,
 
{x: -2667, y: -3067.5, w: -2717, h: -3122.5, color:  color("blue")}
,
 
{x: -1167, y: -3267.5, w: -1342, h: -3342.5, color:  color("blue")}
,
 
{x: -2612, y: -3497.5, w: -2677, h: -3537.5, color:  color("blue")}
,
 
{x: -2602, y: -3487.5, w: -2682, h: -3542.5, color:  color("blue")}
,
 
{x: -2707, y: -3482.5, w: -2772, h: -3537.5, color:  color("blue")}
,
 
{x: -2797, y: -3477.5, w: -2877, h: -3532.5, color:  color("blue")}
,
 
{x: -297, y: -3012.5, w: -497, h: -3087.5, color:  color("blue")}
,
 
{x: -267, y: -3187.5, w: -457, h: -3262.5, color:  color("blue")}
,
 
{x: -252, y: -3242.5, w: -337, h: -3327.5, color:  color("blue")}
,
 
{x: -697, y: -3102.5, w: -797, h: -3192.5, color:  color("blue")}
,
 
{x: -457, y: -3447.5, w: -552, h: -3527.5, color:  color("blue")}
,
 
{x: -637, y: -3582.5, w: -747, h: -3662.5, color:  color("blue")}
,
 
{x: -1602, y: -3442.5, w: -1707, h: -3527.5, color:  color("blue")}
,
 
{x: -1587, y: -2957.5, w: -1777, h: -3047.5, color:  color("blue")}
,
 
{x: -1177, y: -3012.5, w: -1372, h: -3092.5, color:  color("blue")}
,
 
{x: -977, y: -3207.5, w: -1177, h: -3287.5, color:  color("blue")},
,
 
{x: 803, y: -3119.5, w: 333, h: -3664.5, color: color("blue")}
,
 
{x: 273, y: -3144.5, w: 193, h: -3244.5, color: color("blue")}
,
 
{x: 263, y: -3469.5, w: 208, h: -3529.5, color: color("blue")}
,
 
{x: -1037, y: -3449.5, w: -1137, h: -3529.5, color: color("blue")}
,
 
{x: -1582, y: -3104.5, w: -1682, h: -3174.5, color: color("blue")}
,
 
{x: -2087, y: -2759.5, w: -2157, h: -2829.5, color: color("blue")}
,
 
{x: -542, y: -2759.5, w: -612, h: -2844.5, color: color("blue")}
,
 
{x: -3577, y: -1344.5, w: -3652, h: -1414.5, color: color("blue")}
,
 
{x: -3577, y: -1339.5, w: -3637, h: -1414.5, color: color("blue")}
,
 
{x: -3617, y: -1234.5, w: -3877, h: -1319.5, color: color("blue")}
,
 
{x: -2642, y: 475.5, w: -3007, h: 175.5, color: color("blue")}
,
 
{x: -2642, y: 470.5, w: -4042, h: 250.5, color: color("blue")}
,
 
{x: -2982, y: 310.5, w: -4037, h: 195.5, color: color("blue")}
,
 
{x: -3657, y: 225.5, w: -4037, h: -289.5, color: color("blue")}
,
 
{x: -3612, y: -254.5, w: -3787, h: -364.5, color: color("blue")}
,
 
{x: -3717, y: -334.5, w: -3782, h: -399.5, color: color("blue")}
,
 
{x: -692, y: -3109.5, w: -797, h: -3179.5, color: color("blue")}
,
 
{x: -3857, y: -594.5, w: -3937, h: -734.5, color: color("blue")}
,
 
{x: -3857, y: -904.5, w: -3937, h: -1049.5, color: color("blue")}
,
 
{x: 803, y: -254.5, w: 408, h: -379.5, color: color("blue")}
                ],
            events:{ doors:[
                {h: -2128,w: -2247, x: -2172, y : -2053, map:"house.png", other_pos : 0,next_cor:{x:510-((1920-windowWidth)/2),y:-180-(922-windowHeight)/2}}]

            },
            depth:{
                path:`assets/maps/"map_main_depth.jpg"`
            },
            enemiesCount:10,
            size:"native",
            weather:true,
            position: "native",
            type:"hostile"
        },
        "house.png":{

            colliders:[
                {x: 723, y: 260.5, w: 633, h: -344.5, color: color("blue")}
                ,
                 
                {x: 688, y: 265.5, w: 233, h: 130.5, color: color("blue")}
                ,
                 
                {x: 708, y: 255.5, w: 233, h: 105.5, color: color("blue")}
                ,
                 
                {x: 578, y: 165.5, w: 233, h: 30.5, color: color("blue")}
                ,
                 
                {x: 583, y: 190.5, w: 233, h: 35.5, color: color("blue")}
                ,
                 
                {x: 308, y: 380.5, w: 43, h: 220.5, color: color("blue")}
                ,
                 
                {x: 93, y: 340.5, w: 8, h: -369.5, color: color("blue")}
                ,
                 
                {x: 688, y: -89.5, w: 503, h: -224.5, color: color("blue")}
                ,
                 
                {x: 493, y: -99.5, w: 328, h: -209.5, color: color("blue")}
                ,
                 
                {x: 438, y: -179.5, w: 368, h: -249.5, color: color("blue")}
                ,
                 
                {x: 443, y: -179.5, w: 328, h: -239.5, color: color("blue")}
                ,
                 
                {x: 428, y: -214.5, w: 338, h: -254.5, color: color("blue")}
                ,
                 
                {x: 688, y: -314.5, w: 338, h: -354.5, color: color("blue")}
                ,
                 
                {x: 398, y: -214.5, w: 333, h: -399.5, color: color("blue")}
                ,
                
                {x: 403, y: -229.5, w: 328, h: -399.5, color: color("blue")}
                ,
                 
                {x: 173, y: 210.5, w: 103, h: 140.5, color: color("blue")}
                ,
                 
                {x: 223, y: 140.5, w: 148, h: 85.5, color: color("blue")}
                ,
                 
                {x: 213, y: 120.5, w: 143, h: -34.5, color: color("blue")}
                ,
                 
                {x: 218, y: 90.5, w: 108, h: -24.5, color: color("blue")}
                ,
                 
                {x: 223, y: 85.5, w: 98, h: -34.5, color: color("blue")}
                ,
                 
                {x: 268, y: 20.5, w: 193, h: -54.5, color: color("blue")}
                ,
                 
                {x: 268, y: 20.5, w: 188, h: -44.5, color: color("blue")}
                ,
                
                {x: 118, y: 60.5, w: 58, h: 0.5, color: color("blue")}
                ,
                 
                {x: 223, y: 125.5, w: 138, h: 75.5, color: color("blue")}
                ,
                 
                {x: 158, y: 100.5, w: 93, h: 70.5, color: color("blue")}
                 ,
                {x: 243, y: 25.5, w: 188, h: -14.5, color: color("blue")}
                ,
                 
                {x: 313, y: -99.5, w: 248, h: -334.5, color: color("blue")}
                ,
                 
                {x: 298, y: -94.5, w: 148, h: -219.5, color: color("blue")}
                ,
                 
                {x: 138, y: -94.5, w: 38, h: -219.5, color: color("blue")}
                ,
                 
                {x: 173, y: -89.5, w: 143, h: -164.5, color: color("blue")}
                ,
                 
                {x: 178, y: -99.5, w: 143, h: -199.5, color: color("blue")}
                ,
                 
                {x: 128, y: -244.5, w: 43, h: -309.5, color: color("blue")}
                ,
                 
                {x: 133, y: -239.5, w: 43, h: -299.5, color: color("blue")}
                ,
                 
                {x: 133, y: -239.5, w: 43, h: -314.5, color: color("blue")}
                ,
                 
                {x: 258, y: -279.5, w: 78, h: -309.5, color: color("blue")}
                ,
                 
                {x: 268, y: -169.5, w: 238, h: -309.5, color: color("blue")}
                ,
                 
                {x: 263, y: -299.5, w: 83, h: -309.5, color: color("blue")}
                ,
                 
                {x: 268, y: -164.5, w: 233, h: -354.5, color: color("blue")}],
            events:{doors:[{x: 355.5, y: -279.5, w: 280.5, h: -339.5, map:"map_main.jpg",  other_pos : 1, next_cor:{x:(-2020-((1920-windowWidth)/2)),y:-2053-(922-windowHeight)/2}}]},
            enemiesCount:0,
            depth:{
                path:`assets/maps/"house_depth.png"`
            },
            size :{width:850,height:850},
            weather:false,
            type:"calm"
           
        }

        
    }

    this.activate_colliders = function (X, Y) {
        this.collision = this.check_collision(X, Y);
        
          
    }

    this.check_collision = function (X, Y, is_enemy=false, enemy) {

        
        let has_collided = [false];
        let counter = 0;
        this.saved_settings[this.name].colliders.map((collider) => { //current_map is the name of the map
            if (debug_colliders){
            fill(collider.color);
            
            rect(20+(windowWidth/2 + bgImage.x - (collider.x+adjustDeviceColliderX)), 50+(windowHeight/2 + bgImage.y - (collider.y+adjustDeviceColliderY)), Math.abs(collider.x-collider.w), Math.abs(collider.y-collider.h));
            }
            // if (X < collider.x && X > collider.w && Y < collider.y && Y > collider.h) {
            if (!debug_colliders && !is_enemy){
                if (X-(adjustDeviceColliderX) < collider.x && X-(adjustDeviceColliderX) > collider.w && Y-(adjustDeviceColliderY) < collider.y && Y-(adjustDeviceColliderY) > collider.h) {
                // if (X < collider.x && X > collider.w && Y < collider.y && Y > collider.h) {
                has_collided.push(true);
                } else {
                    has_collided.push(false);
                }
            }

        })
        for (let i = 0; i < has_collided.length; i++) {
            if (has_collided[i]) {
                // console.log(bgImage.x, bgImage.y);
                return true;
            }
        }
        return false;

    }

    this.activate_events= function(x,y){
        this.check_events(x,y);
    }

    this.check_events = function(X,Y){
        let found_events = [];
        this.saved_settings[this.name].events["doors"].map((event) => { //current_map is the name of the map
            if (debug_colliders){
            
            
            rect(20+(windowWidth/2 + bgImage.x - (event.x+adjustDeviceColliderX)), 50+(windowHeight/2 + bgImage.y - (event.y+adjustDeviceColliderY)), Math.abs(event.x-event.w), Math.abs(event.y-event.h));
            }
            // if (X < collider.x && X > collider.w && Y < collider.y && Y > collider.h) {
            
                if (X-(adjustDeviceColliderX) < event.x && X-(adjustDeviceColliderX) > event.w && Y-(adjustDeviceColliderY) < event.y && Y-(adjustDeviceColliderY) > event.h) {
                // if the event is a door then change the map object
                    this.x = event.next_cor.x;
                    this.y = event.next_cor.y;
                    this.name = event.map;
                    this.img = this.other_maps[event.other_pos];
                    this.depth_img = this.other_maps_depth[event.other_pos];
                    

                found_events.push(true);
                } else {
                    found_events.push(false);
                }
            

        })
    }

    // console.log(depth_image_name);
    this.init = function () { // this function runs automatically when the object is created
        let depth_image_is_there = false
        this.img = loadImage(`assets/maps/${imgname}`);
        try{
            this.depth_img = loadImage(`assets/maps/${this.get_depth_img_name()}`);
            depth_image_is_there = true;
        } catch {
            depth_image_is_there = false;
            
        }
        this.other_maps.push(loadImage(`assets/maps/house.png`));
        this.other_maps_depth.push(loadImage(`assets/maps/house_depth.png`));
        this.other_maps.push(loadImage(`assets/maps/${imgname}`));
        this.other_maps_depth.push(loadImage(`assets/maps/map_main_depth.jpg`));

        
    }

    this.change = function (imgname) { // can change the image of the object which can be used when going through doors
        this.img = loadImage(`assets/maps/${this.name}`);
    }

    this.show = function () {
        // translate(width / 4, height / 4);
        if (last_position.x>0 || last_position.y>0){
            this.x=last_position.x;
            this.y=last_position.y;
        }
        if (this.width == 0 && this.height == 0 && this.saved_settings[this.name].size=="native") {
            image(this.img, this.x, this.y);
        } else {
            image(this.img, this.x, this.y, this.saved_settings[this.name].size.width,this.saved_settings[this.name].size.height)
            
        }
        //can resize 
    }

    this.show_depth =  function (x=this.x,y=this.y) {
        //for giving depth in the map  
        if (last_position.x>0 || last_position.y>0){
            x=last_position.x;
            y=last_position.y;
        }
        if (this.width == 0 && this.height == 0 && this.saved_settings[this.name].size=="native") {
            image(this.depth_img, x,y);
        } else {
            image(this.depth_img, x,y, this.saved_settings[this.name].size.width,this.saved_settings[this.name].size.height)
            
        }
    }

    this.check_map_edge=  function (){
        if (this.x=0){
            return "0x";
        }
        if (this.y=0){
            return "0y";
        }
    }

}