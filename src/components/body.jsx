import '../componentscss/body.css'
function Body(){
    
        const handleRedirect = () => {
          window.location.href = "https://www.thehindu.com/news/national/kerala/wayanad-landslides-official-death-toll-at-222-search-and-rescue-operations-enter-seventh-day/article68487470.ece";
        };
    return(
        <div className='maindiv'>
        <div className='bheading'>
        <h2 >Proactive Flood and Rainfall Prediction for Effective Planning</h2>
        <h4>Stay Prepared with Accurate Flood and Rainfall Forecasts</h4>
        <br></br>
        <div className='button-container'>
        <button>flood Prediction</button>
        <button>Rainfall Prediction</button>
        </div>
        </div>
        <section className='article-container'>
           <div id='article-container1'> 
           <img src="https://images.hindustantimes.com/img/2024/08/10/550x309/PTI08-02-2024-000325A-0_1723266925765_1723266948738.jpg" id="img1" width="80%" ></img>
            <h2>Landslide</h2>
            <h3>Wayanad landslides official death toll at 222, search and rescue operations enter seventh day</h3>
            <button onClick={handleRedirect}>Read More</button>
            </div> 
            <div id='article-container1'> 
           <img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/d532/live/6470fd10-4feb-11ef-a2b2-651941bfb3ca.jpg.webp" id="img1" width="80%" ></img>
            <h2>Flood</h2>
            <h3>The ‘flying rivers’ causing devastating floods in India</h3>
            <button onClick={handleRedirect}>Read More</button>
            </div> 
            <div id='article-container1'> 
           <img src="https://www.livemint.com/lm-img/img/2024/07/17/600x338/20240713-MTH-PGD-MN-Water-logging-001005-0_1720884138414_1721226881332.JPG" id="img1" width="80%" ></img>
            <h2>Flood</h2>
            <h3>IMD issues flash flood alert for South and Central India as extreme downpour continues</h3>
            <button onClick={handleRedirect}>Read More</button>
            </div> 
            <div id='article-container1'> 
           <img src="https://img.etimg.com/thumb/msid-112424747,width-300,height-225,imgsize-2120995,resizemode-75/bengaluru-mangaluru-train-services-disrupted-by-landslides-check-list-of-cancelled-diverted-trains.jpg" id="img1" width="80%" ></img>
            <h2>Landslide</h2>
            <h3>Bengaluru-Mangaluru train services disrupted by landslides</h3>
            <button onClick={handleRedirect}>Read More</button>
            </div> 

        </section>
        </div>
    );
}
export default Body;