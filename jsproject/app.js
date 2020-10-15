document.addEventListener('DOMContentLoaded', () => {
    //selecting class grid by querySelector method
    const grid = document.querySelector('.grid')
    //creating div of doodler for 
    const doodler = document.createElement('div')
    let doodlerSpaceLeft = 50
    let doodlerSpaceBottom = 150
    let isGamerOver = false
    let platformCount = 5

    function createDoodler() {
        //grid has given child doodler by appendChild method
        grid.appendChild(doodler)
        // adding  style of doodler from s.css of selector doodler
        doodler.classList.add('doodler')
        doodler.style.left = doodlerSpaceLeft + "px"
        doodler.style.bottom = doodlerSpaceBottom + "px"
    }
    class Platform{
        constructor(newPlatBottom){
            this.bottom = newPlatBottom
            this.left = Math.random() * 315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left +  "px"
            visual.style.bottom = this.bottom + "px"
            grid.appendChild(visual)
        }
    }
    
    function createPlatforms(){
        for(let i=0; i < platformCount; i++ ){
            //each platform gap  diveded by platcount
            let platGap = 600 / platformCount
            //bttom space each platform
            let newPlatBottom  = 100 + i * platGap
            let newPlatform = new Platform(newPlatBottom)

        }
    }

    function start() {
        if (!isGamerOver) {
            //function call
            createDoodler()
            createPlatforms()
        }
    }
    //attach to button
    start()
})

