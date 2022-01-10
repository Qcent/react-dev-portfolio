module.exports = {
    duration: 500,
    defaultStyle: {
        transition: `opacity ${this.duration}ms ease-in-out`,
        opacity: 1,
    },
    transitionStyles: {
        entering: { opacity: 0.2 },
        entered: { opacity: 1 },
        exiting: { opacity: 0.5 },
        exited: { opacity: 0 },
    }
}