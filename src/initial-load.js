function initialLoad(){
    const content = document.querySelector('.content');

    const markup = `<div class="home">
    <div class="home-info">
        <h1 class="home-info-heading">We Serve <br>Delicious <span class="orange">Food</span>
        </h1>
        <div class="info">
            <p>Keep it flavorfull with these delicious meals.From classic to modern we bring you the joy of taste.<br> Enjoy every meal like it's your first!</p>
        <button class="home-info-btn">Get Started</button>
        </div>
    </div>
    <div class="home-img">
    </div>
</div>

<div class="about">
    <div class="about-img">
        <div class="style"></div>
    </div>
    <div class="about-info">
        <h1 class="about-info-heading">About <span class="orange">Us</span></h1>
        <div class="aboutInfo">
            <p>Keep healthy food readliy available.When you get hungery, you're more likely to eat the first thing you see on the counter<br> Enjoy every meal like it's your first!</p>
        <button class="about-info-btn">View More</button>
        </div>
    </div>
</div>

<div class="choose">
    <h1 class="choose-heading">Why Choose Our <span class="orange">Food</span></h1>
    <div class="best">
        <div class="quality">
            <img class="quality-img" alt="" height="80">
            <h2>Quality Food</h2>
            <p class="best-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima repudiandae odit.</p>
        </div>
        <div class="taste">
            <img class="taste-img" alt="" height="80">
            <h2>Super Taste</h2>
            <p class="best-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima repudiandae odit.</p>
        </div>
        <div class="fast">
            <img class="fast-img" alt="" height="80">
            <h2>Fast Delivery</h2>
            <p  class="best-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima repudiandae odit.</p>
        </div>
    </div>
</div>
`;

    content.insertAdjacentHTML('afterbegin', markup);
};

export default initialLoad