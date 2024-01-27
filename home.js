/*Shery.imageEffect(".back",{style:5,config : {"a":{"value":0.92,"range":[0,30]},
"b":{"value":0.04,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},
"aspect":{"value":2.2504118616144977},"ignoreShapeAspect":{"value":true},
"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},
"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},
"currentScroll":{"value":1.019619439062961},"scrollLerp":{"value":0.07},"gooey":{"value":false},
"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},
"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},
"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},
"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},
"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},
"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},
"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}});*/

function typeWriter(text, targetElement, interval) {
    let i = 0;
    const heading = document.getElementById(targetElement);

    function type() {
        if (i < text.length) {
            heading.innerHTML += text.charAt(i);
            if (i === text.length - 1) {
                heading.innerHTML += ", <span id='L'>One Planet at a Time.</span>";
            }

            i++;
            setTimeout(type, interval);
        }
    }

    type();
}

typeWriter("Embark on a Journey to a New Frontier. Where Survivors Thrive, Dreams Soar, and Supplies Reach Beyond the Stars. We Deliver Hope", "heading-text", 100);
