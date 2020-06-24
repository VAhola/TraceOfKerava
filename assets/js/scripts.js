// On click actions for initial buttons
//Subrurbs button
$(document).ready(function(){
$(".btn-suburbs").one("click", function() {
    $(".btn-city").hide();
  $(".get-started").replaceWith("<p class=get-started>The areas outside the town center offer various options for relaxation as well as physical activities.</p>"); 
  $("<p>We have selected a few for this route but suggest you take a look at the official Kerava website for more inspiration.</p>").addClass("hidden");
  $(".introduction").replaceWith("<p class=introduction>Congratulations for having taken the first step! Get ready to explore the suburbs<span class=mobile-hidden> with us</span>..</p>");
  $(".lets-play").replaceWith("<h2 class=lets-play>Just one more choice to make:</h2>");
  $(".btn-suburbs").hide();
  $(".get-ready").text("Lets see what is in store of us today!");
  $(".explore").text("Go ahead, click on the most appealing photo:");
});
});
//City button 
$(document).ready(function(){
$(".btn-city").one("click", function() {
    $(".btn-suburbs").hide();
  $(".get-started").replaceWith("<p class=get-started>The town center, while compact, has a variety of cultural, culinary and other leisure time activities to offer.</p>");
  $("<p>We will explore some of these here but be sure to check out others as well later on.</p>").addClass("hidden");
  $(".introduction").replaceWith("<p class=introduction>Congratulations for having taken the first step! Get ready to explore the center<span class=mobile-hidden> with us</span>..</p>");
  $(".lets-play").replaceWith("<h2 class=lets-play>Just one more choice to make:</h2>");
  $(".btn-city").hide();
  $(".get-ready").text("So lets see what is in store of us today!");
  $(".explore").text("Go ahead, click on the most appealing photo:");
});
});
// Actions for Suburb route buttons
// Cricket
$(document).one("click", "#cricket", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top-final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".get-ready").hide();
  $(".explore").hide();
  $("#manor").hide();
  $("#stables").hide();
  $(".game-border").removeClass();
  $("#nature").hide().replaceWith("<div><p>Walk over to the Kerava National Cricket Ground Pavilion and take a picture of yourself infront of the building. For additional challenge sign up for session of Cricket with KCC<span class=mobile-hidden> to test your skills</span>!</p></div>").appendTo(".middle");
  $(".get-started").hide().closest('section.top-text').removeClass('top-text');
  $(".introduction").replaceWith("<p>Finland's <strong>National Cricket Ground</strong> in Kerava, located about two kilometers from central station, is available for use under reservation. Make sure to register and pay if you wish to use these grounds!</p>");
  $(".lets-play-final").text("Get active for cricket!");
  $("#cricket").removeClass("hide").appendTo(".game-final");
});
// Manor
$(document).one("click", "#manor", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top-final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".get-ready").hide();
  $("#cricket").hide();
  $(".explore").hide();
  $("#stables").hide();
  $(".game-border").removeClass();
  $("#nature").hide().replaceWith("<div><p>Support the manor and buy <span class=mobile-hidden>yourself </span>a <span class = mobile-hidden>snack or a </span>drink from the cafe <span class=mobile-hidden>located </span>on ground floor. Take a walk inside to view the art on display. For additional challange write and post a review on social media.</p></div>").appendTo(".middle");
  $(".get-started").hide().closest('section.top-text').removeClass('top-text');
  $(".introduction").replaceWith("<p>While housing in this hill dates much further back<span class=mobile-hidden> in hilibrary</span>, the current look of <strong>Kerava Manor</strong> is from 1928. Since 1991 the Manor <span class=mobile-hidden>has been under the town ownership and </span>is used to host various <span class = hidden>cultural </span>events.</p>");
  $(".lets-play-final").text("Enjoy the beauty of Kerava Manor!");
  $("#manor").removeClass("hide").appendTo(".game-final");
});
//Stables
$(document).one("click", "#stables", function() {
   $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top-final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".get-ready").hide();
  $("#cricket").hide();
  $(".explore").hide();
  $("#manor").hide();
  $(".game-border").removeClass();
  $("#nature").hide().replaceWith("<div><p>Walk over to the fields next to the school to take a selfie with a horse on the background and post it on social media. For additional challenge sign up for a riding lesson<span class=hidden> with the school</span>.</p></div>");
  $(".get-started").hide().closest('section.top-text').removeClass('top-text');
  $(".introduction").replaceWith("<p><strong>Kerava Riding School</strong> <span class =hidden> has been operating in Ahjo, Kerava since 1975. The school</span> offers lessons for all levels and ages. The grounds include a riding hall, two riding fields and a cafe for those looking for refreshments.</p>");
 $(".lets-play-final").text("Time to see some animal friends!") 
 $("#stables").removeClass("hide").appendTo(".game-final");
  });
  //Hiking
$(document).one("click", "#nature", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top-final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".get-ready").hide();
  $("#cricket").hide();
  $(".explore").hide();
  $("#manor").hide();
  $(".game-border").removeClass();
  $("#stables").hide().replaceWith("<div><p>Go for the full 2.8 kilometer <span class=mobile-hidden>circular </span>walk on the marked nature path and take a picture of the views. For additional challenge try to spot a Pelloporus leporinus growing on a tree<span class=mobile-hidden> trunk</span>.</p></div>").appendTo(".middle");
  $(".get-started").hide().closest('section.top-text').removeClass('top-text');
  $(".introduction").replaceWith("<p><strong>Haukkavuori</strong> nature reserve offers a great walk along the nature and is easy reach. As this is a protected environmnent do stay on the marked path. <span class=mobile-hidden>Wildlife in the area like their homes undisturbed!</span></p>");
  $(".lets-play-final").text("Lets start being active!");
  $("#nature").removeClass("hide").appendTo(".game-final");
});
// Actions for City route buttons
//Food
$(document).one("click", "#grocery", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top-final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".get-ready").hide();
  $("#library").hide();
  $(".explore").hide();
  $("#thrift").hide();
  $(".game-border").removeClass();
$("#cafe").hide().replaceWith("<div><p>Google recipes starting with the first letter of your first name. Go to Prisma to buy the required ingredients and start cooking.For extra challange post a review of the recipe<span class=hidden> on social media</span>.</p></div>").appendTo(".middle");
$(".get-started").hide().closest('section.top-text').removeClass('top-text');
$(".introduction").replaceWith("<p>Located at the very center of the town, <strong>Prisma shopping center</strong> and grocery store offers a large variety of consurmer goods for a reasonable price.<span class=hidden> We will get familiar with their food aisles today!</span></p>");
$(".lets-play-final").text("Explore the shops in town!");
 $("#grocery").removeClass("hide").appendTo(".game-final");
  });
  //Books
$(document).one("click", "#library", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top-final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".get-ready").hide();
  $(".explore").hide();
  $("#cafe").hide();
  $("#thrift").hide();
  $(".game-border").removeClass();
$("#grocery").hide().replaceWith("<div><p>Find and read the first book available from first author whose last name begins with the same letter as yours.For an extra challenge write and post a review of the book online</p></div>").appendTo(".middle");
$(".get-started").hide().closest('section.top-text').removeClass('top-text');
$(".introduction").replaceWith("<p>Founded back in 1925, <strong>Kerava library</strong> situated close to the railway station is a perfect destination for book lovers. So get your library card and head over there..</p>");
$(".lets-play-final").text("Let's find a book!");
 $("#library").removeClass("hide").appendTo(".game-final");
  });
//Cafe
$(document).one("click", "#cafe", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top-final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".get-ready").hide();
  $("#library").hide();
  $(".explore").hide();
  $("#thrift").hide();
  $(".game-border").removeClass();
$("#grocery").hide().replaceWith("<div><p>Buy yourself a coffee and sit down at a table. Write a small made up library about the next customer to walk in this cafe. For extra challenge post your library on social media.</p></div>").appendTo(".middle");
$(".get-started").hide().closest('section.top-text').removeClass('top-text');
$(".introduction").replaceWith("<p>The Kerava center a variety of cafes<span class=hidden> for meeting up friends or taking a break from shopping</span>. One of the more establised cafes is <strong>Kulmakonditoria</strong>, also known as Kulmis. Lets go visit them this time!");
$(".lets-play-final").text("Relax and have a drink!");
 $("#cafe").removeClass("hide").appendTo(".game-final");
});
$(document).one("click", "#thrift", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top-final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".get-ready").hide();
  $("#library").hide();
  $(".explore").hide();
  $("#cafe").hide();
  $(".game-border").removeClass();
$("#grocery").hide().replaceWith("<div><p>Buy an item in color green closest <span class=mobile-hidden>possible</span>to the one used in this site. <span class=hidden>Spend no more than five euro on your purchase!</span> For additional challange post a picture of your item in it's new home on social media.</p></div>").appendTo(".middle");
$(".get-started").hide().closest('section.top-text').removeClass('top-text');
$(".introduction").replaceWith("<p>Next to various department stores, Kerava also has a number of secondhand stores with interesting collections of used items. Today we will visit <strong>Fida secondhand</strong>.</p>");
 $(".lets-play-final").text("Treasure hunting time!");
 $("#thrift").removeClass("hide").appendTo(".game-final");
  });