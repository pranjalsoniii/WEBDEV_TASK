const yrfn = async() =>{
    try{
        const res = await fetch('https://coding-week-2024-api.onrender.com/api/data');
        const data = await res.json();

        if(!res.ok){
            console.log(data.description);
            return;
        }
        console.log(data);
        document.getElementById("headline1").innerText=data[0].headline;
        document.getElementById("date1").innerText=data[0].date;
        document.getElementById("image1").src=data[0].image;
        document.getElementById("tag1").innerText=data[0].type;
        document.getElementById("headline2").innerText=data[1].headline;
        document.getElementById("date2").innerText=data[1].date;
        document.getElementById("image2").src=data[1].image;
        document.getElementById("tag2").innerText=data[1].type;
        document.getElementById("headline3").innerText=data[2].headline;
        document.getElementById("date3").innerText=data[2].date;
        document.getElementById("image3").src=data[2].image;
        document.getElementById("tag3").innerText=data[2].type;
        document.getElementById("headline4").innerText=data[3].headline;
        document.getElementById("date4").innerText=data[3].date;
        document.getElementById("image4").src=data[3].image;
        document.getElementById("tag4").innerText=data[3].type;
        document.getElementById("headline5").innerText=data[4].headline;
        document.getElementById("date5").innerText=data[4].date;
        document.getElementById("image5").src=data[4].image;
        document.getElementById("headline6").innerText=data[5].headline;
        document.getElementById("date6").innerText=data[5].date;
        document.getElementById("image6").src=data[5].image;
        document.getElementById("headline7").innerText=data[6].headline;
        document.getElementById("date7").innerText=data[6].date;
        document.getElementById("image7").src=data[6].image;
        document.getElementById("headline8").innerText=data[7].headline;
        document.getElementById("date8").innerText=data[7].date;
        document.getElementById("image8").src=data[7].image;











        
    } catch (error) {
        console.log(error)
    }
}