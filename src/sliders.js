export default class Slider {
    constructor({
                    startSlide = 0,
                    interval = 0,
                    sliderNav,
                    sliderSlide,
                    sliderBtn,
                    offset = 0,
                    hoverPause = false,
                    clickPagination = false,
                    hoverMode = false
                }
    ) {
        this.sliderNav = document.querySelector(sliderNav);
        this.sliderSlide = document.querySelector(sliderSlide);
        this.sliderBtn = document.querySelectorAll(sliderBtn);
        this.startSlide = startSlide;
        this.interval = interval;
        this.offset = offset
        this.hoverPause = hoverPause
        this.clickPagination = clickPagination;
        this.hoverMode = hoverMode;
        this.isPaused = false;
        this.startSlider()
    }

    setTransition(string = 'transition:all 0.8s ease-in-out;') {
        this.sliderSlide.querySelectorAll('*').forEach(el => {
            el.setAttribute('style', `${string}`)
        })
    }

    #pause(pause) {
        if (this.hoverPause) {
            this.isPaused = pause
        }
    }

    #hover(boll) {
        this.sliderBtn.forEach((el, i) => {
            el.addEventListener("click", (e) => {
                if (this.clickPagination) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.nextSlide(i)
                    this.#pause(true)
                }
            }, false);
            el.addEventListener("mouseenter", () => {
                this.#pause(true)
                if (boll) this.nextSlide(i)
            }, false);
            el.addEventListener("mouseleave", () => {
                this.#pause(false)
                if (boll) this.removeAll()
            }, false);
        })
    }

    timerSlider() {
        let slide = this.startSlide - 2
        let timerId = setInterval(() => {
            if (slide > this.sliderSlide.children.length - 2) {
                slide = 0
            } else {
                slide++
            }
            if (!this.isPaused) {
                this.nextSlide(slide)
            }
        }, this.interval * 1000);
    }

    removeAll() {
        for (let i = 0; i < this.sliderSlide.children.length; i++) {
            this.sliderSlide.children[i].classList.remove('current')
        }
        for (let i = 0; i < this.sliderNav.children.length; i++) {
            this.sliderNav.children[i].classList.remove('current')
        }
    }

    #computedOff() {
        return (this.sliderNav.children.length < this.sliderSlide.children.length) ? 1 : this.offset
    }

    nextSlide(s) {
        let off = this.#computedOff()

        this.removeAll()
        if (s === off - 1) {
            this.removeAll()
        } else {
            this.sliderNav.children[s - off].classList.add('current')
        }
        this.sliderSlide.children[s].classList.add('current')
    }

    startSlider() {
        this.setTransition()
        if (this.hoverMode) {
            this.#hover(this.hoverMode)
            this.offset = 0
            this.startSlide = 0
        } else if (!this.hoverMode) {
            this.timerSlider()
            this.nextSlide(this.startSlide - 1)
            this.#hover(this.hoverMode)
        }

    }
}

