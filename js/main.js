const illustrationContainer = document.getElementById('eid-illustration');

const eidAnimation = bodymovin.loadAnimation({
    animType: 'svg',
    wrapper: illustrationContainer, // Required
    path: 'https://assets1.lottiefiles.com/packages/lf20_ysr762r0.json', // Required
    loop: true, // Optional
    autoplay: true // Optional
});

const fireworkContainers = ['.left-firework', '.right-firework'];
let container;

function fireworks(){
    for(let i = 0; i < fireworkContainers.length; i++){
        container = document.querySelector(fireworkContainers[i]);
        let animData = {
            animType: 'svg',
            wrapper: container,
            path: 'https://assets8.lottiefiles.com/packages/lf20_obhph3sh.json',
            loop: true,
            autoplay: true
        };
        
        let animation = bodymovin.loadAnimation(animData);
    }
};

fireworks();