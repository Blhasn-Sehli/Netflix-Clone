//Search Animation
$("#search").click(function () {
    $("#clickSearch").show(function () {
        $(this).on("focusout",function () {
            $("#clickSearch").fadeOut() 
        })  
    })
})
//On Scroll Change Nav Bar Color 
$(document).on("scroll",function () {
    $("nav").css("background-color","#0B0B0B") 
})

//Arr Of Films
var allFilms=[
    {
        name:"Hunter x- Humter",
        category:"Series",
        video:"https://www.netflix.com/watch/70296674?trackId=14170056",
        src:"https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUnBhk1iIZqh4p2JRqkBJzol8mOdF65JyfwIgi4RPgtPCoxaFnArb6_ljDlAhRmDD21EoEqY2HhipzxDqRNf2p7hHoOdJ3NQGBg.webp?r=c93",
        season:"S3E43",
        seasonName:"A x Shoking x Tardegy"
    },
    {
        name:"H",
        category:"Series",
        video:"https://www.netflix.com/watch/81270743?trackId=14170056",
        src:"https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfn2-hxnveGqgR8gKUkZRaCd87gkwDq40-DLYE74drriKRlCYR1AmL5_Yjyt6pmMAxjuUBBZrAP6QWp4Viq7Grs7dnjnGXp8Cl8.webp?r=d09",
        season:"S3E19",
        seasonName:"Acting President"

    },
    {
        name:"Outer Banks",
        category:"Films",
        video:"https://www.netflix.com/watch/80236528?trackId=14170056",
        src:"https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUu7mZQC1f-XKClg3Eb7CG2UNM3gKhGlKKq9pIoc2HWOOWyPL2q5PIIOACCarWTp0TejM-1I0h-DMGORb4JtItR9VWJEDuip0MPoCUyqu7Brf83pgipZAgPaQnajgaHzHwgF.jpg?r=02b",
        

    },
    {
        name:"Baki Hanma",
        category:"Films",
        video:"https://www.netflix.com/watch/81237958?trackId=14170056",
        src:"https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS7N7Tsyzz1Y7bflC7ZVvzS_k7xKS7KgeR4ir4CEK9orxP9E8KJqKTxr7sXLOyTBTEbEZ8Fn9hmURjj_pIazjAZoKUuhEaVulZTKJwOouFQNPieYmfL0y-wUqlBQNC6mNimOJZ6Ok2fPD5qXGUfA_EfbJQOgS0DCpX8fzFxxW9kNP0gwj5IRjkcVUsx-2uIqnYD3jVLygpG1b2g6QPhc9F2CIOWH0FK1GcpAEDYnS0t_YefQ-Kr-i61DjRy9Rr1dwbCFWS0eDd-Vh91QKiJKzNIO_9HHLp-YzczDgVQLK6sTIx3kurI.jpg?r=a4f",
        

    },
    {
        name:"Breaking Bad",
        category:"Series",
        video:"https://www.netflix.com/watch/70196273?trackId=15035895",
        src:"https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZi_RqpT84KU9PuLqluo8QNslnXT8Hu2_bME3ez2GFxUqc-CdICtULofUMFIpTV_EO1tghUWNSLzXeqhWzYDdSL2ifiUB0eKrn8.webp?r=01d",
        season:"S3E2",
        seasonName:"Caballo Sin Nombre"
    },
    {
        name:"Friends",
        category:"Series",
        video:"https://www.netflix.com/watch/70274106?trackId=15035895",
        src:"https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeJ0okUyIV6Y0IeVSrgMZ4Uzyn55KNs_sfho8-t7nnnY7lqKVj-ivRjY-D_ayXyhmE4TbaGvwVCIt2Vwa4FG4r_yqOr7eOczguk.webp?r=452",
        season:"S15E13",
        seasonName:"The One With Joey's Bag"

    },
    {
        name:"PainKiller",
        category:"Films",
        video:"https://www.netflix.com/watch/81229684?trackId=253448517",
        src:"https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABexsmcgVTH9Y_w0itB23MK3EgIaaN9X_cdyPlKggnJebHOmO5jygAree3imy2qWnI8DSJJXxotCUfNX5spQFQZiJerjUaCvx_uKNuow1hkV1Bv_98l49BDxPyW1TexoYJk0e.jpg?r=92f",
    },
    {
        name:"Spider Man",
        video:"https://www.netflix.com/watch/60004481?trackId=254867003&tctx=34%2C1%2C54e227f8-4072-4b6c-b0d3-cc24e9b50f96-78590159%2CNES_C76333E9B87FBF8EBD24CED752BAD3-697F55C9F4FFD9-18A689EF5A_p_1691664638406%2CNES_C76333E9B87FBF8EBD24CED752BAD3_p_1691664638406%2C%2C%2C%2C60004481%2CVideo%3A60004481%2CminiDpPlayButton",
        src:"https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVd5gECSwrk8kuFWaqPWipCzAlCiH8QH1GKVRe3mc5NUYld8l2NfwPln1DVHhFH3e99a1eUhcABzoto6RHYOo8glDVawWWDk1qM.webp?r=33d",
       

    },
    {
        name:"Top Boy",
        category:"Series",
        video:"https://www.netflix.com/watch/80217554?trackId=14183280",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZIBBR7oynkiPyAuy1yxwbupZ2_C5gGGR-IJXda-q21670ZvLjLJOQ2GBUlFu2md97suJM_WYwGMw8cYXlim_F1OB8obfA4bA0q_LlrXk_gC4FvzBoe237KXybQbX8RGev68.jpg?r=e66",
        season:"S1E2",
        seasonName:"Buildings Bridges"

    },
    {
        name:"You",
        video:"https://www.netflix.com/watch/80212201?trackId=250084945",
        category:"Series",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ9_FnrsujjA4_3mHOPbgeZiEI4xZ3Fm26KNtbA35ROW-szD1ZX1G0GGFbGdxPv5G3tHLwHByllHJoy3i-VOIXc2VTbtNeNHjQPD6HNHAQYg_JjdaFzKYvYY7LXAaM3jfCic.jpg?r=622",
        season:"S1",
        seasonName:"Pilot"

    },
    {
        name:"Fauda",
        video:"https://www.netflix.com/watch/80113577?trackId=255158794",
        category:"Series",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYkbaa6X5_eDoRn64CXI898aDwAY1-ZpSO4wySGbUF1fcX29DDAnf-RyriBE0MGw03FXcuSTdkLgRKoZaBoIbk7qk8O89veHKNZQ0u0Uw2MSjzEhvztK_qg4EwxiuxT3I09c.jpg?r=700",
        season:"S1E1",
        seasonName:"Episode 1"

    },
    {
        name:"Control Z",
        video:"https://www.netflix.com/watch/81037899?trackId=14183673",
        category:"Series",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf1MyEn7Gf4aIe-nPR0RswdQ-5vmeGICPomMSWaiK27Nuab8rVGKf7N7fOrDye4BDShktmCHt-KXL-ccM2bQyfiRTnobJBq3VqPGrnkLc-hJDmmf8Gk1mUrlGqhe9ldzn3v3.jpg?r=073",
        season:"S1E1",
        seasonName:"Birthday Girl"

    },
    {
        name:"El Chapo",
        video:"https://www.netflix.com/watch/80132966?trackId=14183895",
        category:"Series",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeQM-QY3G6ed_WWYkZb5dSBMJukXfYEWIZ70fxZO7-4C6eIDVXqcku9XXB1PTCfxGKuIcuGpAGTdHiP4dsKkJdetvi0jjyenUOpif4zlKeF49PJmyEqzmGbfm5IgG4Bo-nua.jpg?r=42e",
        season:"S1E1",
        seasonName:"Episode 1"

    },
    {
        name:"FallOut Mission Impossible",
        video:"https://www.netflix.com/watch/80236314?trackId=250312413&tctx=1%2C2%2C482b84e1-5d42-4e4a-b9c7-32e228832489-151352276%2CNES_E653908434AC677C4E86A59CD23659-52E5C7D441F6A6-0E3BA3E2BF_p_1691675127453%2CNES_E653908434AC677C4E86A59CD23659_p_1691675127453%2C%2C%2C%2C80236314%2CVideo%3A80236314%2CminiDpPlayButton",
        category:"Films",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSRh0GJwQlAtpE6gozkYYIMB72can7_rVvxnY-NEh1Ei3R72WWFZCuSmWAuo4dVmftP3HxnHqXOai8eJIU3egfjPjmGdjjhDMl8.webp?r=ecd",
    },
    {
        name:"The Karate Kid",
        video:"https://www.netflix.com/watch/70125931?trackId=253882199&tctx=8%2C3%2C482b84e1-5d42-4e4a-b9c7-32e228832489-151357448%2CNES_E653908434AC677C4E86A59CD23659-74469E61020B17-0E3BA3E2BF_p_1691675127453%2CNES_E653908434AC677C4E86A59CD23659_p_1691675127453%2C%2C%2C%2C70125931%2CVideo%3A70125931%2CminiDpPlayButton",
        category:"Films",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcQox0m4hzp6qXH3B1s-zdOx_CeiIHTlZ-jvuNxo02HH-vjqX4K3ANzD4IN_Tgnzy5MGh3FbuW1_xknClmqh3Rbeb0VPd3NHw0c.webp?r=a75",
    },
    {
        name:"Fatima",
        video:"https://www.netflix.com/watch/80998279?trackId=254663754&tctx=16%2C2%2C482b84e1-5d42-4e4a-b9c7-32e228832489-151357448%2CNES_E653908434AC677C4E86A59CD23659-8A5B910FACB573-0E3BA3E2BF_p_1691675127453%2CNES_E653908434AC677C4E86A59CD23659_p_1691675127453%2C%2C%2C%2C80998279%2CVideo%3A80998279%2CminiDpPlayButton",
        category:"Films",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc09i3BzblwWyO1zgQcdfX48AJ7g5xqYOZTPMdVKJcgQm7zGG6XKE0A3mUPdMxglLv5z7rkzyMHeV9t1ZCvE9IdEii8Cx-VQeEU.webp?r=324",
        

    },
    {
        name:"Troll",
        video:"https://www.netflix.com/watch/81245455?trackId=253843273&tctx=13%2C11%2C482b84e1-5d42-4e4a-b9c7-32e228832489-151357448%2CNES_E653908434AC677C4E86A59CD23659-0D8A713ADB5A9E-0E3BA3E2BF_p_1691675127453%2CNES_E653908434AC677C4E86A59CD23659_p_1691675127453%2C%2C%2C%2C81245455%2CVideo%3A81245455%2CminiDpPlayButton",
        category:"Films",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcHA8cYtBj7GqlWJLUqr_0cHB8GD93DB4_ZJhBzbiG7AclgmiyrPqPRcvHsMetHt34ekzN6uJ7xeA2imi-T3zZOhdfbx-_O9nyRAZhVCji3Rsfo_e26LoM6s6cACwqEunelF.jpg?r=400",
    },
    {
        name:"Ghodwa",
        video:"https://www.netflix.com/watch/81623713?trackId=251710501&tctx=3%2C1%2C1c5d3312-1f6f-4728-8d03-a02baad5ab75-29901431%2CNES_E653908434AC677C4E86A59CD23659-F82AAAFC106C22-0E3BA3E2BF_p_1691675127453%2CNES_E653908434AC677C4E86A59CD23659_p_1691675127453%2C%2C%2C%2C81623713%2CVideo%3A81623713%2CminiDpPlayButton",
        category:"Films",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSbNrr5E_EojyFvYkTQH2XiZCGLQ_-n0jzd9n50rh8-EWAxIWRkbf5vDNDw71p7xdQLTXUl5kTf5FK0wyHarWOmbgfqLw7RYQLk.webp?r=16e"

    },
    {
        name:"Heart Stone",
        category:"Latest",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYwvutSCfssv699pC89tq1023I_BSEGhhFp-84iaVNXcPQJW13SkAtBGNECESIdNHQCFqNT1T5PpxJ7bVAnCDNkyVuUHlo7G_JWef5bRJqBUZKO81DdKl5A12EpNxcKXIxcN.jpg?r=db1",
        date:"Coming On Friday",

    },
    {
        name:"Sing 2",
        category:"Latest",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbM8D7z3GumHGEs85g5tkJxzy-BOq_pzWj_eZSYaRQ9K-6IG17HMW7KIgaQqUZCw1ceaksqAjID_9hCVQ0FWlvVxyzlEO3uM_0o.webp?r=69f",
        date: "Coming on 18 August ",
    },
    {
        name:"Heart Stone",
        category:"Latest",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYwvutSCfssv699pC89tq1023I_BSEGhhFp-84iaVNXcPQJW13SkAtBGNECESIdNHQCFqNT1T5PpxJ7bVAnCDNkyVuUHlo7G_JWef5bRJqBUZKO81DdKl5A12EpNxcKXIxcN.jpg?r=db1",
        date:"Coming On Friday",
    },
    {
        name:"Bounty Hunter S2",
        category:"Latest",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcPkNbuzM2borClROAYfifItXLPOFsNVOlMpe6bGW21fHUnVrnKiCJ-sUXoGQHTITYamYGolfrRUrylCkxtLeMoX0OhAooqzJhTguIrZ4Y7v9myj3WFV2bvxRq_-VexwYlyw.jpg?r=fdd",
        date:"Coming On 17 August"
    },
    {
        name:"Mask Girl",
        category:"Latest",
        src:"https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb6BGHRrz2K6mF8RBTgEUZM-Cc6NfWDEAHKddYW3h9YZh4qxuxvBr74bMIufLJytPxrDRMMLmYMgXaqge_OOwaqAqUJMsZ4DWYVmWZ8GmLaGivLL5Ua_LVnFYAVTrG8HdLlT.jpg?r=b3d",
        date:"Cming On 18 August"
    },
    {
        name:"Hunter x- Humter",
        src:"https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUnBhk1iIZqh4p2JRqkBJzol8mOdF65JyfwIgi4RPgtPCoxaFnArb6_ljDlAhRmDD21EoEqY2HhipzxDqRNf2p7hHoOdJ3NQGBg.webp?r=c93",
        season:"S3E43",
        seasonName:"A x Shoking x Tardegy"

    },
    
   

]


//THis help

//Hide Info
function  hideInfo(i) {
   
    $(`#${i}`).hide()
}
//Show Info 
function  showInfo(i) {
   
    $(`#${i}`).show()
}
//Inject Film Card Function 
function inject(imageSrc,vdsrc,i,season,seasonName) {
    $(".filmsContainer").append(
        ` <div class="film"  onmouseover="showInfo(${i})" onmouseout=hideInfo(${i})>
       <a href=${vdsrc}> <img src=${imageSrc} alt="" srcset=""></a>
       <div  id="${i}" class="filmInfo" style=" display: none;">
       <span>
           <span id="play-arrow${i}" class="material-symbols-outlined">
               play_arrow
               </span>                  
               <span  id="add-Film${i}" class="material-symbols-outlined">
                   add
                   </span>
                   <span class="material-symbols-outlined">
                       favorite
               </span>
           
       </span>
       <span id="texts">
           <h6>${season}</h6>
           <h6>${seasonName}</h6>
       </span>
   </div>

    </div>`
    )
}
// each
function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
}
each(allFilms,function (elm,i) {
    inject(elm.src,elm.video,i,elm.season!==undefined?elm.season:elm.date!==undefined?elm.date:"Watch Now 🍿",elm.seasonName!==undefined?elm.seasonName:"")
})

//localStorage.setItem("item",JSON.stringify(allFilms))
// filter
function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}

//Filter Series 
var seriesArr=filter(allFilms,function (elm) {
    return elm.category==="Series"
    
})


//Add ALL the Films Of Category Series
$("#Series").click(function () {
     $(".filmsContainer").empty()
    each(seriesArr,function (elm,i) {
        inject(elm.src,elm.video,i,elm.season!==undefined?elm.season:elm.date!==undefined?elm.date:"Watch Now 🍿",elm.seasonName!==undefined?elm.seasonName:"")
    })
})


//Add To Home all The Films
$("#Home").click(function () {
    $(".filmsContainer").empty()
    each(allFilms,function (elm,i) {
        inject(elm.src,elm.video,i,elm.season!==undefined?elm.season:elm.date!==undefined?elm.date:"Watch Now 🍿",elm.seasonName!==undefined?elm.seasonName:"")
    })
 })
 //filter the films category
var filmsArr=filter(allFilms,function (element) {
    return element.category==="Films"
    
}) 
//add All Films to the Films nav
$("#Films").click(function () {
    $(".filmsContainer").empty()
    each(filmsArr,function (elm,i) {
        inject(elm.src,elm.video,i,elm.season!==undefined?elm.season:elm.date!==undefined?elm.date:"Watch Now 🍿",elm.seasonName!==undefined?elm.seasonName:"")
    })
}) 
//filter Latest Films
var latestFilms=filter(allFilms,function (element) {
return element.category==="Latest"
    
})
//add Latest Films to the nav Latest
$("#Latest").click(function () {
    $(".filmsContainer").empty()
    each(latestFilms,function (elm,i) {
        inject(elm.src,elm.video,i,elm.season!==undefined?elm.season:elm.date!==undefined?elm.date:"Watch Now 🍿",elm.seasonName!==undefined?elm.seasonName:"")
    })
})



//add To My List 
// Mylist Arr
var myListFilms=[]

each(allFilms,function (elm,i) {
    $(`#add-Film${i}`).click(function () {
        if(!myListFilms.includes(elm)){
            //To NoT add The Film More Then One Time
            myListFilms.push(elm) 
            localStorage.setItem("myList",JSON.stringify(myListFilms))
        }
    })
})
//My List Nav 
$("#MyList").click(function () {
    $(".filmsContainer").empty()
    each(myListFilms,function (elm,i) {
        inject(elm.src,elm.video,i,elm.season!==undefined?elm.season:elm.date!==undefined?elm.date:"Watch Now 🍿",elm.seasonName!==undefined?elm.seasonName:"")
    })
}) 


each(allFilms,function (elm,i) {
    $(`#play-arrow${i}`).click(function () {
        $(location).attr("href",elm.video)
    })
})
//search Feateure
$("#search").click(function () {
    $(".filmsContainer").empty()
    
   var query=$("#clickSearch").val();
   var response=filter(allFilms,function (elm) {
    if(elm.name.toLowerCase().indexOf(query.toLowerCase())!==-1){
        return elm
    }
    
   })
   console.log(response);
    // // each(,function (elm,i) {
    //     inject(elm.src,elm.video,i,elm.season!==undefined?elm.season:elm.date!==undefined?elm.date:"Watch Now 🍿",elm.seasonName!==undefined?elm.seasonName:"")
    // })


    
})








