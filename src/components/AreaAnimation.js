module.exports = {
    duration: 500,
    defaultStyle: {
        transition: `all ${500}ms ease`,
    },
    transitionStyles: {
        title:
        {
            entering: {
                marginLeft: '100vw',
                transform: 'rotate(-180deg)'
            },
            entered: {},
            exiting: { opacity: 0.6 },
            exited: { opacity: 0 },
        },
        content: {
            entering: {
                opacity: 0,
                marginLeft: '100vw',
                transform: 'rotate(180deg)'
            },
            entered: {},
            exiting: { opacity: 0.6 },
            exited: { opacity: 0 },
        }
    }
}