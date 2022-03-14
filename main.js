var cat = 0;
var dog = 0;
var lion = 0;
var background_noise = 0;

function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yp72Pqj9Z/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    console.log("disha")
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "dog"){
            img.src = "https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg";
            document.getElementById("detected").innerHTML = "Detected Dog - "+Math.floor(results[0].confidence*100) + "%";
        }
        else if(results[0].label == "cat"){
            img.src = "https://www.thesprucepets.com/thmb/QDw4vt7XXQejL2IRztKeRLow6hA=/2776x1561/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg";
            document.getElementById("detected").innerHTML = "Detected Cat - "+ Math.floor(results[0].confidence*100) + "%";
        }
        else if(results[0].label == "tiger"){
            img.src = "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg";
            document.getElementById("detected").innerHTML = "Detected Lion - "+ Math.floor(results[0].confidence*100) + "%";
        }
        else{
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
            document.getElementById("detected").innerHTML = "Detected Background Noise - "+ Math.floor(results[0].confidence*100) + "%";
        }
    }
}